import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SignInWidget from './SignInWidget';
import { withOktaAuth } from '@okta/okta-react';

export default withOktaAuth(class Login extends Component {
  constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
    this.state = {
      authenticated: null
    };
    this.checkAuthentication();
  }

  async checkAuthentication() {
      if(this.props.authState) {
        const authenticated = await this.props.authState.isAuthenticated;
        if (authenticated !== this.state.authenticated) {
          this.setState({ authenticated });
        }    
      }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  onSuccess(res) {
      console.log(res);
    if (res.status === 'SUCCESS') {
        this.checkAuthentication();
        localStorage.setItem("role", "");
        return this.props.authService.redirect({
        sessionToken: res.session.token
      });
   } else {
    // The user can be in another authentication state that requires further action.
    // For more information about these states, see:
    //   https://github.com/okta/okta-signin-widget#rendereloptions-success-error
    }
  }

  onError(err) {
    console.log('error logging in', err);
  }

  render() {
  
    return this.state.authenticated ?
      <Redirect to={{ pathname: '/' }}/> :
      <SignInWidget
        baseUrl={this.props.baseUrl}
        onSuccess={this.onSuccess}
        onError={this.onError}/>;
  }
});
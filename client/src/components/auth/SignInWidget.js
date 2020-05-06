import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

class SignInWidget extends Component {
  componentDidMount() {
    const el = ReactDOM.findDOMNode(this);
 
    this.widget = new OktaSignIn ({
      baseUrl: this.props.baseUrl,
      logo: 'Medico.png',
      
      clientId: '0oaagvaiqddotHkMn4x6', 
      authParams: {
        responseType: ['id_token'],
        scope : [
          'openid', 'email', 'profile'
        ],
        redirectUri: 'https://medicoconnect.com/implicit/callback', 
       
      },
      idps : [
        { type: 'FACEBOOK', id: '0oaanlwmpFqJEo92r4x6' },
        { type: 'Google', id: '0oaarsfakSQOExcYk4x6' }
      ],
      idpDisplay : "SECONDARY",
      i18n: {
        en: {
          'password.forgot.email.or.username.placeholder': 'Email',
          'password.forgot.email.or.username.tooltip': 'Email',
          'errors.E0000095': 'Unable to reset password.  Did you put in a valid email?'
        }
      }
    });
    this.widget.renderEl({ el }, this.props.onSuccess, this.props.onError);
  }

  componentWillUnmount() {
    this.widget.remove();
  }

  render() {
    return <div />;
  }
};
export default SignInWidget;
import React, { Component } from "react";
import { ChatBot,AmplifyTheme } from "aws-amplify-react";
class Chatbbot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const myTheme = {
      ...AmplifyTheme,
      sectionHeader: {
        ...AmplifyTheme.sectionHeader,
        backgroundColor: '#455a64'
      }
    };
    let handleComplete = (err, confirmation) => {
      if (err) {
        alert("Bot conversation failed");
        return;
      }
      alert("Welcome to ChatBot");
      
    };
    return (
      <div style={{margin:'5%'}}>
        <div style={{margin:'5%'}}>
        <ChatBot
          title="LatestAppointment"
          theme={myTheme}
          botName="ScheduleAppointment"
          welcomeMessage="Welcome to Automated chatbot"
          onComplete={handleComplete()}
          voiceEnabled={true}
          clearOnComplete={true}
        />
      </div>
      </div>
    );
  }
}

export default Chatbbot;
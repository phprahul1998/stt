import React, { Component } from 'react';

class SpeechRecognitionComponent extends Component {
  constructor(props) {
    super(props);
    this.recognition = new webkitSpeechRecognition();
    this.recognition.continuous = true; // Set your desired options here
    this.recognition.onresult = this.handleSpeechResult;
  }

  handleSpeechResult = (event) => {
    const transcript = event.results[0][0].transcript;
    console.log('Speech recognized:', transcript);
  }

  startListening = () => {
    this.recognition.start();
  }

  render() {
    return (
      <div>
        <button onClick={this.startListening}>Start Listening</button>
      </div>
    );
  }
}

export default SpeechRecognitionComponent;

'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  var recognition = new webkitSpeechRecognition();
  // recognition.continuous = true;
  useEffect(() => {
    recognition.onresult = function (event) {
      const result = event.results[0][0].transcript;
      console.log(result)
      setTranscript(result);
      if (isListening) {
        recognition.start();
      }
    };

    recognition.onend = function () {
      if (isListening) {
        recognition.start();
      }
    };
  }, [isListening]);

  const toggleListening = () => {
    if (!isListening) {
      setIsListening(true);
      recognition.start();
    } else {
      setIsListening(false);
      recognition.stop();
    }
  };


  return (
    <div>
      <h1>Speech Recognition with Deepgram</h1>
      <button onClick={toggleListening}>
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </button>
      <div>
        <p>Transcript: {transcript}</p>
        {transcript && (
          <h1>send to api</h1>
        )}
      </div>
    </div>
  );
}

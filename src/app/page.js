'use client'
import { useEffect, useState } from 'react';
export default function Home() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState();

  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      // SpeechRecognition is supported
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      setRecognition(recognition)
      recognition.onresult = function (event) {
        const result = event.results[0][0].transcript;
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
      recognition.onerror = (event) => {
        console.log(`Speech recognition error detected: ${event.error}`);
        console.log(`Additional information: ${event.message}`);
      };
    } else {
      console.log('Speech recognition is not supported in this browser.');
    }
  }, []);
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
        <p>Transcript: {recognition}</p>
        {transcript && (
          <h1>send to api</h1>
        )}
      </div>
    </div>
  );
}

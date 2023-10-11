'use client'
import React , { useEffect } from 'react';
import useSpeechToText from 'react-hook-speech-to-text';
 const Mic = () => {
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: false,
    crossBrowser: true,
    googleApiKey: 'AIzaSyBYFQzw3V4bDy8nV1IT0euVcEtJ6MzUX4U',
    useLegacyResults: false
  });


  if (error){"Web Speech API is not available in this browser"};

  return (
    <div>
      <h1>Recording: {isRecording.toString()}</h1>
      <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <ul>
        {results.map((result) => (
          <li key={result.timestamp}>{result.transcript}</li>
        ))}
        {interimResult && <li>{interimResult}</li>}
      </ul>
    </div>
  );
}
export default Mic;


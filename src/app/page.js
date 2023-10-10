'use client'
import 'regenerator-runtime/runtime'
import Image from 'next/image'
import styles from './page.module.css'
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function Home() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    console.log("Browser doesn't support speech recognition");
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
}

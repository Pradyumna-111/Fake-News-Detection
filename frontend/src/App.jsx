// src/App.jsx
import React, { useState } from 'react';
import NewsInput from './components/NewsInput';
import PredictionResult from './components/PredictionResult';

function App() {
  const [result, setResult] = useState(null);

  const appStyle = {
    maxWidth: '700px',
    margin: '2rem auto',
    fontFamily: 'Arial, sans-serif',
    padding: '1rem'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '1rem'
  };

  return (
    <div style={appStyle}>
      <h1 style={headerStyle}>📰 Fake News Detector</h1>
      <NewsInput onResult={setResult} />
      <PredictionResult result={result} />
    </div>
  );
}

export default App;

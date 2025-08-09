// src/components/PredictionResult.jsx
import React from 'react';

const PredictionResult = ({ result }) => {
  if (!result) return null;

  const containerStyle = {
    marginTop: '1.5rem',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
  };

  const verdictStyle = {
    color: result.label === 'Fake' ? 'red' : 'green',
    fontWeight: 'bold',
    fontSize: '1.2rem'
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: '0.5rem' }}>Prediction Result</h2>
      <p>
        <strong>Verdict: </strong>
        <span style={verdictStyle}>{result.label}</span>
      </p>
      <p>Fake Probability: {(result.fake_prob * 100).toFixed(2)}%</p>
      <p>Real Probability: {(result.real_prob * 100).toFixed(2)}%</p>
    </div>
  );
};

export default PredictionResult;

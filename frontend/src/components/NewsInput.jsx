// src/components/NewsInput.jsx
import React, { useState } from 'react';
import { analyzeNews } from '../services/api';

const NewsInput = ({ onResult }) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '1rem'
  };

  const textareaStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc'
  };

  const buttonStyle = {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: 'white',
    cursor: 'pointer',
    border: 'none'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setLoading(true);
    try {
      const result = await analyzeNews(text);
      onResult(result);
    } catch (error) {
      alert('Error fetching prediction. Check console for details.');
    }
    setLoading(false);
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <textarea
        style={textareaStyle}
        rows={7}
        placeholder="Paste news article text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button style={buttonStyle} type="submit" disabled={loading}>
        {loading ? 'Analyzing...' : 'Check News'}
      </button>
    </form>
  );
};

export default NewsInput;

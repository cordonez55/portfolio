import React from 'react';
import { ReactTyped } from 'react-typed';
import './TypingBanner.css';

function TypingBanner() {
  return (
    <div className="typing-banner">
      <ReactTyped
      strings={['Learning', 'Growing', 'Building']}
      typeSpeed={80}
      backSpeed={50}
      loop
      />
    </div>
  );
}

export default TypingBanner;
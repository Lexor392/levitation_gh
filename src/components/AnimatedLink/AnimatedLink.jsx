import React from 'react';
import './AnimatedLink.css';

const AnimatedLink = ({ text, href }) => {
  return (
    <a href={href} className="animated-link">
      {text.split('').map((letter, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
          {letter}
        </span>
      ))}
    </a>
  );
};

export default AnimatedLink;

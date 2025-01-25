import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';
import IntroduceTeam from './GsapIntro';

function Signin() {
  // Hover functions since react hates these being put in directly on the return
  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = 'black';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#7a3918';
  };
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        height: '100vh',
      }}
    >
      <p>
        <IntroduceTeam />
      </p>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Welcome to our App</h2>
      <p style={{ fontSize: '1.1rem' }}>Please sign in to continue</p>
      <Button
        className="EntreePointSignIn"
        onClick={signIn}
        style={{
          backgroundColor: '#7a3918',
          border: 'none',
          padding: '20px 30px',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          borderRadius: '8px',
          boxShadow: '0 6px 6px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s, transform 0.2s',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Sign In
      </Button>
    </div>
  );
}

export default Signin;

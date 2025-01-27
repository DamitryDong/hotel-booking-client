/* eslint-disable @next/next/no-img-element */

'use client';

import '../styles/globals.css';
import { useAuth } from '@/utils/context/authContext';
import { useEffect } from 'react';
import gsap from 'gsap';

function Home() {
  const { user } = useAuth();

  useEffect(() => {
    const tl = gsap.timeline();

    // Start by fading in and turning the image into a circle while rotating
    tl.fromTo(
      '.image',
      {
        opacity: 0,
        scale: 0.2,
        rotation: 0,
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 360,
        duration: 0.9,
      },
    )
      // Animate the bounce of the image into place
      .fromTo(
        '.image',
        { y: -150 },
        {
          y: 0,
          duration: 0.8,
          ease: 'bounce.out',
        },
      )
      // Now change the background color of the image after the previous animations
      .to('.image', {
        backgroundColor: 'black',
        borderRadius: '50%',
        duration: 0.3,
      })
      .to('.image', {
        backgroundColor: '#a35d34',
        duration: 0.3,
      })
      .to('.image', {
        backgroundColor: '#e8d2ac',
        duration: 0.5,
        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)',
      })
      // ad animation for the greeting to come in
      .fromTo(
        '.Hello',
        {
          y: -200,
          opacity: 0,
        },
        {
          y: -50,
          opacity: 1,
          duration: 1.2,
          ease: 'bounce.out',
          textTransform: 'uppercase',
        },
      )
      .to('.Hello', {
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.788)',
        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)',
        padding: '10px 20px',
        borderRadius: '10px',
        duration: 1,
        ease: 'power3.out',
      });

    tl.play()
      // lastly we add the sun thing the will fade in with absolute position
      .fromTo(
        '.imageSun',
        {
          opacity: 0,
          position: 'absolute',
          top: '40%',
          left: '60%',
          x: '0%',
          y: '-99%',
          scale: 0.5,
        },
        {
          opacity: 1,
          duration: 2,
          ease: 'power3.out',
        },
      )
      .to('.imageSun', {
        x: '-15%',
        duration: 2,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });
  }, []);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '750px',
        margin: '0 auto',
      }}
    >
      <img className="image" src="\images/WWH.png" alt="logo" />
      <img className="imageSun" src="\images/smile-sun-cartoon-character-png.PNG" alt="sun" />
      <h1 className="Hello">Hello {user.displayName}! </h1>
    </div>
  );
}

export default Home;

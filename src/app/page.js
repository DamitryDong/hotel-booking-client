/* eslint-disable @next/next/no-img-element */

'use client';

// import { useAuth } from '@/utils/context/authContext';
// import Image from "next/image";

function Home() {
  // const { user } = useAuth();

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      {/* <h1>Hello {user.displayName}! </h1> */}
      <img src="\images/WWH.png" alt="logo" />
      <h1>Two THINGS need to be fix after authentication and backend: 1. PUT user back into page.js in APP remove this line for the above commented out line, 2. GO TO layout.js and put clientProvider back in and remove the temp code including the NAV. </h1>
    </div>
  );
}

export default Home;

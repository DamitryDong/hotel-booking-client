'use client';

// any component that uses useAuth needs this because if a component directly imports useAuth, it needs to be a client component since useAuth uses React hooks.

import { Button } from 'react-bootstrap';
import { signOut } from '@/utils/auth'; // anything in the src dir, you can use the @ instead of relative paths
// import { useAuth } from '@/utils/context/authContext';

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
      <h1>Two THINGS need to be fix when talking to backend people: 1. PUT user back into page.js in APP remove this line for the above commented out line, 2. GO TO layout.js and put clientProvider back in and remove the temp code including the NAV. </h1>
      <p>Click the button below to logout!</p>
      <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out THIS WILL EROOR
      </Button>
    </div>
  );
}

export default Home;

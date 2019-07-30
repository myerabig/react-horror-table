import React from 'react';
import { useAuth0 } from './react-auth0-wrapper';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button
          id='logInButton'
          className='darkButton'
          onClick={() => loginWithRedirect({})}>
          Log in
        </button>
      )}

      {isAuthenticated && (
        <button
          id='logInButton'
          className='darkButton'
          onClick={() => logout()}>
          Log out
        </button>
      )}
    </div>
  );
};

export default NavBar;

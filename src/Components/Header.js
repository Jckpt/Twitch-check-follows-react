import React from 'react';
import logo from '../Images/twitch_logo.png';

export default () => {
  return (
    <header>
      <h1 className='tytul'>Rewizja</h1>
      <div id='ttvLogo'>
        <img src={logo} alt='' />
      </div>
      <h1 className='tytul'>czatu</h1>
    </header>
  );
};

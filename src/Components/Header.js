import React, { useState } from 'react';
import logo from '../Images/twitch_logo.png';
import Menu from './Menu';
export default () => {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(!isOpen);
  return (
    <header>
      <h1 className='tytul'>Rewizja</h1>
      <div id='ttvLogo'>
        <img src={logo} alt='' />
      </div>
      <h1 className='tytul'>czatu</h1>
      <Menu isOpen={isOpen} handleOpen={handleOpen} />
    </header>
  );
};

import React, { useState } from 'react';
import Menu from './Menu';
export default (props) => {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(!isOpen);
  return (
    <header>
      <h1 className='tytul'>Rewizja {props.desc}</h1>
      <Menu isOpen={isOpen} handleOpen={handleOpen} />
    </header>
  );
};

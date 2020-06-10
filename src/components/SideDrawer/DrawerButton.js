import React from 'react';

import './DrawerButton.css';

const drawerButton = (props) => (
  <button className='toggle-button' onClick={props.click}>
    <div className='toggle-button_line' />
    <div className='toggle-button_line' />
    <div className='toggle-button_line' />
  </button>
);

export default drawerButton;

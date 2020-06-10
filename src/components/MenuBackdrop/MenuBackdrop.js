import React from 'react';

import './MenuBackdrop.css';

const menuBackdrop = (props) => (
  <div className='menuBackdrop' onClick={props.click} />
);

export default menuBackdrop;

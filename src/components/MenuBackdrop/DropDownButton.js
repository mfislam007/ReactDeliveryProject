import React from 'react';

import './DropDownButton.css';

const dropDownButton = (props) => (
  <div>
    <button class='addbar' onClick={props.click}>
      +
    </button>
  </div>
);
export default dropDownButton;

import React from 'react';

import DrawerButton from '../SideDrawer/DrawerButton';
import './Toolbar.css';
import timo1 from './timo1.png';
import DropDownButton from '../MenuBackdrop/DropDownButton';

const toolbar = (props) => (
  <header className='toolbar'>
    <nav className='toolbar_nav'>
      <div>
        <DrawerButton click={props.drawerClickHandler} />
      </div>
      <div className='toolbar_logo'>Delivery Portal</div>
      <div className='spacer' />
      <div className='toolbar_nav_items'>
        <ul>
          <li>
            <div>
              <DropDownButton click={props.addClickHandler} />
            </div>
          </li>
          <li>
            <img src={timo1} alt='timo1' class='image' />
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
export default toolbar;

import React from 'react';

import DrawerButton from '../SideDrawer/DrawerButton';
import './Toolbar.css';
import timo1 from './timo1.png';

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
            <div className='container'>
              <button type='button' class='addbar'>
                +
              </button>
              <div className='dropdown'>
                <ul>
                  <li>Delivery portal</li>
                  <li>Delivery portal</li>
                  <li>Delivery portal</li>
                  <li>Delivery portal</li>
                </ul>
              </div>
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

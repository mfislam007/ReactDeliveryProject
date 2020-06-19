import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

import delivery1 from './delivery1.jpg';
import calender1 from './calender1.png';
import setting1 from './setting1.png';
import news1 from './news1.png';
import timo1 from './timo1.png';
import home from './home.png';

import DropDownButton from '../MenuBackdrop/DropDownButton';

const toolbar = (props) => (
  <header className='toolbar'>
    <nav className='toolbar__navigation'>
      <div className='toolbar__toggle-button'>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className='toolbar__logo'>
        <a href='/'>Delivery Portal</a>
      </div>

      <div className='toolbar_navigation-items'>
        <ul>
          <li>
            <a href='/'>
              <div className='logoimage'>
                <img src={delivery1} alt='delivery1' class='imageb' />
                Delevery Portal
              </div>
            </a>
          </li>
          <li>
            <a href='/'>
              <div className='logoimage'>
                <img src={news1} alt='news' class='imagec' />
                News
              </div>
            </a>
          </li>
          <li>
            <a href='/'>
              <div className='logoimage'>
                <img src={calender1} alt='calender' class='imaged' />
                Calander
              </div>
            </a>
          </li>
          <li>
            <a href='/'>
              <div className='logoimage'>
                <img src={setting1} alt='setting' class='imagee' />
                Setting
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className='spacer' />
      <div className='toolbar_navigation-items'>
        <ul>
          <li>
            <div>
              <DropDownButton click={props.addClickHandler} />
            </div>
          </li>
        </ul>
      </div>
      <div className='toolbar_navigation-items2'>
        <ul>
          <li>
            <div className='logoimage'>
              <img src={home} alt='notification1home' class='imagef' />
            </div>
          </li>
          <li>
            <img src={timo1} alt='timo1' class='imagea' />
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;

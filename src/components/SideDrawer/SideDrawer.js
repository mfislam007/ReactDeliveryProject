import React from 'react';

import './SideDrawer.css';
import delivery1 from './delivery1.jpg';
import news1 from './news1.png';
import calender1 from './calender1.png';
import setting1 from './setting1.png';

const sideDrawer = (props) => (
  <nav className='side-drawer'>
    <ul>
      <li>
        <a href='/'>
          <img src={delivery1} alt='delivery1' class='logo' />
          Delivery portals
        </a>
      </li>
      <li>
        <a href='/'>
          <img src={news1} alt='news1' class='logo' />
          News
        </a>
      </li>
      <li>
        <a href='/'>
          <img src={calender1} alt='calender1' class='logo' />
          Calender
        </a>
      </li>
      <li>
        <a href='/'>
          <img src={setting1} alt='setting1' class='logo' />
          Setting
        </a>
      </li>
    </ul>
  </nav>
);

export default sideDrawer;

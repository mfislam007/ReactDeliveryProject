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
        <img src={delivery1} alt='delivery1' class='logo' />
        Delivery portals
      </li>
      <li>
        <img src={news1} alt='news1' class='logo' />
        News
      </li>
      <li>
        <img src={calender1} alt='calender1' class='logo' />
        Calender
      </li>
      <li>
        <img src={setting1} alt='setting1' class='logo' />
        Setting
      </li>
    </ul>
  </nav>
);

export default sideDrawer;

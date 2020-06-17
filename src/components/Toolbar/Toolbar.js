import React from 'react';

import DrawerButton from '../SideDrawer/DrawerButton';
import './Toolbar.css';
import timo1 from './timo1.png';
import welcome1 from './welcome1.png';
import profile1 from './profile1.jpg';
import game1 from './game1.png';
import texteditor1 from './texteditor1.png';
import notification1 from './notification1.png';
import english1 from './english1.png';
import spanish1 from './spanish1.png';

import DropDownButton from '../MenuBackdrop/DropDownButton';

const toolbar = (props) => (
  <header className='toolbar'>
    <nav className='toolbar_nav'>
      <div>
        <DrawerButton click={props.drawerClickHandler} />
      </div>

      <div className='toolbar_logo'>Delivery Portal</div>
      <div className='toolbar_nav_items'>
        <div className='nav-items'>
          <ul>
            <li>
              <a href='/'>
                <div className='logoimage'>
                  <img src={welcome1} alt='welcome1' class='imageb' />
                  Welcome
                </div>
              </a>
            </li>
            <li>
              <a href='/'>
                <div className='logoimage'>
                  <img src={profile1} alt='profile1' class='imagec' />
                  Profile
                </div>
              </a>
            </li>
            <li>
              <a href='/'>
                <div className='logoimage'>
                  <img src={game1} alt='game1' class='imaged' />
                  Game
                </div>
              </a>
            </li>
            <li>
              <a href='/'>
                <div className='logoimage'>
                  <img src={texteditor1} alt='texteditor1' class='imagee' />
                  Text Editor
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='spacer' />
      <div className='toolbar_nav_items'>
        <ul>
          <li>
            <div>
              <DropDownButton click={props.addClickHandler} />
            </div>
          </li>
          <li>
            <img src={english1} alt='english1' class='imagea' />
          </li>
          <li>
            <div className='logoimage'>
              <img src={notification1} alt='notification1' class='imagea' />
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

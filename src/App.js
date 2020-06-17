import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import DropDownbar from './components/MenuBackdrop/DropDownbar';
import MenuBackdrop from './components/MenuBackdrop/MenuBackdrop';

class App extends Component {
  state = {
    sideOpen: false,
    topOpen: false,
  };

  drawerButtonClickHandler = () => {
    this.setState((prevState) => {
      return { sideOpen: !prevState.sideOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideOpen: false });
  };

  addDrawerButtonClickHandler = () => {
    this.setState((prevState) => {
      return { topOpen: !prevState.topOpen };
    });
  };

  addBackdropClickHandler = () => {
    this.setState({ topOpen: false });
  };

  render() {
    let sideDrawer;
    let backdrop;
    let dropDownbar;
    let menuBackdrop;

    if (this.state.sideOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    if (this.state.topOpen) {
      dropDownbar = <DropDownbar />;
      menuBackdrop = <MenuBackdrop click={this.addBackdropClickHandler} />;
    }

    return (
      <div>
        <Toolbar
          drawerClickHandler={this.drawerButtonClickHandler}
          addClickHandler={this.addDrawerButtonClickHandler}
        />

        {sideDrawer}
        {backdrop}
        {dropDownbar}
        {menuBackdrop}

        <main style={{ marginTop: '64px' }}>
          <p>This is the page content</p>
        </main>
        <div></div>
      </div>
    );
  }
}

export default App;

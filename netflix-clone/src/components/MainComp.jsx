import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThLarge, faTh } from '@fortawesome/free-solid-svg-icons';
import FooterComp from './FooterComp';
import HomeMainComp from './HomeMainComp';
import NavbarComp from './NavbarComp';
import logo from '../logo.png';
import ProfiloMainComp from './ProfiloMainComp';


library.add(faThLarge, faTh);

class MainComp extends Component {
 

    state = {
      showUserProfile: false 
    };

  

  handleIconClick = () => {
    this.setState({
      showUserProfile: true
    });
  };

  handleHomeClick = () => {
    this.setState({
      showUserProfile: false
    });
  }

  render() {
    const { showUserProfile } = this.state;

    return (
      <>
        <NavbarComp logo={logo} onIconClick={this.handleIconClick} onIconClick2={this.handleHomeClick}/>
  
        {showUserProfile ? <ProfiloMainComp /> : <HomeMainComp />}
        
        <FooterComp />
      </>
    );
  }
}


export default MainComp;

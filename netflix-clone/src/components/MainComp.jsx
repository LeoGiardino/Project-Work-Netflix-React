import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThLarge, faTh } from '@fortawesome/free-solid-svg-icons';
import FooterComp from './FooterComp';
import HomeMainComp from './HomeMainComp';
import NavbarComp from './NavbarComp';
import logo from '../logo.png';
import ProfiloMainComp from './ProfiloMainComp';

// Aggiungi le icone alla libreria
library.add(faThLarge, faTh);




export default function MainComp() {

  const [showUserProfile, setShowUserProfile] = useState(false);

  const handleIconClick = () => {
    setShowUserProfile(true);
    
  };

  const home = () => {
    setShowUserProfile(false);
  }

  return (
    <>
      <NavbarComp logo={logo} onIconClick={handleIconClick} onIconClick2={home}/>

      {showUserProfile ? <ProfiloMainComp /> : <HomeMainComp />}
      
      <FooterComp />
    </>
  );
}

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons';

export default function NavbarComp({ logo }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#221f1f' }}>
        <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" style={{ width: '100px', height: '55px' }} /> 
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="javascript:void(0)">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link font-weight-bold" href="#">
                TV Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#">
                Recently Added
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#">
                My List
              </a>
            </li>
          </ul>
          <FontAwesomeIcon icon={faSearch} className="icons ms-auto" />
<div id="kids">KIDS</div>
<FontAwesomeIcon icon={faBell} className="icons" />
<FontAwesomeIcon icon={faUser} className="icons" />

        </div>
      </nav>
    </>
  );
}

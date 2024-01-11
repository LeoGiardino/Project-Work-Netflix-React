import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faTh } from '@fortawesome/free-solid-svg-icons';
import GalleriaUnoComp from './GalleriaUnoComp';
import GalleriaDueComp from './GalleriaDueComp';
import GalleriaTreComp from './GalleriaTreComp';

export default class HomeMainComp extends Component {
  render() {
    return (
      <div className="container-fluid px-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4 me-3">TV Shows</h2>
            <div className="dropdown ml-4 mt-1">
              <button
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ backgroundColor: '#221f1f' }}
              >
                Genres &nbsp;
              </button>
              <div
                className="dropdown-menu bg-dark"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item text-white bg-dark" href="#">Comedy</a>
                <a className="dropdown-item text-white bg-dark" href="#">Drama</a>
                <a className="dropdown-item text-white bg-dark" href="#">Thriller</a>
              </div>
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faThLarge} className="icons" />
            <FontAwesomeIcon icon={faTh} className="icons" />
          </div>
        </div>
        <h4>Trending Now</h4>
        <GalleriaUnoComp />
        <h4>Watch it Again</h4>
        <GalleriaDueComp />
        <h4>New Releases</h4>
        <GalleriaTreComp />
      </div>
    );
  }
}

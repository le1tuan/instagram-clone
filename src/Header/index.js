import React from 'react';
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="instagram-header">
        <p>Instagram</p>
        <input className="instagram-header__input" type="text" placeholder="Search" />
        <div className="instagram-header__menu">
          <div className="instagram-header__item">1</div>
          <div className="instagram-header__item">2</div>
          <div className="instagram-header__item">3</div>
        </div>
      </div>
    );
  }
}

export default Header;
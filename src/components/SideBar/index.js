import React from 'react';
import PropTypes from 'prop-types';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdGridView, MdOutlineSearch, MdOutlineSpaceDashboard } from 'react-icons/md';
import {
  BiUser,
  BiChat,
  BiCart,
  BiHeart,
  BiCog,
  BiLogOut,
} from 'react-icons/bi';

import profile from 'src/assets/profile.png';
import './style.scss';

export default function SideBar() {
  const handleSideBarClick = () => {
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
  };

  return (
    <>
      <div className="sidebar">
        <div className="logo_content" onClick={handleSideBarClick}>
          <div className="logo">
            <MdOutlineSpaceDashboard className="react_icons" />
            <div className="logo_name">Dashboard</div>
          </div>
          <GiHamburgerMenu className="" id="sidebar_btn"/>
        </div>
        <ul className="nav_list">
          <li className="nav_items search_link">
            <MdOutlineSearch className="react_icons react_icons_search" onClick={handleSideBarClick} />
            <input type="text" placeholder="Recherche..." />
            <span className="tooltip">Search</span>
          </li>
          <li className="nav_items">
            <a href="#">
              <MdGridView className="react_icons" />
              <span className="links_name">Dashboard</span>
            </a>
            <span className="tooltip">Dashboard</span>
          </li>
          <li className="nav_items">
            <a href="#">
              <BiUser className="react_icons" />
              <span className="links_name">User</span>
            </a>
            <span className="tooltip">User</span>
          </li>
          <li className="nav_items">
            <a href="#">
              <BiChat className="react_icons" />
              <span className="links_name">Messages</span>
            </a>
            <span className="tooltip">Messages</span>
          </li>
          <li className="nav_items">
            <a href="#">
              <BiCart className="react_icons" />
              <span className="links_name">Order</span>
            </a>
            <span className="tooltip">Order</span>
          </li>
          <li className="nav_items">
            <a href="#">
              <BiHeart className="react_icons" />
              <span className="links_name">Favs</span>
            </a>
            <span className="tooltip">Favs</span>
          </li>
          <li className="nav_items">
            <a href="#">
              <BiCog className="react_icons" />
              <span className="links_name">Settings</span>
            </a>
            <span className="tooltip">Settings</span>
          </li>
        </ul>
        <div className="profile_content">
          <div className="profile">
            <div className="profile_details">
              <img src={profile} alt="yourself" className="profile_logo" />
              <div className="name_job">
                <div className="name">Paul Hennin</div>
                <div className="job"> Web Designer</div>
              </div>
            </div>
            <BiLogOut className="react_icons" id="log_out" />
          </div>
        </div>
      </div>
      <div className="main">
        <div className="title">Home Content</div>
      </div>
    </>
  );
}

SideBar.propTypes = {

};

import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/animals">Animals ({props.data.animals.length})</NavLink>
      <NavLink to="/birds">Birds ({props.data.birds.length})</NavLink>
    </nav>
  );
};

export default Nav;
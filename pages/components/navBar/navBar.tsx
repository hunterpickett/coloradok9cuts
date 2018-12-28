import React from 'react';
import { NavItem } from './navItem';

export const NavBar = () => {
  return (
    <div className="flex font-sans uppercase">
      <NavItem name="Services" />
      <NavItem name="Pricing" />
      <NavItem name="Gallery" />
      {/* <NavItem name="Contact" /> */}
    </div>
  );
};

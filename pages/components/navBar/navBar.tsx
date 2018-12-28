import React from 'react';
import { NavItem } from './navItem';
import { FacebookSvg } from '../footer/facebookSvg';
import { InstagramSvg } from '../footer/instagramSvg';

export const NavBar = () => {
  return (
    <div className="flex container justify-between items-center">
      <div className="mt-2 md:mt-0">
        <FacebookSvg className="social-media text-white hover:text-blue-facebook" />
        <InstagramSvg className="social-media text-white hover:text-purple-instagram" />
      </div>
      <div className="flex font-sans uppercase">
        <NavItem name="Services" />
        <NavItem name="Pricing" />
        <NavItem name="Gallery" />
      </div>
    </div>
  );
};

import React from 'react';
import { FacebookSvg } from './facebookSvg';
import { InstagramSvg } from './instagramSvg';

export const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col justify-around items-center py-2">
      <div>
        <p className="font-serif font-bold text-grey-darker text-xl">
          Copyright © Colorado K9 Cuts LLC 2018
        </p>
      </div>
      <div className="mt-2 md:mt-0">
        <FacebookSvg className="social-media hover:text-blue-facebook" />
        <InstagramSvg className="social-media hover:text-purple-instagram" />
      </div>
    </div>
  );
};

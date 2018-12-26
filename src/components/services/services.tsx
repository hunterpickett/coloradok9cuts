import React from 'react';
import { Service } from './service';

const fullServiceBullets = [
  'Bath w/ Premium Shampoo/Conditioner',
  'Blueberry Facial Scrub',
  'Blow Dry',
  'Deshedding / Brush Out',
  'Nail trimming / Griding',
  'Teeth Brushing',
  'Ear Cleaning',
  'Full Haircut',
  'Seasonal Colognes'
];

const nailsBullets = ['Nail Trimming and grinding'];

const bathBullets = [
  'Bath w/ Premium Shampoo/Conditioner',
  'Blueberry Facial Scrub',
  'Blow Dry',
  'Deshedding / Brush Out',
  'Nail Grinding',
  'Teeth Brushing',
  'Ear Cleaning',
  'Pads and Sanitary Shave',
  'Seasonal Colognes'
];

export const Services = () => {
  return (
    <div className="flex sm:flex-row justify-between flex-col">
      <Service title="Full Service Grooming" bullets={fullServiceBullets} />
      <Service title="Nails" bullets={nailsBullets} />
      <Service title="Bath" bullets={bathBullets} />
    </div>
  );
};

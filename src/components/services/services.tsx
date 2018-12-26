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

const nailsBullets = ['Nail Trimming', 'Nail Grinding'];

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
    <div className="flex sm:flex-row justify-between flex-col mb-4">
      <Service
        title="Full Service Grooming"
        subtitle="For the discerning pet owner "
        bullets={fullServiceBullets}
      />
      <Service
        title="Nails"
        subtitle="Getting scratched a little much?"
        bullets={nailsBullets}
      />
      <Service
        title="Bath"
        subtitle="For the world's cleanest puppy"
        bullets={bathBullets}
      />
    </div>
  );
};
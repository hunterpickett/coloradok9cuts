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
    <section id="services">
      <div className="flex flex-col lg:flex-row justify-between mb-4">
        <Service title="Full Service Grooming" bullets={fullServiceBullets} />
        <Service title="Nails" bullets={nailsBullets} />
        <Service title="Bath" bullets={bathBullets} />
      </div>
    </section>
  );
};

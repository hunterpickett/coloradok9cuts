import React from 'react';
import { PawSvg } from './pawSvg';

interface IProps {
  title: string;
  subtitle?: string;
  bullets: string[];
}

export const Service: React.SFC<IProps> = props => {
  const { title, subtitle, bullets } = props;
  return (
    <div className="p-3 bg-blue-lighter text-black shadow-lg rounded-lg my-6 mx-2">
      <h3 className="text-2xl md:text-4xl text-center mb-2 font-sans">
        {title}
      </h3>
      <h4 className="text-center text-lg text-grey-darker mb-2 font-serif">
        {subtitle}
      </h4>
      <div className="my-2 border-b border-black" />
      <ul className="list-reset">
        {bullets.map(b => {
          return (
            <li className="text-left text-2xl mb-2" key={b}>
              <PawSvg />
              {b}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

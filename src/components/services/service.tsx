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
    <div className="p-3 bg-blue-lighter rounded-lg sm:mb-0 m-6 ">
      <h4 className="text-center text-black text-3xl mb-2 font-sans">
        {title}
      </h4>
      <h4 className="text-center text-xl text-grey-darker font-light mb-2 font-base">
        {subtitle}
      </h4>
      <div className="my-2 border-b border-black" />
      <ul className="list-reset">
        {bullets.map(b => {
          return (
            <li className="text-center text-xl mb-2" key={b}>
              <PawSvg />
              {b}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

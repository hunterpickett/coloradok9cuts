import React from 'react';
import { PawSvg } from './pawSvg';

interface IProps {
  title: string;
  bullets: string[];
}

export const Service: React.SFC<IProps> = props => {
  const { title, bullets } = props;
  return (
    <div>
      <h4 className="text-center text-3xl mb-2 font-sans">{title}</h4>
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

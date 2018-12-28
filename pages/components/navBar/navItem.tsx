import React from 'react';

interface IProps {
  name: string;
}

export const NavItem: React.SFC<IProps> = props => {
  const { name } = props;
  return (
    <a
      href={'#' + name.toLowerCase()}
      className="no-underline p-6 pointer text-base text-grey-lighter hover:text-blue"
    >
      {name}
    </a>
  );
};

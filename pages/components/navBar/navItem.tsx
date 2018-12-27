import React from 'react';

interface IProps {
  name: string;
}

export const NavItem: React.SFC<IProps> = props => {
  const { name } = props;
  return (
    <p className="p-6 pointer text-base text-grey-lighter hover:text-blue">
      {name}
    </p>
  );
};

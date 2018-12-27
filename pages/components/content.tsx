import React from 'react';

interface IProps {
  className?: string;
  dark?: boolean;
  children: any;
}

export const Content: React.SFC<IProps> = props => {
  const { className, dark } = props;
  return (
    <div className={`${className} ${dark ? 'bg-grey-darkest text-white' : ''}`}>
      <div className="container border-b">{props.children}</div>
    </div>
  );
};

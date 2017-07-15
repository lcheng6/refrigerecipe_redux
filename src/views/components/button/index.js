import React from 'react';
import classNames from 'classnames';


const Button = ({children, className, onClick, type = 'button'}) => {
  const cssClasses = classNames(className);
  return (
    <button className={cssClasses} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button

'use client';

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  type?: string;
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  fullWidth,
  type,
  ...props
}) => {
  const buttonClasses = useCallback(
    () =>
      classnames(
        'mt-4 mb-2 rounded-full',
        {
          'bg-green-500 text-white': variant === 'primary',
          'bg-white text-green-500': variant !== 'primary',
        },
        { 'block w-full py-4': fullWidth },
        'px-4 py-2 font-semibold'
      ),
    [variant, fullWidth]
  );

  return (
    <button type={type} className={buttonClasses()} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  variant: 'secondary',
  fullWidth: false,
  type: 'button',
};

export default Button;

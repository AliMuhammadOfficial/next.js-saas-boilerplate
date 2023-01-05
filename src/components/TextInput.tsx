'use client';

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';

interface TextInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  error?: string;
  fullWidth?: boolean;
  type?: string;
  [key: string]: any;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  disabled,
  readOnly,
  error,
  fullWidth,
  type,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const inputClasses = classnames(
    'w-full rounded-full border px-2 py-4 text-sm text-gray-900 shadow-sm outline-none focus:shadow-md',
    { 'block w-full': fullWidth },
    { 'border-red-500': error }
  );

  return (
    <input
      ref={inputRef}
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      readOnly={readOnly}
      className={inputClasses}
      {...props}
    />
  );
};

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  error: PropTypes.string,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
};

TextInput.defaultProps = {
  disabled: false,
  readOnly: false,
  error: '',
  fullWidth: false,
  type: 'text',
};

export default TextInput;

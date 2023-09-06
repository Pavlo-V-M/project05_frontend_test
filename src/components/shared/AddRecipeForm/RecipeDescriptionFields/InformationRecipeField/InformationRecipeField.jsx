import React from 'react';

const InputField = ({ name, value, text, onChange, ...otherProps }) => {
  const handleChange = event => {
 return (event.target.value);
  };

  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={text}
      {...otherProps}
      required
    />
  );
};

export default InputField;

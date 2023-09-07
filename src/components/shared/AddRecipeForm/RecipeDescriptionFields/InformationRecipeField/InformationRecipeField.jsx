import React from 'react';

const InputField = ({
  name,
  value,
  text,
  onChange,
  setTitle,
  ...otherProps
}) => {
  const handleChange = event => {
    console.dir(event.target.name);
    setTitle(state => {
      return {
        ...state,
        [event.target.name]: event.target.value,
      };
    });
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

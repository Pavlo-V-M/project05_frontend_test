import React from 'react';
import Select from 'react-select';
import './select-styles.scss';

const FilterGlass = ({ glasses, onSelect }) => {
  const handleGlassChange = (selectedOption) => {
    onSelect(selectedOption.value);
  };
  
  return (
    <Select
      options={glasses.map(({ _id, glass }) => {
        return { key: _id, value: glass, label: glass };
      })}
      className="filter"
      classNamePrefix="react-select"
      placeholder="Glass"
      onChange={handleGlassChange}
      required
    />
  );
};

export default FilterGlass;

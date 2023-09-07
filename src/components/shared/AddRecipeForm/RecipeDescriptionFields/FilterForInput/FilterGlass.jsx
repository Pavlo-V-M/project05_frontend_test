import React from 'react';
import Select from 'react-select';
import './select-styles.scss';

const FilterGlass = ({ glasses, onSelect }) => {
  const handleGlassChange = selectedOption => {
    onSelect(selectedOption.value);
    console.log(selectedOption.value);
  };

  return (
    <Select
      options={glasses.map(({ _id, glass }) => {
        return { key: _id, value: glass, label: glass };
      })}
      className="filter"
      classNamePrefix="react-select"
      placeholder="Glass"
      name="glass"
      onChange={handleGlassChange}
      required
    />
  );
};

export default FilterGlass;

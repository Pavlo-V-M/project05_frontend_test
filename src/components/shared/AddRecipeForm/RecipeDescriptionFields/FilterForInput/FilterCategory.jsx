import React from 'react';
import Select from 'react-select';
import './select-styles.scss';

const FilterCategory = ({ categories, onSelect }) => {

  const handleCategoryChange = (selectedOption) => {
    onSelect(selectedOption.value);
  };

  return (
      <Select
        options={categories.map(({ _id, category }) => {
          return { key: _id, value: category, label: category };
        })}
        className="filter"
        classNamePrefix="react-select"
        placeholder="Category"
        onChange={handleCategoryChange}
        required
      />
  );
};

export default FilterCategory;

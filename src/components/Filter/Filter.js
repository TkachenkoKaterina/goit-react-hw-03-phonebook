import React from 'react';
import { Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';

function Filter({ filter, onFilterChange }) {
  return (
    <Label>
      Filter by name
      <Input type="text" value={filter} onChange={onFilterChange} />
    </Label>
  );
}

export default Filter;

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

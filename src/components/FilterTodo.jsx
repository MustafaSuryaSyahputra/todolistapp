import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../store/actions';

const FilterTodo = ({ setFilter }) => {
  const handleFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <div>
      <button onClick={() => handleFilter('all')}>All</button>
      <button onClick={() => handleFilter('active')}>Active</button>
      <button onClick={() => handleFilter('completed')}>Completed</button>
    </div>
  );
};

const mapDispatchToProps = {
  setFilter,
};

export default connect(null, mapDispatchToProps)(FilterTodo);

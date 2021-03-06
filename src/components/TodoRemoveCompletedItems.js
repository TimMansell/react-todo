import React from 'react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';
import { clearCompletedTodos } from '../store/todo';
import PropTypes from 'prop-types';

export const TodoRemoveCompletedItems = ({ remainingTodos }) => {
  const dispatch = useDispatch();

  const classes = classnames({
    hidden: !remainingTodos,
  });

  return (
    <div className="text-center">
      <br />
      <span className={classes}>
        <button
          className="p-2 bg-green-500 text-white rounded-md"
          onClick={() => dispatch(clearCompletedTodos())}
        >
          Clear Completed
        </button>
      </span>
    </div>
  );
};

TodoRemoveCompletedItems.propTypes = {
  remainingTodos: PropTypes.number.isRequired,
};

export default TodoRemoveCompletedItems;

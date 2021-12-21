import React from 'react';
import PropTypes from 'prop-types';

import ToDosList from '../features/toDos/ToDosList';

function splitToDosByCompletion(toDos) {
  let completedToDos = {};
  let incompletedToDos = {};

  Object.entries(toDos).forEach(([_, toDo]) => {
    const { id, isCompleted } = toDo;
    isCompleted
      ? (completedToDos = { ...completedToDos, [id]: toDo })
      : (incompletedToDos = { ...incompletedToDos, [id]: toDo });
  });

  return { completedToDos, incompletedToDos };
}

export default function Summary({ status, toDos }) {
  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  const { completedToDos, incompletedToDos } = splitToDosByCompletion(toDos);

  return (
    <>
      <section>
        <h2>Done ✅</h2>
        <ToDosList toDos={completedToDos} />
      </section>
      <section>
        <h2>Pending ⏳</h2>
        <ToDosList toDos={incompletedToDos} />
      </section>
    </>
  );
}

Summary.propTypes = {
  status: PropTypes.string.isRequired,
  toDos: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
      isCompleted: PropTypes.bool,
      title: PropTypes.string,
    })
  ),
};

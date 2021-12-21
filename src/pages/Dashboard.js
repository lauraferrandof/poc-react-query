import React from 'react';
import PropTypes from 'prop-types';

import AddToDoForm from '../features/toDos/AddToDoForm';
import ToDosList from '../features/toDos/ToDosList';

export default function Dashboard({ status, toDos }) {
  return (
    <>
      <AddToDoForm />
      <section>
        <h2>All my to-dos</h2>
        {status === 'loading' ? <p>Loading...</p> : <ToDosList toDos={toDos} />}
      </section>
    </>
  );
}

Dashboard.propTypes = {
  status: PropTypes.string.isRequired,
  toDos: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
      isCompleted: PropTypes.bool,
      title: PropTypes.string,
    })
  ),
};

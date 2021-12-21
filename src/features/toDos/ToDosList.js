import React from 'react';
import PropTypes from 'prop-types';
import { useMutation, useQueryClient } from 'react-query';

import { toggleToDo } from '../../services/API/toDosAPI';

export default function ToDosList({ toDos }) {
  const queryClient = useQueryClient();

  const { mutate, status, variables } = useMutation(toggleToDo, {
    onSuccess: ({ id, isCompleted }) => {
      queryClient.setQueryData('toDos', (prevToDos) => ({
        ...prevToDos,
        [id]: {
          ...prevToDos[id],
          isCompleted,
        },
      }));
    },
  });

  const handleToggleToDo = (id, isCompleted) => {
    mutate({ id, isCompleted: !isCompleted });
  };

  return (
    <ul>
      {Object.entries(toDos).map(([_, toDo]) => {
        const { id, isCompleted, title } = toDo;
        return (
          <li key={id}>
            <article>
              <p
                style={{
                  textDecoration: isCompleted ? 'line-through' : 'none',
                }}
              >
                {title}
              </p>
              <button onClick={() => handleToggleToDo(id, isCompleted)}>
                {status === 'loading' && id === variables.id
                  ? 'Marking...'
                  : `Mark ${isCompleted ? 'incompleted' : 'completed'}`}
              </button>
            </article>
          </li>
        );
      })}
    </ul>
  );
}

ToDosList.propTypes = {
  toDos: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
      isCompleted: PropTypes.bool,
      title: PropTypes.string,
    })
  ),
};

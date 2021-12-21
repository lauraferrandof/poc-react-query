import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { addToDo } from '../../services/API/toDosAPI';

export default function AddToDoForm() {
  const [toDo, setToDo] = useState('');
  const queryClient = useQueryClient();

  const handleToDoChange = (e) => setToDo(e.target.value);

  const { mutate, status } = useMutation(addToDo, {
    onSuccess: ({ id, title }) => {
      queryClient.setQueryData('toDos', (prevToDos) => ({
        ...prevToDos,
        [id]: {
          id,
          isCompleted: false,
          title,
        },
      }));
    },
  });

  const handleAddToDo = (e) => {
    e.preventDefault();
    if (toDo) {
      mutate({ id: new Date().toISOString(), title: toDo });
      setToDo('');
    }
  };

  return (
    <section>
      <h2>Add to-do</h2>
      <form>
        <label htmlFor="toDo">New to-do</label>
        <input
          id="toDo"
          name="toDo"
          onChange={handleToDoChange}
          type="text"
          value={toDo}
        />
        <button onClick={handleAddToDo} type="submit">
          {status === 'loading' ? 'Adding...' : 'Add'}
        </button>
      </form>
    </section>
  );
}

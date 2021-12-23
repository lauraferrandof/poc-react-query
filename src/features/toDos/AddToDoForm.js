import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import styled, { keyframes } from 'styled-components';
import { darken, lighten } from 'polished';

import { ReactComponent as LoaderIcon } from '../../assets/images/loader.svg';
import { ReactComponent as PlusIcon } from '../../assets/images/plus.svg';
import { SectionTitle } from '../../components/SectionTitle';
import { addToDo } from '../../services/API/toDosAPI';

// Credit: https://styled-components.com/docs/basics#animations
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const AddToDoSection = styled.section``;

const StyledAddToDoForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 30px 0;
`;

const AddToDoLabel = styled.label`
  // Visually hidden. Credit: https://www.nomensa.com/blog/how-improve-web-accessibility-hiding-elements
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const AddToDoInput = styled.input`
  border: none;
  border-radius: 15px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.07);
  box-sizing: border-box;
  color: #020417;
  margin-right: 20px;
  padding: 20px;
  width: 350px;

  &::placeholder {
    color: #9d9ab4;
  }

  &:focus-visible {
    box-shadow: 0px 8px 15px rgba(160, 86, 197, 0.25);
    outline: none;
  }
`;

const AddToDoButton = styled.button`
  align-items: center;
  background-color: #965abf;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 8px 15px rgba(38, 67, 196, 0.25);
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  transition: transform 0.2s ease-in-out;
  width: 50px;

  &:active {
    background-color: ${darken(0.2, '#965abf')};
    transform: translateY(3px);
  }

  &:disabled {
    background-color: ${lighten(0.1, '#965abf')};
    pointer-events: none;
  }

  &:focus-visible {
    outline: none;
    transform: translateY(-3px);
  }

  &:hover:not(:active) {
    background-color: ${lighten(0.05, '#965abf')};
    transform: translateY(-3px);
  }
`;

const AddToDoLoaderIcon = styled(LoaderIcon)`
  animation: ${rotate} 2s linear infinite;
`;

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

  const isLoading = status === 'loading';

  return (
    <AddToDoSection>
      <SectionTitle>What's on your mind?</SectionTitle>
      <StyledAddToDoForm>
        <AddToDoLabel htmlFor="toDo">Add a task</AddToDoLabel>
        <AddToDoInput
          id="toDo"
          name="toDo"
          onChange={handleToDoChange}
          placeholder="Prepare hackathon..."
          type="text"
          value={toDo}
        />
        <AddToDoButton
          disabled={!toDo || isLoading}
          onClick={handleAddToDo}
          type="submit"
        >
          {isLoading ? <AddToDoLoaderIcon /> : <PlusIcon />}
        </AddToDoButton>
      </StyledAddToDoForm>
    </AddToDoSection>
  );
}

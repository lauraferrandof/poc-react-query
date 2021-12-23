import React from 'react';
import PropTypes from 'prop-types';
import { useMutation, useQueryClient } from 'react-query';
import styled, { keyframes } from 'styled-components';
import { darken, lighten } from 'polished';

import { ReactComponent as CheckIcon } from '../../assets/images/check.svg';
import { ReactComponent as LoaderIcon } from '../../assets/images/loader.svg';
import { toggleToDo } from '../../services/API/toDosAPI';

// Credit: https://styled-components.com/docs/basics#animations
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledToDosList = styled.ul`
  column-gap: 20px;
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  padding: 0;
`;

const ToDosListItem = styled.li`
  list-style: none;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const ToDosListButton = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: 70px;
  align-items: center;
  padding: 20px;
  transition: background-color 0.2s ease-in-out;
  width: 350px;

  &:active {
    background-color: ${darken(0.05, '#fff')};
  }

  &:disabled {
    background-color: ${darken(0.05, '#fff')};
    pointer-events: none;
  }

  &:focus-visible {
    outline-color: #a056c5;
  }

  &:hover:not(:active) {
    background-color: ${darken(0.02, '#fff')};
  }
`;

const ToDosListIconWrapper = styled.div`
  align-items: center;
  background-color: ${({ isCompleted, isLoading }) =>
    isCompleted && !isLoading
      ? '#a056c5'
      : isLoading
      ? lighten(0.2, '#a056c5')
      : 'transparent'};
  border: 2px solid
    ${({ isLoading }) => (isLoading ? lighten(0.2, '#a056c5') : '#a056c5')};
  border-radius: 50%;
  display: flex;
  flex-shrink: 0;
  height: 25px;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  width: 25px;
`;

const ToDosListLoaderIcon = styled(LoaderIcon)`
  animation: ${rotate} 2s linear infinite;
  height: 18px;
  width: 18px;
`;

const ToDosListText = styled.span`
  color: ${({ isLoading }) => (isLoading ? '#373b5e' : '#020417')};
  margin-left: 15px;
  position: relative;
  transition: text-decoration 0.2s ease-in-out;

  // Ellipsis. Credit: https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp#examples
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;

  &::before {
    background-color: ${({ isLoading }) => (isLoading ? '#373b5e' : '#020417')};
    bottom: 10px;
    content: '';
    height: 2px;
    left: 0;
    position: absolute;
    transition: width cubic-bezier(0.1, 0.79, 0.24, 0.93) 0.3s;
    width: ${({ isCompleted }) => (isCompleted ? '100%' : '0')};
  }
`;

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
    <StyledToDosList>
      {Object.entries(toDos).map(([_, toDo]) => {
        const { id, isCompleted, title } = toDo;
        const isLoading = status === 'loading' && id === variables.id;
        return (
          <ToDosListItem key={id}>
            <ToDosListButton
              disabled={isLoading}
              onClick={() => handleToggleToDo(id, isCompleted)}
            >
              <ToDosListIconWrapper
                isCompleted={isCompleted}
                isLoading={isLoading}
              >
                {isLoading ? (
                  <ToDosListLoaderIcon />
                ) : isCompleted ? (
                  <CheckIcon />
                ) : null}
              </ToDosListIconWrapper>
              <ToDosListText isCompleted={isCompleted} isLoading={isLoading}>
                {title}
              </ToDosListText>
            </ToDosListButton>
          </ToDosListItem>
        );
      })}
    </StyledToDosList>
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

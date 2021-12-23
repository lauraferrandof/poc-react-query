import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { LoadingState } from '../components/LoadingState';
import { SectionTitle } from '../components/SectionTitle';
import AddToDoForm from '../features/toDos/AddToDoForm';
import ToDosList from '../features/toDos/ToDosList';

const Section = styled.section``;

export default function Dashboard({ status, toDos }) {
  return (
    <>
      <AddToDoForm />
      <Section>
        <SectionTitle>Today you should...</SectionTitle>
        {status === 'loading' ? <LoadingState /> : <ToDosList toDos={toDos} />}
      </Section>
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

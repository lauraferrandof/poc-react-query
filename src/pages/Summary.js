import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as CheckCircleIcon } from '../assets/images/check-circle.svg';
import { ReactComponent as ClockIcon } from '../assets/images/clock.svg';
import { LoadingState } from '../components/LoadingState';
import { SectionTitle } from '../components/SectionTitle';
import ToDosList from '../features/toDos/ToDosList';

const SummaryWrapper = styled.div`
  column-gap: 20px;
  display: flex;
`;

const Section = styled.section`
  width: 50%;
`;

const StyledSectionTitle = styled(SectionTitle)`
  display: flex;
  align-items: center;
`;

const StyledCheckCircleIcon = styled(CheckCircleIcon)`
  margin-left: 10px;
  stroke: #a056c5;
`;

const StyledClockIcon = styled(ClockIcon)`
  margin-left: 10px;
  stroke: #a056c5;
`;

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
    return <LoadingState />;
  }

  const { completedToDos, incompletedToDos } = splitToDosByCompletion(toDos);

  return (
    <SummaryWrapper>
      <Section>
        <StyledSectionTitle>
          Pending <StyledClockIcon />
        </StyledSectionTitle>
        <ToDosList toDos={incompletedToDos} />
      </Section>
      <Section>
        <StyledSectionTitle>
          Done <StyledCheckCircleIcon />
        </StyledSectionTitle>
        <ToDosList toDos={completedToDos} />
      </Section>
    </SummaryWrapper>
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

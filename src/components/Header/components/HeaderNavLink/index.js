import React from 'react';
import PropTypes from 'prop-types';
import {
  Link as RouterLink,
  useMatch,
  useResolvedPath,
} from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(RouterLink)`
  color: ${({ active }) => (active ? '#a056c5' : '#020417')};
  pointer-events: ${({ active }) => (active ? 'none' : 'auto')};
  position: relative;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #a056c5;
  }

  &::before {
    background-color: #a056c5;
    bottom: 0;
    content: '';
    height: 2px;
    left: 0;
    position: absolute;
    transition: width cubic-bezier(0.1, 0.79, 0.24, 0.93) 0.3s;
    width: ${({ active }) => (active ? '100%' : '0')};
  }

  &:hover::before {
    width: 100%;
  }
`;

export default function HeaderNavLink({ children, to }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <StyledLink active={match} to={to}>
      {children}
    </StyledLink>
  );
}

HeaderNavLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

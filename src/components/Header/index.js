import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import HeaderNavLink from './components/HeaderNavLink';

const StyledHeader = styled.header`
  background-color: #f4f6fd;
  box-shadow: ${({ isSticky }) =>
    isSticky ? '0px 6px 26px rgba(0, 0, 0, 0.07)' : 'none'};
  padding: 30px 40px;
  position: sticky;
  top: 0;
  transition: box-shadow 0.2s ease-in-out;
  z-index: 1;
`;

const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 720px;
`;

const HeaderTitle = styled.h1`
  margin: 0;
`;

const HeaderNav = styled.nav``;

const HeaderNavList = styled.ul`
  flex-direction: row;
  margin: 0;
  padding: 0;
  display: flex;
`;

const HeaderNavListItem = styled.li`
  list-style: none;
  margin-right: 30px;

  &:last-of-type {
    margin-right: 0;
  }
`;

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(document.documentElement.scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <StyledHeader isSticky={isSticky}>
      <HeaderWrapper>
        <HeaderTitle>Get things done.</HeaderTitle>
        <HeaderNav>
          <HeaderNavList>
            <HeaderNavListItem>
              <HeaderNavLink to="/">Dashboard</HeaderNavLink>
            </HeaderNavListItem>
            <HeaderNavListItem>
              <HeaderNavLink to="/summary">Summary</HeaderNavLink>
            </HeaderNavListItem>
          </HeaderNavList>
        </HeaderNav>
      </HeaderWrapper>
    </StyledHeader>
  );
}

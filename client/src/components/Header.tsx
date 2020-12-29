import React from 'react'
import { ThemeToggler } from '../components/ThemeToggler'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: var(--colors-background);
  z-index: 1;
`

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: var(--max-width-lg);
  padding: 16px 0px;
  border-bottom: 1px solid var(--colors-gray-200);
`

const Heading = styled.h3`
  color: var(--colors-body-text);
  padding-bottom: 4px;
`

const Description = styled.p`
  color: var(--colors-secondary-text);
  font-size: 14px;
  line-height: 1.5;
`

export const Header = () => {
  return (
    <HeaderContainer>
      <StyledHeader>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Heading>
            <Link to={'/'}>Datalog</Link>
          </Heading>
          <Description>A catalog of Public API's.</Description>
        </div>
        <ThemeToggler />
      </StyledHeader>
    </HeaderContainer>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import '../styles/vars.css'

type NavItemProps = {
  title: string
}

export const StyledListItem = styled.li`
  padding-bottom: 24px;
  color: var(--colors-body-text);
`

export const NavItem: React.FC<NavItemProps> = ({ title }) => {
  return (
    <StyledListItem>
      <NavLink to={`/category/${title}`}>{title}</NavLink>
    </StyledListItem>
  )
}

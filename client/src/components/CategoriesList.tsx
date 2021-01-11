import React from 'react'
import { NavItem } from './NavItem'
import { StyledListItem } from './NavItem'
import { NavLink } from 'react-router-dom'
import { Categories } from '../types'

type CategoriesListProps = {
  categories: Categories
}

export const CategoriesList: React.FC<CategoriesListProps> = ({
  categories,
}) => {
  return (
    <ul>
      <StyledListItem>
        <NavLink
          exact
          activeStyle={{ color: 'var(--colors-body-text)' }}
          to={'/all'}
        >
          All
        </NavLink>
      </StyledListItem>
      {categories.map(({ title }, i) => {
        return <NavItem key={`${title}${i}`} title={title} />
      })}
    </ul>
  )
}

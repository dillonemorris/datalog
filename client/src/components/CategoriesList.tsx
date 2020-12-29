import React from 'react'
import { NavItem } from './NavItem'
import { StyledListItem } from './NavItem'
import { Link } from 'react-router-dom'
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
        <Link to={'/'}>All</Link>
      </StyledListItem>
      {categories.map(({ title }, i) => {
        return <NavItem key={`${title}${i}`} title={title} />
      })}
    </ul>
  )
}

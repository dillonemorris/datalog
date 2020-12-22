import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../styles/vars.css'
import { Arrow } from './icons/Arrow'

type CategoryCardProps = {
  category: string
}

const Card = styled.li`
  display: flex;
  list-style: none;
  border-radius: 8px;
  border-color: var(--colors-gray-200);
  border-width: 1px;
  border-style: solid;
`

const CategoryLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  width: 100%;
`

// TODO: delete this file
export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Card key={category}>
      <CategoryLink to={`/category/${category}`}>
        {category}
        <Arrow />
      </CategoryLink>
    </Card>
  )
}

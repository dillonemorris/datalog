import React from 'react'
import { gql, useQuery } from '@apollo/client'
import styled from 'styled-components'
import '../styles/vars.css'
import { Categories } from '../types'
import { NavItem } from './NavItem'

const CategoriesHeading = styled.h3`
  font-size: 14px;
  letter-spacing: 0.2rem;
  font-weight: normal;
  color: var(--colors-gray-500);
  text-transform: uppercase;
  padding-bottom: 24px;
`

const NavContainer = styled.div`
  margin-right: 80px;
`

const GET_CATEGORIES = gql`
  query GetCategoriesList {
    categories {
      title
    }
  }
`

export const Nav = () => {
  const { data, loading } = useQuery<{
    categories: Categories
  }>(GET_CATEGORIES)

  return (
    <NavContainer>
      <CategoriesHeading>Categories</CategoriesHeading>
      <ul>
        {(() => {
          if (loading) return null

          return data?.categories?.map(({ title }, i) => {
            return <NavItem key={`${title}${i}`} title={title} />
          })
        })()}
      </ul>
    </NavContainer>
  )
}

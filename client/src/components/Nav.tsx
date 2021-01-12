import React from 'react'
import { gql, useQuery } from '@apollo/client'
import styled from 'styled-components'
import '../styles/vars.css'
import { Categories } from '../types'
import { CategoriesList } from './CategoriesList'

const CategoriesHeading = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: var(--colors-body-text);
  text-transform: uppercase;
  padding-bottom: 24px;
`

const NavContainer = styled.div`
  margin-right: 30px;
  width: 400px;
  overflow-y: auto;
  height: calc(100vh - 4.5rem);
  position: sticky;
  top: 8.5rem;
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
      {(() => {
        // TODO: skeleton
        if (loading) return null

        if (data?.categories) {
          return <CategoriesList categories={data.categories} />
        }
      })()}
    </NavContainer>
  )
}

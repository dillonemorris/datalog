import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { EntriesGrid } from '../components/EntriesGrid'
import { Nav } from '../components/Nav'
import { RouteParams } from '../types'
import { Entry } from '../types'

const EntriesFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 0px;
`

const GET_ENTRIES_BY_CATEGORY = gql`
  query GetEntriesListByCategory($category: String!) {
    entriesByCategory(category: $category) {
      title
      description
    }
  }
`

const EntriesByCategory = () => {
  let { category } = useParams<RouteParams>()

  const { data, loading } = useQuery<{
    entriesByCategory: Entry[]
  }>(GET_ENTRIES_BY_CATEGORY, {
    variables: { category },
  })

  console.log(data?.entriesByCategory)

  return (
    <EntriesFlexContainer>
      <Nav />
      <EntriesGrid loading={loading} entries={data?.entriesByCategory} />
    </EntriesFlexContainer>
  )
}

export default EntriesByCategory

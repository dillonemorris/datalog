import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import { EntriesGrid } from '../components/EntriesGrid'
import { RouteParams } from '../types'
import { Entry } from '../types'
import { ENTRY_CARD_DATA, SpinnerContainer } from './entries'
import { Spinner } from '../components/Spinner'

const GET_ENTRIES_BY_CATEGORY = gql`
  query GetEntriesListByCategory($category: String!) {
    entriesByCategory(category: $category) {
      ...EntryCard
    }
  }
  ${ENTRY_CARD_DATA}
`

const EntriesByCategory = () => {
  let { category } = useParams<RouteParams>()

  const { data, loading } = useQuery<{
    entriesByCategory: Entry[]
  }>(GET_ENTRIES_BY_CATEGORY, {
    variables: { category },
  })

  // TODO: replace with skeleton component
  if (loading) {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    )
  }

  // TODO: replace with styled empty state illustration
  if (!data?.entriesByCategory) {
    return <h1>No data</h1>
  }

  return <EntriesGrid entries={data.entriesByCategory} />
}

export default EntriesByCategory

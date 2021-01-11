import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import { RouteParams } from '../types'
import { Entry } from '../types'
import {
  ENTRY_CARD_DATA,
  SpinnerContainer,
  FlexContainer,
  EntriesHeader,
  Heading,
  Description,
} from './entries'
import { Spinner } from '../components/Spinner'
import { EntriesGrid } from '../components/EntriesGrid'
import { EntryCard } from '../components/EntryCard'

const GET_ENTRIES_BY_CATEGORY = gql`
  query GetEntriesListByCategory($category: String!) {
    entriesByCategory(category: $category) {
      ...EntryCardData
    }
  }
  ${ENTRY_CARD_DATA}
`

const EntriesByCategory = () => {
  const { category } = useParams<RouteParams>()
  const { data, loading } = useQuery<{
    entriesByCategory: Entry[]
  }>(GET_ENTRIES_BY_CATEGORY, {
    variables: { category },
  })

  const entries = data?.entriesByCategory

  return (
    <FlexContainer>
      <EntriesHeader>
        <Heading>{category}</Heading>
        <Description>{`These are the public API's in the ${category} category`}</Description>
      </EntriesHeader>
      <EntriesGrid>
        {loading ? (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        ) : (
          entries?.map((entry, i) => (
            <EntryCard entry={entry} key={`${entry.title}${i}`} />
          ))
        )}
      </EntriesGrid>
    </FlexContainer>
  )
}

export default EntriesByCategory

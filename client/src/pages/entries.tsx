import React from 'react'
import { gql, useQuery } from '@apollo/client'
import '../styles/vars.css'
import { Entry } from '../types'
import { Spinner } from '../components/Spinner'
import styled from 'styled-components'
import { EntriesGrid } from '../components/EntriesGrid'
import { EntryCard } from '../components/EntryCard'

export const SpinnerContainer = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const EntriesHeader = styled.div`
  padding-bottom: 20px;
  margin-bottom: 60px;
  border-bottom: 1px solid var(--colors-gray-200);
`

export const Heading = styled.h1`
  color: var(--colors-body-text);
  padding-bottom: 4px;
`

export const Description = styled.p`
  color: var(--colors-secondary-text);
  font-size: 18px;
`

export const ENTRY_CARD_DATA = gql`
  fragment EntryCardData on Entry {
    title
    description
    authRequired
    supportsCors
    link
    https
    category
  }
`

const GET_ENTRIES = gql`
  query GetEntriesList {
    entries {
      ...EntryCardData
    }
  }
  ${ENTRY_CARD_DATA}
`

const Entries = () => {
  const { data, loading } = useQuery<{
    entries: Entry[]
  }>(GET_ENTRIES)

  const entries = data?.entries

  return (
    <FlexContainer>
      <EntriesHeader>
        <Heading>All API's</Heading>
        <Description>A collection of free API's</Description>
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

export default Entries

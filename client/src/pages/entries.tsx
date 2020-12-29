import React from 'react'
import { gql, useQuery } from '@apollo/client'
import '../styles/vars.css'
import { EntriesGrid } from '../components/EntriesGrid'
import { Entry } from '../types'
import { Spinner } from '../components/Spinner'
import styled from 'styled-components'

export const ENTRY_CARD_DATA = gql`
  fragment EntryCard on Entry {
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
      ...EntryCard
    }
  }
  ${ENTRY_CARD_DATA}
`

export const SpinnerContainer = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
`

const Entries = () => {
  const { data, loading } = useQuery<{
    entries: Entry[]
  }>(GET_ENTRIES)

  // TODO: replace with skeleton component
  if (loading) {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    )
  }

  // TODO: replace with styled empty state illustration
  if (!data?.entries) {
    return <h1>No data</h1>
  }

  return <EntriesGrid entries={data.entries} />
}

export default Entries

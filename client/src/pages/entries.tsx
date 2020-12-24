import React from 'react'
import styled from 'styled-components'
import FadeIn from '../components/FadeIn'
import { Spinner } from '../components/Spinner'
import '../styles/vars.css'
import { EntriesGrid } from '../components/EntriesGrid'
import { gql, useQuery } from '@apollo/client'
import { Entry } from '../types'

const SpinnerContainer = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
  margin-top: 200px;
`

const ENTRY_CARD_DATA = gql`
  fragment EntryCard on Entry {
    title
    description
  }
`

const GET_ENTRIES = gql`
  query GetEntriesList($after: String) {
    entries(after: $after) {
      hasMore
      cursor
      entries {
        ...EntryCard
      }
    }
  }
  ${ENTRY_CARD_DATA}
`

const Entries = () => {
  const { data, loading, fetchMore } = useQuery<{
    entries: { cursor: string; hasMore: boolean; entries: Entry[] }
  }>(GET_ENTRIES)

  const [isLoadingMore, setIsLoadingMore] = React.useState(false)

  if (loading) {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    )
  }

  if (!data) {
    return <h1>No data</h1>
  }

  return (
    <FadeIn>
      <React.Fragment>
        <EntriesGrid entries={data?.entries?.entries} />
        {isLoadingMore && (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        )}
        {data?.entries?.hasMore &&
          (isLoadingMore ? (
            <SpinnerContainer>
              <Spinner />
            </SpinnerContainer>
          ) : (
            <div style={{ padding: '80px 0px' }}>
              <button
                onClick={async () => {
                  setIsLoadingMore(true)
                  await fetchMore({
                    variables: {
                      after: data.entries.cursor,
                    },
                  })
                  setIsLoadingMore(false)
                }}
              >
                Load More
              </button>
            </div>
          ))}
      </React.Fragment>
    </FadeIn>
  )
}

export default Entries

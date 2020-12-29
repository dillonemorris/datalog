import React from 'react'
import styled from 'styled-components'
import { EntryCard } from '../components/EntryCard'
import { Entry } from '../types'
import { Spinner } from './Spinner'

type EntriesGridProps = {
  entries: Entry[] | undefined
  loading: boolean
}

const SpinnerContainer = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
`

const Grid = styled.ul`
  display: grid;
  grid-auto-rows: max-content;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
  width: 100%;
`

export const EntriesGrid: React.FC<EntriesGridProps> = ({
  entries,
  loading,
}) => {
  return (
    <Grid>
      {(() => {
        // TODO: replace with skeleton component
        if (loading) {
          return (
            <SpinnerContainer>
              <Spinner />
            </SpinnerContainer>
          )
        }

        // TODO: replace with styled empty state illustration
        if (!entries) {
          return <h1>No data</h1>
        }

        return entries?.map((entry, i) => (
          <EntryCard
            title={entry.title}
            description={entry.description}
            key={`${entry.title}${i}`}
          />
        ))
      })()}
    </Grid>
  )
}

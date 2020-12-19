import React from 'react'
import styled from 'styled-components'
import { EntryCard } from '../components/EntryCard'
import { Entry } from '../types'

type EntriesGridProps = {
  entries: Entry[] | undefined
}

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 24px;
  padding: 48px 0px;
`

export const EntriesGrid: React.FC<EntriesGridProps> = ({ entries }) => {
  return (
    <Grid>
      {entries?.map((entry, i) => (
        <EntryCard
          title={entry.API}
          description={entry.Description}
          key={`${entry.API}${i}`}
        />
      ))}
    </Grid>
  )
}

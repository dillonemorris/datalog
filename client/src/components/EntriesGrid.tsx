import React from 'react'
import styled from 'styled-components'
import { EntryCard } from '../components/EntryCard'
import { Entry } from '../types'

type EntriesGridProps = {
  entries: Entry[]
}

const Grid = styled.ul`
  display: grid;
  grid-auto-rows: max-content;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
  width: 100%;
`

export const EntriesGrid: React.FC<EntriesGridProps> = ({ entries }) => {
  return (
    <Grid>
      {entries.map((entry, i) => (
        <EntryCard
          title={entry.title}
          description={entry.description}
          key={`${entry.title}${i}`}
        />
      ))}
    </Grid>
  )
}

import React from 'react'
import { Entry } from '../types'
import { EntryCard } from '../components/EntryCard'
import { EntriesGrid } from '../components/EntriesGrid'
import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

type EntriesComponentProps = {
  entries: Entry[]
}

export const EntriesComponent: React.FC<EntriesComponentProps> = ({
  entries,
}) => {
  return (
    <FlexContainer>
      <EntriesGrid>
        {entries?.map((entry, i) => (
          <EntryCard entry={entry} key={`${entry.title}${i}`} />
        ))}
      </EntriesGrid>
    </FlexContainer>
  )
}

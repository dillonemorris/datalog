import React from 'react'
import { gql, useQuery } from '@apollo/client'
import styled from 'styled-components'
import FadeIn from '../components/FadeIn'
import '../styles/vars.css'
import { EntriesGrid } from '../components/EntriesGrid'
import { Nav } from '../components/Nav'
import { Entry } from '../types'

const EntriesFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 0px;
`

const GET_ENTRIES = gql`
  query GetEntriesList {
    entries {
      title
      description
    }
  }
`

const Entries = () => {
  const { data, loading } = useQuery<{
    entries: Entry[]
  }>(GET_ENTRIES)

  return (
    <FadeIn>
      <EntriesFlexContainer>
        <Nav />
        <EntriesGrid loading={loading} entries={data?.entries} />
      </EntriesFlexContainer>
    </FadeIn>
  )
}

export default Entries

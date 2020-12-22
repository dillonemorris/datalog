import React from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import { Entries } from '../types'
import { fetchEntries } from '../queries'
import { QUERY_CACHE_KEYS } from '../utils/constants'
import FadeIn from '../components/FadeIn'
import { Spinner } from '../components/Spinner'
import '../styles/vars.css'
import { EntriesGrid } from '../components/EntriesGrid'

const SpinnerContainer = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
  margin-top: 200px;
`

const EntriesScreen = () => {
  const { entries, isLoading } = useEntriesQuery()

  if (isLoading) {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    )
  }

  return (
    <FadeIn>
      <EntriesGrid entries={entries} />
    </FadeIn>
  )
}

const useEntriesQuery = () => {
  const { data, isLoading } = useQuery<Entries>({
    queryKey: QUERY_CACHE_KEYS.entries,
    queryFn: fetchEntries,
  })

  return { entries: data?.entries, isLoading }
}

export { EntriesScreen }

import React from 'react'
import styled from 'styled-components'
import { CalloutCard } from '../components/CalloutCard'

const Container = styled.div`
  width: 100%;
`

const MainHeadingContainer = styled.div`
  margin-bottom: 40px;
`

const MainHeading = styled.h1`
  color: var(--colors-body-text);
  font-size: 48px;
  padding-bottom: 8px;
  margin-top: 0px;
`

const MainDescription = styled.p`
  color: var(--colors-secondary-text);
  font-size: 28px;
`

const about = () => {
  return (
    <Container>
      <MainHeadingContainer>
        <MainHeading>Datalog</MainHeading>
        <MainDescription>
          A catalog of free API's. Get started by browsing the categories on the
          left or stay here to learn more.{' '}
        </MainDescription>
      </MainHeadingContainer>
      <CalloutCard />
    </Container>
  )
}

export default about

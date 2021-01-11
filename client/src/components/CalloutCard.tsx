import React from 'react'
import styled from 'styled-components'
import '../styles/vars.css'

const CardContainer = styled.div`
  display: flex;
  background-color: var(--colors-accent-background);
  justify-content: space-between;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 40px;
`

const Heading = styled.h1`
  color: var(--colors-accent-heading-text);
  font-size: 24px;
  padding-bottom: 8px;
`

const Description = styled.p`
  color: var(--colors-accent-body-text);
  font-size: 20px;
`

const Button = styled.button`
  color: var(--colors-body-text);
  border-radius: 8px;
  background-color: var(--colors-background);
  font-size: 20px;
  padding: 24px;
`

export const CalloutCard = () => {
  return (
    <CardContainer>
      <div>
        <Heading>Public API's</Heading>
        <Description>
          This site is powered by the Public API's project.
        </Description>
      </div>
      <Button>Check it out 👀</Button>
    </CardContainer>
  )
}

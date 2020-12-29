import React from 'react'
import styled from 'styled-components'
import { Nav } from '../components/Nav'
import FadeIn from '../components/FadeIn'

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 0px;
`

export const ContainerWithNav = ({ children: grid }) => {
  return (
    <FadeIn>
      <FlexContainer>
        <Nav />
        {grid}
      </FlexContainer>
    </FadeIn>
  )
}

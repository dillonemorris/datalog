import React from 'react'
import styled from 'styled-components'
import '../styles/vars.css'

type EntryCardProps = {
  title: string
  description: string
}

const Card = styled.div`
  padding: 12px;
  border: 1px solid var(--colors-gray-200);
  border-radius: 8px;
`

const Description = styled.p`
  color: var(--colors-secondary-text);
  font-size: 14px;
  line-height: 1.5;
`

const Heading = styled.h3`
  font-size: 16px;
  color: var(--colors-body-text);
  padding-bottom: 4px;
`

export const EntryCard: React.FC<EntryCardProps> = ({ title, description }) => {
  return (
    <Card>
      <Heading>{title}</Heading>
      <Description>{description}</Description>
    </Card>
  )
}

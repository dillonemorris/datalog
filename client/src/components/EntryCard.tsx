import React from 'react'
import styled from 'styled-components'
import '../styles/vars.css'
import { Entry } from '../types'
import { Tag } from './Tag'

type EntryCardProps = {
  entry: Entry
}

const Card = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--colors-gray-200);
  border-radius: 8px;
  padding: 20px;
  position: relative;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  &:after {
    position: absolute;
  }

  a:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
`

const Description = styled.p`
  color: var(--colors-secondary-text);
  font-size: 16px;
  line-height: 1.4;
  padding-bottom: 12px;
`

const Heading = styled.h2`
  font-size: 20px;
  color: var(--colors-body-text);
  font-weight: 600;
  padding-bottom: 8px;
`

const TagContainer = styled.div`
  display: flex;
`

const Space = styled.div`
  width: 8px;
`

const Category = styled.p`
  color: var(--colors-secondary-text);
  font-weight: 500;
  font-size: 14px;
  padding-bottom: 16px;
  text-transform: uppercase;
`

export const EntryCard: React.FC<EntryCardProps> = ({ entry }) => {
  const {
    link,
    title,
    description,
    authRequired,
    category,
    https,
    supportsCors,
  } = entry

  return (
    <Card>
      <Category>{category}</Category>
      <Heading>
        <a href={link}>{title}</a>
      </Heading>
      <Description>{description}</Description>
      <TagContainer>
        {!authRequired && (
          <React.Fragment>
            <Tag color="green">No Auth</Tag>
            <Space />
          </React.Fragment>
        )}

        {https && (
          <React.Fragment>
            <Tag color="blue">HTTPS</Tag>
            <Space />
          </React.Fragment>
        )}
        {supportsCors && <Tag color="purple">CORS</Tag>}
      </TagContainer>
    </Card>
  )
}

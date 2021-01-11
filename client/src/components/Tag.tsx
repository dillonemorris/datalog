import React from 'react'
import styled from 'styled-components'
import '../styles/vars.css'

type TagProps = { color: string; children: string | JSX.Element }

type StyledTagProps = { color: string }

const StyledTag = styled.div<StyledTagProps>`
  border-radius: 8px;
  background-color: ${({ color }) => `var(--colors-${color}-50)`};
  color: ${({ color }) => `var(--colors-${color}-700)`};
  padding: 4px 12px;
  width: fit-content;
  font-size: 14px;
  font-weight: 500;
`

export const Tag: React.FC<TagProps> = ({ color, children }) => {
  return <StyledTag color={color}>{children}</StyledTag>
}

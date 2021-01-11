import React from 'react'
import styled from 'styled-components'

type EntriesGridProps = {
  children: JSX.Element[] | JSX.Element | undefined
}

const Grid = styled.ul`
  display: grid;
  grid-auto-rows: max-content;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
  width: 100%;
`

export const EntriesGrid: React.FC<EntriesGridProps> = ({ children }) => {
  return <Grid>{children}</Grid>
}

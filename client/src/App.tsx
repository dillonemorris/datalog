import React from 'react'
import styled from 'styled-components'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter as Router } from 'react-router-dom'
import { FullPageErrorFallback } from './components/FullPageErrorFallback'
import './styles/vars.css'
import { Pages } from './pages'
import { Header } from './components/Header'

const Main = styled.main`
  width: 100%;
  max-width: var(--max-width-lg);
  margin: auto;
`

const App = () => {
  return (
    <Router>
      <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
        <Header />
        <Main>
          <Pages />
        </Main>
      </ErrorBoundary>
    </Router>
  )
}

export default App

import React from 'react'
import styled from 'styled-components'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { FullPageErrorFallback } from './components/FullPageErrorFallback'
import { NotFoundScreen } from './screens/NotFoundScreen'
import { EntriesScreen } from './screens/EntriesScreen'
import { ThemeToggler } from './components/ThemeToggler'
import './styles/vars.css'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: var(--colors-background);
  z-index: 1;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: var(--header-max-width);
  padding: 20px 0px;
  border-bottom: 1px solid var(--colors-gray-200);
`

const Main = styled.main`
  width: 100%;
  max-width: var(--max-width-lg);
  margin: auto;
`

const Heading = styled.h2`
  color: var(--colors-body-text);
  padding-bottom: 8px;
`

const Description = styled.p`
  color: var(--colors-secondary-text);
  font-size: 16px;
  line-height: 1.5;
`

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
      <HeaderContainer>
        <Header>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Heading>Datalog</Heading>
            <Description>A catalog of Public API's.</Description>
          </div>
          <ThemeToggler />
        </Header>
      </HeaderContainer>
      <Main>
        <AppRoutes />
      </Main>
    </ErrorBoundary>
  )
}

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <EntriesScreen />
        </Route>
        <Route path="*">
          <NotFoundScreen />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

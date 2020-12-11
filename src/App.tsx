import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { FullPageErrorFallback } from './components/lib'
import { NotFoundScreen } from './screens/NotFoundScreen'
import { CategoriesScreen } from './screens/CategoriesScreen'
import { CategoryScreen } from './screens/CategoryScreen'

const App = () => {
  return (
    <main style={{ width: '100%' }}>
      <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
        <AppRoutes />
      </ErrorBoundary>
    </main>
  )
}

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CategoriesScreen />
        </Route>
        <Route path="/category/:category">
          <CategoryScreen />
        </Route>
        <Route path="*">
          <NotFoundScreen />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

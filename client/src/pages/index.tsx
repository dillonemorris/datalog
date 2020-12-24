import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import NotFound from './not-found'
import Entries from './entries'

export const Pages = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Entries />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

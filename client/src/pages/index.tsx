import { Switch, Route } from 'react-router-dom'
import NotFound from './not-found'
import Entries from './entries'
import EntriesByCategory from './entriesByCategory'

export const Pages = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Entries />
      </Route>
      <Route exact path="/category/:category">
        <EntriesByCategory />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  )
}

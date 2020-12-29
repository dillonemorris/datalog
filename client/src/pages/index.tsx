import { Switch, Route } from 'react-router-dom'
import NotFound from './not-found'
import Entries from './entries'
import EntriesByCategory from './entriesByCategory'
import { ContainerWithNav } from '../components/ContainerWithNav'

export const Pages = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ContainerWithNav>
          <Entries />
        </ContainerWithNav>
      </Route>
      <Route exact path="/category/:category">
        <ContainerWithNav>
          <EntriesByCategory />
        </ContainerWithNav>
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  )
}

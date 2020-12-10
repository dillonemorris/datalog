import { useQuery } from 'react-query'
import { Categories } from './types'
import { client } from './utils/api-client'

const App = () => {
  const { data: categories } = useQuery<Categories>({
    queryKey: 'categories',
    queryFn: () => client(`categories`).then((data) => data),
  })

  return (
    <div>
      <header>
        <h1>Datalog</h1>
      </header>
      <div>
        {categories?.map((category) => (
          <h3>{category}</h3>
        ))}
      </div>
    </div>
  )
}

export default App

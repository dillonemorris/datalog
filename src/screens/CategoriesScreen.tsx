import { useQuery } from 'react-query'
import { Categories } from '../types'
import { fetchCategories } from '../queries'
import { QUERY_CACHE_KEYS } from '../utils/constants'
import { Link } from 'react-router-dom'

const CategoriesScreen = () => {
  const categories = useCategories()

  return (
    <div>
      <header>
        <h1>Datalog</h1>
      </header>
      <div>
        {categories?.map((category) => (
          <div key={category}>
            <Link to={`/category/${category}`}>{category}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

const useCategories = () => {
  const { data } = useQuery<Categories>({
    queryKey: QUERY_CACHE_KEYS.categories,
    queryFn: fetchCategories,
  })

  return data
}

export { CategoriesScreen }

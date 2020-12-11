import { useQuery } from 'react-query'
import { QUERY_CACHE_KEYS } from '../utils/constants'
import { fetchCategory } from '../queries'
import { useParams } from 'react-router-dom'
import { Category, RouteParams } from '../types'

const CategoryScreen = () => {
  const { category: categoryParam } = useParams<RouteParams>()
  const { data: category, isLoading } = useQuery<Category>({
    queryKey: categoryParam,
    queryFn: () => fetchCategory(categoryParam),
  })

  console.log({ categoryParam })

  if (isLoading) {
    return <h1>...loading</h1>
  }

  return (
    <div>
      {category?.entries.map((entry) => (
        <div>
          <h2>{entry.API}</h2>
          <p>{entry.Description}</p>
        </div>
      ))}
    </div>
  )
}

export { CategoryScreen }

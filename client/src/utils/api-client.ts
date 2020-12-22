import { API_URL } from './constants'

const client = async (endpoint: string) => {
  const config = {
    method: 'GET',
  }

  return window
    .fetch(`${API_URL}/${endpoint}`, config)
    .then(async (response) => {
      const data = await response.json()
      if (response.ok) {
        return data
      } else {
        return Promise.reject(data)
      }
    })
}

export { client }

import React from 'react'
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from '@apollo/client'
import { cache } from './cache'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
const uri = process.env.REACT_APP_API_URI

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  uri,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)

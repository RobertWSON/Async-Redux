import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
// import LoadRandomPost from './LoadRandomPost'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    {/* <LoadRandomPost /> */}
    <LoadSubreddit />
    <WaitIndicator />
    <SubredditList />
  </div>
)

export default App

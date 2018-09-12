import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

const LoadSubreddit = ({dispatch, event}) => (
  <form onSubmit={event => event.preventDefault()}>
    <button onClick={() => dispatch(fetchPosts('newzealand'))}>
      Fetch Posts
    </button>
    <input type ="text"/>

  </form>
)

export default connect()(LoadSubreddit)

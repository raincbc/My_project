import React, { useState } from 'react'
import Form from './reduxAppComponents/Form'
import Posts from './reduxAppComponents/Posts'
import FetchedPosts from './reduxAppComponents/FetchedPosts'

const ReduxApp = () => {
  const [posts, setPosts] = useState([]);

  const addNewPost = (post) => {
    setPosts([...posts , post])
  }

  return (
    <div className="container">
        <div className="row">
        <Form addNewPost={addNewPost} />
        </div>
        <div className="row">
          <div className="col">
            <h2>Sync posts</h2>
            <Posts posts={posts}/>
          </div>
          <div className="col">
            <h2>Async posts</h2>
              <FetchedPosts posts={posts} />
          </div>
        </div>
    </div>
  )
}

export default ReduxApp

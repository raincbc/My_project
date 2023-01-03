import React from 'react'
import Post from './Post'

const FetchedPosts = ({ posts }) => {
  if (!posts.length) {
    return <div>No posts</div>
  }
  
  return <div>
  {posts.map(post => <Post key={post.id} post={post}/>)}
</div>
}

export default FetchedPosts

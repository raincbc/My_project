import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post'
import { fetchedPost } from './redux/actions'

const FetchedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPost);

  const loading = useSelector((state) => state.app.loading)

  if (loading) {
    return <div>Loading...</div>
  }

  if (!posts.length) {
    return <div>
      <h2>No posts</h2>
      <button onClick={() => dispatch(fetchedPost())} className='fetched-btn'>Download posts</button>
    </div>
    
  }
  
  return <div>
  {posts.map(post => <Post key={post.id} post={post}/>)}
</div>
}

export default FetchedPosts

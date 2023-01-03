import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'

const Posts = ({posts}) => {
    if (!posts.length) {
        return <div>No posts</div>
    }

    return <div>
        {posts.map(post => <Post key={post} post={post}/>)}
    </div>
}

const mapStateToProps = (state) => {
    return {
        posts:state.posts.posts,
    }
}

export default connect(mapStateToProps, null)(Posts);
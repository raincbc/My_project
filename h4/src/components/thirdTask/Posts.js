import React from "react";
import Post from "./Post";

const Posts = (props) => {
    const posts = props.value
    return (
        <ul>
            {posts.map((post) => (
                <Post data={post} />
            ))}
        </ul>
    )
}

export default Posts;
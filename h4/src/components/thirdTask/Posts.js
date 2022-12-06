import React from "react";
import Post from "./Post";

const Posts = (props) => {
    const posts = props.value

    return (
        <ul className="user-ul">
            {posts.map((post) => (
                <Post data={post} key={ post.id} />
            ))}
        </ul>
    )
}

export default Posts;
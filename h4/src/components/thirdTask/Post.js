const Post = (props) => {
    const { title, completed} = props.data;
    
    return (
        <li>
                {`Title : ${title} - completed : ${completed}`}
        </li>
    )
}

export default Post;
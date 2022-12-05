const Post = (props) => {

    const { title, completed } = props.data;
    
    return (
        <li>
            <div>
                {`Title : ${title} - completed : ${completed}`}
            </div>
        </li>
    )
}

export default Post;
const Posts = (props) => {
    return(
        <div className="itemTodo">
            <div className="itwmTodoLeft">
                <p><strong>Title:</strong> {props.title}</p>
                <p><strong>Body:</strong> {props.body}</p>
            </div>
        </div>
    )
}

export default Posts
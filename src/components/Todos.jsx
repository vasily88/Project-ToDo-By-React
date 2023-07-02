

const Todos = (props) => {

    const sendIdTodos = (id) => {
        props.getDataFromTodoChildCompleted(id)
    }

    return (
        <div className="itemTodo" id={props.id}>
            <div className="itwmTodoLeft">
                <p><strong>Title:</strong> {props.title}</p>
                <p><strong>Completed:</strong> {props.completed ? 'True' : 'False'}</p>
            </div>
            {!props.completed ?
                <button onClick={() => sendIdTodos(props.id)} className="markCompletes">Mark Completed</button>
            :''}
        </div>
    )
}

export default Todos
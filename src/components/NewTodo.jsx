import { useState } from "react"

const NewTodo = (props) => {

    const [titleNewTodo,setTitleNewTodo] = useState('')

    const buttonCancelTodo = (id) => {
        props.getDataFromNewIdChild(id)
    }

    const ButtonAddNewTodo = (id,title) => {
        if (titleNewTodo == ''){
            alert('Please Add New Title')
        }else{
            props.getDataFromNewIdChild(id,title)
        }
    }

    return (
        <div className="wrapperNewTodo">
            <label>
                <p>TITLE: </p>
                <input type="text" onInput={e => setTitleNewTodo(e.target.value)} />
            </label>

            <div className="wrapperCancelAddButton">
                <button onClick={() => buttonCancelTodo(props.userId)}><p>CANCEL</p></button>
                <button onClick={() => ButtonAddNewTodo(props.userId,titleNewTodo)}><p>ADD</p></button>
            </div>
        </div>
    )
}

export default NewTodo
import { useState } from "react"

const AddNewUser = (props) => {

    const [dataNewUser,setDataNewUser] = useState({name:'',email:''})

    const buttonCancelNewUser = () => {
        props.getDataFromAddNewUserChild(false)
    }

    const ButtonAddNewNewUser = (dataNewUser) => {
        if (dataNewUser.name == ''){
            alert('Please Add Name')
        }else if (dataNewUser.email == ''){
            alert('Please Add Email')
        }else{
            props.getDataFromAddNewUserChild(false,dataNewUser)
        }
    }

    return(
        <div className="wrapperNewTodo">
            <label>
                <p>NAME: </p>
                <input type="text" onInput={e => setDataNewUser({...dataNewUser,name:e.target.value})} />
            </label>
            <label>
                <p>EMAIL: </p>
                <input type="email" onInput={e => setDataNewUser({...dataNewUser,email:e.target.value})} />
            </label>

            <div className="wrapperCancelAddButton">
                <button onClick={buttonCancelNewUser}><p>CANCEL</p></button>
                <button onClick={() => ButtonAddNewNewUser(dataNewUser)}><p>ADD</p></button>
            </div>
        </div>
    )
}

export default AddNewUser
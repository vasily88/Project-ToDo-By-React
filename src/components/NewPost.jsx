import { useState } from "react"

const NewPost = (props) => {

    const [dataNewPost,setDataNewPost] = useState({titleNepPost:'',bodyNewPost:''})

    const buttonCancelPost = (id) => {
        props.getDataFromNewPost(id)
    }

    const ButtonAddNewPost = (id,dataNewPost) => {
        if (dataNewPost.titleNepPost == ''){
            alert('Please Add New Title')
        }else if (dataNewPost.bodyNewPost == ''){
            alert('Please Add New Body')
        }else{
            props.getDataFromNewPost(id,dataNewPost)
        }
    }

    return(
        <div className="wrapperNewPosts">
            <label>
                <p>TITLE: </p>
                <input type="text" onInput={e => setDataNewPost({...dataNewPost,titleNepPost:e.target.value})} />
            </label>
            <label>
                <p>BODY: </p>
                <input type="text" onInput={e => setDataNewPost({...dataNewPost,bodyNewPost:e.target.value})} />
            </label>

            <div className="wrapperCancelAddButton">
                <button onClick={() => buttonCancelPost(props.userId)}><p>CANCEL</p></button>
                <button onClick={() => ButtonAddNewPost(props.userId,dataNewPost)}><p>ADD</p></button>
            </div>

        </div>
    )
}

export default NewPost
import { useEffect, useState } from "react";

// import components
import { getDataUtils } from "../utils/utils";
import ShowMoreDetails from "./ShowMoreDetails";
import Todos from "./Todos";
import Posts from "./Posts";
import NewTodo from "./NewTodo";
import NewPost from "./NewPost";
import AddNewUser from "./AddNewUser";

const Users = () => {

    const urlUser = 'https://jsonplaceholder.typicode.com/users'
    const urlTodo = 'https://jsonplaceholder.typicode.com/todos'
    const urlPost = 'https://jsonplaceholder.typicode.com/posts'

    const [allUsers,setAllUsers] = useState([])
    const [allToDo,setallToDo] = useState([])
    const [allPosts,setPosts] = useState([])

    const [search,setSearch] = useState('')
    const [otherData,setOtherData] = useState({id:0,status:false})
    const [showRight,setShowRight] = useState({id:0,status:false})
    const [nameUpdate,setNameUpdate] = useState({id:0,name:''})
    const [emailUpdate,setEmailUpdate] = useState({id:0,email:''})
    const [streetUpdate,setStreetUpdate] = useState({id:0,street:''})
    const [cityUpdate,setCityUpdate] = useState({id:0,city:''})
    const [zipcodeUpdate,setZipcodeUpdate] = useState({id:0,zipcode:''})
    const [openTodo,setOpenTodo] = useState({id:0,status:false})
    const [openPost,setOpenPost] = useState({id:0,status:false})
    const [openNewUser,setOpenNewUser] = useState(false)

    useEffect(() => {
        // Import Users
        const getDataUsers = async () => {
            const {data:dataUsers} = await getDataUtils(urlUser)
            setAllUsers(dataUsers)
        }
        getDataUsers()

        // Import Todo
        const getDataDoto = async () => {
            const {data:dataTodo} = await getDataUtils(urlTodo)
            setallToDo(dataTodo)
        }
        getDataDoto()

        // Import Posts
        const getDataPosts = async () => {
            const {data:dataPosts} = await getDataUtils(urlPost)
            setPosts(dataPosts)
        }
        getDataPosts()

    },[])

    // Button Other Data
    const buttonOtherData = (id) => {
        setOtherData({id:id,status:true})
    }

    // Button Other Data Close
    const buttonOtherDataClose = () => {
        setOtherData({id:0,status:false})
    }

    // Button Delete User
    const buttonDeleteUser = (id) => {
        setAllUsers(allUsers.filter(deleteItem => deleteItem.id !== id))
    }

    // Get Data From Child Deatils
    const getDataFromChildDeatils = (data) => {
        setOtherData(data)
    }

    // Update Show More Details
    const updateShowMoreDetails = (id=0,street='',city='',zipcode='') => {
        setStreetUpdate({id:id,street:street})
        setCityUpdate({id:id,city:city})
        setZipcodeUpdate({id:id,zipcode:zipcode})
    }

    // Update Input Value Name
    const updateInputValueName = (e,id) => {
        setNameUpdate({id:id,name:e.target.value})
    }

    // Update Input Value Email
    const updateInputValueEmail = (e,id) => {
        setEmailUpdate({id:id,email:e.target.value})
    }

    // Button Update User
    const buttonUpdateUser = (id) => {

        console.log(id);
        console.log(allUsers[id-1].name);
        console.log(allUsers[id-1].email);

        if (nameUpdate.name.length == 0){
            nameUpdate.name = allUsers[id-1].name
        }

        if (emailUpdate.email.length == 0){
            emailUpdate.email = allUsers[id-1].email
        }

        if (streetUpdate.street.length == 0){
            streetUpdate.street = allUsers[id-1].address.street
        }

        if (cityUpdate.city.length == 0){
            cityUpdate.city = allUsers[id-1].address.city
        }

        if (zipcodeUpdate.zipcode.length == 0){
            zipcodeUpdate.zipcode = allUsers[id-1].address.zipcode
        }

        setAllUsers(
            allUsers.map(updateUserItem => {
                if (updateUserItem.id == id){
                    return {
                        ...updateUserItem,
                        name:nameUpdate.name,
                        email:emailUpdate.email,
                        address:{
                            ...updateUserItem.address,
                            street:streetUpdate.street,
                            city:cityUpdate.city,
                            zipcode:zipcodeUpdate.zipcode
                        }
                    }
                }
                return updateUserItem
            })
        )

        setNameUpdate({id:0,name:''})
        setEmailUpdate({id:0,email:''})
        setStreetUpdate({id:0,street:''})
        setCityUpdate({id:0,city:''})
        setZipcodeUpdate({id:0,zipcode:''})
    }
        
    // Show Posts And Todos
    const showPostsAndTodos = (id) => {
        if (showRight.id == id){
            setShowRight({id:0,status:false})
        }else{
            setShowRight({id:id,status:true})
        }
    }

    // Get Data From Todo Child Completed
    const getDataFromTodoChildCompleted = (id) => {
        setallToDo(allToDo.map(todoItemComplete => {
            if (todoItemComplete.id == id){
                return {...todoItemComplete,completed:true}
            }
            return todoItemComplete
        }))
    }

    // Open New Todo Component
    const openNewTodoComponent = (id) => {
        if (openTodo.id == id){
            setOpenTodo({id:0,status:false})
        }else{
            setOpenTodo({id:id,status:true})
        }
    }

    // Get Data From New Id Child
    const getDataFromNewIdChild = (id,title='') => {
        if (openTodo.id == id){
            setOpenTodo({id:0,status:false})
        }

        if (title.length > 0){
            setallToDo([...allToDo,
                {
                    "userId": id,
                    "id": allToDo.length+1,
                    "title": title,
                    "completed": false
                  }
            ])
        }
    }

    // Open New Post Component
    const openNewPostComponent = (id) => {
        if (openPost.id == id){
            setOpenPost({id:0,status:false})
        }else{
            setOpenPost({id:id,status:true})
        }
    }

    // Get Data From New Post
    const getDataFromNewPost = (id,dataNewPost='') => {
        if (openPost.id == id){
            setOpenPost({id:0,status:false})
        }

        if (dataNewPost != ''){
            setPosts([...allPosts,
                {
                    "userId": id,
                    "id": allPosts.length + 1,
                    "title": dataNewPost.titleNepPost,
                    "body": dataNewPost.bodyNewPost
                  }
            ])
        }
    }

    // Add New User Button
    const addNewUserButton = () => {
        setOpenNewUser(true)
    }

    // Get Data From Add New User Child
    const getDataFromAddNewUserChild = (status,dataNewUser='') => {
        setOpenNewUser(status)
        
        if (dataNewUser != ''){
            setAllUsers([...allUsers,
                {
                    "id": allUsers.length + 1,
                    "name": dataNewUser.name,
                    "username": "",
                    "email": dataNewUser.email,
                    "address": {
                      "street": "",
                      "suite": "",
                      "city": "",
                      "zipcode": "",
                      "geo": {
                        "lat": "",
                        "lng": ""
                      }
                    },
                    "phone": "",
                    "website": "",
                    "company": {
                      "name": "",
                      "catchPhrase": "",
                      "bs": ""
                    }
                  }
            ])
        }
    }

    return (
        <>
            {/* Search */}
            <div className="searchWrapper">
                <label>
                    <p>SEARCH: </p>
                    <input type="text" onInput={e => setSearch(e.target.value.toLowerCase())} />
                </label>
                <button onClick={addNewUserButton}>Add</button>

                {openNewUser ?
                    <div className="rightNewUser">
                        <div className="wrapperNewUser">
                            <AddNewUser getDataFromAddNewUserChild={getDataFromAddNewUserChild} />
                        </div>
                    </div>
                : ''}
            </div>

            {/* Users */}
            <div className="wrapperUsers">
                {
                    allUsers.filter(searchItem => searchItem.name.toLowerCase().includes(search) || searchItem.email.toLowerCase().includes(search)).map(item => {
                        return (
                            <div key={item.id} className="user" >
                                <div 
                                    className="left"
                                    style={{border: allToDo.filter(todoItem => todoItem.userId == item.id && !todoItem.completed).length !== 0 ? '2px solid red' : '2px solid green' }}
                                >

                                    <button className="idLabel" onClick={() => showPostsAndTodos(item.id)}>
                                        ID: {item.id}
                                    </button>

                                    <label>
                                        <p>NAME: </p>
                                        <input type="text" onInput={(e) => updateInputValueName(e,item.id)} value={nameUpdate.id == item.id ? nameUpdate.name : item.name}/>
                                    </label>

                                    <label>
                                        <p>EMAIL: </p>
                                        <input type="email" onInput={(e) => updateInputValueEmail(e,item.id)} value={emailUpdate.id == item.id ? emailUpdate.email : item.email} />
                                    </label>

                                    <div className="wrapperButtons"
                                        style={{display: otherData.status && otherData.id == item.id ? 'block' : 'flex'}}
                                        >
                                        <button onMouseEnter={() => buttonOtherData(item.id)} onClick={buttonOtherDataClose}><p>OTHER DATA</p></button>

                                        {otherData.status && otherData.id == item.id ? 
                                            <>
                                            <ShowMoreDetails dataDetails={item} getDataFromDetails={getDataFromChildDeatils} updateShowMoreDetails={updateShowMoreDetails} />
                                            </>
                                        : ''}

                                        <div className="wrapperUpdateDeleteButton">
                                            <button onClick={() => buttonUpdateUser(item.id)}><p>UPDATE</p></button>
                                            <button onClick={() => buttonDeleteUser(item.id)}><p>DELETE</p></button>
                                        </div>
                                    </div>

                                </div>

                                {showRight.id == item.id && showRight.status ?

                                <div className="right">

                                    <div className="wrapperTodoesList">

                                        <div className="wrapperRightHead">
                                            <h3>Todos - User {item.id}</h3>
                                            <button onClick={() => openNewTodoComponent(item.id)}>Add</button>
                                        </div>
                                        {   openTodo.status && openTodo.id == item.id
                                            ?
                                            <NewTodo userId={item.id} getDataFromNewIdChild={getDataFromNewIdChild}/> 
                                            :
                                            allToDo.filter(todoItem => todoItem.userId == item.id).map(todoAfterFilter => {
                                                return(
                                                    <Todos key={todoAfterFilter.id} getDataFromTodoChildCompleted={getDataFromTodoChildCompleted} id={todoAfterFilter.id} title={todoAfterFilter.title} completed={todoAfterFilter.completed} />
                                                )
                                            })
                                        }

                                    </div>

                                    <div className="wrapperPostsList">

                                        <div className="wrapperRightHead">
                                            <h3>Posts - User {item.id}</h3>
                                            <button onClick={() => openNewPostComponent(item.id)}>Add</button>
                                        </div>
                                        {   openPost.status && openPost.id == item.id
                                            ?
                                            <NewPost userId={item.id} getDataFromNewPost={getDataFromNewPost}/>
                                            :
                                            allPosts.filter(postItem => postItem.userId == item.id).map(postsAfterFilter => {
                                                return(
                                                    <Posts key={postsAfterFilter.id} title={postsAfterFilter.title} body={postsAfterFilter.body} />
                                                )
                                            })
                                        }

                                    </div>

                                </div>

                                : ''}

                            </div>
                        )
                    })

                }
                {allUsers.filter(searchItem => searchItem.name.toLowerCase().includes(search) || searchItem.email.toLowerCase().includes(search)).length > 0 ? '' : (<div className="noResults"><p>No Results</p></div>)}
            </div>
        </>
    )
}

export default Users
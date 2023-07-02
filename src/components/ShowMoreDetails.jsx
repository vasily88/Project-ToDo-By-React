import { useEffect, useState } from "react"

const ShowMoreDetails = (props) => {

    const [updateStreet,setUpdateStreet] = useState({id:0,street:''})
    const [updateCity,setUpdateCity] = useState({id:0,city:''})
    const [updateZipcode,setUpdateZipcode] = useState({id:0,zipcode:''})

    const inputUpdateStreet = (e,id) => {
        setUpdateStreet({...updateStreet,id:id,street:e.target.value})
        props.updateShowMoreDetails(id,e.target.value,updateCity.city,updateZipcode.zipcode)
    }

    const inputUpdateCity = (e,id) => {
        setUpdateCity({...updateCity,id:id,city:e.target.value})
        props.updateShowMoreDetails(id,updateStreet.street,e.target.value,updateZipcode.zipcode)
    }

    const inputUpdateZipcode = (e,id) => {
        setUpdateZipcode({...updateCity,id:id,zipcode:e.target.value})
        props.updateShowMoreDetails(id,updateStreet.street,updateCity.city,e.target.value)
    }

    // useEffect(() => {
    //     const wrapperShowMore = document.querySelector('.wrapperShowMore')
    //     wrapperShowMore.addEventListener('click',() => {
    //         props.getDataFromDetails({id:0,status:false})
    //     })
    // },[])

    return(
        <div className="wrapperShowMore">
            <label>
                <p>STREET: </p>
                <input type="text" onInput={(e) => inputUpdateStreet(e,props.dataDetails.id)} value={updateStreet.id == props.dataDetails.id ? updateStreet.street : props.dataDetails.address.street}/>
            </label>

            <label>
                <p>CITY: </p>
                <input type="text" onInput={(e) => inputUpdateCity(e,props.dataDetails.id)} value={updateCity.id == props.dataDetails.id ? updateCity.city : props.dataDetails.address.city}/>
            </label>

            <label>
                <p>ZIP CODE: </p>
                <input type="text" onInput={(e) => inputUpdateZipcode(e,props.dataDetails.id)} value={updateZipcode.id == props.dataDetails.id ? updateZipcode.zipcode : props.dataDetails.address.zipcode} />
            </label>
        </div>
    )
}

export default ShowMoreDetails
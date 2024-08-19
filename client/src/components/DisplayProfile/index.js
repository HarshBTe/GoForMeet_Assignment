import {useEffect, useState} from 'react'
import axios from 'axios'
import './index.css'

const DisplayProfile = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3002/getUsers')
        .then((users) => {
            setUsers(users.data)
        }).catch(err => console.log(err))
    }, [])


    return (
        <div className='maincontainer'>
            <h1> List of Profiles </h1>
               {
            users.map(user => {
                return <div className='profile-container'>
                        <p>Name: {user.Name},  Age: {user.Age}, Location: {user.Location},   Profession: {user.Profession}</p>
                        
                        
                    </div>
            })
          }
        </div>
    )
}

export default DisplayProfile
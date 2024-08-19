
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import './index.css'

const Create = () =>{
    const [Name, setName] = useState()
    const [Age, setAge] = useState()
    const [Location, setLocation] = useState()
    const [Profession, setProfession] = useState()
    const [isError, setError] = useState(false)
    const [isageError, setageError] = useState(false)
    

    const navigate = useNavigate()
    const formSubmit = (event) => {
           event.preventDefault();
        axios.post('http://localhost:3002/createUser', {Name, Age, Location, Profession})
        .then((users) => {
        navigate('/displayusers')
        }).catch(err => console.log(err))
    }

     
    const changeName = (e) => {
      setName(e.target.value)
      if(parseInt(e.target.value) !== "NaN"){
        console.log(typeof(e.target.value));
              setError(true)
      }
      
    }

    const changeAge = (e) => {
      setAge(e.target.value)
      if(parseInt(e.target.value) !== "NaN"){
        
              setageError(true)
      }
    }

    let labelnameerror = isError ? "* Note Only Text Allowed": "";

    let labelageerror = isageError ? "* Note Only Number Allowed": "";
    return (
        <div className='maincontainer'>
          <h1> Create Your Profile </h1>
          <form onSubmit={formSubmit} className='formcontainer'>

            <div className='inputlabel'>
          <label htmlFor="name"> Name </label>
          <input type="text" id="name"  className='inputdec' placeholder='Enter Name' onChange={changeName}></input>
          <p className='errMsg'>{labelnameerror}</p>
          </div>
          <br />
            

           <div className='inputlabel'>
          <label htmlFor="age"> Age </label>
          <input type="text" id="age"  className='inputdec' placeholder='Enter Age' onChange={changeAge}></input>
          <p className='errMsg'>{labelageerror}</p>
          </div>
          <br />

          <div className='inputlabel'>
          <label htmlFor="location"> Location </label>
          <input type="text" id="location" className='inputdec' placeholder='Enter Location' onChange={(e) => setLocation(e.target.value)}></input>
          </div>
          <br />

          <div className='inputlabel'>
          <label htmlFor="profession"> Profession </label>
          <input type="text" id="profession" className='inputdec' placeholder='Enter Profession' onChange={(e) => setProfession(e.target.value)}></input>
          </div>
          <br />
          
           <button type="submit" className='buttoncreate'>Create User</button>
          </form>

        </div>
    )
}

export default Create


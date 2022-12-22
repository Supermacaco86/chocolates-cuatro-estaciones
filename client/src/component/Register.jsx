import React from 'react'
import { useState } from 'react'

function Register() {

  const [user, setUser] = useState({
    email:"",
    password:"",
  })


  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(user)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
        type="email"
        name="email"
        placeholder="user@compañy.com"
        onChange={handleChange}/>

        <label>Password</label>
        <input
        type="password"
        name="password"
        placeholder="*******"
        onChange={handleChange}/>

        <button>Registrarce</button>
      </form>
    </div>
  )
}

export default Register
import React from 'react'
import { useState } from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';

function Login() {

  const [user, setUser] = useState({
    email:"",
    password:"",
  });
  const { login } = useAuth()
  const navigate = useNavigate()
  const [ error, setError ] = useState()


  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    setError("")
    try {
      await login( user.email, user.password)
      navigate('/homelogin')
    } catch (error) {
      console.log(error.code)
      if(error.code === "auth/user-not-found"){
        setError("Usuario incorrecto o no registrado aún")
      }else if(error.code === "auth/invalid-email"){
        setError("El email ingresado es incorrecto")
      }else if(error.code === "auth/wrong-password"){
        setError("La contraseña ingresada es incorrecta")
      }else if(error.code === "auth/weak-password"){
        setError("La contraseña debe tener al menos 6 digitos")
      }  
  }
}

  return (
    <div>
      { error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
        type="text"
        name="email"
        placeholder="user@compañy.com"
        onChange={handleChange}/>

        <label>Password</label>
        <input
        type="password"
        name="password"
        placeholder="*******"
        onChange={handleChange}/>

        <button>Login</button>
      </form>
    </div>
  )
}
export default Login
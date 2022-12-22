import React from 'react'
import { useState } from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';

function Register() {

  const [user, setUser] = useState({
    email:"",
    password:"",
  });
  const { signup } = useAuth()
  const navigate = useNavigate()
  const [ error, setError ] = useState()


  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    setError("")
    try {
      await signup( user.email, user.password)
      navigate('/homelogin')
    } catch (error) {
      console.log(error.code)
      if(error.code === "auth/invalid-email"){
        setError("Ingrese un correo valido")
      }else if(error.code === "auth/weak-password"){
        setError("La contraseña debe contener al menos 7 digitos")
      }else if(error.code === "auth/email-already-in-use"){
        setError("Usuario ya registrado")
      }
    }
    
  }

  return (
    <div>
      { error && <p>{error}</p>}
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
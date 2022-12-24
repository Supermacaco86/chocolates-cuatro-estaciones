import React from 'react'
import { useState } from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom';

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
      switch(error){
        case error.code === "auth/invalid-email":
            setError("Correo invalido");
            break;
        case error.code === "auth/email-already-in-use":
            setError("Usuario ya registrado");
            break;
        case error.code === "auth/weak-password":
            setError("La contraseña debe tener al menos 6 digitos");
            break;
        case error.code === "auth/wrong-password":
            setError("Contraseña incorrecta");
            break;
        case error.code === "auth/user-not-found":
            setError("El usuario no existe"); 
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

        <label htmlFor="password">Password</label>
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
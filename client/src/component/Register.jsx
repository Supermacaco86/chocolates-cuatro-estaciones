import React from 'react'

function Register() {
  return (
    <div>
      <form>
        <label>Email</label>
        <input
        type="email"
        name="email"
        placeholder="user@compañy.com"/>

        <label>Password</label>
        <input
        type="password"
        name="password"
        placeholder="*******"/>

        <button>Registrarce</button>
      </form>
    </div>
  )
}

export default Register
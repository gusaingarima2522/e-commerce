import React from 'react'

function Login() {
  return (
    <>
    <div id='loginform'>
      <h1>Login </h1><br />
      <form action="Submit">
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        
        <button type="submit">Login</button>
      </form>

    </div>
      
    </>
  )
}

export default Login

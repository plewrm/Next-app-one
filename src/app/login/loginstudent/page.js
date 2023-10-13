import React from 'react'

const Studentlogin = () => {
  return (
    <main style={{ textAlign: 'center' }}>
      <h1>Login by Student</h1>
      <form action="/login" method="post">
        <label for="username">Username </label>&nbsp;
        <input type="text" id="username" name="username" /><br/><br/>
        <label for="password">Password </label>&nbsp;
        <input type="password" id="password" name="password" /><br/><br/>
        <button type="submit">Login</button>
      </form>
    </main >
  )
}

export default Studentlogin

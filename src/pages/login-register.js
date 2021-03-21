import {React, useEffect, useState} from 'react';


function Login() {
  const [submittedSucessful, setSubmittedSuccessful] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
    
  
  
  
  return (

    
      <div className="login">
        <h1>Login</h1>
                
        <input id='loginUsername'className="login-email-input"
                type="text"
                placeholder="Username"
                // onChange={(event)=>setUsername(event.target.value)}
                >
        </input>
        
        <input id='loginPassword'className ="login-password-input"
                type="text"
                placeholder="password"
                // onChange={(event)=>setPassword(event.target.value)}
                >
        </input>
        <button className="login-button"
                // onClick={authenticate}
                >
                Login
        </button>




      <h1>Register</h1>
  
      <input id='loginUsername'className="register-username-input"
                type="text"
                placeholder="Username"
                // onChange={(event)=>setUsername(event.target.value)}
                >
        </input>
        
        <input id='loginPassword'className ="register-password-input"
                type="text"
                placeholder="password"
                // onChange={(event)=>setPassword(event.target.value)}
                >
        </input>
        <button className="register-button"
                // onClick={authenticate}
                >
                Register
        </button>



      </div>
    );
  }
  


  export default Login;
import React, { useState, useEffect } from "react" 


export default function Auth(){

  const [ signupData, setSignupData ] = useState({})
  const [ loginData, setLoginData ] = useState({})

  const [ formMessage, setFormMessage ] = React.useState("")

  async function submitSignup(e){
    e.preventDefault()
    try {
      const query = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify(signupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }).catch( err => {
        setFormMessage("Sorry, we couldn't sign you up. Get a life.")
      })
 
      const result = await query.json()
      if( result.status === "error" ){
        setFormMessage("Sorry, we couldn't sign you up. Get a life.")
      } else {
        window.location.href = "/"
      }
    } catch(err) {
      setFormMessage("Sorry, we couldn't sign you up. Get a life.")
    }
  }

  async function submitLogin(e){
    e.preventDefault()
    try {
      const query = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const result = await query.json()
      if( result.status === "error" ){
        setFormMessage("We could not log you in with these credentials.")
      } else {
        window.location.href = "/"
      }
    } catch( err ) {
      setFormMessage("We could not log you in with these credentials.")
    }
  }

  function handleSignupChange(e){
    setFormMessage()
    setSignupData({...signupData, [e.target.name]: e.target.value})
  }
  
  function handleLoginChange(e){
    setFormMessage()
    setLoginData({...loginData, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          
          <div className="col-6 p-5">
            <div>
              <form className="form" onSubmit={submitSignup}>
                <div className="form-group mb-3">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input type="text" className="form-control" name="name" value={signupData?.name || ""} onChange={handleSignupChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input type="text" className="form-control" name="email" value={signupData?.email || ""} onChange={handleSignupChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="password">Password</label>
                  <input type="password" className="form-control" name="password" value={signupData?.password || ""} onChange={handleSignupChange} />
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
              </form>
            </div>
          </div>

          <div className="col-6 p-5">
            <div>
              <form className="form" onSubmit={submitLogin}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input type="text" className="form-control" name="email" value={loginData?.email || ""} onChange={handleLoginChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="password">Password</label>
                  <input type="password" className="form-control" name="password" value={loginData?.password || ""} onChange={handleLoginChange} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>

        { formMessage && formMessage.length > 0 && (
          <div className="row">
            <div className="col-12">
              { formMessage }
            </div>
          </div>
        )}
      </div>

    </div>
  )
}
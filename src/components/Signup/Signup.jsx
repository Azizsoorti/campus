import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
function Singup() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [allUsers, setAllUsers] = useState([])

  const submitForm = (e) => {
      e.preventDefault();

      const newUser = {fullName:fullName,  email:email, password:password,cPassword:cPassword };
      setAllUsers([...allUsers, newUser])
      console.log(allUsers)
  
      setFullName("")
      setEmail("")
      setPassword("")
      setCPassword("")
  }
  return (
    
    <div className="container-fluid " style={{background:"#945894", minHeight:"100vh"}}>
    <div className="row">
        <div className="m-auto col-md-3 bg-white rounded my-5 px-4"  style={{minHeight:"33rem"}}>
              <div className="text-center mt-5 py-2" >
                        <img src="./images/campus.png" alt="" style={{width:"7rem"}}/>
                    </div>
                <form action="" onSubmit={submitForm}>
                <div className="my-3 rounded">
                        <label htmlFor="fullName"> Full Name</label><br />
                        <input className="ps-2 w-100 " type="text" name="fullName" placeholder="Enter Your Name" id="fullName" value={fullName} onChange={(e) => { setFullName(e.target.value) }} />
                    </div>
                  
    
                    <div className="my-3 rounded">
                        <label htmlFor="email"> Email address</label><br />
                        <input className="ps-2 w-100 " type="text" name="email" placeholder="Enter Email Address" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>

                    <div className="my-2">
                    <label  className="me-2" htmlFor="signup as"> Signup as</label>
                        <input className="me-2" type="radio" name="as" id="user" />
                        <label  className="me-2" htmlFor="user"> User</label>
                        <input className="me-2" type="radio" name="as" id="admin" />
                        <label htmlFor="admin"> Admin</label>
                    </div>
    
                    <div>
                        <label htmlFor="password"> Password</label><br />
                        <input className="ps-2 w-100 " type="password" name="password" placeholder="Password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>

                    <div  className="my-2">
                        <label htmlFor="confirm password">Confirm Password</label><br />
                        <input className="ps-2 w-100 " type="password" name="confirm password" placeholder="confirm Password" id="confirm Password" value={cPassword} onChange={(e) => { setCPassword(e.target.value) }} />
                    </div>
    
                    <div className="my-2">
                        <input className="me-2" type="checkbox" name="checkbox" id="checkbox" />
                        <label htmlFor="already"> I hereby agree all terms of services </label>
                    </div>
                    <button className="bg-primary text-white me-4 my-3 rounded border-0" type="submit">Sign up</button>
                    <Link className="my-3 text-decoration-none" to="login">Already have an account ?</Link>
    
                </form>
                </div>
                </div>
            </div>
    
  
  
  )
}

export default Singup
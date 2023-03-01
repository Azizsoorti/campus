
import { Link} from "react-router-dom";
import React, { useState } from 'react'

function Login() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [check, setCheck] = useState();
    const [allUsers, setAllUsers] = useState([])

    const submitForm = (e) => {
        e.preventDefault();

        const newUser = { email:email, password:password };
        setAllUsers([...allUsers, newUser])
        console.log(allUsers)
    
        setEmail("")
        setPassword("")
    
    }




    return (
        <div className="container-fluid " style={{background:"#945894", minHeight:"100vh"}}>
<div className="row">
    <div className="m-auto col-md-3 bg-white rounded my-5 px-4"  style={{minHeight:"28rem"}}>
          <div className="text-center mt-5 py-2" >
                    <img src="./images/campus.png" alt="" style={{width:"7rem"}}/>
                </div>
            <form action="" onSubmit={submitForm}>
              

                <div className="my-3 rounded">
                    <label htmlFor="email"> Email</label><br />
                    <input className="ps-2 w-100 " type="text" name="email" placeholder="Enter email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>

                <div>
                    <label htmlFor="password"> Password</label><br />
                    <input className="ps-2 w-100 " type="password" name="password" placeholder="Password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>

                <div className="my-2">
                    <input className="me-2" type="checkbox" name="checkbox" id="checkbox" />
                    <label htmlFor="remember"> Remember me</label>
                </div>
                <button className="bg-primary text-white me-4 my-3 rounded border-0" type="submit">Login</button>
                <Link className="my-3 text-decoration-none" to="signup">Don't have an account ?</Link>

            </form>
            </div>
            </div>
        </div>



      

    )
}

export default Login
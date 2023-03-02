
import { Link} from "react-router-dom";
import React from 'react'
import { useFormik } from "formik";
import { validationSchema  } from "../../schemas";

const initialValues = {
    email:"",
    password:"",

}

function Login() {

const {values,errors,touched, handleBlur,handleChange,handleSubmit} =  useFormik({
    initialValues:initialValues,
    validationSchema:validationSchema ,
    onSubmit:(values) => {
      
    }
})
    console.log("🚀 ~ file: Login.jsx:20 ~ Login ~ values:", values)
  
  

   





    return (
        <div className="container-fluid " style={{background:"#945894", minHeight:"100vh"}}>
<div className="row">
    <div className="m-auto col-md-3 bg-white rounded my-5 px-4"  style={{minHeight:"28rem"}}>
          <div className="text-center mt-5 py-2" >
                    <img src="./images/campus.png" alt="" style={{width:"7rem"}}/>
                </div>
            <form action="" onSubmit={handleSubmit}>
              

                <div className="my-3 rounded">
                    <label htmlFor="email"> Email</label><br />
                    <input className="ps-2 w-100 " type="text" name="email" placeholder="Enter email" id="email" value={values.email} onChange={handleChange}  onBlur={handleBlur}/>
                {errors.email && touched.email ? <p className="text-danger">{errors.email}</p> :null}
                </div>

                <div>
                    <label htmlFor="password"> Password</label><br />
                    <input className="ps-2 w-100 " type="password" name="password" placeholder="Password" id="password" value={values.password} onChange={handleChange}  onBlur={handleBlur} />
                    {errors.password && touched.password ? <p className="text-danger">{errors.password}</p> :null}
                </div>

                <div className="my-2">
                    <input className="me-2" type="checkbox" name="checkbox" id="checkbox" />
                    <label htmlFor="remember"> Remember me</label>
                </div>
                <button className="bg-primary text-white me-4 my-3 rounded border-0" type="submit">Login</button>
                <Link className="my-3 text-decoration-none" to="/signup">Don't have an account ?</Link>

            </form>
            </div>
            </div>
        </div>



      

    )
}

export default Login
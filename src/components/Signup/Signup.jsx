import React from 'react'
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { validationSchema } from "../../schemas";
const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirm_password: ""
}


function Singup() {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {

        }
    })
    console.log("🚀 ~ file: Login.jsx:20 ~ Login ~ values:", values)

    return (

        <div className="container-fluid " style={{ background: "#945894", minHeight: "100vh" }}>
            <div className="row">
                <div className="m-auto col-md-3 bg-white rounded my-5 px-4" style={{ minHeight: "33rem" }}>
                    <div className="text-center mt-5 py-2" >
                        <img src="./images/campus.png" alt="" style={{ width: "7rem" }} />
                    </div>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="my-3 rounded">
                            <label htmlFor="fullName"> Full Name</label><br />
                            <input className="ps-2 w-100 " type="text" name="fullName" placeholder="Enter Your Name" id="fullName" value={values.fullName} onChange={handleChange} onBlur={handleBlur} />
                            {errors.fullName && touched.fullName ? <p className="text-danger">{errors.fullName}</p> : null}
                        </div>


                        <div className="my-3 rounded">
                            <label htmlFor="email"> Email address</label><br />
                            <input className="ps-2 w-100 " type="text" name="email" placeholder="Enter Email Address" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                            {errors.email && touched.email ? <p className="text-danger">{errors.email}</p> : null}
                        </div>

                        <div className="my-2">
                            <label className="me-2" htmlFor="signup as"> Signup as</label>
                            <input className="me-2" type="radio" name="as" id="user" />
                            <label className="me-2" htmlFor="user"> User</label>
                            <input className="me-2" type="radio" name="as" id="admin" />
                            <label htmlFor="admin"> Admin</label>
                        </div>

                        <div>
                            <label htmlFor="password"> Password</label><br />
                            <input className="ps-2 w-100 " type="password" name="password" placeholder="Password" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                            {errors.password && touched.password ? <p className="text-danger">{errors.password}</p> : null}
                        </div>

                        <div className="my-2">
                            <label htmlFor="confirm_password">Confirm Password</label><br />
                            <input className="ps-2 w-100 " type="password" name="confirm_password" placeholder="confirm Password" id="confirm_Password" value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} />
                            {errors.confirm_password && touched.confirm_password ? <p className="text-danger">{errors.confirm_password}</p> : null}
                        </div>

                        <div className="my-2">
                            <input className="me-2" type="checkbox" name="checkbox" id="checkbox" />
                            <label htmlFor="already"> I hereby agree all terms of services </label>
                        </div>
                        <button className="bg-primary text-white me-4 my-3 rounded border-0" type="submit">Sign up</button>
                        <Link className="my-3 text-decoration-none" to="/">Already have an account ?</Link>

                    </form>
                </div>
            </div>
        </div>



    )
}

export default Singup
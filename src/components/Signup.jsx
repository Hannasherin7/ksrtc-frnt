import axios from 'axios'
import React, { useState } from 'react'
import { NavBar } from './NavBar'
import { Nav } from './Nav'

const Signup = () => {
    const [data,setdata]=useState({
        
            "name":"",
           "email":"",
           "phone":"",
           "gender":"",
           "password":"",
           "cpassword":""
       
    })
    const inputhandler = (event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        
        axios.post("http://localhost:8089/signup",data).then(
            (response)=>{
                if(response.data.status == "SIGNUP"){
                    alert("ADDED")
                }
                else{
                    alert("FAILED")
                }
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
  return (
    <div>
        <h1><center>signup</center></h1>
        <Nav></Nav>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>NAME</b></label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>EMAIL</b></label>
                            <input type="text" className="form-control" name='email' value={data.email} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>phone</b></label>
                            <input type="text" className="form-control" name='phone' value={data.phone} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>gender</b></label>
                            <input type="text" className="form-control" name='gender' value={data.gender} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>password</b></label>
                            <input type="password" className="form-control" name='password' value={data.password} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>CONFIRM PASSWORD</b></label>
                            <input type="password" name="cpassword" value={data.cpassword} onChange={inputhandler} id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-primary" onClick={readValue}>REGISTER</button>
                            <center><a href="http://localhost:3000"> <b>already have an account</b></a></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup
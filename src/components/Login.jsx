import React, { useState } from 'react'

import axios from 'axios'

import { Addbus } from './Addbus'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [data,setdata]=useState({
        "email":"",
        "password":""
    })
    const inputhandler = (event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        axios.post("http://localhost:8089/login",data).then(
            (response)=>{
                if(response.data.status == "success"){
                    
                    alert("LOGGED IN")
                    navigate('ad')
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
    
 let navigate=useNavigate()
  return (
    <div>
        <h1><center>KSRTC</center></h1>
        <h4><center>LOGIN HERE</center></h4>
        
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label"><b>email</b></label>
                            <input type="text" className="form-control"  name='email' value={data.email} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label"><b>password</b></label>
                            <input type="password" className="form-control" name='password' value={data.password} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue} >Login </button>
                            
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <center><a href="http://localhost:3000/sig" onClick={readValue}> <b>new user click here</b></a></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
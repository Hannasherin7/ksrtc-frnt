import React, { useState } from 'react'

import axios from 'axios'

import { Addbus } from './Addbus'
import { Link, useNavigate } from 'react-router-dom'

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
                    sessionStorage.setItem("token", response.data.token)
                    sessionStorage.setItem("userid", response.data.userid)
                    
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
        
        


<div id="carouselExample" class="carousel slide " data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="https://i0.wp.com/www.zingbus.com/blog/wp-content/uploads/2023/04/zingbus.jpg" style={{ objectFit: 'cover' }} height="635px" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
            <img src="https://images.livemint.com/img/2023/02/22/1600x900/bengaluru_1677042673712_1677042680029_1677042680029.jpg" style={{ objectFit: 'cover' }} height="635px" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFaSoxyfHqz0XS52HwbCR_FwcjiwVbyaFwDAgPs31X7tIvYYn1TVQcDvVw-H2gWLH_RA1_f__4SNfxMJy7mCJG39FuKCr1mfhlWozoI4wahsw2aektNWP5UrWDzsPvsivFVv7Lxa5_QCc/s1600/20191208_213407.jpg" style={{ objectFit: 'cover' }} height="635px" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIXVTnwDgecPzUlvwtWTW0aEUyNpcyNzCTW2kEd37AmIrn6FndIldPjiXP5o-_h5Q4OHd4KSvWBIS57x2AK4zC4sIURiWmvv5erUmgDUKgf9bjWnWoJwyOAd80vaiB-SeFFmDlCLP6D0FoCascLt0zy3eyj9cU9DpjvmTToLz6na_G4ObZ5nw4HXZN/s3075/1694096329999.jpg" style={{ objectFit: 'cover' }} height="635px" class="d-block w-100" alt="..." />
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
        
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
                        
                        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                            <Link to='/sig'> <button className="btn btn-primary">Sign Up</button> </Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
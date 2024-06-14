import axios from 'axios'
import React, { useState } from 'react'
import { NavBar } from './NavBar'

export const Addbus = () => {
    const [data,setData]=useState(
        {
            "bname":"",
            "route":"",
            "busno":"",
            "dname":""
        }
      )
      const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
      }
      const readVlue=()=>{
        console.log(data)
        axios.post("http://localhost:8083/addbus",data).then(
          (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
              alert("successfully added")
              
            } else {
              alert("error")
              
            }
          }
        ).catch(
          (error)=>{
            console.log(error.message)
            alert(error.map)
          }
        ).finally()
      }
  return (
    <div>
        <h1><center>ADD BUS</center></h1>
        <NavBar></NavBar>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">bus name</label>
                        <input type="text" className="form-control"name='bname' value={data.bname} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">route</label>
                    <input type="text" className="form-control"name='route' value={data.route}onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">bus no</label>
                    <input type="text" className="form-control" name='busno' value={data.busno}onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">driver name</label>
                    <input type="text" className="form-control" name='dname'value={data.dname}onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <br /><br />  <button onClick={readVlue} className="btn btn-success">ADD</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

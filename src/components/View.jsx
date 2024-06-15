import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { NavBar } from './NavBar'

export const View = () => {
    const [data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8089/viewsign").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch(
          (error)=>{
            console.log(error.message)
            alert(error.map)
          }
        ).finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
    <h1><center>View All sign Details</center></h1>
       <NavBar></NavBar>
        <div class="container">
       <div class="row g-3">
           <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               <table class="table" border="2" >
                   <thead>
                     <tr>
                       <th scope="col">name</th>
                       <th scope="col">blood group</th>
                       <th scope="col">mobile no</th>
                       <th scope="col">gender</th>
                       <th scope="col">email</th>
                       <th scope="col">password</th>
            
                     </tr>
                   </thead>
                   <tbody>
                   {data.map(
                       (value,index)=>
                           {
                               return <tr>
                                 <td>{value.name}</td>
                                 <td>{value.blood}</td>
                                 <td>{value.phone}</td>
                                 <td>{value.gender}</td>
                                 <td>{value.email}</td>
                                 <td>{value.password}</td>
                               </tr>
                              
                           }
                   )}
                    </tbody>
                 </table>
           </div>
       </div>
   </div>
    </div>
  )
}

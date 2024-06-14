import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavBar } from './NavBar'

export const Viewbus = () => {
    const [data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8083/viewbus").then(
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
         <h1><center>View All BUS Details</center></h1>
  <NavBar></NavBar>
        <div class="container">
       <div class="row g-3">
           <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               <table class="table" border="2" >
                   <thead>
                     <tr>
                       <th scope="col">bus name</th>
                       <th scope="col">bus no</th>
                       <th scope="col">route</th>
                       <th scope="col">driver name</th>
                       
                     </tr>
                   </thead>
                   <tbody>
                   {data.map(
                       (value,index)=>
                           {
                               return <tr>
                                 <td>{value.bname}</td>
                                 <td>{value.busno}</td>
                                 <td>{value.route}</td>
                                 <td>{value.dname}</td>
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

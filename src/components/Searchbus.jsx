import axios from 'axios'
import React, { useState } from 'react'
import { NavBar } from './NavBar'

export const Searchbus = () => {
    const [data,setData]=useState(
        {
          "busno":""
        }
      )


     const [result,setResult]=useState([])

      const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
      }
      const readVlue=()=>{
        console.log(data)
        axios.post("http://localhost:8083/searchbus",data).then(
          (response)=>{
            setResult(response.data)
            
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
        <h1><center>SEARCH BUS</center></h1>
        <NavBar></NavBar>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">bus no</label>
                        <input type="text" className="form-control"name='busno' value={data.busno} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <br /><br />  <button onClick={readVlue} className="btn btn-primary">SEARCH</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
<br /><br />
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
                   {result.map(
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

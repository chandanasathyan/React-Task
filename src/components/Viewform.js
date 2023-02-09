import { Grid } from '@mui/material'
import React, { useState } from 'react'
import "./Viewform.css"



const Viewform = ({datas, setDatas, input, setInput}) => {

  console.log(datas,"datas")

  const[editState,setEditState]=useState();

  const [edit,setEdit] = useState(false)

  const handleEdit=(id)=>{
    setEdit(true)
     setEditState(id)

  }
 
  return (
    <>
    <Grid container className='table-grid' sx={{ display: { xs: 'none', sm:"flex", md:"flex" } }}>

      <form>

        {datas.length === 0 ? <h3  style={{marginTop:"100px"}}>Table has no data or value</h3>: 
        <table className='table'>

        <tr >
          <th className='table-head'>Name</th>
          <th className='table-head'>Email</th>
          <th className='table-head'>Mobile</th>
        </tr>

       {datas.map((item,key)=>(
         editState === item.id  ? <Edit item={item} datas={datas} setInput={setInput} input={input} setDatas={setDatas} setEdit={setEdit} setEditState={setEditState} edit={edit}  /> :

         <tr >
          <td className='table-data'>{item.name}</td>
          <td className='table-data'>{item.email}</td>
          <td className='table-data'>{item.mobile}</td>
          <td className='table-data'>
           <button className='edit-btn' type='button' onClick={()=>handleEdit(item.id)}>Edit</button>
          </td>
         </tr>
        ))}
        
      </table>
        }
     
      </form>
    </Grid>


      {/* --------------MOBILE VIEW--------------- */}

      <Grid container className='table-grid' sx={{ overflow:"scroll", display: { xs: 'flex', sm:"none", md:"none" } }}>
      {datas.length === 0 ? <h3  style={{marginTop:"100px"}}>Table has no data or value</h3>: 
       <table className='table-mob' >

         <tr >
           <th className='table-head'>Name</th>
           <th className='table-head'>Email</th>
           <th className='table-head'>Mobile</th>
         </tr>

         {datas.map((item,key)=>(
          editState === item.id  ? <Edit item={item} datas={datas} setInput={setInput} input={input} setDatas={setDatas} setEdit={setEdit} setEditState={setEditState} edit={edit} /> :

          <tr >
           <td className='table-data'>{item.name}</td>
           <td className='table-data'>{item.email}</td>
           <td className='table-data'>{item.mobile}</td>
           <td className='table-data'>
            <button className='edit-btn' type='button' onClick={()=>handleEdit(item.id)}>Edit</button>
           </td>
          </tr>
         ))}
         
       </table>
       }
      </Grid>
    </>
  )
}


const Edit=({item,edit,datas,setDatas,setInput,setEdit,setEditState})=>{
  const handleInput=(e)=>{
    const newData = datas.map((data)=>(
      data.id === item.id ? {...data,[e.target.name]: e.target.value}: data
    ))
  setDatas(newData)
  }
  // let {name,email,mobile} = datas


  const handleEditSubmit =(e)=>{
    e.preventDefault()
    setEdit(false)
    setEditState(null)
  }

  return(
    <>
      <tr >
           <th> <input type='text' name='name'  value={item.name} onChange={handleInput}/></th>
           <th> <input type='text' name='email' value={item.email} onChange={handleInput}/></th>
           <th> <input type='text' name='mobile' value={item.mobile} onChange={handleInput}/></th>  
           <button type='submit' onClick={handleEditSubmit}>update</button>
      </tr>
    </>
    )
}


export default Viewform
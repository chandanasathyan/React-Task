import React, { useState } from 'react'
import { Grid } from '@mui/material';
import Viewform from './Viewform';
import "./Formsubmit.css";


const Formsubmit = () => {

    const [input,setInput]=useState({
        name:"",
        email:"",
        mobile:""
    });

    const [datas,setDatas]=useState([])

    let {name,email,mobile}=input

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("submitted");
         
        if(input){
            setDatas([...datas,{name,email,mobile,id:Date.now()}])
        }
        setInput({name:"",email:"",mobile:""});
    }

    // console.log(datas,"nnnnnnnnn")

    const handleChange=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }

  return (
    <>

    {/* --------------LAP & TAB VIEW-------------- */}

    <Grid container sx={{ display: { xs: 'none', sm:"flex", md:"flex" } }}> 
        <Grid item md={12} xs={12} sm={12} className='form-grid'>
           <form className='form' onSubmit={handleSubmit}>
              <h1 className='heading'>REACT TASK</h1>
              <div className='input-div'>
                 <input className='input-name' type="text" required placeholder='Name' name='name' value={input.name} onChange={handleChange}/>
                 <input className='input-email' type="email" required placeholder='Email' name='email' value={input.email} onChange={handleChange}/>
                 <input className='input-mobile' type="number"required placeholder='Mobile' name='mobile' value={input.mobile} onChange={handleChange}/>
                 <button className='save-btn' type='submit'>SAVE</button>
              </div>
           </form>
        </Grid>
    </Grid>
    

   
    {/* --------------MOBILE VIEW-------------- */}

    <Grid container sx={{ display: { xs: 'flex', sm:"none", md:"none" } }}> 
        <Grid item md={12} xs={12} sm={12} className='form-grid-mob'>
           <form className='form-mob' onSubmit={handleSubmit}>
              <h1 className='heading-mob'>REACT TASK</h1>
              <div className='input-div-mob'>
                 <input className='input-name-mob' type="text" required placeholder='Name' name='name' value={input.name} onChange={handleChange}/>
                 <input className='input-email-mob' type="text" required placeholder='Email' name='email' value={input.email} onChange={handleChange}/>
                 <input className='input-mobile-mob' type="number" required placeholder='Mobile' name='mobile' value={input.mobile} onChange={handleChange}/>
                 <button className='save-btn-mob' type='submit'>SAVE</button>
              </div>
           </form>
        </Grid>
    </Grid>


    <Viewform datas={datas} setDatas={setDatas} input={input} setInput={setInput} /> 
    </>
  )
}

export default Formsubmit
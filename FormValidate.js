import React from 'react'
import { useState, useEffect } from 'react'

const FormValidate = () => {
    let initialVal={name:'', email:'', password:'', confirmpassword:''}
const [formVal, setFormVal]= useState({initialVal})
const [formError, setFormError] = useState({})
const [hasSubmit, setHasSubmit] = useState(false)

const handleChangeInput = (e) => {
    const  {name, value}= e.target
  setFormVal({...formVal, [name]: value})

}

const onSubmitInput = (e) => {
    e.preventDefault()
    setFormError(validate(formVal))
    setHasSubmit(true)
}

useEffect(()=> {
    console.log(formError)
if(Object.keys(formError).length === 0 && hasSubmit){
    console.log(formVal)
}
}, [formError])

const validate = (users) => {
    let error = {}
    let emailregex=/^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0.9-]+\.(?:[a-zA-Z0-9-]+)*$/
if(!users.name){
    error.name ='name is required'
}
if(!users.email){
    
    error.email ='email is required'
}else if(!emailregex.test(users.email)){
    error.email= 'invalid email'
}

if(!users.password){
    error.password ='password is required'
}else if(users.password.length < 4){
    error.password = 'password should exceed 4 characters'
}else if(users.password.length > 10){
    error.password = 'password should not exceed 10 characters'
}

if(!users.confirmpassword){
    error.confirmpassword ='password is required'
}else if(users.confirmpassword !== users.password){
    error.confirmpassword = 'password did not match'
}
return error
}

    return (
        <div style={{'background' : 'blue'}}>
           {Object.keys(formError).length === 0 && hasSubmit ? (<div style={{'marginLeft': '50%', 'width': '100%', 'fontSize': '2rem', 'color':'white'}}>Sign up Successfull!!!</div> ): (<div style={{'marginLeft': '50%', 'width': '100%', 'fontSize': '2rem', 'color':'red'}}>Provide the Required Information!</div> ) } 
            <div style={{'background': 'grey', 'width':'100%', 'height':'100%', 'margin': '20%', 'padding': '7%'}}>
               <h2>Sign Up Form</h2>
                <form onSubmit={onSubmitInput}>
                <div className='textbox'>
                    <label style={{'width': '100%', 'fontSize': '1.5rem'}}>Name</label>
                    <input
                    style={{'width': '100%', 'fontSize': '1.5rem'}}
                    name='name'
                    placeholder='Enter name'
                    type='text'
                    value={formVal.name}
                    onChange={handleChangeInput}
                    />
                    <p>{formError.name} </p>
                </div>

                <div className='textbox'>
                    <label style={{'width': '100%', 'fontSize': '1.5rem'}}>Email</label>
                    <input
                    style={{'width': '100%', 'fontSize': '1.5rem'}}
                    name='email'
                    placeholder='Enter email'
                    type='text'
                    value={formVal.email}
                    onChange={handleChangeInput}
                    />
                     <p>{formError.email} </p>
                </div>

                <div className='textbox'>
                    <label style={{'width': '100%', 'fontSize': '1.5rem'}}>password</label>
                    <input
                    style={{'width': '100%', 'fontSize': '1.5rem'}}
                    name='password'
                    placeholder='Enter password'
                    type='text'
                    value={formVal.password}
                    onChange={handleChangeInput}
                    />
                     <p style={{'color': 'red'}}>{formError.password} </p>
                </div>

                <div className='textbox'>
                    <label style={{'width': '100%', 'fontSize': '1.5rem'}}>Confirm Password</label>
                    <input
                    style={{'width': '100%', 'fontSize': '1.5rem'}}
                    name='confirmpassword'
                    placeholder='Confirm password'
                    type='text'
                    value={formVal.confirmpassword}
                    onChange={handleChangeInput}
                    />
                     <p>{formError.confirmpassword} </p>
                </div>
                <button type='submit'>Submit</button>

                </form>
               
            </div>
            
        </div>
    )
}

export default FormValidate

import React from 'react'
import './validateForm.css'
import { useState, useEffect } from 'react'


const ValidateForm = () => {
    let inputVal = {firstname: '', lastname:'', email: '', password: '', confirmpassword: ''}
    const [formVal, setFormVals] = useState(inputVal)
    const [formError, SetFormError]= useState({})
    const [hasSubmit, setHasSubmit] = useState(false)

    const handleChange = (e) => {
     const  {name, value} = e.target
      setFormVals({...formVal, [name]:value})
      console.log(formVal)
    }

const handleSubmit = (e) =>{
    e.preventDefault()
SetFormError(validate(formVal))
setHasSubmit(true)
}

useEffect(()=>{
    if(Object.keys(formError).length === 0 && hasSubmit){
        console.log('sign up successfull!')
    }
     
}, [formError])

const validate= (users) => {
let error= {}
let alpha = /\d/
let emailregex = /^[a-zA-Z0-9.+-~%^&*]+@[a-zA-Z0-9.-_]+\.[a-zA-Z0-9.-_]+$/
let passwordCapregex= /[A-Z]/
let passwordLowerregex = /[a-z]/
let passwordSpecialcharacter = /\W/
let { firstname, lastname, email, password, confirmpassword } = users
if(!users.firstname){
    error.firstname= 'first name is required!'
}else if(users.firstname){
    if(alpha.test(firstname)){
        error.firstname = 'first name must not contain a number!'
    }
   
}

if(!users.lastname){
    error.lastname='last name is required'
}else{
    if(alpha.test(lastname)){
        error.lastname = 'last name must not contain a number'
    }
}

if(!users.email){
    error.email= 'email is required'
}else{
   if(!emailregex.test(email)){
       error.email= 'invalid email!'
   }
}

if(!users.password){
    error.password = 'password is required!'
}else{
if(password.length < 3 || password.length > 10){
    error.password = 'password must be between 3 - 10 charcter'
}
if(!passwordCapregex.test(password)){
    error.password = 'password must also contain an Uppercase letter'
}
if(!passwordLowerregex.test(password)){
    error.password =  'password must also contain an lowercase letter'
}
if(!passwordSpecialcharacter.test(password)){
    error.password =  'password must also contain a special character'
}
}

if(!users.confirmpassword){
    error.confirmpassword = 'password is required'
}else{
if(users.confirmpassword !== users.password){
    error.confirmpassword = 'password not match'
}
}

return error
}

    return (
        
        <div className='box'>
           
            <p>{Object.keys(formError).length === 0 && hasSubmit ? 'Sign In SuccessFul': 'field below is required'} </p>
            <div>
                <h1>User Sign In Form</h1>
                <div className='form'>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='firstName'>First Name</label>
                        <input 
                        name='firstname'
                        placeholder='First name'
                        type='text'
                        onChange={handleChange}
                        value={formVal.firstname}
                        />
                        <p>{formError.firstname} </p>

<label htmlFor='lastName'>Last Name</label>
                        <input 
                        name='lastname'
                        placeholder='Last name'
                        type='text'
                        onChange={handleChange}
                        value={formVal.lastname}
                        />
                        <p>{formError.lastname} </p>

<label htmlFor='email'>Email</label>
                        <input 
                        name='email'
                        placeholder='Email'
                        type='text'
                        onChange={handleChange}
                        value={formVal.email}
                       />
                       <p>{formError.email} </p>

<label htmlFor='password'>Password</label>
                        <input 
                        name='password'
                        placeholder='Password'
                        type='text'
                        onChange={handleChange}
                        value={formVal.password}
                        
                        />
                        <p>{formError.password}</p>

<label htmlFor='confirmPassword'>Confirm PassWord</label>
                        <input 
                        name='confirmpassword'
                        placeholder='Confirm password'
                        type='text'
                        onChange={handleChange}
                        value={formVal.confirmpassword}
                        
                        />
                        <p>{formError.confirmpassword} </p>
                        <button >Submit</button>

                    </form>
                    

                </div>
            </div>
            
        </div>
    )
}

export default ValidateForm

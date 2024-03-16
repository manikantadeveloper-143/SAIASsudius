import React, { useEffect, useState, useMemo } from 'react'
import Input from './Input'
import { validation } from './validation'
import './SignUpForm.css'
import Select from 'react-select'
import countryList from 'react-select-country-list'

const initialValues = {
  name:"",
  email:"",
  mobileNumber:"",
  password:"",
  confirmPassword:""
  }
const SignUpForm = () => {

  const [data,setData] = useState(initialValues)
  const [isSubmit,setIsSubmit] = useState(false)
  const [error,setError] = useState({})
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }


 const handleData = (event) => {
     let {name,value} = event.target
     setData({...data,
                    [name] : value})
 }

 const handleSubmit = (event) => {
    event.preventDefault();
    const err = validation(data)
    setError(preError => err)
    setIsSubmit(true)
 }

 useEffect( () => {
      if(Object.keys(error).length === 0 && isSubmit)
      {
        setData(initialValues)
      }
 },[error])

 

  return (
    <div className='container'>
      <div>
         <h2>SignUp Form</h2>
      </div>
      <div>
      <form onSubmit={handleSubmit}>
         <Input type = {"text"} placeholder = {"Enter your Name"} name = {"name"} value = {data.name} onChange = {handleData}/>
         <h6>{error.name}</h6>

         <Input type = {"text"} placeholder = {"Enter your Email"} name = {"email"} value = {data.email}
         onChange = {handleData}/>
         <h6>{error.email}</h6>

         <Input type = {"text"} placeholder = {"Enter your Mobile Number"} name = {"mobileNumber"} value = {data.mobileNumber} onChange = {handleData}/>
         <h6>{error.mobileNumber}</h6>
         
         <h5 style={{marginLeft:10}}>Select Country:</h5>
         <Select options={options} value={value} onChange={changeHandler}/>

         <h5 style={{marginLeft:10}}>Market Places:</h5>
         <input type='checkbox' value="Amazon" className='check'/><span>Amazon</span>
         <input type='checkbox' value="FlipKart" className='check'/><span>FlipKart</span>
         <input type='checkbox' value="eKart" className='check'/><span>eCart</span>


         <Input type = {"password"} placeholder = {"Enter password"} name = {"password"} value = {data.password} onChange = {handleData}/>
         <h6>{error.password}</h6>

         <Input type = {"password"} placeholder = {"Confirm Password"} name = {"confirmPassword"} value = {data.confirmPassword} onChange = {handleData}/>
         <h6>{error.confirmPassword}</h6>

         <input type='checkbox' className='check'/><span>I agree to Terms and Conditions</span>

         <Input type = "submit" />
      </form>
      </div>
    </div>
  )
}

export default SignUpForm
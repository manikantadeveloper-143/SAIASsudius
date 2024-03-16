export const validation = (data) => {
  const err = {};

  //-----------------------------------------------------------------------//
  
  if(!data.name)
  {
    err.name = "**Name field should not be empty"
  }
  else if(!data.name.match(/^[A-Z]/))
  {
    err.name = "**Name first letter should be in Upper Case"
  }
  else if(data.name.length<3){
    err.name = "**Name should be more than 2 characters"
  }
  else
  {
    for(let i=1;i<data.name.length;i++)
    {
      if(!((data.name[i] >='A' && data.name[i] <='Z') || (data.name[i]>='a' && data.name[i] <='z') || data.name[i] === " "))
      {
        err.name = "**Name should contain only alphabets"
      }
    }
  }
  
  //-------------------------------------------------------------------------//


  if(!data.email)
  {
    err.email = "**Email field should not be empty"
  }
  else if(!data.email.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/))
  {
    err.email = "**Enter a Valid Email"
  }

//-------------------------------------------------------------------------//


  if(!data.mobileNumber)
  {
    err.mobileNumber = "**Mobile Number field should not be empty"
  }
  else if(!data.mobileNumber.match(/^[6-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/)){
    err.mobileNumber = "**Mobile Number should start with numbers(6-9) and it should have 10 digits"

  }

//-------------------------------------------------------------------------//


  if(!data.password)
  {
    err.password = "**Password field should not be empty"
  }
  else{
    if(data.password.length<8)
    {
      err.password = "**Password should be more than 7 characters"
    }
  }

//-------------------------------------------------------------------------//

  if(!data.confirmPassword)
  {
    err.confirmPassword = "**Confirm Password field should not be empty"
  }
  else{
    if(!(data.confirmPassword === data.password))
  {
    err.confirmPassword = "**Confirm Password should be same as password field"
  }
  }
  return err;
}
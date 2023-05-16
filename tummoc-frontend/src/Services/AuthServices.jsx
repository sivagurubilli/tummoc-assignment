import axios from "axios"


export async function RegisterService(data){
  const {userName,Email,Password} = data

try{
 const response = await axios.post("/register",{
        userName,Email,Password
        })
  
    return response.data
}catch(error){
return error
}
}

export async function LoginService(data){
    const {Email,Password} = data
  try{
   
      const response = await axios.post("/login",{
        Email,Password
          } )
      return response.data
  }catch(error){
  
  return error
  }
  }
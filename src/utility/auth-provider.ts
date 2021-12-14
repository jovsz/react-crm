import { AuthProvider, useApiUrl } from "@pankod/refine"
import axios from 'axios';




export const authProvider: AuthProvider = {
    
    login:async (params: any) => {
        await axios.post(`http://localhost:8000/api/v1/auth/login`,{
          "username": params.username,
          "password": params.password,
        }).then(async res => {
          console.log(res.data)
          if(res.status === 201 && res.data.data.rol === 'admin'){
            localStorage.setItem('jwt', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.data))
            return Promise.resolve();
          }else{
            return Promise.reject();
          }

        })
        
    },
    logout: () => {
      localStorage.removeItem("jwt");
      return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: async() => {
      await  axios.get(`http://localhost:8000/api/v1/auth/profile`,{
      headers: { Authorization: `Bearer ${await localStorage.jwt}` }
      }).then(res => { 
        
        if(res.status >= 200 || res.status <=299){
          Promise.resolve()
          console.log('entro')
        }else{
          localStorage.removeItem("jwt");
          Promise.reject()
        }
      }).catch(() => Promise.reject())
    },
    getPermissions: () => Promise.resolve(["admin"]),
    getUserIdentity:async  () => Promise.resolve(),
     
    
  }
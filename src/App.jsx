import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login,logout } from './store/authSlice'
import { Header,Footer} from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading,setloading]=useState(true)
  const dispatch=useDispatch();
  useEffect(()=>{
    authService.getCurrentUser().then((userData)=>{
      if(userData){
        dispatch(login({userdata:userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setloading(false))
  },[])
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full flex min-h-screen flex-col justify-between'>
        <Header></Header>
        <main className='mb-auto'>
        <Outlet />
        </main>
        <Footer></Footer>
      </div>
    </div>
  ):(null)
}

export default App

//env file ko access krne ka tarika hamesha different hota hai 
  //  *2 baar aaayega due to react strct mode
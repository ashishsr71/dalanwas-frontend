import React, { useState } from 'react'

function Auth({children}) {
    const [key,setKey]=useState("");
    const libraryKey=import.meta.env.VITE_LIBRARY_KEY

  return (
     <>
     {key!=libraryKey&&<input type="password" placeholder='key' value={key} onChange={(e)=>{
        setKey(e.target.value)
     }} />}
     {key==libraryKey&& children}
     </>
    
  )
}

export default Auth
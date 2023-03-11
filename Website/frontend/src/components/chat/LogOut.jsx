import React from 'react'
import {auth} from '../firebase'
import "C:/complete web development/Chinkiminki-others_Clash-of-Codes/frontend/src/App.css"

const style = {
    button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`
}


const LogOut = () => {
const signOut = () => {
    signOut(auth)
}

  return (
    <button onClick={() => auth.signOut()} className={style.button}>
        Logout
    </button>
  )
}

export default LogOut
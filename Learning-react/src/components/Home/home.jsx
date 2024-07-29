import React from 'react'
import { useNavigate, Link } from 'react-router-dom';


export default function home() {
  return (
    <div>
        <Link to='..'>
        <span id='home' className='button' >Home</span>
        </Link>
    </div>
  )
}

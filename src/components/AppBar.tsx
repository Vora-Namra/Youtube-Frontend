import React from 'react'
import { SearchBar } from './SearchBar'

function AppBar() {
  return (
    <div className='flex justify-between mt-4 mb-2'>
        <div className='text-md inline-flex items-center '>Youtube</div>
        <div><SearchBar/></div>
        <div className='flex justify-between mt-4 mb-2'>Sign in</div>
    </div>
  )
}

export default AppBar
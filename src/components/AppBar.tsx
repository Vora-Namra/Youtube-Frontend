import React from 'react'
import { SearchBar } from './SearchBar'

function AppBar() {
  return (
    <div className='flex justify-between mt-4 mb-2'>
        <div className='inline-flex items-center pl-6'><img src="/image.png" width='50' alt="" /></div>
        
        <div><SearchBar/></div>
        <div className='flex justify-between mt-4 mb-2 pr-6'>Sign in</div>
    </div>
  )
}

export default AppBar
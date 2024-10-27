import React from 'react'
import { SearchBar } from './SearchBar'

function AppBar() {
  return (
    <div className='flex justify-between mt-4 mb-2'>
        <div>Youtube</div>
        <div><SearchBar/></div>
        <div>Sign in</div>
    </div>
  )
}

export default AppBar
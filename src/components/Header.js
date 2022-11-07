import React from 'react'

function Header() {
  return (
    <div className=' bg-slate-500'>
      <div className='mx-auto py-5 container w-full flex justify-between '>
        <div className=''>
          Logo
        </div>
        <div className=' bg-slate-50 text-black'>
          Search
        </div>
        <div className=''>
          Login
        </div>
      </div>
    </div>
  )
}

export default Header
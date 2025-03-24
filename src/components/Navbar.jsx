import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-center space-x-4 gap-5 py-5 text-3xl border-b-2'>
        <Link href={'/'}>Products</Link>
        <Link href={'/cart'}>Cart</Link>
    </div>
  )
}

export default Navbar


import Link from 'next/link'
import React from 'react'

function home () {
  return (
    <>
    <span className='min-w-full text-zinc-700'>Home</span>
    <Link className=" min-w-full text-blue-800" href="/Ducks">Learn about Ducks!</Link>
    <Link href="/about" className="text-blue-800">About</Link>
    </>
  )
}

export default  home
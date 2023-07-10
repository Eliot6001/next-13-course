import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <div className='flex flex-col space-y-11'> 
      <p>This is about me</p>
      <Link href="/about/Repos" className="text-sm text-indigo-500"> Check me Out! </Link>
      <Link href="/about/Books" className="text-sm text-indigo-500"> Book recommendations </Link>

    </div>
  )
}

export default About
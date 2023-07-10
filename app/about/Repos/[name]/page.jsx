"use client"
import React, { Suspense } from 'react'
import RepoDetailsComponent from '@/app/components/RepoDetailsComponent'
const page = ({params: {name}}) => {

  return (
    <>
    <Suspense fallback={(<div>Loading</div>)}>
    <RepoDetailsComponent name={name}></RepoDetailsComponent>
    </Suspense>
    </>
  )
}
export default page;

/*ANNOYING BUG can't export default const page, but i need to type it here */

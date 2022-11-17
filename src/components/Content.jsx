
import React from 'react'
import Bloglist from './Bloglist'
import useFetch from "./useFetch";

const Content = () => {

  
  const { error, pending, data: blogs } = useFetch('http://localhost:3004/blogs')


  return (
    <div class='w-full flex justify-center items-left flex-col'>
      
      { error && <div class='text-3xl text-white w-full h-[200px] bg-red-600'>{ error }</div> }
      { pending && <h1 class='text-white ml-[200px]'>Loading...</h1>}
      { blogs && <Bloglist blog={blogs} title='All Blogs'/> }
      
    
    </div>
  )
}

export default Content
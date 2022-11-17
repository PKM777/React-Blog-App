import React from 'react'

function Bloglist({blog, title, handleDelete }) {
  return (
    <div class='w-[68%] flex justify-center ml-[20px] items-center text-white flex-col'>
     <h1 class='h-[50px] text-[2rem]'>{title}</h1>
     { blog.map((blog)=>(
      <div class='w-[60%] bg-[#6cc26c] mt-[10px] p-[10px]' key={blog.id}>
            <h1 class='m-0 p-0 text-[2rem]'>Author: {blog.author}</h1>
            <h2 class='m-0 p-0 text-[1.5rem]'>Title: {blog.title}</h2>
            <button onClick={() => handleDelete(blog.id)} class='text-white text-[0.8rem] mt-[10px] border-white border-[2px] border-solid w-[100px] h-[30px]'>Delete blog</button>
        </div>
     ))
        
     }
     
    </div>
  )
}

export default Bloglist
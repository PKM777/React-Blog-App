import React from 'react'

function Navbar() {
  return (
    <div class='flex justify-center items-center'>
        <div class='flex justify-center items-center mt-[20px] p-0 w-[70%] h-[80px] bg-green-500'>
        
            <div class='w-[70%] h-full flex justify-center items-center border-white text-white text-[3rem] border-[1px] border-[solid]'>TheBlogSite</div>
            <div class='w-[15%] h-full flex justify-center items-center border-white text-white border-[1px] border-[solid]'>All Blogs</div>
            <div class='w-[15%] h-full flex justify-center items-center border-white text-white border-[1px] border-[solid]'>Create a blog</div>

        </div>
    </div>
  )
}

export default Navbar
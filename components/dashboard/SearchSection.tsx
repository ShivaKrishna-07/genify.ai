import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({onSearchInput}:any) => {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col items-center justify-center text-white   '>
        <h2 className='text-3xl font-bold'>Browse All Templates</h2>
        <p>What would you like to create Today</p>
        <div className='flex justify-center w-full'>
        <div className='flex gap-2 items-center my-5 p-2 border rounded-md bg-white w-[50%]'>
            <Search className='text-primary'/>
            <input type="text" placeholder='Search' className='bg-transparent outline-none w-full text-black' onChange={(event)=>onSearchInput(event.target.value)} />
        </div>
        </div>
    </div>
  )
}

export default SearchSection
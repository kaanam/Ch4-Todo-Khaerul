import React from 'react'
import Button from './Button'
import { FaSearch } from 'react-icons/fa'

export default function TodoInput({item, handleChange, onClick, searchTask, handleSubmit}) {
    return (
        <>
            <h1 className='text-center text-4xl font-bold mb-4'>TodoSearch</h1>
            <div className='w-full border border-gray-300 p-6'>
                <form onSubmit={handleSubmit}>
                    <div className='flex w-1/2'>
                        <div className='rounded-l-md bg-cyan-600 hover:bg-cyan-500 p-2'>
                            <i><FaSearch className='icon-search'/></i>
                        </div>
                        <input
                            className='border border-gray-300 h-10 pl-2 rounded-r-sm w-full'
                            placeholder='Search Todo'
                            type="text"
                            value={item} 
                            onChange={handleChange}
                            />
                    </div>
                    <div className='flex mt-5 justify-between'>
                        <Button type='submit' width='w-2/4' valueButton='Search' value='search' color='bg-cyan-600 ' colorHover='hover:bg-cyan-500' onClick={() => searchTask()}/>
                        <Button width='w-1/4' valueButton='Add new Task' color='bg-cyan-600' colorHover='hover:bg-cyan-500' onClick={onClick} />
                    </div>
                </form>
            </div>
        </>
    )
}

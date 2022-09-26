import React from 'react'

export default function DeleteButton({value, onClick}) {
    return (
        <div className='w-96'>   
            <button className='bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded w-full' onClick={onClick} >
                {value}
            </button>
        </div>
    )
}

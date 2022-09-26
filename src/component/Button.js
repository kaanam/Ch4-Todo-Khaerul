import React from 'react'

export default function Button({width, color, colorHover, onClick, value, valueButton}) {
    return (
        <div className={`${width}`}>   
        <button className={`${color} ${colorHover} text-white font-bold py-2 px-4 rounded w-full`} onClick={onClick} value={value} >
            {valueButton}
        </button>
    </div>
    )
}

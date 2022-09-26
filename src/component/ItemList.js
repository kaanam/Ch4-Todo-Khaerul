import React from 'react'
import { FaPen } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa'

export default function ItemList({ id, task, complete, handleDelete, handleDoneTask, handleEdit}) {
    return (
        <div className='flex justify-between border border-gray-300 rounded-sm mt-10 p-2' id={id} >
            <div className={complete ? 'line-through': '' } >
                {task}
            </div>
            <div className='flex justify-between w-20'>
                <input type='checkbox' value={complete} defaultChecked={complete}  onClick={() => handleDoneTask(id)} />
                <div onClick={handleEdit}>
                    <i><FaPen className='iconPen'/></i>
                </div>
                <div onClick={handleDelete}>
                    <i><FaTrash className='iconDelete'/></i>
                </div>    
            </div>
        </div>
    )
}

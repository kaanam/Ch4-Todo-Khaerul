import React from 'react'
import ItemList from './ItemList'
import Button from './Button'
import DeleteButton from './DeleteButton'

export default function TodoList({ dataList, keyword, handleDelete, handleEdit, handleDoneTask, updateTodosToShow, handleDeleteDoneTasks, clearList}) {
    if (dataList.length > 0) {
        dataList = dataList.filter(item => {
            if (keyword == " ") {
                return item;
            }
            return item.task.toLowerCase().includes(keyword.toLowerCase())
        })
    }

    return (
        <div className='border-gray-300'>
            <h1 className='text-center text-4xl font-medium mt-6'>TodoList</h1>
            <div className='flex justify-between mt-6'>
                <Button width='w-64' valueButton='All' value='All' color='bg-cyan-600' colorHover='hover:bg-cyan-500 ' onClick={() => updateTodosToShow('all')} />
                <Button width='w-64' valueButton='Done' value='Done'  color='bg-cyan-600' colorHover='hover:bg-cyan-500' onClick={() => updateTodosToShow('done')} />
                <Button width='w-64' valueButton='Todo' value='Todo' color='bg-cyan-600' colorHover='hover:bg-cyan-500' onClick={() => updateTodosToShow('todo')} />
            </div>
            <div>
                { 
                    dataList.map((item) => (
                        <ItemList
                            key={item.id}
                            id={item.id}
                            task={item.task}
                            complete={item.complete}
                            handleDelete={() => handleDelete(item.id)}
                            handleEdit={() => handleEdit(item.id)}
                            handleDoneTask={handleDoneTask}
                        />
                    ))
                } 
            </div>
            <div className='flex justify-between mt-10 '>
                <DeleteButton value="Delete done Task" onClick={handleDeleteDoneTasks}/>
                <DeleteButton value="Delete All Task" onClick={clearList} />
            </div>
        </div>
    )
}

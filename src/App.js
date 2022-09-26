import React, { useState } from 'react'
import Data from './utils/data.json'
import TodoApp from './component/TodoApp'
import AddTodo from './component/AddTodo'
import EditTodo from './component/EditTodo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
    const [dataList, setDataList] = useState(Data)

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<TodoApp dataList={dataList} setDataList={setDataList} />} />
                <Route path='/add' element={<AddTodo dataList={dataList} setDataList={setDataList} />} />
                <Route path='/edit/:id' element={<EditTodo dataList={dataList} setDataList={setDataList} />} />
            </Routes>
        </BrowserRouter>
    )
}

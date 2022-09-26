import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoApp( {dataList, setDataList}) {

  const [itemToShow, setItemToShow] = useState('all')
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleChange = (value) => {
    setSearch(value)
  }

  const handleEdit = (id) => {
    navigate(`/edit/${id}`)
  }

  const handleDoneTask = (id, complete) => {
    const filteredItems = dataList.map(item => {
      item.id === id && (item.complete = !item.complete)
      return item;
    })
    setDataList(filteredItems);
  }

  const handleDeleteDoneTasks = () => {
    const filteredItems = dataList.filter(item => item.complete === false);
    setDataList(filteredItems)
  }

  const updateTodosToShow = (string) => {
    setItemToShow(string);
  }

  const clearList = () => {
    setDataList([])
  }

  const handleDelete = (id) => {
    const filteredItems = dataList.filter(item => item.id !== id);
    setDataList(filteredItems)
  }

  const addNewTask = () => {
    navigate("/add")
  }

  let items = []
  items = dataList
  if(itemToShow === "all") {
    items = dataList;
  } else if (itemToShow === "todo") {
    items = dataList.filter(item => !item.complete)
  } else if (itemToShow === "done") {
    items = dataList.filter(item => item.complete)
  }

  return (
    <div className='container w-3/4 mx-auto mt-8'>
      <div className="border rounded-lg shadow-lg p-10">
        <div className="className='border border-gray-300 p-10'">
          <TodoInput 
            handleChange={(e) => handleChange(e.target.value)}
            onClick={addNewTask}
          />
        </div>
        <TodoList 
            dataList={items}
            keyword={search}
            clearList={clearList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleDoneTask={handleDoneTask}
            handleDeleteDoneTasks={handleDeleteDoneTasks}
            updateTodosToShow={updateTodosToShow}
        />
      </div>
    </div>
  );
}

export default TodoApp;

import './App.css';
import { useState, useEffect } from 'react';
import TodoBody from './components/TodoBody';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import TodoContent from './components/TodoContent';
import AddTodoContent from './components/AddTodoContent';

function App() {

  const [showAddTodo, setShowAddTodo] = useState(false)
  const [todoItems, setTodoItems ] = useState([])

  useEffect(()=>{
    const getTodo = async () =>{
      const TodoFromDjango = await fetchTodo()
      setTodoItems(TodoFromDjango)
    }
    getTodo()
  }, [])

  //  Fetching Todo Data from Django
  const fetchTodo = async () =>{
    const res = await fetch('http://localhost:8000/api/todos/')
    const data = await res.json()

    return data
  }

// DeleteTodo
// const deleteTodo = (id) =>{
//   setTodoItems(todoItems.filter((todoItem)=> todoItem.id !== id))
// }

// DeleteTodo
const deleteTodo = async (id) =>{
  await fetch(`http://localhost:8000/api/todos/${id}/`, {
    method: 'DELETE',
  })

  setTodoItems(todoItems.filter((todoItem)=> todoItem.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) =>{
  setTodoItems(todoItems.map((todoItem) => todoItem.id === id ? {...todoItem, completed : !todoItem.completed} : todoItem))
}

// Add Task
// const addTask = (todoItem) =>{
//   const id = Math.floor(Math.random() * 10000) + 1
//   const newTodo = {id, ...todoItem}
//   setTodoItems([...todoItems, newTodo])
// }

// Add Task
const addTask = async(todoItem) =>{
  const res = await fetch('http://localhost:8000/api/todos/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(todoItem)
  })

  const data = await res.json()

  setTodoItems([...todoItems, data])
}

  return (
    <div className="App">
      <TodoBody/>
      <div className='Apptodo'>
        <Todo/>
        <AddTodo onAdd={() => setShowAddTodo(!showAddTodo)} showAdd={showAddTodo}/>
      </div>
      {showAddTodo && <AddTodoContent onAdd={addTask}/>}
      {todoItems.length > 0 ? <TodoContent 
      todoItems={todoItems} 
      deleteTodo={deleteTodo} 
      onToggle={toggleReminder}/>
      : 'No Todo to Show...'}
    </div>
  );
}

export default App;

 import React from 'react'
 
 const TodoContent = ({todoItems, deleteTodo, onToggle}) => {
   return (
    <ul className='todolist'>
        {todoItems.map((todoItem)=>(
        <div key={todoItem.id} 
        className={`todocontent ${todoItem.completed ? 'completed' : ' '}`} 
        onDoubleClick={() =>onToggle(todoItem.id)}>
            <div className='todoshift'>
            <h3>{todoItem.title}</h3>
            <button onClick={()=>deleteTodo(todoItem.id)}>delete</button>
            </div>
            
            <li>{todoItem.description}</li>
            
        </div>
    ))}

</ul>
   )
 }
 
 export default TodoContent
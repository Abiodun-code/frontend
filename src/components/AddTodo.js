import React from 'react'

const AddTodo = ({onAdd, showAdd }) => {
  return (
    <div className={showAdd ? 'addtodos' : 'addtodo'}>
        <button onClick={onAdd}>{showAdd ? 'Close' : 'Add Todo'}</button>
    </div>
  )
}

export default AddTodo
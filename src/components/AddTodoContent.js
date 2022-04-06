import React, {useState} from 'react'

const AddTodoContent = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [completed, setCompleted] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault()

        if (!title) {
            alert('Please add a title')
            return
        }

        onAdd({title, description, completed})

        setTitle('')
        setDescription('')
        setCompleted(false)
    }
    
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Title</label>
            <input type='text' 
            placeholder='Add Tittle' 
            value={title} 
            onChange={(e)=> setTitle(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Description</label>
            <input type='text' 
            placeholder='Add Description' 
            value={description} 
            onChange={(e)=> setDescription(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
            <label>Completed</label>
            <input type='checkbox' 
            checked={completed}
            value={completed} 
            onChange={(e)=> setCompleted(e.currentTarget.checked)}/>
        </div>

        <input type='submit' value='Save Todo' className='btn btn-block'/>
    </form>
  )
}

export default AddTodoContent
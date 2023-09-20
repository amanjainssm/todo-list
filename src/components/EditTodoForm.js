import React from 'react'

const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = React.useState(task.task)

  const handleSubmit = (e) => {
    e.preventDefault()
    editTodo(value, task.id)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input type='text' value={value} className='todo-input' placeholder='Update Task' onChange={handleChange}></input>
      <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditTodoForm

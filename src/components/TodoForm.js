import React from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = React.useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(value)
    
    setValue('')
  }
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input type='text' value={value} className='todo-input' placeholder='Whats the task?' onChange={handleChange}></input>
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm

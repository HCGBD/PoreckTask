import { useState } from 'react'
import styles from './input.module.css'

const Input = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('')

  const handleInputChange = e => {
    setTaskTitle(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (taskTitle.trim() !== '') {
      addTask(taskTitle)
      setTaskTitle('')
    }
  }

  return (
    <div className={`box  ${styles.element}`}>
      <h2 className={styles.title}>🎯 Ajoute ta prochaine tache </h2>
      <form className={styles.container} onSubmit={handleSubmit}>
        <input
          type='text'
          className={styles.input}
          placeholder='Indiquez un titre de tâche explicite'
          onChange={handleInputChange}
          // defaultValue={taskTitle}
          value={taskTitle}
        ></input>
        <button className={'button-primary'} type='submit'>
          Ajouter
        </button>
      </form>
    </div>
  )
}

export default Input

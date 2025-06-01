import styles from './TaksItem.module.css'

const TaskItem = ({ task, stateTask, deleteTask ,num}) => {
  return (
    <li
      className={`${styles.container} ${
        task.isCompleted ? styles.success : styles.default
      }`}
      onClick={() => stateTask(task.id)}
    >
      <div className={styles.item}>
        <div
          className={`${styles.id} ${
            task.isCompleted ? styles.idSuccess : styles.idDefault
          } `}
        >
          {num}
        </div>
        <div
          className={
            task.isCompleted ? styles.contentSuccess : styles.contentDefault
          }
        >
          {task.title}
        </div>
      </div>
      <div>
        <button
          className={'button-primary'}
          onClick={e => {
            e.stopPropagation()
            deleteTask(task.id)
          }}
        >
          X
        </button>
      </div>
    </li>
  )
}

export default TaskItem

import TaskItem from '../taskItem/TaskItem'
import styles from './TaskList.module.css'

const TaskList = ({ listTask, incompletedTask, stateTask, deleteTask }) => {
  return (
    <>
      {listTask && listTask.length > 0 ? (
        <div className={'box'}>
          {incompletedTask > 0 ? (
            <h2 className={styles.title}>
              📑 Il te reste <span className={"important"} >{incompletedTask}</span> taches à accomplir !
            </h2>
          ) : null}
          {incompletedTask === 0 ? (
            <h2 className={styles.title}>
              🤝 Génial, tu as accomplis toutes tes tâches 
            </h2>
          ) : null}
          <ul className={styles.container}>
            {listTask.map((task,i) => {
              
              return (
                <TaskItem
                  task={task}
                  key={task.id}
                  stateTask={stateTask}
                  deleteTask={deleteTask}
                  num={++i}
                ></TaskItem>
              )
            })}
          </ul>
        </div>
      ) : (
        <div className={'box'}>
          <h2 className={styles.emptyState} >👋 Salut tu n'as rien à faire ! Profite de ton temps libre</h2>
        </div>
      )}
    </>
  )
}

export default TaskList

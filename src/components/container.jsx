import { useState } from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import Input from './input/input'
import TaskList from './taskList/TaskList'

export const Container = () => {
  const [taskList, setTaskList] = useState([

  ])

  const addTask = title => {
    const newTask = {
      id: taskList.length + 1,
      title: title,
      isCompleted: false
    }

    setTaskList([...taskList, newTask])
  }

  // console.log(taskList);

  const getTaksCount = () => {
    const completedTask = taskList.filter(
      task => task.isCompleted === true
    ).length
    const incompletedTask = taskList.length - completedTask

    return {
      completedTask,
      incompletedTask
    }
  }

  const { completedTask, incompletedTask } = getTaksCount()

  const stateTask  = (id)=>{
      setTaskList (
        taskList.map((task) => task.id===id ? {...task, isCompleted: !task.isCompleted } : task )
      )
  }

  const deleteTask = (id) =>{

    setTaskList (
      taskList.filter((task) => task.id !== id)
    )
  }

  return (
    <>
      <main>
        <Header></Header>
        <Input addTask={addTask}></Input>
        <TaskList
          listTask={taskList}
          incompletedTask={incompletedTask}
          stateTask={stateTask}
          deleteTask ={deleteTask}
        ></TaskList>
        <Footer completedTask={completedTask}></Footer>
      </main>
    </>
  )
}

import { useEffect, useState } from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import Input from './input/Input'
import TaskList from './taskList/TaskList'

export const Container = () => {
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    const tachesDb = JSON.parse(localStorage.getItem('taches')) || {}
    if (Object.keys(tachesDb).length !== 0) {
      setTaskList(tachesDb)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('taches', JSON.stringify(taskList))
  }, [taskList])

  const addTask = title => {
    const newTask = {
      id: taskList.length + 1,
      title: title,
      isCompleted: false
    }

    setTaskList([...taskList, newTask])
  }

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

  const stateTask = id => {
    setTaskList(
      taskList.map(task =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    )
  }

  const deleteTask = id => {
    setTaskList(taskList.filter(task => task.id !== id))
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
          deleteTask={deleteTask}
        ></TaskList>
        <Footer completedTask={completedTask}></Footer>
      </main>
    </>
  )
}

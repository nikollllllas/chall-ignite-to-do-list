import { useState } from 'react'

import './global.css'
import styles from './app.module.css'

import { Task } from './components/task'
import { Input } from './components/input'
import { Header } from './components/header'
import { Button } from './components/button'
import { ListHeader } from './components/listheader'
import { Empty } from './components/empty'

export interface InterfaceTask {
  id: number
  text: string
  isChecked: boolean
}

export function App() {
  const [tasks, setTasks] = useState<InterfaceTask[]>([])
  const [inputValue, setInputValue] = useState('')

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  function handleAddTask() {
    if (!inputValue) {
      return
    }

    const newTask: InterfaceTask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTasks(filteredTasks)
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value)
  }

  return (
    <div className={styles.app}>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.input}>
          <Input
            onChange={handleInputChange}
            value={inputValue}
          />

          <Button onClick={handleAddTask} />
        </div>

        <main className={styles.main}>
          <ListHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  data={task}
                  deleteTask={handleRemoveTask}
                  toggleTask={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </main>
      </div>
    </div>
  )
}


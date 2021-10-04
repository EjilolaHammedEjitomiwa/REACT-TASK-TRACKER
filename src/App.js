import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState, useEffect } from 'react'
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//function based components

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTask = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }

    getTask()
  }, [])


  //fetch taks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  //dummy function to delete task

  const deleteTask = async (text, id) => {
    await fetch(
      `http://localhost:5000/tasks/${id}`,
      { method: 'DELETE' }
    )
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    //update the data
    const res = await fetch(
      `http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: data.reminder } : task))

  }

  // add task
  const addTask = async (task) => {
    const res = await fetch(
      'http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 10000) + 1

    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  return (

    <Router>
      <div className="container">
        <Header
          title='GeoDev'
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

        {showAddTask && <AddTask
          onAdd={addTask}
        />}

        {tasks.length > 0 ? (<Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />) : 'Empty Task '}

        <Route path = '/about' component = {About} /> 
        <Footer />
      </div>
    </Router>
  );

}

//class based components

// class App extends React.Component{
//   render(){
//     return <h1>Hello from a class </h1>
//   }
// }

export default App;

// 1:20:37

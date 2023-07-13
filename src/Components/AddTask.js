import React, { useState } from 'react'
import './Addtask.css'



export default function AddTask() {
    const [task,getTask] = useState('');
    const [listTasks,setTask]=useState([]);

    const handleinput=(e)=>{
        getTask(e.target.value)
    }
    const addTask=() =>{
        console.log('clicked');
        setTask((inputTask) =>{
            return [...inputTask,task];
        })
    }
  return (
    <div>
      <div className="inputTask">
        <input type="text"  placeholder='Add your task' id='input-box' onChange={handleinput}/>
        <button onClick={addTask}>Add</button>
      </div>
      
      <div className='TaskList'>
      <ul id='list-container'>
        {/* <li>{task}</li> */}

        {
              listTasks.map((taskN) =>{
                return <li>{taskN}</li>
              })
        }
      </ul>
    </div>
    </div>
  )
}


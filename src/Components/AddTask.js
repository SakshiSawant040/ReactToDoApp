import React, { useState,useEffect,useRef } from 'react'
import './Addtask.css'


export default function AddTask() {
    const [task,getTask] = useState('');
    const [listTasks,setTask] = useState([]);

    const addTask=() =>{
        console.log('clicked');
        setTask((inputTask) =>{
            return [...inputTask,task];
        })
        getTask('')

    }
  return (
    <div>
      <div className="inputTask">
        <input type="text"  placeholder='Add your task' id='input-box' value={task}
        onChange={(e)=>getTask(e.target.value)}/>
        <button onClick={addTask}>Add</button>
      </div>
      
      <div className='TaskList'>
      <ul id='list-container'>
        {/* <li>{task}</li> */}

        {
              listTasks.map((element,i) =>{
                return <li className='checked' >
                          {element}
                          <span>{'\u00d7'}</span>
                        </li>
              })
        }
      </ul>
    </div>
    </div>
  )
}


import React, { useState,useEffect,useRef } from 'react'
import './Addtask.css'


export default function AddTask() {
    const [task,getTask] = useState('');
    const [listTasks,setTask] = useState([]);
    const ref = useRef(null);

    const addTask=() =>{
        console.log('clicked');
        setTask((inputTask) =>{
            return [...inputTask,task];
    })

    // useEffect(() =>{
    //     const listtask=ref.current;
    //       listtask.addEventListener("click",function(e){
    //         if(e.target.tagName === "LI"){
    //           e.target.classList.toggle("checked")
    //         }
    //         else if(e.target.tagName === "SPAN"){
    //           e.target.parentElement.remove();
    //         }
    //       },false)
    // })
        
        

    }
  return (
    <div>
      <div className="inputTask">
        <input type="text"  placeholder='Add your task' id='input-box' onChange={(e)=>getTask(e.target.value)}/>
        <button onClick={addTask}>Add</button>
      </div>
      
      <div className='TaskList'>
      <ul id='list-container'>
        {/* <li>{task}</li> */}

        {
              listTasks.map((element,i) =>{
                return <li className='checked' ref={ref}>
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


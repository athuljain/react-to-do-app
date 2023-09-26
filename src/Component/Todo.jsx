import { useState } from "react"

export default function Todo(){

    const [task,setTask]=useState([])
    const [inputTask,setInputTask]=useState("")


    const [editIndex, setEditIndex] = useState(-1);



function AddTask(){
    setTask([...task,inputTask])
}
    

    return(
        <div>
            <h1>React To-Do-app</h1>
<div>
            <input type="text" placeholder="add task" value={inputTask} onChange={((e)=> setInputTask( e.target.value))}></input>
            <button onClick={AddTask} >Add Task</button>

            </div>

<div>
    <ul>
        {task.map((data,index)=>
        <li key={index}>
            {data} 
            <button>edit</button>
            
        </li>)}
    </ul>
</div>




        </div>
    )
}
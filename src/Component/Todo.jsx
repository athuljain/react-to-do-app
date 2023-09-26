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

        
    {task.map((data, index) => (
    <li key={index}>
        {editIndex === index ? (
            <div>
                <input
                    type="text"
                    value={data}
                    onChange={(e) => {
                        const updatedTaskList = [...task];
                        updatedTaskList[index] = e.target.value;
                        setTask(updatedTaskList);
                    }}
                />
                <button
                    onClick={() => {
                        setEditIndex(-1); // Exit edit mode
                    }}
                >
                    Save
                </button>
            </div>
        ) : (
            <div>
                {data}
                <button
                    onClick={() => {
                        setEditIndex(index); // Enter edit mode
                    }}
                >
                    Edit
                </button>
            </div>
        )}
    </li>
))}
    </ul>
</div>




        </div>
    )
}
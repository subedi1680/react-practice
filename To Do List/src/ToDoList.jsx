import React,{useState} from "react";

function ToDoList() {

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            addTask();
        }
    }

    function addTask(){
        if(newTask !== ""){
            setTask([...task, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const newTaskList = [...task];
        newTaskList.splice(index,1);
        setTask(newTaskList);
    }

    function moveTaskUp(index){
        if(index === 0){
            return;
        }
        const newTaskList = [...task];
        const temp = newTaskList[index];
        newTaskList[index] = newTaskList[index - 1];
        newTaskList[index - 1] = temp;
        setTask(newTaskList);
    }

    function moveTaskDown(index){
        if(index === task.length - 1){
            return;
        }
        const newTaskList = [...task];
        const temp = newTaskList[index];
        newTaskList[index] = newTaskList[index + 1];
        newTaskList[index + 1] = temp;
        setTask(newTaskList);
    }
    return(
        <div className="to-do-list">

            <h1>To Do List</h1>

            <div>
                <input type="text" 
                placeholder="Enter a task" 
                value={newTask}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}/>
                <button 
                    className="add-button"
                    onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {task.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button 
                            className="delete-button"
                            onClick={()=>deleteTask(index)}>
                            🗑
                        </button>
                        <button 
                            className="move-button"
                            onClick={()=>moveTaskUp(index)}>
                            ⬆
                        </button>
                        <button 
                            className="move-button"
                            onClick={()=>moveTaskDown(index)}>
                            ⬇
                        </button>
                    </li>
                )}
            </ol>

        </div>
    )
}
export default ToDoList;
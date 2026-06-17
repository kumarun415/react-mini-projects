import {use,useState} from "react";
import Navbar from "../Section/Navbar";
function TodoCard(){

    const[Todos,setTodos]=useState([])
    const[Task,setTask]=useState("")

    function handleSubmit(){
        setTodos([...Todos,Task])
        setTask("")
    }
    return(
        <div className="container col-lg-5">
            <div className="card card-body">
                <h1 className="text-center">Todo Form</h1>
                <div className="p-2 border-dark border rounded-1">
                    <h3>List of Task :</h3>
                    <ul>
                        <li><b><u>Dummy Task</u></b></li>
                        {
                            Todos.map((todo,index)=>(
                                <li key={index}>{todo}</li>
                            ))
                        }
                    </ul>
                </div>
                <br />

                <input onChange={(e)=>{setTask(e.target.value)}} type="text" value={Task} className="form-control mb-4" />
                <button onClick={handleSubmit} className="btn btn-success">Add Task</button>
            </div>

        </div>
    )
}
export default TodoCard;



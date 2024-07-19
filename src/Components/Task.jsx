import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const Task = () => {
    const[todo, setTodo]=useState("")

    const[todos, setTodos]=useState([])

    const handleDelete =()=>{


    }

    const handleEdit =()=>{


    }
    const handleAdd =()=>{
        setTodos([...todos, { id: uuidv4(), todo, iscompleted: false}])
        setTodo("")
    }

    const handleChange =(e) =>{
        setTodo(e.target.value)
    }

    const handleCheckbox =(e)=>{
     let id= e.target.name;
     todos.filter()
    }
  return (
    <div className="container mx-auto my-5 rounded-xl bg-yellow-200 h-screen">
      
        <div>
            <h1 className="text-3xl font-bold">ADD TODO</h1>
            <input  onChange={handleChange} value={todo} type="text"  className="w-80 mx-4" />
            <button onClick={handleAdd} className="bg-slate-600 mx-6 p-2 py-1 hover:bg-slate-950 text-white">ADD</button>
        </div>

        <h1 className="text-3xl font-bold">Your ToDos</h1>
        <div>
            {todos.map(item =>{
              return  <div key={item.id} className="flex w-full justify-between">
                <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.iscompleted} id="" />

        <div className={item.iscompleted?"line-through":""}>{item.todo}</div>
        <div className="my-2">
        <button onClick={handleEdit} className="bg-slate-600 mx-6 p-2 py-1 hover:bg-slate-950 text-white rounded-xl">Edit</button>
        <button onClick={handleDelete} className="bg-slate-600 mx-6 p-2 py-1 hover:bg-slate-950 text-white rounded-xl">Delete</button>

        </div>
              </div> 
              
            })}

           
      

      </div>
      
    </div>
  )
}

export default Task

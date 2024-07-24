import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Task = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const todosString = localStorage.getItem("todos");
        if (todosString) {
            const todosArray = JSON.parse(todosString);
            setTodos(todosArray);
        }
    }, []);

    const saveToLS = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const handleEdit = (e, id) => {
        const t = todos.find(i => i.id === id);
        setTodo(t.todo);
        const newTodos = todos.filter(item => item.id !== id);
        setTodos(newTodos);
        saveToLS();
    };

    const handleDelete = (e, id) => {
        const newTodos = todos.filter(item => item.id !== id);
        setTodos(newTodos);
        saveToLS();
    };

    const handleAdd = () => {
        setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
        setTodo("");
        saveToLS();
    };

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleCheckbox = (e) => {
        const id = e.target.name;
        const index = todos.findIndex(item => item.id === id);
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
        saveToLS();
    };

    return (
        <div className=" mx-auto   bg-slate-500 
        h-screen text-white p-4 ">
            <div className=" flex flex-col items-center  max-w-screen-lg mx-auto h-full">

            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-3xl font-bold mb-4 ">ADD TODO</h1>
                <div className="flex mb-6">

                <input onChange={handleChange} 
                value={todo} 
                type="text" 
                className="w-80 p-2 border border-slate-600 
                rounded-md text-black  "
                placeholder="Enter your todo......"
                />
                
                <button onClick={handleAdd} 
                className="bg-slate-600 mx-6 p-2 py-1 
                hover:bg-slate-950 
                text-white 
                rounded-md">ADD</button>
                </div>
            </div>

            <h1 className="text-3xl font-bold mb-4 p-4 mx-auto">Your TODOS</h1>
            <div>
                {todos.map(item => (
                    <div key={item.id} className="flex w-full justify-between 
                    items-center mb-4">
                        <input
                            name={item.id}
                            onChange={handleCheckbox}
                            type="checkbox"
                            checked={item.isCompleted}
                            className="mr-2"
                        />
                        <div className={item.isCompleted ? "line-through border rounded-md bg-purple-500" : ""}>{item.todo}</div>
                        <div className="flex space-x-2  ">
                            <button onClick={(e) => handleEdit(e, item.id)} 
                            className="bg-slate-600 mx-6 p-2 py-1
                             hover:bg-slate-950 text-white rounded-md ">
                                <EditIcon size={15} />
                             </button>
                            <button onClick={(e) => handleDelete(e, item.id)} 
                            className="bg-slate-600 mx-6 p-2 py-1
                             hover:bg-slate-950 text-white rounded-md">
                                <DeleteIcon />
                             </button>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default Task;

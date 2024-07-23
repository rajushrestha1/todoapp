import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

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
        <div className="container mx-auto my-5 rounded-xl bg-yellow-200 h-screen">
            <div>
                <h1 className="text-3xl font-bold">ADD TODO</h1>
                <input onChange={handleChange} value={todo} type="text" className="w-80 mx-4" />
                <button onClick={handleAdd} className="bg-slate-600 mx-6 p-2 py-1 hover:bg-slate-950 text-white">ADD</button>
            </div>

            <h1 className="text-3xl font-bold">Your ToDos</h1>
            <div>
                {todos.map(item => (
                    <div key={item.id} className="flex w-full justify-between">
                        <input
                            name={item.id}
                            onChange={handleCheckbox}
                            type="checkbox"
                            checked={item.isCompleted}
                        />
                        <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                        <div className="my-2">
                            <button onClick={(e) => handleEdit(e, item.id)} className="bg-slate-600 mx-6 p-2 py-1 hover:bg-slate-950 text-white rounded-xl">Edit</button>
                            <button onClick={(e) => handleDelete(e, item.id)} className="bg-slate-600 mx-6 p-2 py-1 hover:bg-slate-950 text-white rounded-xl">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Task;

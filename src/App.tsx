import {useState, useEffect} from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoItem, {type Todo} from "./components/TodoItem";
import "./App.css";

function App() {

    const [todos, setTodos] = useState<Todo[]>(() => {
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        console.log("Set todos:", todos);
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text: string) => {
        const newTodo: Todo = { id: Date.now(), text, done: false };
        setTodos((prev) => [...prev, newTodo]);
    };
    const toggleTodo = (id: number) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? {...todo, done: !todo.done} : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="app">
            <h1>Todo List</h1>
            <AddTodoForm onAdd={addTodo}/>
            <ul>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;

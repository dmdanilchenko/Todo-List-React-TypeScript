import React from "react";

export interface Todo {
    id: number;
    text: string;
    done: boolean;
}

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({todo, onToggle, onDelete}) => {
    return (
        <li className={`todo-item ${todo.done ? "done" : ""}`}>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={() => onToggle(todo.id)}
            />
            <span style={{textDecoration: todo.done ? "line-through" : ""}}>
        {todo.text}
      </span>
            <button onClick={() => onDelete(todo.id)}>Remove</button>
        </li>
    );
};

export default TodoItem;
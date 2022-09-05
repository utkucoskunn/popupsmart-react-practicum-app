import {deleteTodos, editTodos} from "../../api";
import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import {useState} from "react";



export default function List({todos, setTodos, hide}) {
    const [edit, setEdit] = useState(false);
    const checkTodo = (e) => {

        let newTodos = todos.map((todo) => {
            if (parseInt(todo.id) === parseInt(e.target.id)) {
                editTodos(e.target.id, {
                    content: todo.content,
                    isCompleted: !todo.isCompleted
                })
                return {...todo, isCompleted: !todo.isCompleted};
            }
            return todo;
        });
        setTodos(newTodos);


    };

    const editTodo = (e) => {
        if (edit === false) {
            setEdit(true)
        }
        console.log(edit)
    }


    const deleteTodo = (e) => {
        deleteTodos(e.target.id)

        setTodos(
            todos.filter((todo) => parseInt(todo.id) !== parseInt(e.target.id))
        );

    };

    const isCompleted = (e) => {
        if (e.isCompleted === true && hide === "All") {
            return "completed";
        } else if (e.isCompleted === true && hide === "Active") {
            return "completed hidden";
        } else if (e.isCompleted === false && hide === "Completed") {
            return "hidden";
        }
    };

    return (

        <div className="main">
            <ul className="todo-list">
                {(todos).map((item) => (
                    <li key={item.id} id={item.id} className={isCompleted(item)}>
                        <div className="view">
                            <input
                                className="toggle"
                                type="checkbox"
                                defaultChecked={item.isCompleted}
                                id={item.id}
                                onClick={checkTodo}
                            />
                            
                                <label>
                                    {item.content}
                                </label>

                            <button
                                className="destroy"
                                id={item.id}
                                onClick={deleteTodo}
                            />
                            <EditIcon
                                className="edit"
                                id={item.id}
                                onClick={editTodo}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
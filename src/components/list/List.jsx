import React from "react";

import {deleteTodos} from "../../api";

export default function List({todos, setTodos, hide}) {

    const checkTodo = (e) => {
        let newTodos = todos.map((todo) => {
            if (parseInt(todo.id) === parseInt(e.target.id)) {
                return {...todo, checked: !todo.checked};
            }
            return todo;
        });
        setTodos(newTodos);
    };

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
                                // işaretlenme durumu değiştiğinde id kullanarak veriyi state'e set ediyoruz.
                            />
                            <label>{item.content}</label>
                            <button
                                className="destroy"
                                id={item.id}
                                onClick={deleteTodo}
                                // Silmek için butona basıldığında id yardımı ile state'den veriyi sildiriyoruz.
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
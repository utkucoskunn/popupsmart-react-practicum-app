import {useState, useEffect} from "react";
import {postTodos, fetchTodos} from "../../api";


export default function Form({todos, setTodos}) {

    const [form, setForm] = useState("");


    const onSubmit = (e) => {
        e.preventDefault();

        if (form === "") {
            return false;
        }

        setForm("");
        const newTodo = postTodos(
            {
                content: form,
                isCompleted: false
            }
        );
        newTodo.then((value => {

            setTodos([...todos,{
                id:value.data.id,
                content:value.data.content,
                isCompleted:value.data.isCompleted
            }])
        }))
    }

    return (

        <header className="header">
            <h1>todos</h1>
            <form onSubmit={onSubmit}>
                <input className="new-todo"
                       placeholder="What needs to be done?"
                       autoFocus
                       value={form}
                       onChange={(e) => setForm(e.target.value)}
                />
            </form>
        </header>
    )
}
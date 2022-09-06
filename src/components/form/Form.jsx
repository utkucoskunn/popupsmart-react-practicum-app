import {useState} from "react";
import {postTodos} from "../../api";
import {Alert, Card} from "@mui/material";


export default function Form({todos, setTodos}) {
    const [form, setForm] = useState("");
    const [alert, setAlert] = useState(false);

    const formLength = form.split("");

    const onSubmit = (e) => {
        e.preventDefault();

        if (formLength.length > 2) {
            setAlert(false);
            setForm("");
            const newTodo = postTodos(
                {
                    content: form,
                    isCompleted: false
                }
            );
            newTodo.then((value => {

                setTodos([...todos, {
                    id: value.data.id,
                    content: value.data.content,
                    isCompleted: value.data.isCompleted
                }])
            }))
        } else {
            setAlert(true);
        }
    }
    return (
        <Card>
            <header className="header">
                <h1>muc todos</h1>
                {alert &&
                    <Alert severity="error">You must enter a value of at least 3 characters!</Alert>
                }
                <form onSubmit={onSubmit}>
                    <input className="new-todo"
                           placeholder="What needs to be done?"
                           autoFocus
                           value={form}
                           onChange={(e) => setForm(e.target.value)}
                    />
                </form>
            </header>
        </Card>
    )
}
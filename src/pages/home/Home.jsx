import {useEffect, useState} from 'react';

import Form from '../../components/form/Form';
import List from '../../components/list/List';
import Footer from '../../components/footer/footer';
import Navbar from "../../components/navbar/Navbar";

import {fetchTodos} from "../../api";



const Home = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const getTodos = async () => {
            try {
                const res = await fetchTodos()
                setTodos(res.data)
            } catch (error) {
                console.log(error)
            }
        };
        getTodos();
    }, [])

    const [hide, setHide] = useState("All");
    return (
        <div>
            <div className="todoapp">
                <Navbar todos={todos} setTodos={setTodos}/>
                <Form todos={todos} setTodos={setTodos}/>{" "}
                <List todos={todos} setTodos={setTodos} hide={hide}/>{" "}
                <Footer todos={todos} setTodos={setTodos} setHide={setHide}/>{" "}
            </div>
        </div>
    )
}

export default Home;
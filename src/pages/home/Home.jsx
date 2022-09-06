import {useEffect, useState} from 'react';

import Form from '../../components/form/Form';
import List from '../../components/list/List';
import Footer from '../../components/footer/footer';
import Navbar from "../../components/navbar/Navbar";


import {fetchTodos} from "../../api";
import {createTheme, ThemeProvider} from "@mui/material";
import Box from "@mui/material/Box";


const Home = () => {
    const [mode, setMode] = useState("light");
    const darkTheme = createTheme({
        palette: {
            mode: mode,
        }
    })


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
        <ThemeProvider theme={darkTheme}>

            <Box className="todoapp">
                <Navbar setMode={setMode} mode={mode}/>
                <Form todos={todos} setTodos={setTodos} setMode={setMode} mode={mode}/>{" "}
                <List todos={todos} setTodos={setTodos} hide={hide} setMode={setMode} mode={mode}/>{" "}
                <Footer todos={todos} setTodos={setTodos} setHide={setHide} setMode={setMode} mode={mode}/>{" "}
            </Box>

        </ThemeProvider>
    )
}

export default Home;
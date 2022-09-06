import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Login from "../src/pages/login/Login";
import Home from "../src/pages/home/Home";
import {useEffect, useState} from "react";


function App() {

    return (

        <div className="App">
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element={ <Login/>}/>
                        <Route path="/home" element={<Home/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>

    );
}

export default App;

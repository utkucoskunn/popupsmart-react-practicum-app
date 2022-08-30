import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Login from "../src/pages/login/Login";
import Home from "../src/pages/home/Home";


function App() {
    const user = JSON.parse(localStorage.getItem('username'));



    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element={user ? <Home/> : <Navigate to="/login"/>}/>
                        <Route path="/login" element={!user ? <Login/> : <Navigate to="/"/>}/>
                    </Routes>
                </div>
            </BrowserRouter>

        </div>
    );
}

export default App;

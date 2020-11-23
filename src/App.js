import './App.css';
import * as React from 'react';
import Header from './components/header/Header';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Home from "./components/home/Home";
import News from "./components/news/News";


function App() {
    const [role, setRole] = React.useState('');
    console.log(`role: ${role}`)
    const updateRole = (value) => {
        setRole(value)
    }
    return (
        <Router>
            <div className='page_header'>
                <Header updateRole={updateRole}/>
            </div>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/news'>
                <News/>
            </Route>
        </Router>
    );
}

export default App;

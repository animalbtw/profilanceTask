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

    const updateRole = (value) => {
        setRole(value)
    }
    return (
        <Router>
            <div className='page_header'>
                <Header updateRole={updateRole} role={role}/>
            </div>
            <Route exact path='/'>
                <Home role={role}/>
            </Route>
            <Route path='/news'>
                <News role={role}/>
            </Route>
        </Router>
    );
}

export default App;

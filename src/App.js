import './App.css';
import * as React from 'react';
import Header from './components/header/Header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/home/Home";
import News from "./components/news/News";
import Auth from "./components/dialog/Auth";

function App() {

    return (
        <Router>
            <div className='page_header'>
                <Header />
            </div>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/news'>
                    <News />
                </Route>
        </Router>
    );
}

export default App;

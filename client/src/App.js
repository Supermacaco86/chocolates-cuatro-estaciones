import './App.css';
import React from "react";
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import LandingPage from './component/LandingPage';
import Home from './component/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route path='/home' exact element={<Home/>}/> 
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

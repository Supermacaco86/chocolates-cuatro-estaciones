import './App.css';
import React from "react";
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import { AuthProvider } from './context/authContext';
import LandingPage from './component/LandingPage';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route exact path='/' element={<LandingPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' exact element={<Home/>}/> 
        </Routes>
      </AuthProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;

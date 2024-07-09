import React from "react";
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

//auth
import { Provider } from 'react-redux';
import store from './redux/store';


import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Navbar />
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/signup" element= {<Signup/>}/>
          <Route path="/login" element= {<Login/>}/>
        </Routes>
    </Provider>
    </BrowserRouter>
  );
}

export default App;

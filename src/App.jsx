import React from "react";
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

//auth
import { Provider } from 'react-redux';
import store from './redux/store';
import ProtectedRoute from "./component/ProtectedRoute";

//components
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
          <Route path="/" element= {<ProtectedRoute>
            <Home/>
            </ProtectedRoute>}/>
          <Route path="/signup" element= {<Signup/>}/>
          <Route path="/login" element= {<Login/>}/>
          {/* <Route path="/login" element= {<ProtectedRoute><Home/></ProtectedRoute>}/> */}
        </Routes>
    </Provider>
    </BrowserRouter>
  );
}

export default App;

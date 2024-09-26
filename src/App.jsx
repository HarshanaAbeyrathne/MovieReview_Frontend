import React from "react";
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

//auth
import { Provider } from 'react-redux';
import {store , persistor } from './redux/store';
import ProtectedRoute from "./component/ProtectedRoute";

//components
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Another from "./pages/Another";
import { PersistGate } from "redux-persist/integration/react";
import RateMovie from "./pages/RateMovie";

//admin components
import AdminLogin from "./pages/AdminLogin";
import AdminHome from "./pages/AdminHome";
import AdminUsers from "./pages/usersDetail";
import AddMovie from "./pages/AddMovie";


function App() {
  return (
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element= {<ProtectedRoute>
            <Home/></ProtectedRoute>
            }/>
          <Route path="/ratemovie" element= {<ProtectedRoute><RateMovie/></ProtectedRoute>}/>
          
          <Route path="/signup" element= {<Signup/>}/>
          <Route path="/login" element= {<Login/>}/>
          <Route path="/an" element= {<Another/>}/>
          
          //admin routes
          <Route path="/adminMain" element= {<ProtectedRoute><AdminHome/></ProtectedRoute>}/>
          <Route path="/adminLogin" element= {<AdminLogin/>}/>
          <Route path="/adminUsers" element= {<ProtectedRoute><AdminUsers/></ProtectedRoute>}/>
          <Route path="/addMovie" element= {<ProtectedRoute><AddMovie/></ProtectedRoute>}/>
        </Routes>
      </PersistGate>
    </Provider>
  </BrowserRouter>
  );
}

export default App;

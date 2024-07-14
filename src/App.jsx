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



function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Navbar />
        <Routes>
          <Route path="/" element= {<ProtectedRoute>
            <Home/></ProtectedRoute>
            }/>
          <Route path="/signup" element= {<Signup/>}/>
          <Route path="/login" element= {<Login/>}/>
          <Route path="/an" element= {<Another/>}/>
          {/* <Route path="/login" element= {<ProtectedRoute><Home/></ProtectedRoute>}/> */}
        </Routes>
        </PersistGate>
    </Provider>
    </BrowserRouter>
  );
}

export default App;

import React, { Component, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import * as actions from './actions'

//pages
import Pembuka from './pages/Pembuka'
import Login from './pages/login'


function App() {

  const[modeMalam, setModeMalam] = useState('')

  return (
    <div className={`app ${modeMalam ? 'night-mode' : 'day-mode'}`}>
    {/* <div className="bg-gradient-to-b from-blue-700 to-blue-500"> */}
    <div className=" overflow-x-hidden h-screen w-screen flex justify-center items-center bg-gradient-to-b from-blue-700 to-blue-500">
      
        <BrowserRouter>  
          <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/register"element={<Login/>}/>
            <Route exact path="/login" element={<Login/>}/>
          </Routes>
        </BrowserRouter>
    </div>
    </div>
    // </div>
  );
}

export default App
// export default connect(null, actions)(App);
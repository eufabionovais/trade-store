import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import AppHeader from "./components/Layout/Header"
import AppFooter from "./components/Layout/Footer"
import AppRoutes from 'router';


function App() {
  return (

    <div className="App">
      <AppHeader />

      <main className="main-content">
        <AppRoutes />
      </main>

      <AppFooter />
    </div>

  );
}

export default App;

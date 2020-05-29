import React from 'react';
import MainStyle from './components/MainStyle/MainStyle';
import Router from './components/Router/Router';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Copyright from './components/Copyright/Copyright';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <MainStyle>
        <Router />
      </MainStyle>
      <Footer></Footer>
      <Copyright />
    </>
  );
}


export default App;

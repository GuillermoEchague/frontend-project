import React from 'react';
import ContainerCard from './components/ContainerCard/ContainerCard';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';
import './main.scss';


function App() {
  return (
    <>
      <Navbar/>
      <ContainerCard />
      <Footer />
    </>
  );
}

export default App;

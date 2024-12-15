import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import ContainerCard from './components/containerCard'
import Footer from './components/footer';

function App() {
  const [selectedData, setSelectedData] = useState(null);

  return (
    <>
      <Navbar onSelect={setSelectedData} />
      <ContainerCard selectedData={selectedData} />
      <Footer />
    </>
  );
}

export default App;

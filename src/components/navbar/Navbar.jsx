import React, { useState, useEffect } from 'react';
import { listEndpointsApi } from '../../api/Service';
import './Navbar.css';

const Navbar = ({ onSelect }) => {
  const [endpoints, setEndpoints] = useState([]);
  const [activeList, setActiveList] = useState(null); 
  const [selectedString, setSelectedString] = useState('neko');
  const [selectedNumber, setSelectedNumber] = useState(1); 

  useEffect(() => {
    const fetchEndpoints = async () => {
      try {
        const endpoints = await listEndpointsApi();
        const stringArray = Object.keys(endpoints);
        setEndpoints(stringArray);
        setSelectedString(stringArray[0]); 
      } catch (err) {
        console.error('Failed to fetch endpoints:', err);
      }
    };

    fetchEndpoints();
  }, []);

  useEffect(() => {
    if (selectedString && selectedNumber) {
      onSelect({ string: selectedString, number: selectedNumber });
    }
  }, [onSelect, selectedString, selectedNumber]);

  const handleStringClick = (item) => {
    setSelectedString(item);
    setActiveList(null); // Cerrar el desplegable
  };

  const handleNumberClick = (number) => {
    setSelectedNumber(number);
    setActiveList(null); // Cerrar el desplegable
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">Anime</a>
      </div>
      <ul className="navbar-links">
        <li>
          <button onClick={() => setActiveList(activeList === 'strings' ? null : 'strings')}>
            {selectedString}
          </button>
          {activeList === 'strings' && (
            <ul className="navbar-dropdown">
              {endpoints.map((item, index) => (
                <li key={index} onClick={() => handleStringClick(item)}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <button onClick={() => setActiveList(activeList === 'numbers' ? null : 'numbers')}>
            {selectedNumber}
          </button>
          {activeList === 'numbers' && (
            <ul className="navbar-dropdown">
              {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
                <li key={number} onClick={() => handleNumberClick(number)}>
                  {number}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

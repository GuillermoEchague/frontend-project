import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card/Card';

const ContainerCard = ({ numberOfImages }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    axios
      .get(`https://nekos.best/api/v2/neko?limit=${numberOfImages}`)
      .then((response) => {
        
        if (response.data.results && response.data.results.length > 0) {
          const fetchedImages = response.data.results.map((item) => item.url);
          setImages(fetchedImages); 
        } else {
          console.error("imagen no encontrada");
          setImages([]); 
        }
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error imagen:', error); 
        setLoading(false); 
      });
  }, [numberOfImages]); 

  return (
    <div className="card-container">
      {loading ? (
        <p>Loading...</p> 
      ) : (
        images.length > 0 ? (
          images.map((imageUrl, index) => (
            <Card key={index} name={`Neko ${index + 1}`} imageUrl={imageUrl} />
          ))
        ) : (
          <p>No images found</p> 
        )
      )}
    </div>
  );
};

export default ContainerCard;

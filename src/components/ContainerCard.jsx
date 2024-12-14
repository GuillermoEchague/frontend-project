import React from 'react';
import Card from './Card/Card';
const ContainerCard = ({ isLoading , data, error  }) => {
 
  const listItems = data.map(person =>
    <Card name={person.anime_name} imageUrl={person.url} key={person.url} />
  );
  return (
    <div className="card-container">
      {isLoading ? (
        <p>Loading...</p> 
      ) :( 
        data.length > 0 ? (
        
          <ul>{listItems}</ul>
          
        ) : (
          <p>{error}</p> 
        )
        )
      }
    </div>
  );

};

export default ContainerCard;

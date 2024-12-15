import React, { useState, useEffect } from "react";
import Card from "../Card";
import { listCategoriesCountApi } from "../../api/Service";
import "./ContainerCard.css";

const ContainerCard = ({ selectedData }) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dataBody, setDataBody] = useState([]);

  useEffect(() => {
    const fetchEndpoints = async () => {
      setIsLoading(true);
      try {
        const data = await listCategoriesCountApi("hug", selectedData.number );
        setDataBody(data.results || []);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch endpoints:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEndpoints();
  }, [selectedData]);

  return (
    <div className="container-card">
      {isLoading ? (
        <p className="container-card--loading">Loading...</p>
      ) : error ? (
        <p className="container-card--error">{error}</p>
      ) : (
        dataBody.map((person) => (
          <Card name={person.anime_name} imageUrl={person.url} key={person.url} />
        ))
      )}
    </div>
  );
};

export default ContainerCard;

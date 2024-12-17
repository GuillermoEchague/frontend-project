import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import Filtros from "./Filtros/Filtros"; 
import { listCategoriesCountApi } from "../api/Service";
import "./ContainerCard.css";

const ContainerCard = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dataBody, setDataBody] = useState([]);
  const [firstOption, setFirstOption] = useState(8); // Estado para la opción numérica
  const [secondOption, setSecondOption] = useState("hug"); // Estado para la opción de texto

  useEffect(() => {
    const fetchEndpoints = async () => {
      setIsLoading(true);
      try {
        const data = await listCategoriesCountApi(secondOption, firstOption);
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
  }, [firstOption, secondOption]); // Se actualiza cuando cambian las opciones

  return (
    <div className="container-card">
      {/* Componente Filtros en la parte superior */}
      <Filtros
        firstOption={firstOption}
        setFirstOption={setFirstOption}
        secondOption={secondOption}
        setSecondOption={setSecondOption}
      />

      {/* Cuerpo principal */}
      {isLoading ? (
        <p className="container-card--loading">Loading...</p>
      ) : error ? (
        <p className="container-card--error">{error}</p>
      ) : (
        <div className="container-card__grid">
          {dataBody.map((person) => (
            <Card name={person.anime_name} imageUrl={person.url} key={person.url} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ContainerCard;

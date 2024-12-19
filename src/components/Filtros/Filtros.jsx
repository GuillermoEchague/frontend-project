import React, {useEffect, useState} from "react";
import { listEndpointsApi } from '../../api/Service'
import "./Filtros.scss";

const Filtros = ({ firstOption, setFirstOption, secondOption, setSecondOption }) => {
  const firstComboOptions = [1, 8, 16];
  const [endpoints, setEndpoints] = useState([]);

  useEffect(() => {
    const fetchEndpoints = async () => {
      try {
        const endpoints = await listEndpointsApi();
        const stringArray = Object.keys(endpoints);
        setEndpoints(stringArray);
      } catch (err) {
        console.error('Failed to fetch endpoints:', err);
      }
    };

    fetchEndpoints();
  }, []);

  return (
    <div className="filtros">
      <div className="filtros__container">
        {/* Primer Combobox */}
        <div className="filtros__group">
          <label className="filtros__label" htmlFor="first-combo">
            Opciones numéricas:
          </label>
          <select
            id="first-combo"
            className="filtros__select"
            value={firstOption}
            onChange={(e) => setFirstOption(Number(e.target.value))}
          >
            {firstComboOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

     
        <div className="filtros__group">
          <label className="filtros__label" htmlFor="second-combo">
            Opciones de texto:
          </label>
          <select
            id="second-combo"
            className="filtros__select"
            value={secondOption}
            onChange={(e) => setSecondOption(e.target.value)}
          >
            {endpoints.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filtros;

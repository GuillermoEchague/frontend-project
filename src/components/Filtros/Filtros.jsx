import React from "react";
import "./Filtros.scss";

const Filtros = ({ firstOption, setFirstOption, secondOption, setSecondOption }) => {
  const firstComboOptions = [1, 8, 16];
  const secondComboOptions = ["hug", "waifu", "neko"];

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
            {secondComboOptions.map((option) => (
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

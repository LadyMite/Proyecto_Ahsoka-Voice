import React, { useState, useEffect } from "react";
import "../../styles/ACreate.css";
//import axios from 'axios';

export default function AchievementList() {
   /*
  const UrlBase = "http://localhost:8080/....";

  const [achievementList, setAchievementList] = useState([]); //para monitorear los cambios del arreglo
 
  useEffect(() =>{
    LoadAchievement();
  }, []);

  const LoadAchievement = async() =>{
    const resultado = await axios.get(UrlBase); //para recibir repuesta del backend
    console.log("Resultado de la carga de logros")
    console.log(resultado.data);
    setAchievement(resultado.data);
  }*/

  return (
    <div class="container">
    <h1>Achievement List</h1>
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="column">Id</th>
            <th className="column">Titulo</th>
            <th className="column">Fecha</th>
            <th className="column">Descripción</th>
            <th className="column">Imagen</th>
            <th className="column">Id Usuario</th>
            <th className="column">Id Area</th>
          </tr>
        </thead>

        <tbody>
          
            <tr>
              <td>1</td> 
              <td>Logro 1</td> 
              <td>2024-04-25</td> 
              <td>Nivel 1</td>
              <td>imagen1.png</td>
              <td>1</td>
              <td>1</td>
            </tr>

          <tr>
            <td>2</td>
            <td>Logro 2</td>
            <td>2024-04-26</td>
            <td>Nivel 2</td>
            <td>imagen2.png</td>
            <td>2</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
  );
}

/*
          <tbody>
            achievements.map((achievementList, indice) =>
            {
              <tr key={indice}>
                <td>1</td> {achievementList.idachievement}
                <td>Logro 1</td> {achievementList.titulo}
                <td>2024-04-25</td> {achievementList.fecha}
                <td>Nivel 1</td> {achievementList.descripcion}
                <td>imagen1.png</td> {achievementList.imagen}
                <td>1</td> {achievementList.idusuario}
                <td>1</td> {achievementList.idarea}
              </tr>
            }*/
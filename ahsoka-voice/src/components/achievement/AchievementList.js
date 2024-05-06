import React, { useState, useEffect } from "react";
import "../../styles/A_List.css";
import { Link } from "react-router-dom";
//import AchievementList from './components/achievement/AchievementList';
//import AchievementAdd from './components/achievement/AchievementAdd';
import axios from 'axios';

export default function AchievementList() {

  const UrlBase = "http://localhost:8080/....";

  const [achievement, setAchievement] = useState([]); //para monitorear los cambios del arreglo
 
  useEffect(() =>{
    LoadAchievement();
  }, []);

  const LoadAchievement = async() =>{
    const resultado = await axios.get(UrlBase); //para recibir repuesta del backend
    console.log("Resultado de la carga de logros")
    console.log(resultado.data);
    setAchievement(resultado.data);
  }

  return (
    <div className="container">
      <button>
        <Link to="/añadir" className="btn">
          Agregar
        </Link>
      </button>
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
              <th className="column">Acciones</th>
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
              <td>
                <button>Editar</button>
                <button>Eliminar</button>
                <button>Ocultar</button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Logro 2</td>
              <td>2024-04-26</td>
              <td>Nivel 2</td>
              <td>imagen2.png</td>
              <td>2</td>
              <td>2</td>
              <td>
                <button>Editar</button>
                <button>Eliminar</button>
                <button>Ocultar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

/*
          <tbody>
            achievements.map((achievement, index) =>
            {
              <tr key={indice}>
                <td>1</td> {achievement.idachievement}
                <td>Logro 1</td> {achievement.titulo}
                <td>2024-04-25</td> {achievement.fecha}
                <td>Nivel 1</td> {achievement.descripcion}
                <td>imagen1.png</td> {achievement.imagen}
                <td>1</td> {achievement.idusuario}
                <td>1</td> {achievement.idarea}
              </tr>
            }*/

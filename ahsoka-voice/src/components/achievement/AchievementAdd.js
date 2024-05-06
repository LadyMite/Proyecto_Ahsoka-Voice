import React, { useState } from 'react'
import "../../styles/A_Add.css";
//import axios from 'axios';
//import { useNavigate } from 'react-router-dom';

export default function AchievementAdd() {
/*
  let navegation = useNavigate();

  const [achievement, setAchievement]=useState({
    tituloLogro: "",
    fechaLogro: "",
    descripcionLogro: "",
    imagenLogro: "",
    idUsuario: "",
    idArea: ""
  })

  const{tituloLogro, fechaLogro, descripcionLogro, imagenLogro, idUsuario, idArea} = achievement
  const onInputChange = (l) =>{
    setAchievement({...achievement, [l.target.name]: l.target.value})
  }

  const onSubmit = async (l) => {
    l.preventDefault();
    const UrlBase = "http://localhost:8080/....";
    await axios.post(UrlBase, achievement);
    navegation('/')
  }*/

  return (
    <div className="container">
        <div className="container-textCenter">
            <h3>Add Achievement</h3>
        </div>

        <form /*onSubmit={(l) => onSubmit(l)}*/>
        <div className="form-group">
          <label htmlFor="title">Titulo</label>
          <input type="text" id="title" name="title" required={true} /*value={tituloLogro} onChange={(l)=>onInputChange(l)}*//>
        </div>
        <div className="form-group">
          <label htmlFor="date">Fecha:</label>
          <input type="date" id="date" name="date" required={true} /*value={fechaLogro} onChange={(l)=>onInputChange(l)}*//>
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripcion:</label>
          <textarea id="description" name="description" rows="4" required={true} /*value={descripcionLogro} onChange={(l)=>onInputChange(l)}*/></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image">Imagne:</label>
          <input type="file" id="image" name="image" accept="image/png, image/jpeg" required={true} /*value={imagenLogro} onChange={(l)=>onInputChange(l)}*//>
        </div>
        <div className="form-group">
          <label htmlFor="userId">User ID:</label>
          <input type="text" id="userId" name="userId" required={true} /*value={idUsuario} onChange={(l)=>onInputChange(l)}*//>
        </div>
        <div className="form-group">
          <label htmlFor="areaId">Area ID:</label>
          <input type="text" id="areaId" name="areaId" required={true} /*value={idArea} onChange={(l)=>onInputChange(l)}*//>
        </div>

        <div className="button-group">
          <button type="submit">Add Achievement</button>
          <a href="/">Cancelar</a>
        </div>
      </form>
    </div>
  )
}

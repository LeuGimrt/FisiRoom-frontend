import './HeaderCourse.scss';
import Button from 'components/Button/Button';
import axiosInstance from 'api/config';
import { Link } from 'react-router-dom';
import Header from 'components/Header/Header';
import GroupList from 'components/GroupList/GroupList';
import { useState } from 'react';
import { ButtonItem } from 'common/types';
const HeaderCourse = () => {
  let alumnosbtns: ButtonItem[] = [
    { label: 'Información', route: 'a' },
    { label: 'Temas ', route: 'b' },
    { label: 'Tareas', route: 'c' },
  ];
  let profesorbtns: ButtonItem[] = [
    { label: 'Gestionar Tareas', route: 'a' },
    { label: 'Gestionar Alumnos', route: 'a' },
    { label: 'Gestionar Notas', route: 'a' },
  ];
  console.log(alumnosbtns);
  return (
    <div className="container ">
      <div className=" headercourse row py-3 px-4">
        <Header>COURSE NAME</Header>
        <div className="col-12 px-5 pt-2">
          <h3>Teacher Name</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-3 border border-light ">
          <div className="col-12 pt-3">
            <p>Opciones del Alumno: </p>
          </div>
          <GroupList btnlist={alumnosbtns} activeBtn="Información" />
          <div className="col-12 pt-3">
            <p>Opciones del Profesor: </p>
          </div>
          {/* <GroupList btnlist={profesorbtns} /> */}
        </div>
        <div className="col-9 border border-light "> detalles</div>
      </div>
      <br />
    </div>
  );
};
export default HeaderCourse;

import { Topic } from 'common/types';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';
import CardItemsTema from '../components/CardItemsTema/CardItemsTema';
import { useContext, useEffect, useState } from 'react';
import { getCourseTopics } from 'api/getCourseTopics';
import { useParams } from 'react-router';
import { AxiosResponse } from 'axios';
import { CourseContext } from 'context/CourseContext';
import Wrapper from 'containers/Wrapper/Wrapper';

const CursoUnirse = () => {
  //logica
  const { course } = useContext(CourseContext);
  const descripcion = () => {
    console.log('verificando texto');
    console.log(course.description);
    if (course.description !== 'undefined') {
      return course.description;
    } else {
      return 'No hay descripción disponible';
    }
  };
  //respuesta
  return (
    <Wrapper>
      <div className="container d-flex h-100 justify-content-center align-items-center">
        <div className="row">
          <div className="col ">
            <h3>Unirse a Curso : Curso tal</h3>
            <div className="d-flex">
              <button className="btn bg-secondary text-light mx-5">
                Cancelar
              </button>
              <button className="btn bg-primary text-light mx-5 ">
                Unirse
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default CursoUnirse;

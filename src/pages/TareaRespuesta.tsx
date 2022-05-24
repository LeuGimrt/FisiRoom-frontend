import { getCourseDetails } from 'api/getCourseDetails';
import { AxiosResponse } from 'axios';
import Button from 'components/Buttons/Button/Button';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TareaRespuesta = () => {
  const { cursoId } = useParams();
  useEffect(() => {
    getCourseDetails(cursoId ? cursoId : '').then((response: AxiosResponse) => {
      /* setCurso(response.data);
      setCourse(response.data); */
      console.log(response.data);
      console.log(response.data.enrrolled);
    });
  }, []);
  return (
    <>
      <div className="col-12 border border-light p-3">
        <div className="row">
          <div className="col-12 border-bottom border-light">
            <h3>Nombre del Alumno </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 border-bottom border-light">
            <p>Comentario </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 border-bottom border-light">
            <p>Archivo Adjunto </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default TareaRespuesta;

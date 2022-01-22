import { CourseContext } from 'context/CourseContext';
import { useContext } from 'react';

const CursoDetalles = () => {
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
  return (
    <>
      <div className="col-9 border border-light ">
        <div className="row ">
          <div className="d-flex justify-content-start py-4 border-bottom">
            <h2>Información del curso</h2>
          </div>
        </div>
        <div className="p-3">
          <small>
            <strong>{`${course.day_of_the_week} - ${course.time_start.slice(
              0,
              5
            )}  hasta  ${course.time_end.slice(0, 5)}`}</strong>
          </small>
          <hr />
          <p>{descripcion()}</p>
        </div>
      </div>
    </>
  );
};
export default CursoDetalles;

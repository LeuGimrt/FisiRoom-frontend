import { CourseContext } from 'context/CourseContext';
import { useContext } from 'react';
import { Outlet } from 'react-router';

const CursoDetalles = () => {
  const { course } = useContext(CourseContext);

  return (
    <>
      <div className="col-9 border border-light ">
        <div className="row ">
          <div className="d-flex justify-content-start py-4 border-bottom">
            <h2>Descripción del curso</h2>
          </div>
        </div>
        <div className="p-3">
          <p>{course.description}</p>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default CursoDetalles;

import { nullToString } from 'common/utils/isNull';
import { CourseContext } from 'context/CourseContext';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TemaDetalles = () => {
  const { temaId } = useParams();
  useEffect(() => {});

  return (
    <>
      <div className="col-9 border border-light ">
        <div className="row ">
          <div className="d-flex justify-content-start py-4 border-bottom">
            <h2>Tema tal</h2>
          </div>
        </div>
        <div className="p-3">
          <p>Descripción ga</p>
          <div className="align-self-center">
            <a className="btn btn-secondary" target="_blank">
              Descargar archivo
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default TemaDetalles;

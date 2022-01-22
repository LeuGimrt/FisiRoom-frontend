import { getMaterial } from 'api/getMaterial';
import { AxiosResponse } from 'axios';
import { Topic } from 'common/types';
import { nullToString } from 'common/utils/isNull';
import { CourseContext } from 'context/CourseContext';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TemaDetalles = () => {
  const { cursoId } = useParams();
  const { temaId } = useParams();
  const [tema, setTema] = useState<Topic>({
    id: 0,
    course: 0,
    title: '',
    description: '',
    creation_timestamp: '',
    file: undefined,
  });
  useEffect(() => {
    getMaterial(cursoId ? cursoId : '', temaId ? temaId : '').then(
      (response: AxiosResponse) => {
        setTema(response.data);
      }
    );
  }, []);
  console.log(tema);
  return (
    <>
      <div className="col-12 border border-light ">
        <div className="row ">
          <div className="d-flex justify-content-start py-4 border-bottom">
            <h2>{tema.title}</h2>
          </div>
          <div className="p-3 border-bottom border-light">
            <p> {tema.description}</p>
          </div>
          <div className="d-flex justify-content-center p-2">
            <div>
              <a
                className="btn btn-secondary"
                target="_blank"
                href={nullToString(tema.file)}
              >
                Descargar archivo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TemaDetalles;

import { Topic } from 'common/types';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';
import CardItemsTema from '../components/CardItemsTema/CardItemsTema';
import { useEffect, useState } from 'react';
import { getCourseTopics } from 'api/getCourseTopics';
import { useParams } from 'react-router';
import { AxiosResponse } from 'axios';

const CursoTemas = () => {
  //logica
  const [temas, setTemas] = useState<Topic[]>([]);
  const { cursoId } = useParams();

  useEffect(() => {
    getCourseTopics(cursoId ? cursoId : '').then((response: AxiosResponse) => {
      setTemas(response.data);
      console.log(response.data);
    });
  }, []);
  //respuesta
  return (
    <>
      <div className="col-12 border border-light p-3">
        <div className="row d-flex align-items-center">
          <div className="col-6">
            <h2>Temas del curso</h2>
          </div>
          <div className=" col-6 d-flex justify-content-end py-3 border-bottom">
            <Link to="crear">
              <Button type="button" className="mx-1" color="primary" elevated>
                Crear nuevo Material
              </Button>
            </Link>
          </div>
        </div>
        <CardItemsTema temas={temas} />
      </div>
    </>
  );
};
export default CursoTemas;

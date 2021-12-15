import { getCourses } from 'api/getCourses';
import { Curso } from 'common/types';
import CardCourse from 'components/Card/CardCourse';
import Wrapper from 'containers/Wrapper';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';

const MisCursosCreados = () => {
  const [cursos, setCursos] = useState([]);
  // carga de lista de cursos
  useEffect(() => {
    // Consumir API
    getCourses()
      .then((response) => {
        console.log('data:', response.data);
        setCursos(response.data);
      })
      .catch((e) => {
        console.error('Error: ', e);
      });
  }, []);
  return (
    <Wrapper>
      <div className="album py-3 bg-light">
        <div className="container">
          <div className="row border-bottom border-primary pt-3">
            <h1 className="text-center ">Mis Cursos Creados</h1>
          </div>
          <div className="row ">
            <div className="d-flex justify-content-center py-3 border-bottom">
              <Link to="#">
                <Button
                  className="mx-1 d-flex justify-content-center"
                  color="primary"
                  elevated
                >
                  Crear nuevo curso
                </Button>
              </Link>
            </div>
          </div>
          <div className="row pt-2">
            {cursos.map((curso: Curso) => {
              return (
                <CardCourse
                  key={curso.id}
                  id={curso.id}
                  description={curso.description}
                  title={curso.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default MisCursosCreados;

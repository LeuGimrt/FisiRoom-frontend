import { getCourses } from 'api/getCourses';
import { Curso } from 'common/types';
import CardCourse from 'components/Card/CardCourse';
import Wrapper from 'containers/Wrapper';
import { useEffect, useState } from 'react';

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
      <div className="album py-5 bg-light">
        <div className="container">
          <div>
            <h1 className="text-center">Mis Cursos Inscritos</h1>
          </div>
          <div className="row">
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

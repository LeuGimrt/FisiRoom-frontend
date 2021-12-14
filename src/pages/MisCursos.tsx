import { Curso } from 'common/types';
import CardCourse from 'components/Card/CardCourse';
import Wrapper from 'containers/Wrapper';
import { useEffect, useState } from 'react';
import axiosInstance from 'api/config';

const MisCursos = () => {
  const [cursos, setCursos] = useState<Curso[]>([]);
  // carga de lista de cursos
  useEffect(() => {
    (async () => {
      // Consumir API
      const responseAxios = axiosInstance.get('/courses/created/');
      console.log('data');
      console.log((await responseAxios).data);
      setCursos((await responseAxios).data);
    })();
  }, []);
  return (
    <Wrapper>
      <div className="album py-5 bg-light">
        <div className="container">
          <div>
            <h1 className="text-center">Mis Cursos</h1>
          </div>
          <div className="row">
            {cursos.map((curso) => {
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
export default MisCursos;

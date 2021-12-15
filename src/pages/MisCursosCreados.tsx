import { Curso } from 'common/types';
import CardCourse from 'components/Card/CardCourse';
import Wrapper from 'containers/Wrapper';
import { useEffect, useState } from 'react';

const MisCursosCreados = () => {
  const [cursos, setCursos] = useState([]);
  // carga de lista de cursos
  useEffect(() => {
    (async () => {
      // Consumir API
      const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Token 476a0d0d4f368cb649935e1ecca5a633cd45d772',
      };
      const response = await fetch('http://localhost:8000/courses/created/', {
        method: 'GET',
        headers: headers,
      });
      const data = await response.json();
      setCursos(data);
    })();
  }, []);
  return (
    <Wrapper>
      <div className="album py-5 bg-light">
        <div className="container">
          <div>
            <h1 className="text-center">Mis Cursos Creados</h1>
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

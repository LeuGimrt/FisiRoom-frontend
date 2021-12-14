import { Curso } from 'common/types';
import CardCourse from 'components/Card/CardCourse';
import Wrapper from 'containers/Wrapper';
import { useEffect, useState } from 'react';

const MisCursos = () => {
  const [cursos, setCursos] = useState<Curso[]>([]);
  // carga de lista de cursos
  useEffect(() => {
    (async () => {
      // Consumir API
      const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Token 652d6f18ce0f3c02bf115d87cb3f665cf6b57d14',
      };
      const response = await fetch('http://localhost:8000/courses/created/', {
        method: 'GET',
        headers: headers,
      });
      const data = await response.json();
      console.log('data');
      console.log(data);
      setCursos(data);
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

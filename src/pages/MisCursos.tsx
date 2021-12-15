import { Curso } from 'common/types';
import CardCourse from 'components/Card/CardCourse';
import Wrapper from 'containers/Wrapper';
<<<<<<< Updated upstream
import { useEffect, useState } from 'react';
import axiosInstance from 'api/config';
import { getCourses } from 'api/getCourses';
=======
import { PropsWithRef, useEffect, useState } from 'react';
>>>>>>> Stashed changes

const MisCursos = (props: PropsWithRef<any>) => {
  const [cursos, setCursos] = useState([]);
  // carga de lista de cursos
  useEffect(() => {
<<<<<<< Updated upstream
    // Consumir API
    getCourses()
      .then((response) => {
        console.log('data:', response.data);
        setCursos(response.data);
      })
      .catch((e) => {
        console.error('Error: ', e);
      });
=======
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
>>>>>>> Stashed changes
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
export default MisCursos;

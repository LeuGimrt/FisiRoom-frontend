import { Curso } from 'common/types';
import CardCourse from 'components/Card/CardCourse';
import Wrapper from 'containers/Wrapper/Wrapper';
import { PropsWithRef, useEffect, useState } from 'react';
import { getCoursesEnrolled } from 'api/getCoursesEnrolled';

const MisCursos = (props: PropsWithRef<any>) => {
  const [cursos, setCursos] = useState([]);
  // carga de lista de cursos
  useEffect(() => {
    // Consumir API
    getCoursesEnrolled()
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
                  day_of_the_week={curso.day_of_the_week}
                  time_start={curso.time_start}
                  time_end={curso.time_end}
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

import { Curso } from 'common/types';
import CardCourse from 'components/Card/CardCourse';
import { PropsWithRef, useEffect, useState } from 'react';
import { getCoursesEnrolled } from 'api/getCoursesEnrolled';
import Wrapper from '../containers/Wrapper/Wrapper';
import Header from 'components/Header/Header';
import Spinner from 'components/Spinner/Spinner';

const MisCursos = (props: PropsWithRef<any>) => {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);
  // carga de lista de cursos

  useEffect(() => {
    // Consumir API
    getCoursesEnrolled()
      .then((response) => {
        console.log('data:', response.data);
        setCursos(response.data);
        setLoading(false);
      })
      .catch((e) => {
        console.error('Error: ', e);
      });
  }, []);

  return (
    <Wrapper>
      <div className="album py-5 bg-light">
        <div className="container">
          <Header centered>Mis Cursos Inscritos</Header>
          <div className="row">
            {loading ? (
              <Spinner />
            ) : cursos.length === 0 ? (
              <div
                style={{ minHeight: 120 }}
                className="d-flex justify-content-center align-items-center"
              >
                <span>Aún no se ha inscrito a ningún curso.</span>
              </div>
            ) : (
              cursos.map((curso: Curso) => {
                return (
                  <CardCourse
                    image={curso.image}
                    key={curso.id}
                    id={curso.id}
                    title={curso.title}
                    day={curso.day}
                    day_of_the_week={curso.day_of_the_week}
                    time_start={curso.time_start}
                    time_end={curso.time_end}
                    type="enrolled"
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default MisCursos;

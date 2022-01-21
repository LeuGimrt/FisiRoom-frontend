import { getCourses } from 'api/getCourses';
import { Curso } from 'common/types';
import CardCourse from 'components/Card/CardCourse';
import Wrapper from 'containers/Wrapper/Wrapper';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';
import Header from 'components/Header/Header';
import { deleteCourse } from 'api/deleteCourse';
import { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

const MisCursosCreados = () => {
  const [cursos, setCursos] = useState<Curso[]>([]);
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

  const handleDeleteCourse = (id: number) => {
    deleteCourse(id)
      .then((response: AxiosResponse) => {
        toast.success('Curso eliminado correctamente');
        setCursos(cursos.filter((x) => x.id === id));
      })
      .catch((e: AxiosError) => {
        toast.error('Ocurrió un error :(');
        console.log(e);
      });
  };

  return (
    <Wrapper>
      <div className="album py-3 bg-light">
        <div className="container">
          <Header centered>Mis Cursos Creados</Header>
          <div className="row ">
            <div className="d-flex justify-content-center py-3 border-bottom">
              <Link to="/cursos/crear">
                <Button
                  type="button"
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
                  title={curso.title}
                  image={curso.image}
                  day_of_the_week={curso.day_of_the_week}
                  time_start={curso.time_start}
                  time_end={curso.time_end}
                  type="created"
                  handleDelete={handleDeleteCourse}
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

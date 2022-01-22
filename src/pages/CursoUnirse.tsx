import Wrapper from 'containers/Wrapper/Wrapper';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router';
import { enrollUser } from 'api/enrollUser';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { initialCourseData } from 'common/constants';
import { Curso } from 'common/types';
import { getCourseDetails } from 'api/getCourseDetails';
import { AxiosResponse } from 'axios';
import { formatDate } from 'common/utils/formatDate';
import Button from 'components/Button/Button';
import Spinner from 'components/Spinner/Spinner';

const CursoUnirse = () => {
  //logica

  const { cursoId } = useParams();
  const navigate = useNavigate();
  const [curso, setCurso] = useState<Curso>(initialCourseData);
  const [loading, setLoading] = useState(true);

  const enrollUserCallback = () => {
    enrollUser(cursoId ? cursoId : '')
      .then(() => {
        toast.success('Inscripción registrada correctamente');
        navigate('/cursos');
      })
      .catch(() => {
        toast.error('Ocurrió un error :(');
      });
  };

  useEffect(() => {
    getCourseDetails(cursoId ? cursoId : '').then((response: AxiosResponse) => {
      setCurso(response.data);
      setLoading(false);
      console.log(response.data);
    });
  }, []);

  //respuesta
  return (
    <Wrapper>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container d-flex flex-column h-100 justify-content-center align-items-center">
          <h3>Unirse a Curso : {curso.title}</h3>
          <p>Docente: {curso.owner_name}</p>
          <br />
          <small>
            <strong>{`${curso.day_of_the_week} - ${curso.time_start.slice(
              0,
              5
            )}  hasta  ${curso.time_end.slice(0, 5)}`}</strong>
          </small>
          <div className="d-flex justify-content-between mt-4">
            <Link
              to="/cursos"
              onClick={() => {
                toast.warning('Se rechazó la invitación');
              }}
              className="btn btn-light px-4 mx-4"
            >
              Rechazar
            </Link>
            <Button
              onClick={enrollUserCallback}
              className="px-5 mx-4"
              color="primary"
              elevated
            >
              Unirse
            </Button>
          </div>
        </div>
      )}
    </Wrapper>
  );
};
export default CursoUnirse;

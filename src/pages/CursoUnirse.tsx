import Wrapper from 'containers/Wrapper/Wrapper';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router';
import { enrollUser } from 'api/enrollUser';
import { toast } from 'react-toastify';

const CursoUnirse = () => {
  //logica

  const { cursoId } = useParams();
  const navigate = useNavigate();

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

  //respuesta
  return (
    <Wrapper>
      <div className="container d-flex h-100 justify-content-center align-items-center">
        <div className="row">
          <div className="col ">
            <h3>Unirse a Curso : Curso tal</h3>
            <div className="d-flex">
              <Link
                to="/cursos"
                onClick={() => {
                  toast.warning('Se rechazó la invitación');
                }}
                className="btn bg-secondary text-light mx-5"
              >
                Rechazar
              </Link>
              <button
                onClick={enrollUserCallback}
                className="btn bg-primary text-light mx-5 "
              >
                Unirse
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default CursoUnirse;

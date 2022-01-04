import GroupListCustomCursos from 'components/GroupList-Custom-Cursos/GroupList-custom.cursos';
import CourseDashboard from 'containers/CourseDashboard/CourseDashboard';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';

const MisCursoTareas = () => {
  //logica
  //respuesta
  return (
    <CourseDashboard>
      <div className="row border-top border-primary pt-2">
        <GroupListCustomCursos activeBtn={'Tareas'}></GroupListCustomCursos>
        <div className="col-9 border border-light p-3">
          <div className="row ">
            <div className="d-flex justify-content-end py-3 border-bottom">
              <Link to="crear">
                <Button type="button" className="mx-1" color="primary" elevated>
                  Crear nueva Tarea
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </CourseDashboard>
  );
};
export default MisCursoTareas;

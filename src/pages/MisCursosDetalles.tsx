import { ButtonItem } from 'common/types';
import GroupListCustomCursos from 'components/GroupList-Custom-Cursos/GroupList-custom.cursos';
import GroupList from 'components/GroupList/GroupList';
import CourseDashboard from 'containers/CourseDashboard/CourseDashboard';

const MisCursoDetalles = () => {
  //logica
  //respuesta
  return (
    <CourseDashboard>
      <div className="row border-top border-primary pt-2">
        <GroupListCustomCursos
          activeBtn={'Información'}
        ></GroupListCustomCursos>
        <div className="col-9 border border-light ">
          <div className="row ">
            <div className="d-flex justify-content-start py-4 border-bottom">
              <h2>Descripción del curso</h2>
            </div>
          </div>
          <div className="p-3">
            <p>Descripción breve del curso</p>
          </div>
        </div>
      </div>
    </CourseDashboard>
  );
};
export default MisCursoDetalles;

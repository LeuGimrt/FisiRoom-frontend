import { ButtonItem, newMaterial } from 'common/types';
import Form from 'components/Form/Form';
import GroupListCustomCursos from 'components/GroupList-Custom-Cursos/GroupList-custom.cursos';
import GroupList from 'components/GroupList/GroupList';
import CourseDashboard from 'containers/CourseDashboard/CourseDashboard';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';
import {
  courseCreationSelects,
  courseCreationTextAreas,
  MaterialCreationInputs,
  MaterialCreationSelects,
  MaterialCreationTextAreas,
} from '../common/constants';

const MisCursoTemas = () => {
  //logica
  const handleSubmit = async (data: newMaterial) => {
    console.log(data);
  };
  //respuesta
  return (
    <CourseDashboard>
      <div className="row border-top border-primary pt-2">
        <GroupListCustomCursos activeBtn={'Temas'}></GroupListCustomCursos>
        <div className="col-9 border border-light p-3">
          <div className="row ">
            <div className="d-flex justify-content-end py-3 border-bottom">
              <Link to="crear">
                <Button type="button" className="mx-1" color="primary" elevated>
                  Crear nuevo Material
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </CourseDashboard>
  );
};
export default MisCursoTemas;

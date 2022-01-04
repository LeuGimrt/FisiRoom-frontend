import { newMaterial } from 'common/types';
import GroupListCustomCursos from 'components/GroupList-Custom-Cursos/GroupList-custom.cursos';
import CourseDashboard from 'containers/CourseDashboard/CourseDashboard';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';

const CursoTemas = () => {
  //logica
  const handleSubmit = async (data: newMaterial) => {
    console.log(data);
  };
  //respuesta
  return (
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
  );
};
export default CursoTemas;

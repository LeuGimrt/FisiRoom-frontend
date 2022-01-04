import { newMaterial } from 'common/types';
import Form from 'components/Form/Form';
import GroupListCustomCursos from 'components/GroupList-Custom-Cursos/GroupList-custom.cursos';
import CourseDashboard from 'containers/CourseDashboard/CourseDashboard';
import {
  TareaCreationInputs,
  TareaCreationSelects,
  TareaCreationTextAreas,
} from '../common/constants';

const CrearTarea = () => {
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
          <div className="border-bottom border-primary ">
            <h2 className="text-center">Nueva Tarea</h2>
          </div>
          <Form
            inputs={TareaCreationInputs}
            textAreas={TareaCreationTextAreas}
            selects={TareaCreationSelects}
            callback={handleSubmit}
            btnLabel="Agregar"
          />
        </div>
      </div>
    </CourseDashboard>
  );
};
export default CrearTarea;

import { newMaterial } from 'common/types';
import Form from 'components/Form/Form';
import GroupListCustomCursos from 'components/GroupList-Custom-Cursos/GroupList-custom.cursos';
import CourseDashboard from 'containers/CourseDashboard/CourseDashboard';
import {
  MaterialCreationInputs,
  MaterialCreationSelects,
  MaterialCreationTextAreas,
} from '../common/constants';

const CrearTema = () => {
  //logica
  const handleSubmit = async (data: newMaterial) => {
    console.log('tema creado');
  };
  //respuesta
  return (
    <CourseDashboard>
      <div className="row border-top border-primary pt-2">
        <GroupListCustomCursos activeBtn={'Temas'}></GroupListCustomCursos>
        <div className="col-9 border border-light p-3">
          <div className="border-bottom border-primary ">
            <h2 className="text-center">Nuevo Material</h2>
          </div>
          <Form
            inputs={MaterialCreationInputs}
            textAreas={MaterialCreationTextAreas}
            selects={MaterialCreationSelects}
            callback={handleSubmit}
            btnLabel="Agregar"
          />
        </div>
      </div>
    </CourseDashboard>
  );
};
export default CrearTema;

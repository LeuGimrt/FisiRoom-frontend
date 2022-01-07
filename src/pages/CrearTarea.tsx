import { newMaterial } from 'common/types';
import Form from 'components/Form/Form';
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
  );
};
export default CrearTarea;

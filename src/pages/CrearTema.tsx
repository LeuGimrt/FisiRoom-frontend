import { newMaterial } from 'common/types';
import Form from 'components/Form/Form';
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
  );
};
export default CrearTema;

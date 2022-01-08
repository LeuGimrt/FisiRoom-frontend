import { postAssignment } from 'api/postAssignment';
import { newMaterial } from 'common/types';
import Form from 'components/Form/Form';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import {
  TareaCreationInputs,
  TareaCreationSelects,
  TareaCreationTextAreas,
} from '../common/constants';

const CrearTarea = () => {
  const { cursoId } = useParams();
  //logica
  const handleSubmit = async (data: newMaterial) => {
    postAssignment(cursoId ? cursoId : '', data)
      .then(() => {
        toast.success('La tarea fue subida exitosamente');
      })
      .catch(() => {
        toast.error('Ocurrió un errror');
      });
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

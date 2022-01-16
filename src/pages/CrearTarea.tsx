import { postAssignment } from 'api/postAssignment';
import { newAssignment, newMaterial } from 'common/types';
import Form from 'components/Form/Form';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import {
  TareaCreationInputs,
  TareaCreationTextAreas,
} from '../common/constants';

const CrearTarea = () => {
  const { cursoId } = useParams();
  //logica
  const handleSubmit = async (data: newAssignment) => {
    console.log(data);

    postAssignment(cursoId ? cursoId : '', data)
      .then((response) => {
        toast.success('La tarea fue subida exitosamente');
        console.log(response);
      })
      .catch(() => {
        toast.error('Ocurrió un errror');
      });
  };
  //respuesta
  return (
    <div className="col-12 border border-light p-3">
      <div className="border-bottom border-primary ">
        <h2 className="text-center">Nueva Tarea</h2>
      </div>
      <Form
        inputs={TareaCreationInputs}
        textAreas={TareaCreationTextAreas}
        selects={[]}
        callback={handleSubmit}
        btnLabel="Agregar"
      />
    </div>
  );
};
export default CrearTarea;

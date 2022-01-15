import { postMaterial } from 'api/postMaterial';
import { newMaterial } from 'common/types';
import Form from 'components/Form/Form';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import {
  MaterialCreationInputs,
  MaterialCreationSelects,
  MaterialCreationTextAreas,
} from '../common/constants';

const CrearTema = () => {
  const { cursoId } = useParams();
  //logica
  const handleSubmit = async (data: newMaterial) => {
    console.log(data);

    postMaterial(cursoId ? cursoId : '', data)
      .then((response) => {
        toast.success('El material fue subido exitosamente');
        console.log(response);
      })
      .catch(() => {
        toast.error('Ocurrió un errror');
      });
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

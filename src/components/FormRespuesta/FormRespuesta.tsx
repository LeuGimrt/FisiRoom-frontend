import { newAssignment } from 'common/types';
import Button from 'components/Buttons/Button/Button';
import Form from 'components/Form/Form';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  RespuestaCreationInputs,
  RespuestaCreationTextAreas,
  RespuestaCreationSelects,
} from '../../common/constants';

const FormRespuesta = () => {
  const { cursoId } = useParams();
  //logica
  const handleSubmit = async (data: newAssignment) => {
    console.log('se hizo handlesubnmit');
  };
  return (
    <div>
      <Form
        inputs={RespuestaCreationInputs}
        textAreas={RespuestaCreationTextAreas}
        selects={RespuestaCreationSelects}
        callback={handleSubmit}
        btnLabel={'Entregar respuesta'}
      ></Form>
    </div>
  );
};
export default FormRespuesta;

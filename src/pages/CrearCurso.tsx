import {
  courseCreationInputs,
  courseCreationSelects,
  courseCreationTextAreas,
  registerInputs,
} from 'common/constants';
import { NewUser } from 'common/types';
import Form from 'components/Form/Form';
import Header from 'components/Header/Header';
import { useState } from 'react';
import { Navigate } from 'react-router';
import Wrapper from 'containers/Wrapper';

const CrearCurso = () => {
  const [redirect, setRedirect] = useState(false);
  // TODO: Incorporar la llamada a la api

  const handleSubmit = async (data: NewUser) => {};
  return (
    <Wrapper>
      <div className="py-4 w-100 d-flex flex-column justify-content-center align-items-center">
        <div
          style={{ maxWidth: '600px' }}
          className="w-100 d-flex flex-column justify-content-center align-items-center"
        >
          <Header centered>Cursos</Header>
          <div style={{ maxWidth: '500px' }} className="card my-3 p-2 w-100">
            <Header variant="secondary" centered>
              Crear Curso
            </Header>
            <div className="px-4">
              <Form
                inputs={courseCreationInputs}
                textAreas={courseCreationTextAreas}
                selects={courseCreationSelects}
                callback={handleSubmit}
                btnLabel="Guardar"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CrearCurso;

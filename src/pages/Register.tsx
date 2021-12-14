import { registerInputs } from 'common/constants';
import { NewUser } from 'common/types';
import Form from 'components/Form/Form';
import Header from 'components/Header/Header';
import { useState } from 'react';
import { Navigate } from 'react-router';

const Register = () => {
  const [redirect, setRedirect] = useState(false);
  // TODO: Incorporar la llamada a la api

  const handleSubmit = async (data: NewUser) => {
    await fetch('http://localhost:8000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data,
      }),
    });
    console.log(data);
    setRedirect(true);
  };
  if (redirect) {
    return <Navigate to={'/cursos'} />;
  }
  return (
    <div className="py-4 w-100 d-flex flex-column justify-content-center align-items-center">
      <div
        style={{ maxWidth: '600px' }}
        className="w-100 d-flex flex-column justify-content-center align-items-center"
      >
        <Header centered>Registrar nuevo usuario</Header>

        <div style={{ maxWidth: '500px' }} className="card my-3 p-2 w-100">
          <Header variant="secondary" centered>
            Bienvenido a HoloSchool
          </Header>
          <div className="px-4">
            <Form
              inputs={registerInputs}
              callback={handleSubmit}
              btnLabel="Registrar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

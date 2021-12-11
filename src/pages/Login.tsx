import { loginInputs } from 'common/constants';
import { TokenUser } from 'common/types';
import Form from 'components/Form/Form';
import Header from 'components/Header/Header';
import { useState } from 'react';
import { Navigate } from 'react-router';

const Login = () => {
  const [loginSucess, setState] = useState(false);
  // TODO: Incorporar la llamada a la api
  const handleSubmit = async (data: Object) => {
    const email = Object.values(data)[0];
    const password = Object.values(data)[1];
    /* const number = await fetch(
      `http://localhost:8000/api/user/${user}/${password}`
    ) */
    const number = await fetch(`http://localhost:8000/auth/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //Authorization: 'sdadasdasdasd',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const token: TokenUser = await number.json();
    const codigo = token.token.toString();
    //localstorage
    localStorage.setItem('token', codigo);
    console.log(localStorage.getItem('token'));

    if (localStorage.getItem('token') != '') {
      setState(true);
    }
  };
  if (loginSucess) {
    return <Navigate to={'/cursos'} />;
  }
  return (
    <div className="py-4 w-100 d-flex flex-column justify-content-center align-items-center">
      <div
        style={{ maxWidth: '600px' }}
        className="w-100 d-flex flex-column justify-content-center align-items-center"
      >
        <Header centered>Iniciar Sesión</Header>

        <div style={{ maxWidth: '500px' }} className="card my-3 p-2 w-100">
          <Header variant="secondary" centered>
            Bienvenido a HoloSchool
          </Header>
          <div className="px-4">
            <Form
              inputs={loginInputs}
              callback={handleSubmit}
              btnLabel="Ingresar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

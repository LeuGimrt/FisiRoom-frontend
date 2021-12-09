import { loginInputs } from 'common/constants';
import Form from 'components/Form/Form';
import Header from 'components/Header/Header';

const Login = () => {
  // TODO: Incorporar la llamada a la api
  const handleSubmit = (data: Object) => {
    console.log(data);
  };

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

import Header from 'components/Header/Header';
import Input from 'components/Input/Input';

const Register = () => {
  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
      <div
        style={{ maxWidth: '600px' }}
        className="w-100 d-flex flex-column justify-content-center align-items-center"
      >
        <Header centered>Registrar nuevo usuario</Header>

        <div style={{ maxWidth: '500px' }} className="card my-3 p-2 w-100">
          <Header variant="secondary" centered>
            Bienvenido a HoloSchool
          </Header>
          <form noValidate className="p-2">
            <Input />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

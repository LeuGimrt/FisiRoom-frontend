import axiosInstance from 'api/config';
import { registerInputs } from 'common/constants';
import { NewUser } from 'common/types';
import Form from 'components/Form/Form';
import Header from 'components/Header/Header';

import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import Wrapper from 'containers/Wrapper';

const Register = () => {
  const navigate = useNavigate();

  const showSuccessMsg = () => {
    toast.success('Usuario registrado');
  };

  const showErrorMsg = () => {};

  const handleSubmit = async (data: NewUser) => {
    axiosInstance
      .post('/users/', {
        email: data.email,
        password: data.password,
        confirm_password: data.password,
        username: data.firstname,
        first_name: data.firstname,
        last_name: data.lastname,
      })
      .then((response) => {
        navigate('/login');
        showSuccessMsg();
      })
      .catch((e) => {
        console.log('Error: ', e);
        showErrorMsg();
      });
  };
  return (
    <Wrapper>
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
                textAreas={[]}
                selects={[]}
                callback={handleSubmit}
                btnLabel="Registrar"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Register;

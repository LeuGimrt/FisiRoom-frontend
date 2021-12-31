import { loginInputs } from 'common/constants';
import { LoginData, TokenUser } from 'common/types';
import Form from 'components/Form/Form';
import Header from 'components/Header/Header';
import { useNavigate } from 'react-router';
import Wrapper from 'containers/Wrapper/Wrapper';
import axiosInstance from 'api/config';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (data: LoginData) => {
    axiosInstance
      .post<TokenUser>('/users/login/', data)
      .then((response) => {
        localStorage.setItem('user-token', response.data.token);
        console.log(response.data.token);
        navigate('/cursos');
      })
      .catch((e: AxiosError) => {
        const msg = `Error: ${e.response?.data.message}`;
        console.log(msg);
        toast.error(msg);
      });
  };
  return (
    <Wrapper>
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
                textAreas={[]}
                selects={[]}
                callback={handleSubmit}
                btnLabel="Ingresar"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;

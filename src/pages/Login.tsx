import { loginInputs } from 'common/constants';
import { LoginData, TokenUser, User, UserData } from 'common/types';
import Form from 'components/Form/Form';
import Header from 'components/Header/Header';
import { useNavigate } from 'react-router';
import Wrapper from 'containers/Wrapper/Wrapper';
import axiosInstance from 'api/config';
import { toast } from 'react-toastify';
import { AxiosError, AxiosResponse } from 'axios';
import { UserContext } from 'context/UserContext';
import { useContext } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const handleSubmit = async (data: LoginData) => {
    axiosInstance
      .post<UserData>('/users/login/', data)
      .then((response: AxiosResponse<UserData>) => {
        localStorage.setItem('user-token', response.data.token);
        setUser(response.data);
        localStorage.setItem('user-data', JSON.stringify(response.data));
        localStorage.setItem(
          'user-theme',
          JSON.stringify({
            colorTheme: response.data.visual_config,
            fontSize: '16px', // modificar con la respuesta
          })
        );

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

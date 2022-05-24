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
        // guardar en user-token en cookies
        localStorage.setItem('user-token', response.data.token);
        setUser(response.data);
        localStorage.setItem('user-data', JSON.stringify(response.data));

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
      <div className="row h-100">
        <div className="col-12 col-md-6 d-none d-md-flex align-items-center justify-content-center">
          <img
            style={{ maxHeight: '70vh', minHeight: '400px' }}
            src="/assets/images/search.png"
            alt=""
          />
        </div>
        <div className="col-12 col-md-6 py-4 d-flex flex-column justify-content-center align-items-center">
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
      </div>
    </Wrapper>
  );
};

export default Login;

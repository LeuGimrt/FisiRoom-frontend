import axiosInstance from 'api/config';
import { registerInputs } from 'common/constants';
import { NewUser } from 'common/types';
import Form from 'components/Form/Form';
import Header from 'components/Header/Header';

import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import Wrapper from 'containers/Wrapper/Wrapper';
import React from 'react';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data: NewUser) => {
    if (data.cpassword !== data.password) {
      toast.error('Las contraseñas no coinciden');
      return;
    }
    axiosInstance
      .post('/users/', {
        email: data.email,
        password: data.password,
        confirm_password: data.cpassword,
        username: data.firstname,
        first_name: data.firstname,
        last_name: data.lastname,
        visual_config: 0,
      })
      .then((response) => {
        navigate('/login');
        toast.success('Usuario registrado');
      })
      .catch((e) => {
        console.log('Error: ', e);
        toast.error('Ocurrió un error en el servidor');
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
      </div>
    </Wrapper>
  );
};

export default Register;

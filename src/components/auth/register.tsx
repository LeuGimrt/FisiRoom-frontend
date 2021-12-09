import React, {
  PropsWithRef,
  useReducer,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
//import { Redirect } from 'react-router-dom';
import { stringify } from 'querystring';
import { TokenUser } from '../../common/types';
import { Navigate } from 'react-router';
import WrapperLogin from 'containers/WrapperLogin';

//state type

type State = {
  username: string;
  password: string;
  isButtonDisabled: boolean;
  helperText: string;
  isError: boolean;
  go: boolean;
};

const initialState: State = {
  username: '',
  password: '',
  isButtonDisabled: true,
  helperText: '',
  isError: false,
  go: true,
};

const Register = () => {
  const [nombre, setUsername] = useState('');
  const [correo, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  //registar
  const submit = async (e: SyntheticEvent) => {
    console.log('registrando');
    e.preventDefault();
    console.log(nombre);
    console.log(correo);
    console.log(password);

    console.log(
      JSON.stringify({
        nombre,
        correo,
        password,
      })
    );
    await fetch('http://localhost:8000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre,
        correo,
        password,
      }),
    });
    console.log('fetch finished');
    setRedirect(true);
  };
  if (redirect) {
    return <Navigate to={'/cursos'} />;
  }
  return (
    <WrapperLogin>
      <form
        className="container"
        noValidate
        autoComplete="off"
        onSubmit={submit}
      >
        <Card className="card">
          <CardHeader className=" header" title="Iniciar Sesion" />
          <CardContent>
            <div>
              <TextField
                fullWidth
                id="username"
                type="username"
                label="Username"
                placeholder="Username"
                margin="normal"
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                fullWidth
                id="correo"
                type="correo"
                label="Correo electrónico"
                placeholder="Correo"
                margin="normal"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                margin="normal"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>
          <CardActions>
            <button color="secondary" className="btn btn-primary">
              REGISTRARSE
            </button>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              className="btn btn-primary"
            >
              Registrarse
            </Button>
          </CardActions>
        </Card>
      </form>
    </WrapperLogin>
  );
};

export default Register;

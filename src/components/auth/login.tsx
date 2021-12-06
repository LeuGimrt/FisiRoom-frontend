import React, { PropsWithRef, useReducer, SyntheticEvent, useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
//import { Redirect } from 'react-router-dom';
import { stringify } from 'querystring';
import { TokenUser } from '../../Interfaces/interfaces';
import { Navigate } from 'react-router';
import WrapperLogin from 'components/WrapperLogin';


//state type

type State = {
  username: string
  password:  string
  isButtonDisabled: boolean
  helperText: string
  isError: boolean
  go: boolean
};

const initialState:State = {
  username: "",
  password: "",
  isButtonDisabled: true,
  helperText: '',
  isError: false,
  go: true
};

type Action = { type: 'setUsername', payload: string }
  | { type: 'setPassword', payload: string }
  | { type: 'setIsButtonDisabled', payload: boolean }
  | { type: 'loginSuccess', payload: string }
  | { type: 'loginFailed', payload: string }
  | { type: 'setIsError', payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setUsername': 
      return {
        ...state,
        username: action.payload
      };
    case 'setPassword': 
      return {
        ...state,
        password: action.payload
      };
    case 'setIsButtonDisabled': 
      return {
        ...state,
        isButtonDisabled: action.payload
      };
    case 'loginSuccess': 
      
      return {
        ...state,
        helperText: action.payload,
        isError: false,
      };
      

    case 'loginFailed': 
      return {
        ...state,
        helperText: action.payload,
        isError: true
      };
    case 'setIsError': 
      return {
        ...state,
        isError: action.payload
      };
  }
}

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [redirect, setRedirect] = useState(false);

  const [nombre, setUsername] = useState('');
  const [correo, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [contraseña, setPassword] = useState('');
  //localStorage.setItem("token", "1");
  const [Token, setToken] = useState('');

  //setToken(localStorage.setItem("token", "2"));
  
  useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
     dispatch({
       type: 'setIsButtonDisabled',
       payload: false
     });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true
      });
    }
  }, [state.username, state.password]);


  
  const handleLogin = async () => {
    
    // localhost:8005/api/user/kenny@gmail.com/1234567
    console.log("asda");
    console.log(state.username);
    const correo = state.username.toString();
    const pass = state.password.toString();
    console.log(correo);
    console.log(pass);
    const url = `http://localhost:8000/api/user/${correo}/${pass}`;
    const number = await fetch(url);
    //const number = await fetch(`http://localhost:8005/api/user/${state.username}/${state.password}`);
    //const number = await fetch(`http://localhost:8000/api/user/k/123456`);
    //const codigo = JSON.stringify(response);
    //const number = await fetch(url);
    const product: TokenUser = await number.json();
    console.log(product.id)
    const codigo = product.id.toString();
    console.log(codigo)
    //setToken(codigo)
    localStorage.setItem( "token", codigo );
    console.log(localStorage.getItem("token"))

    if (localStorage.getItem("token")!= "") {
    // if (state.password === data.contraseña) {
    //if (state.username === 'abc' && state.password === '123') {
      dispatch({
        type: 'loginSuccess',
        payload: 'Login Successfully',  
      });
      setRedirect(true);
      
    } else {
      dispatch({
        type: 'loginFailed',
        payload: 'Incorrect username or password'
      });

    }
    
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setUsername',
        payload: event.target.value
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    }

    if (redirect) {
      return <Navigate to={'/cursos'}/>
    }

  return (
    <WrapperLogin>
      <form className="container" noValidate autoComplete="off">
      <Card className="card">
        <CardHeader className=" header" title="Iniciar Sesion" />
        <CardContent>
          <div>
            <TextField
              error={state.isError}
              fullWidth
              id="username"
              type="username"
              label="Username"
              placeholder="Username"
              margin="normal"
              onChange={handleUsernameChange}
              onKeyPress={handleKeyPress}
            />
            <TextField
              error={state.isError}
              fullWidth
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal"
              helperText={state.helperText}
              onChange={handlePasswordChange}
              onKeyPress={handleKeyPress}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className="btn btn-primary"
            onClick={handleLogin}
            disabled={state.isButtonDisabled}>
            Ingresar
          </Button>
        </CardActions>
      </Card>
      </form>
    </WrapperLogin>
  );
}

export default Login;


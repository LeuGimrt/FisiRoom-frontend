import 'common/sassStyles/globalStyles.scss';
import 'bootswatch/dist/zephyr/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import Register from 'pages/Register';
import MisCursos from 'pages/MisCursos';
import Home from 'pages/Home';

import MisCursosCreados from 'pages/MisCursosCreados';
import { ToastContainer } from 'react-toastify';
import CrearCurso from 'pages/CrearCurso';
import SeleccionColor from 'pages/SeleccionColor';
import MisCursoDetalles from './pages/MisCursosDetalles';
import MisCursoTemas from './pages/MisCursosTemas';
import MisCursoTareas from 'pages/MisCursosTareas';
import CrearTema from 'pages/CrearTema';
import CrearTarea from 'pages/CrearTarea';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<MisCursos />} />
        <Route path="/cursoscreados" element={<MisCursosCreados />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cursos/crear" element={<CrearCurso />} />
        <Route path="/configuracion/color" element={<SeleccionColor />} />
        <Route path="/curso">
          <Route path="detalles" element={<MisCursoDetalles />} />
          <Route path="temas">
            <Route path="" element={<MisCursoTemas />} />
            <Route path="crear" element={<CrearTema />} />
          </Route>
          <Route path="tareas">
            <Route path="" element={<MisCursoTareas />} />
            <Route path="crear" element={<CrearTarea />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer autoClose={4000} />
    </>
  );
}

export default App;

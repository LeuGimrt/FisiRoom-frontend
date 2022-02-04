import { Route, Routes as DOMRoutes } from 'react-router-dom';
import Login from 'pages/Login';
import Register from 'pages/Register';
import MisCursos from 'pages/MisCursos';
import Home from 'pages/Home';

import MisCursosCreados from 'pages/MisCursosCreados';
import CrearCurso from 'pages/CrearCurso';
import SeleccionColor from 'pages/SeleccionColor';
import CursoDetalles from 'pages/CursoDetalles';
import CursoTareas from 'pages/CursoTareas';
import CursoTemas from 'pages/CursoTemas';
import CrearTema from 'pages/CrearTema';
import CrearTarea from 'pages/CrearTarea';
import Curso from 'pages/Curso';
import ProtectedRoutes from './ProtectedRoutes';
import NotFoundPage from 'pages/NotFoundPage';

import SeleccionFuente from 'pages/SeleccionFuente';
import Configuracion from 'pages/Configuracion';

import SeleccionCursor from 'pages/SeleccionCursor';
import RespuestaTarea from '../../pages/RespuestaTarea';
import CursoGestionarAlumnos from 'pages/CursoGestionarAlumnos';
import TareaRespuesta from 'pages/TareaRespuesta';
import PublicRoutes from './PublicRoutes';
import CursoUnirse from 'pages/CursoUnirse';
import TemaDetalles from 'pages/TemaDetalles';
import Home2 from 'pages/Home-loggedIn';

const Routes = () => {
  return (
    <DOMRoutes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Home2 />} />
        <Route path="/cursos/crear" element={<CrearCurso />} />
        <Route path="/configuracion" element={<Configuracion />}>
          <Route path="color" element={<SeleccionColor />} />
          <Route path="fuente" element={<SeleccionFuente />} />
          <Route path="cursor" element={<SeleccionCursor />} />
        </Route>
        <Route path="/curso/:cursoId/unirse" element={<CursoUnirse />} />
        <Route path="/curso/:cursoId" element={<Curso />}>
          <Route path="detalles" element={<CursoDetalles />} />

          <Route path="temas">
            <Route path="" element={<CursoTemas />} />
            <Route path="crear" element={<CrearTema />} />
            <Route path=":temaId/detalles" element={<TemaDetalles />} />
          </Route>
          <Route path="gestionar-tareas">
            <Route path="" element={<CursoTareas />} />
            <Route path="crear" element={<CrearTarea />} />
            <Route path=":tareaId/detalles">
              <Route path="" element={<RespuestaTarea />} />
              <Route path="entregas" element={<TareaRespuesta />} />
            </Route>
          </Route>
          <Route path="gestionar-alumnos">
            <Route path="" element={<CursoGestionarAlumnos />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/cursos" element={<MisCursos />} />
        <Route path="/cursos-creados" element={<MisCursosCreados />} />
      </Route>

      {/* Fallback Route */}
      <Route path="*" element={<NotFoundPage />} />
    </DOMRoutes>
  );
};

export default Routes;

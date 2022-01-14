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

const Routes = () => {
  return (
    <DOMRoutes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/cursos/crear" element={<CrearCurso />} />
        <Route path="/configuracion/color" element={<SeleccionColor />} />
        <Route path="/curso/:cursoId" element={<Curso />}>
          <Route path="detalles" element={<CursoDetalles />} />
          <Route path="temas">
            <Route path="" element={<CursoTemas />} />
            <Route path="crear" element={<CrearTema />} />
          </Route>
          <Route path="gestionar-tareas">
            <Route path="" element={<CursoTareas />} />
            <Route path="crear" element={<CrearTarea />} />
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

import 'common/sassStyles/globalStyles.scss';
import 'bootswatch/dist/zephyr/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import Register from 'pages/Register';
import MisCursos from 'pages/MisCursos';
import Home from 'pages/Home';
import 'react-toastify/dist/ReactToastify.css';
import MisCursosCreados from 'pages/MisCursosCreados';
import CursosForm from 'pages/CursosForm';
import { ToastContainer } from 'react-toastify';
import CrearCurso from 'pages/CrearCurso';
import Footer from 'components/Footer/Footer';
import Navbar from 'components/Navbar/Navbar';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/cursos" element={<MisCursos />} />
        <Route path="/cursoscreados" element={<MisCursosCreados />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cursos/crear" element={<CrearCurso />} />
      </Routes>
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;

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
      </Routes>
    </>
  );
}

export default App;

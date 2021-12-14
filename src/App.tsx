import 'common/sassStyles/globalStyles.scss';
import 'bootswatch/dist/zephyr/bootstrap.min.css';
import Navbar from 'components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Footer from 'components/Footer/Footer';
import MisCursos from 'pages/MisCursos';
import MisCursosCreados from 'pages/MisCursosEnseñados';

function App() {
  return (
    <>
      <Navbar />
      <div id="content">
        <div className="container-fluid">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/cursos" element={<MisCursos />} />
            <Route path="/cursoscreados" element={<MisCursosCreados />} />
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

import 'common/sassStyles/globalStyles.scss';
import 'bootswatch/dist/zephyr/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import Register from 'pages/Register';
import MisCursos from 'pages/MisCursos';
<<<<<<< Updated upstream
import MisCursosCreados from 'pages/MisCursosEnseñados';
import Home from 'pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
=======
import MisCursosCreados from 'pages/MisCursosCreados';
>>>>>>> Stashed changes

function App() {
  return (
    <>
<<<<<<< Updated upstream
      <Navbar />
      <div id="content">
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<MisCursos />} />
            <Route path="/cursoscreados" element={<MisCursosCreados />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
      <Footer />
=======
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/cursos" element={<MisCursos />} />
        <Route path="/cursoscreados" element={<MisCursosCreados />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
>>>>>>> Stashed changes
    </>
  );
}

export default App;

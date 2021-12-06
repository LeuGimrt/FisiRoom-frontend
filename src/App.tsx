import './App.css';
import 'bootswatch/dist/zephyr/bootstrap.min.css';
import Navbar from 'components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MisCursos from './components/Dashboards/MisCursos';
import MisCursosEnseñados from 'components/Dashboards/MisCursosEnseñados';
import Login from './components/auth/login';
import Register from 'components/auth/register';

function App() {
  return (
<div className="App">
      {/* <Navbar/>
      <NavbarB/> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Wrapper/>} /> */}
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/cursos' element={<MisCursos/>} />
          <Route path='/cursosmaestro' element={<MisCursosEnseñados/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

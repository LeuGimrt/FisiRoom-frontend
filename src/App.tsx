import './App.css';
import 'bootswatch/dist/zephyr/bootstrap.min.css';
import Navbar from 'components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MisCursos from './components/Dashboards/MisCursos';

function App() {
  return (
<div className="App">
      {/* <Navbar/>
      <NavbarB/> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Wrapper/>} /> */}
          <Route path="/" element={<MisCursos/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import 'common/sassStyles/globalStyles.scss';
import 'bootswatch/dist/zephyr/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import Routes from 'components/Router/Routes';

function App() {
  return (
    <>
      <Routes />
      <ToastContainer autoClose={4000} />
    </>
  );
}

export default App;

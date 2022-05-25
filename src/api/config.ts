import axios from 'axios';
import { BASE_URL } from 'common/constants';

//Crear instancia de Axios por archivo de configuración o de variable de entorno
//Como se ve a continuación
/*const axiosInstance = axios.create({
  baseURL:  process.env.REACT_APP_BASE_URL; 
});*/

const axiosInstance = axios.create({
  baseURL: BASE_URL || 'http://localhost:8000/',
});

export default axiosInstance;

import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

// // Agregamos la URL base de nuestra API
// axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

// export const customHeaders = {
//   'Content-Type': 'application/json',
//   Accept: 'application/json'
// };

// export const apiUrl = `${baseURL}`;

// export default axios.create({
//   apiUrl,
//   headers: customHeaders
// });



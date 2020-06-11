import axios from 'axios';

const api = axios.create({
  baseURL: 'http://alunos.b7web.com.br:501',
});

export default api;

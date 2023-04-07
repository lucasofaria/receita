import axios from 'axios';

/*
Comando para rodar servidor da API
json-server --watch -d 180 --host 192.168.3.6 db.json
*/

const api = axios.create({
  baseURL: 'http://192.168.3.6:3000'
})

export default api;
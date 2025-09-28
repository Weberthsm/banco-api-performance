import http from 'k6/http';
import { sleep,check } from 'k6';
//const {obterToken} = require('../helpers/autenticacao'); // teste pessoal para ver se funciona
import {obterToken} from '../helpers/autenticacao.js';


export const options = {
  iterations:1,
  
 // vus: 10,
 // duration: '30s',
};

export default function() {
  const token = obterToken();
  const url = 'http://localhost:3000/transferencias';

  const payload = JSON.stringify({
  "contaOrigem": 1,
  "contaDestino": 2,
  "valor": 11,
  "token": "string"
  });

 const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  };

 const res = http.post(url, payload, params);
  sleep(1);

 //console.log(res);

  check(res, {
    'Validar que status é 201': (r) => r.status === 201,
    'Validar que o Token é string': typeof(token) == 'string'
  });

}

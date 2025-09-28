import http from 'k6/http';
import { sleep,check } from 'k6';
import {obterToken} from '../helpers/autenticacao.js';
import{pegarBaseUrl} from '../utils/variaveis.js';


export const options = {
  iterations:1,
  
 // vus: 10,
 // duration: '30s',
};

export default function() {
  const token = obterToken();
  const url = pegarBaseUrl()+'/transferencias';

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

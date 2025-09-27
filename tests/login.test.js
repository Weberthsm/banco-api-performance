import http from 'k6/http';
import { sleep,check } from 'k6';


export const options = {
//  iterations: 50,  / executa 50 chamadas sequenciais
//vus: 10,    // simula 10 usuários simultaneos
//  duration: '30s',

    stages:[
        {duration: '10s', target: 10},
        {duration: '20s', target: 10},
        {duration: '10s', target: 30},
        {duration: '20s', target: 1000},
        {duration: '20s', target: 0}

    ],


    thresholds: {
    
    http_req_duration: ['p(95)<3000', 'max <5000'], // 95% of requests should be below 200ms
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
  },
};


export default function () {
  const url = 'http://localhost:3000/login';
  const payload = JSON.stringify({
    username: 'julio.lima',
    senha: '123456',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  
 const res = http.post(url, payload, params);
  sleep(1);

//console.log(res);

  check(res, {
    'Validar que status é 200': (r) => r.status === 200,
    'Validar que o Token é string':(r) => typeof(r.json().token) == 'string'
  });

    
}
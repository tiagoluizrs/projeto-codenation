// const url = 'http://192.168.0.40:3002/api/codenation-ecommerce/';
const url = 'https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog/';

export const ApiService = {
     get(){
        return fetch(`${url}`)
            .then(response => response.json());
    }
}
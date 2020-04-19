// const url = 'http://192.168.0.40:3002/api/codenation-ecommerce/';
const url = 'https://flask-codenation.herokuapp.com/';

export const ApiService = {
    get(endpoint){
        return fetch(`${url}${endpoint}`)
            .then(response => response.json());
    }
}
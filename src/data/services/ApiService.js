const url = 'http://localhost:3002/api/codenation-ecommerce/';

export const ApiService = {
    get(endpoint){
        return fetch(`${url}${endpoint}`)
            .then(response => response.json());
    }
}
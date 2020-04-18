import { ApiService } from './ApiService';
const endpoint = 'product';

export const ProductService = {
    list(){
        return ApiService.get(endpoint);
    },
    byId(id){
        return ApiService.get(`${endpoint}?id=${id}`);
    },
    byName(name){
        return ApiService.get(`${endpoint}?name=${name}`);
    }
}
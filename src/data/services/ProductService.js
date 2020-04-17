import { ApiService } from './ApiService';
const endpoint = 'product';

export const ProductService = {
    list(){
        return ApiService.get(endpoint);
    }
}
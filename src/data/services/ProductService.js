import { ApiService } from './ApiService';

export const ProductService = {
    list(){
        return ApiService.get();
    },
    async byName(name){
        let products = await ApiService.get();
        let product = (n) => products.filter(product => {
            return product.name === n.replace(/\+/g, " ");
        });
        let productItem = product(name);
        if (productItem.length > 0) return productItem[0];
        return [];
    },
    async bySearchName(name){
        let products = await ApiService.get();
        let productsFound = (n) => products.filter(product => {
            return product.name.indexOf(n.toUpperCase()) > -1 || product.name.indexOf(n.toLowerCase()) > -1 || product.name.indexOf(n) > -1;
        });
        return productsFound(name);
    }
}
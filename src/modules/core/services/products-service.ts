import mercadoLibreService from "./mercado-libre-service";
import resultsMapper from "../utils/results-mapper";
import {Product, Results} from "../models/types";
import productsMapper from "../utils/products-mapper";

export class ProductsService {
    async getProductsByName(productName: string): Promise<Results> {
        const products = await mercadoLibreService.getProducts(productName);
        return resultsMapper.mapResults(products);
    }
    async getProductDetail(id: string): Promise<Product> {
        const details = await mercadoLibreService.getDetailProduct(id);
        const description = await mercadoLibreService.getDescriptionProduct(id);
        return productsMapper.mapProduct({
            details,
            description: description.plain_text
        });
    }
}
const productsService = new ProductsService();
export default productsService;

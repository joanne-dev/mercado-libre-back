import productsService from "../services/products-service";
import { Request, Response } from 'express';
import resultsMapper from "../utils/results-mapper";

export class ProductsController {
    async getProducts(rq: Request, rs: Response) {
        let response: any;
        try {
            const results =  await productsService.getProductsByName(rq.query.q as string);
            response = resultsMapper.mapResponseSuccessful(results);
        }catch (error) {
            response = resultsMapper.mapResponseFailed(error);
        }finally {
            rs.status(response.status).json(response);
        }
    }
    async getDetailProduct(rq: Request, rs: Response){
        let response: any;
        try {
            console.log('rq.params: ', rq.params);
            const results =  await productsService.getProductDetail(rq.params.id);
            response = resultsMapper.mapResponseSuccessful(results);
        }catch (error) {
            console.log(error);
            response = resultsMapper.mapResponseFailed(error);
        }finally {
            rs.status(response.status).json(response);
        }
    }
}
const productsController = new ProductsController();
export default productsController;

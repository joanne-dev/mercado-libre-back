import axios from "axios";
import {configEnv} from "../../../config";

export class MercadoLibreService {
    async getProducts(productQuery: string) {
        const response = await axios.get(configEnv.MERCADO_LIBRE+'/sites/MLA/search?q='+productQuery);
        return response.data;
    }
    async getDetailProduct(id: string){
        const response = await axios.get(configEnv.MERCADO_LIBRE+'/items/'+id);
        return response.data;
    }
    async getDescriptionProduct(id: string){
        const response = await axios.get(configEnv.MERCADO_LIBRE+'/items/'+id+'/description');
        return response.data;
    }
}
const mercadoLibreService = new MercadoLibreService();
export default mercadoLibreService;

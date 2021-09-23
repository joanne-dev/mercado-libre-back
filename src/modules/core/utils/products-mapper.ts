import {Author, Item, Product} from "../models/types";
import {GenericMapper} from "./generic-mapper";

export class ProductsMapper extends GenericMapper {
    mapProduct({details, description}: any): Product {
        return {
            author: this.mapAuthor(),
            item: {
                id: details.id,
                title: details.title,
                price: {
                    currency: details.currency_id,
                    amount: details.price,
                    decimals: 2,
                },
                picture: details.pictures[0].url,
                condition: details.condition,
                free_shipping: details.shipping.free_shipping,
                sold_quantity: details.sold_quantity,
                description
            }
        }
    }
}
const productsMapper = new ProductsMapper();
export default productsMapper;

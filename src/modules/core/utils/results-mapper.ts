import { Item, Response, Results} from "../models/types";
import {GenericMapper} from "./generic-mapper";

export class ResultsMapper extends GenericMapper{
    resultFromMercadoLibre: any;
    mapResults(resultFromMercadoLibre: any): Results {
        this.resultFromMercadoLibre = resultFromMercadoLibre;
        return {
            author: this.mapAuthor(),
            categories: this.mapCategories(),
            items: this.mapItems()
        }
    }
    mapCategories(): string[] {
        let categories: string[] = [];
        if (this.resultFromMercadoLibre.filters[0]) {
            this.resultFromMercadoLibre.filters[0].values[0].path_from_root.forEach((category: any) => {
                categories.push(category.name);
            });
        } else {
            const orderByResults = this.resultFromMercadoLibre.available_filters[0].values.sort(this.sortCategories);
            orderByResults.forEach((category: any) => {
                categories.push(category.name);
            });
        }
        return categories;
    }

    sortCategories(a:any, b:any){
        if (a.results < b.results) {
            return 1;
        }
        if (a.results > b.results) {
            return -1;
        }
        return 0;
    }

    mapItems(): any[] {
        const items: any[] = [];
        this.resultFromMercadoLibre.results.forEach((result: any)=> {
            const item: Item = {
                id: result.id,
                title: result.title,
                price: {
                    currency: result.currency_id,
                    amount: result.price,
                    decimals: 2,
                },
                picture: result.thumbnail,
                condition: result.condition,
                free_shipping: result.shipping.free_shipping,
                city_name: result.address.city_name
            }
            items.push(item);
        });
        return items;
    }

    mapResponseSuccessful(data: any): Response{
        return {
            status: 200,
            data
        }
    }
    mapResponseFailed(data: any){
        return {
            status: 500,
            data
        }
    }
}
const resultsMapper = new ResultsMapper();
export default resultsMapper;

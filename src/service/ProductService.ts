import axios from 'axios';
import Product from "@/models/Product";

export default class ProductService {
    index():Promise<Array<Product>> {
        return new Promise((resolve, reject) => {
            axios.get("https://marcosfabrejr.com.br/trustly/index.json")
                .then(function (response) {
                    const listaProdutosAPI = response.data.results;

                    const listaProdutos:Array<Product> = [];
                    
                    listaProdutosAPI.map((produtoAPI:any) => {
                        listaProdutos.push(new Product(
                            produtoAPI.id,
                            produtoAPI.description,
                            produtoAPI.color,
                            produtoAPI.price,
                            produtoAPI.currency,
                            produtoAPI.thumbnailURL,
                            produtoAPI.maxresURL
                        ));
                    });

                    resolve(listaProdutos);
                })
                .catch(function (error) {
                    reject("Error in API call")
                });
        })
    }
}
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductInterface } from '../interfaces/product.interface';

@Injectable()
export class CrudService {

    private urlBase = "https://localhost:7054/api/"

    //Dexlaracion de intancia de http
    constructor(private _http: HttpClient) {
    }

    //get
    getProducts() {

        //cobnsunir el servico con http
        return this._http.get(this.urlBase + 'procedure')
    }

    //post product
    postProduct(product: ProductInterface) {

        //headers
        let headers = new HttpHeaders(
            {
                "Content-Type": "application/json",

            }
        );

        //convertir objeto JSON a string
        let params = JSON.stringify(product)

        //consumo
        return this._http.post(this.urlBase + 'procedure', params, { headers: headers });

    }

    //Put product (update)

    putProduct(product: ProductInterface) {

        //headers
        let headers = new HttpHeaders(
            {
                "Content-Type": "application/json",

            }
        );

        //convertir objeto JSON a string
        let params = JSON.stringify(product)

        //consumo
        return this._http.put(this.urlBase + 'procedure', params, { headers: headers });

    }

    //Delete product
    deleteProduct(id: number) {
        //cobnsunir el servico con http
        // return this._http.delete(this.urlBase + 'procedure' + '/'+ id)
        return this._http.delete(`${this.urlBase}procedure/${id}`);
    }


}
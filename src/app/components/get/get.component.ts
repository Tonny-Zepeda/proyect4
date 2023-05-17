import { Component } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { CrudService } from 'src/app/services/crud.service';

@Component({
    selector: 'app-get',
    templateUrl: './get.component.html',
    styleUrls: ['./get.component.css'],
    providers: [CrudService]

})
export class GetComponent {

    viewPut = false;
    viewDelete = false;

    //Variable contiene los productos
    products: ProductInterface[] = [];

    //instacia del servicio que se va a utilizar  
    constructor(private _crudService: CrudService) {
        this.getProducts();
    }

    //consumo del servicio 
    getProducts() {
        //suscribirse al servicio
        this._crudService.getProducts().subscribe(
            res => {
                //respuesta correcta
                this.products = <ProductInterface[]>res;

            },
            err => {
                //respuesta incorrecta
                console.error(err);

            }
        );
    }

    viewPutFunction(product: ProductInterface) {
        this.viewPut = true;
        this.viewDelete = false;


        console.log(product);

        //gurdar el producto que se actualiza
        localStorage.setItem("product", JSON.stringify(product));


    }

    viewDeleteFunction(product: ProductInterface, index: number) {

        //suscribirse al servicio
        this._crudService.deleteProduct(product.proCodigo).subscribe(
            res => {
                //respuesta correcta
                // this.products = <ProductInterface[]>res;

                this.products.splice(index, 1);

                alert("Se eliminó correctamente");



            },
            err => {
                //respuesta incorrecta
                console.error(err);

            }
        );

        // this.viewPut = false;
        // this.viewDelete = true;
    }

    viewGet() {
        this.viewPut = false;
        this.viewDelete = false;
    }

}
import { Component } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { CrudService } from 'src/app/services/crud.service';

@Component({
    selector: 'app-put',
    templateUrl: './put.component.html',
    styleUrls: ['./put.component.css'],
    providers: [CrudService]
})
export class PutComponent {

    constructor(private _crudService: CrudService) {


    }

    product: ProductInterface = {
        proCodigo: 0,
        proDescripcion: "",
        proNombre: "",
        proPrecio: 0
    }

    viewProduct() {

        console.log(localStorage.getItem("product"));


        let productJson: ProductInterface = JSON.parse(localStorage.getItem("product")!);



        this.product.proCodigo = productJson.proCodigo;
        this.product.proNombre = productJson.proNombre;
        this.product.proDescripcion = productJson.proDescripcion;
        this.product.proPrecio = productJson.proPrecio;
    }

    //crear niuevo producto
    updateProduct() {


        if (!this.product.proNombre) {
            alert("El campo nombre no puede estar vacío");
            return;
        }

        if (!this.product.proDescripcion) {
            alert("El campo descripciono no puede estar vacío");
            return;
        }

        if (!this.product.proPrecio) {
            alert("El campo precio no puede estar vacío");
            return;
        }


        this._crudService.putProduct(this.product).subscribe(
            res => {
                console.log(res);
                alert("Se actualizó el producto correctamente.");

            },
            err => {
                console.log(err);

            }
        );

    }

}
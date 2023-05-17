import { Component } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { CrudService } from 'src/app/services/crud.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
    providers: [CrudService]
})
export class PostComponent {


    constructor(private _crudService: CrudService) {

    }

    product: ProductInterface = {
        proCodigo: 0,
        proDescripcion: "",
        proNombre: "",
        proPrecio: 0
    }

    //crear niuevo producto
    createProduct() {


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


        this._crudService.postProduct(this.product).subscribe(
            res => {
                console.log(res);
                alert("Se creo el producto correctamente.");

            },
            err => {
                console.log(err);

            }
        );

    }

}
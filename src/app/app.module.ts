import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //Permitar usar recursos de internet 
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GetComponent } from './componets/get/get.component';
import { PostComponent } from './componets/post/post.component';
import { PutComponent } from './componets/put/put.component';
import { DeleteComponent } from './componets/delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    GetComponent,
    PostComponent,
    PutComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
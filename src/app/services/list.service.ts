import { Injectable } from '@angular/core';
import { List } from '../classes/lists';

@Injectable()
export class ListService {

  lists:List[] = [];

  constructor() {

    /*
    let list1 = new List("Compras supermercado (Supermarket shopping)");
    let list2 = new List("Juegos deseados (Wished games)");
    let list3 = new List("Cosas universidad (University stuff)");

    this.lists.push( list1 );
    this.lists.push( list2 );
    this.lists.push( list3 );
    */

    this.loadData();

    console.log("Service initialized!");

   }


   updateData() {
     localStorage.setItem( "data", JSON.stringify( this.lists ));
   }


   loadData() {
     if ( localStorage.getItem("data")) {
       this.lists = JSON.parse(localStorage.getItem("data"));
     }
   }


   addList( list:List ) {
     this.lists.push(list);
     this.updateData();
   }


   deleteList( index:number ) {
     this.lists.splice(index, 1);
     this.updateData();
   }

}

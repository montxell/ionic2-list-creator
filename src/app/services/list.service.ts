import { Injectable } from '@angular/core';
import { List } from '../classes/lists';

@Injectable()
export class ListService {

  lists:List[] = [];

  constructor() {

    let list1 = new List("Compras supermercado (Supermarket shopping)");
    let list2 = new List("Juegos deseados (Wished games)");
    let list3 = new List("Cosas universidad (University stuff)");

    this.lists.push( list1 );
    this.lists.push( list2 );
    this.lists.push( list3 );

    console.log("Service initialized!");

   }
}

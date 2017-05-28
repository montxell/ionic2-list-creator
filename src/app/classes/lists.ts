
import { ListItem } from './list-item';

export class List {
  name:string;
  finished:boolean;
  item:ListItem[];

  constructor( name:string ) {
    this.name = name;
    this.finished = false;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

import { List } from '../classes/lists';

@Pipe({
  name: 'pendings',
  pure: false
})
export class PendingsPipe implements PipeTransform {
  transform( lists:List[], completed:boolean = false ): List[] {

    let newList:List[] = [];

    for (let list of lists ) {
      if (list.finished == completed ) {
        newList.push( list );
      }
    }

    return newList;
  }
}

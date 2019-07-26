import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(array: string[], args?: string[]): string[] {
    if (array) {
      const sortField = args[0];
      const sortDirection = args[1];
      let modifier = 1;

      if (sortDirection === 'desc') {
        modifier = -1;
      }

      array.sort((a: string, b: string) => {
        if (a[sortField] < b[sortField]) {
          return -1 * modifier;
        } else if (a[sortField] > b[sortField]) {
          return modifier;
        } else {
          return 0;
        }
      });
      return array;
    }
  }

}

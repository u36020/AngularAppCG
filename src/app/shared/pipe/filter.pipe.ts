import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
    transform(list: any[], filterText: string): any {
      console.log(filterText)
      return list ? list.filter(item => item.title.search(new RegExp(filterText, 'i')) > -1) : [];
    }
}

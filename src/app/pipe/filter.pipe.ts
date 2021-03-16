import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: User[] | null, filterKey: string): User[] {
    if (value === null) {
      return [];
    }

    const filterKeyLowerCase = filterKey.toLocaleLowerCase();

    return value.filter((user: User) => {
      const userNameLowerCase = user.name.toLocaleLowerCase();
      return userNameLowerCase.includes(filterKeyLowerCase);
    })

  }

}

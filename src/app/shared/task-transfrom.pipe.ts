import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskTransform'
})
export class TaskTransformPipe implements PipeTransform {

  transform(value: string, args: string = ''): any {
    return value.charAt(0).toUpperCase() + value.slice(1) + args;
  }

}

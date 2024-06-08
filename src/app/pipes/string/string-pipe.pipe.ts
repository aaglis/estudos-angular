import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringPipe',
  standalone: true
})
export class StringPipePipe implements PipeTransform {

  transform(value: string, args: string): string {
    if(args === 'upper') {
      console.log('entrou upper')
      return value.toUpperCase()
    } else if (args === 'lower') {
      console.log('entrou upper')
      return value.toLowerCase()
    }
    return value
  }

}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(url: any): string {

    if (url == null) {
      return 'assets/noimg.png';
    } else {
      return url;
    }

  }

}

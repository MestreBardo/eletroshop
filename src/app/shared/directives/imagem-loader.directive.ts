import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appImagemLoader]'
})
export class ImagemLoaderDirective {

  @Input('src') imageSrc;
  @HostListener('load')
  loadImage() {
    this.srcAttr = this.imageSrc;
  }

  @HostBinding('attr.src') srcAttr = '../../assets/pics/Loader.svg';
  constructor() { }

}

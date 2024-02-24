import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appProductCard]',
  standalone: true
})
export class ProductCardDirective {
  @Input() appProductCard={}
  @Input() defaultshadow=''

  constructor(private domEle:ElementRef) { 
    this.setDefaultStyles();

  }
  private setDefaultStyles() {
    this.domEle.nativeElement.style.borderRadius = '10px'; 
    this.domEle.nativeElement.style.border = '1px gray'; 
    this.domEle.nativeElement.style.boxShadow = '1px 1px 2px gray';
  }

  private changeProductCard(shadowBorde: any){
    this.domEle.nativeElement.style.border=shadowBorde.border
    this.domEle.nativeElement.style.boxShadow=shadowBorde.boxShadow
    this.domEle.nativeElement.style.borderRadius=shadowBorde.borderRadius
  }
  @HostListener ('mouseenter') onHover(){
    this.changeProductCard(this.appProductCard || this.defaultshadow)

  } 
  @HostListener ('mouseleave') onMouseOut(){
    this.setDefaultStyles();
  }

}

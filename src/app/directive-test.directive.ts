import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectiveTest]'
})
export class DirectiveTestDirective {

  constructor(private el: ElementRef) {
    console.log(Element);
    // Element.nativeElement.innerText="Text is changed by changeText Directive. ";
    // Element.nativeElement.style.backgroundColor="yellow";
  }

  @HostListener('mouseenter') onMouseEnter() {
  this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

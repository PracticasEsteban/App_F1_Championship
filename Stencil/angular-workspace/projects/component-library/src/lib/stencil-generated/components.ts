/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'af1stencil';




export declare interface AppButton extends Components.AppButton {
  /**
   *  
   */
  goBack: EventEmitter<CustomEvent<boolean>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'app-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class AppButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['goBack']);
  }
}


export declare interface AppCardPiloto extends Components.AppCardPiloto {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['piloto']
})
@Component({
  selector: 'app-card-piloto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['piloto']
})
export class AppCardPiloto {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AppTable extends Components.AppTable {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'app-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class AppTable {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AppTablePiloto extends Components.AppTablePiloto {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['piloto']
})
@Component({
  selector: 'app-table-piloto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['piloto']
})
export class AppTablePiloto {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MyComponent extends Components.MyComponent {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['first', 'last', 'middle']
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['first', 'last', 'middle']
})
export class MyComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

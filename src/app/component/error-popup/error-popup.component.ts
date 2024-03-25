import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-error-popup',
  templateUrl: './error-popup.component.html',
  styleUrl: './error-popup.component.css'
})
export class ErrorPopupComponent {

  @Input()
  errorMessage : string = "";

  @Output()
  errorLogin: EventEmitter<boolean> = new EventEmitter();

  onClick(){
    this.errorLogin.emit(false);
  }

}

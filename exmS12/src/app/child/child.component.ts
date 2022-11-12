import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childPost: any[] = []
  @Output() passedEvent = new EventEmitter();
  data: string = 'Holaa soy Giordano desde el componente Hijo';

  constructor() { }

  ngOnInit(): void {
  }

  
  PassEvent() {
    this.passedEvent.emit(this.data);
  }

}

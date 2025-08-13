import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input()
  photoCover: string =""
  @Input()
  cardTitle: string =""
  @Input()
  cardDescription: string =""
  @Input()
  Id:string = "0"
}





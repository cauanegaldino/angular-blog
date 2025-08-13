import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input()
  photoCover:string=""

  @Input()
  cardTitle:string=""

  @Input()
  Id:string="0"

}

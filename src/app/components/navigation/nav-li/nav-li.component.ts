import { Component, Input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'navli',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './nav-li.component.html',
  styleUrl: './nav-li.component.css'
})
export class NavLiComponent {
  category_name: string = ''
  link: string = ''
  @Input()
  set category(value: string) {
    this.category_name = value;
    this.link = `/category/${value}`;
  }
}

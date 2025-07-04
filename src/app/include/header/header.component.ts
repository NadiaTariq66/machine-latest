import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showMenu:boolean = false;
  mobileClick(){
    this.showMenu = !this.showMenu;
  }
  menuClose(){
    this.showMenu = false;
  }
}

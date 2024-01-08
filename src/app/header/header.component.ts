import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;

  openMenu () {this.isMenuOpen = !this.isMenuOpen}

  closeMenu () {this.isMenuOpen = false}
}

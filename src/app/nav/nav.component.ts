import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AddComponent } from "../add/add.component";
import { ViewComponent } from "../view/view.component";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, AddComponent, ViewComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor(private router: Router) {}

  redirectToHome() {
    this.router.navigate(['Home']);
  }

}

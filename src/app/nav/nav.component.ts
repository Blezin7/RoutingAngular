import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  authService = inject(AuthService)

  ngOnInit():void{
    this.authService.user$.subscribe((user:any) => {
      if(user){
        this.authService.currentUserSig.set({
          email: user.email!,
          username: user.displayName!,
        });
      }
      else{
        this.authService.currentUserSig.set(null)
      }
      console.log(this.authService.currentUserSig())
    });
  }

  constructor(private router: Router) {}

  // redirectToHome():void {
  //   this.router.navigate(['Home']);
  // }
  logOut(): void{
    this.authService.logOut()
    this.router.navigate(['Login']);
  }

}

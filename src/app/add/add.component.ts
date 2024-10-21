import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  mtsample:string = 'This is from add component that is interpolated' 
}

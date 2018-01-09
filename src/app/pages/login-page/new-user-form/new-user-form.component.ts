import { Component } from '@angular/core';
import { NewUser } from '../new-user';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})

export class NewUserFormComponent {

  model = new NewUser(' Isaac Owusu',560227269 , ' Banana ');

  submitted = false;

  onSubmit(){ this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic () { return JSON.stringify(this.model); }


}

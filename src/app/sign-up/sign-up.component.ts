import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../Models/User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User = new User();
  message: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    if (form.status === 'VALID') {
      this.message = 'formulaire envoyé avec succès';
    }
  }
}

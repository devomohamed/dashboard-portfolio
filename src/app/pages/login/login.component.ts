import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;

  @ViewChild('video', { static: true }) videoElement!: ElementRef;
  onSubmit() {
    // Login logic here
    console.log({email:this.email,password:this.password});

  }

  ngOnInit() {
    this.videoElement.nativeElement.play();
  }

}

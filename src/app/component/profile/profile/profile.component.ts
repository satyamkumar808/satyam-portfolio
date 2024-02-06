import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UserProfile } from '../../../Types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  user: UserProfile | null = null;
  
  constructor(private userService: UserService){}
  
  ngOnInit(): void {
    this.userService.getProfile(localStorage.getItem('User')??"").subscribe(
      u => this.user = u
    )
  }

}

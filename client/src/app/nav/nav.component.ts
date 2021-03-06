import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any= {}
 

  constructor(public accountService :AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.toastr.success('Login Successfull!','Login');
    }, error => {
      console.log(error);
    })
  }
  logout(){
    this.accountService.logout();
     
    this.toastr.warning('You Are Logged Out!','Logout');
  }

 

  

}

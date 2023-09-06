import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/shared/services/service.service';
import { UserModel } from 'src/app/interface/UserModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private service : ServiceService){}
  userData!:Observable<UserModel[]>
  name:string=''
  company_name:string =''
  desingnation:string = ''
  ngOnInit(): void {
    this.userData = this.service.getUserData()
  }


}

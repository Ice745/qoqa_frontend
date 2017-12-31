import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data-service.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public dataService:DataServiceService) { }

  ngOnInit() {
    
    this.dataService.dummyData.subscribe(data =>{
      console.log(data)
    })
  }

}

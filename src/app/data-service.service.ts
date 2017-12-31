import { Injectable,EventEmitter } from '@angular/core';

@Injectable()
export class DataServiceService {
  public dummyData:EventEmitter<any>;


  constructor() {
    this.dummyData = new EventEmitter();
    this.getDummyData();
   }

   public getDummyData(){
     this.dummyData.emit("I was sent")
   }

}

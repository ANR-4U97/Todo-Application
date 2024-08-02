import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ShareDataType{
  description:String;
  status:boolean;
  index:number;
  estimatedData:Date;

}

 
@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private sharedDataSubject = new BehaviorSubject<ShareDataType>({
    description:'',status:false,index:0, estimatedData:new Date()
  });

  getData():Observable<ShareDataType>{
    return this.sharedDataSubject.asObservable();
  }

  updateData(newData:ShareDataType){
    this.sharedDataSubject.next(newData);
  }
}

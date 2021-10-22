import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  constructor(private service:UserService) { }

  readData:any;
  successMsg: any;

  ngOnInit(): void {
    this.getAllData();
  }

  //GetAllAData
  getAllData(){
    this.service.getAllUser().subscribe((res)=>{
      this.readData = res.data;
    })
  }


  deleteid(id:any){
    this.service.deleteUser(id).subscribe((res)=>{
      this.successMsg = res.message;
      this.getAllData();
    });
  }

}

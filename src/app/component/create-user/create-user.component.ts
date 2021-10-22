import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  successMsg:any;
  errorMsg: any;

  constructor(private service:UserService) { }

  ngOnInit(): void {
  }

  userform = new FormGroup({
    'firstname': new FormControl('', Validators.required),
    'lastname': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.email),
    'telephone': new FormControl('', Validators.required)
  })

  submit(){
    if(this.userform.valid){
      console.log(this.userform.value)
      this.service.postUser(this.userform.value).subscribe((res)=>{
        this.userform.reset();
        this.successMsg = res.message;
      })
    }else{
      this.errorMsg = " All Fields are required";
    }

  }
}

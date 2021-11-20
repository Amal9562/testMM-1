import { Component,OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent, IonSlides, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  min=18;
  max =30;
  age="";
  //age=[];
   testMachineForm:FormGroup;
   @ViewChild("mySlide",{ static: true }) mySlide: IonSlides;
   @ViewChild("mainFocuz",{ static: true }) mainFocuz: IonContent;
   AgeValid: boolean=false;
  constructor(
    private fb:FormBuilder,
    private modal:ModalController,
    private toast:ToastController) {
      this.testMachineForm=  this.fb.group({

        name:["",[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ][a-zA-Z][a-zA-Z]+")]],
        email:["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        age:["",[Validators.required,]],
        contact:["",[Validators.required,Validators.pattern('0\[6-9]\\d{9}')]]
      
       });
     }

  ngOnInit() {
  }
  inputAge(event)
  {
  console.log(event.detail.value)
  if(event.detail.value>this.min && event.detail.value < this.max){
  
  }

  }

  


  ViewData(data)
  {
        console.log("Form values are => ",data)
  }
}

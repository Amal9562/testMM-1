import { Component,OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent, IonSlides, ModalController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  LoginForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private modal:ModalController,
    private toast:ToastController) {

    this.LoginForm=this.fb.group({
     
      formControl_MobileNumber:["",[Validators.required,Validators.pattern('[6-9]\\d{9}')]]
    })
    
  }


  async ngOnInit(){
  
  }
  
    
    
// async show(data)
// {
//   const tost=await this.toast.create({
//     message:data,
//     duration:600,
//     position:"top",
//     color:"secondary",
//   })
//   await tost.present();
// }
    
}

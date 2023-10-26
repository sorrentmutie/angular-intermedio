import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-reactive-form',
  templateUrl: './my-reactive-form.component.html',
  styleUrls: ['./my-reactive-form.component.css']
})
export class MyReactiveFormComponent {

  myGroup: FormGroup | undefined = undefined;
 // myControl = new FormControl('valore iniziae');
 // myObservable$: Observable<string | null> | undefined = undefined;

  constructor(private fb: FormBuilder ) {
    this.myGroup = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      lastName: [''],
    });



    //  this.myControl.valueChanges.subscribe(
    //   value => { if(value && value?.length > 20){
    //     this.myControl.setValue("STOP");
    //    }}
    //  );
    //   this.myObservable$ = this.myControl.valueChanges;
  }

  submit(){
    console.log(this.myGroup);
  }

}

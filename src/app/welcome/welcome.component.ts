import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  message='';

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(){
   this.message = 'welcome '+this.route.snapshot.params['name']
  }

}

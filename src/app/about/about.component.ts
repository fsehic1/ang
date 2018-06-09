import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';      // Add this
//This will give us access to the route parameters.

import { Router } from '@angular/router';             // Add this
//Sometimes, you may need to change the router outlet component 
//based on logic occurring in a component class.
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  goals: any;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    this.route.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    //metoda subscribe daje trenutno stanje observable-a
  }

  sendMeHome() {
    this.router.navigate(['']);
  }
}

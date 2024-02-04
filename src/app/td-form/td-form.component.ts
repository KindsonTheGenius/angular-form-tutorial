import { Component, OnInit } from '@angular/core';
import {Student} from './Student';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {

  countries = ['India', 'USA', 'Nigeria', 'Hungary', 'Canada', 'France'];
  model: Student;


  constructor() { }

  ngOnInit(): void {
    this.model = new Student(1, 'Tech Pro', this.countries[2],
      'Computer Engineering'
    );
  }

  send() {
    console.log(this.model);
  }
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.css']
})
export class RFormComponent implements OnInit {
  rform: FormGroup;
  countries = ['India', 'USA', 'Nigeria', 'Hungary', 'Canada', 'France'];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.rform = this.fb.group({
      id: [''],
      name: ['Kindson'],
      department: [''],
      country: ['']
    });

  }

  send() {
    console.log(this.rform.value);
  }
}

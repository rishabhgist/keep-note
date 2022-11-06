import { Component, OnInit } from '@angular/core';
import { Note } from '../model/note';
import { NOTES } from '../model/notes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  notes = NOTES;

  constructor() { }

  ngOnInit(): void {
  }
 
}

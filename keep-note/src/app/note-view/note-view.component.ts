import { Component, OnInit } from '@angular/core';
import { NOTES } from '../model/notes';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {
  notes = NOTES;
  constructor() { }

  ngOnInit(): void {
  }

}

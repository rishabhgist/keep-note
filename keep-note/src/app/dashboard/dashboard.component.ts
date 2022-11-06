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
  searchNote: string = '';
  search() {
       if (this.searchNote === '' || !this.searchNote)
        this.notes = NOTES;
      else {
        this.notes = NOTES;
        this.notes = this.notes.filter(note => note.title?.startsWith(this.searchNote.toLowerCase()));
      }

  }
}

import { Component, OnInit } from '@angular/core';
import { NOTES } from '../model/notes';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
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

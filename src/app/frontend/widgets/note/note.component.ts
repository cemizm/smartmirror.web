import { Component, OnInit, Input } from '@angular/core';
import {TaskSetting} from "@cemizm/smartmirror-shared";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() setting: TaskSetting;
  constructor() { }

  ngOnInit() {
  }

}

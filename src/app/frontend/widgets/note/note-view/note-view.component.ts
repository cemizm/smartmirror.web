import {Component, Input, OnInit} from "@angular/core";
import {Task, TaskSetting} from "@cemizm/smartmirror-shared";
import {NoteService} from "../note.service";
@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.scss']
})
export class NoteViewComponent implements OnInit {
  private taskList: Array<Task>;
  @Input() setting: TaskSetting | TaskSetting;

  constructor(private noteService: NoteService) {
  }

  ngOnInit() {
    this.noteService.taskListSubject.subscribe(data => this.taskList = data);
  }

}

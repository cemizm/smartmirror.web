import {Component, Input, OnInit} from "@angular/core";
import {Task, TaskService, TaskSetting} from "@cemizm/smartmirror-shared";
import {Observable} from "rxjs/Observable";

const interval = 1000 * 60 * 1 / 2;

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.scss']
})
export class NoteViewComponent implements OnInit {
  private taskList: Array<Task>;
  @Input() setting: TaskSetting | TaskSetting;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    Observable.timer(0, interval).subscribe(() => this.update());
  }

  update() {
    if (!this.setting || !this.setting.oAuthToken || !this.setting.taskListId) {
      return;
    }
    this.taskService.list(this.setting.oAuthToken, this.setting.taskListId).subscribe(data => {
      this.taskList = data.slice(0, this.setting.maxCount);
    });
  }
}

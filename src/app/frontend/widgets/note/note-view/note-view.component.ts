import {Component, Input, OnInit, OnDestroy} from "@angular/core";
import {Task, TaskService, TaskSetting} from "@cemizm/smartmirror-shared";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs";

const interval = 1000 * 60 * 1 / 4;

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.scss']
})
export class NoteViewComponent implements OnDestroy, OnInit {
  private taskList: Array<Task>;
  private sub: Subscription;

  @Input() setting: TaskSetting | TaskSetting;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.sub = Observable.timer(0, interval).subscribe(() => this.update());
  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
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

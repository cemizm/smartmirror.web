import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Task, TaskListService, TaskService} from "@cemizm/smartmirror-shared";
import {WidgetDataUtils} from "../utils/widget.data.utils";
import {Subject} from "rxjs/Subject";

@Injectable()
export class NoteService {
  private widgetDataUtils: WidgetDataUtils;
  private taskList: Array<Task>;
  private _taskListSubject: Subject<Array<Task>>;
  private token = "ya29.GluCBIJUy_eldS0UEnsd7EleZfYZy81MDdR3X-M5PfpDE_DMVp9TWxPl_yVKlMd2yg6AEC7W03va1QK9Nx3EUuN9e0X2g2vR_1ftO2scCLj4_lBhQhr60jlmSrx4";
  private taskListId = "MTc4Nzg5NTM2MjM0NTExNzIzODM6MDow";

  constructor(private http: Http, private taskListService: TaskListService, private taskService: TaskService) {
    this.widgetDataUtils = new WidgetDataUtils(http);
    this._taskListSubject = new Subject<Array<Task>>();

    taskService.list(this.token, this.taskListId).subscribe(taskList => {
      this.taskList = taskList;
      this._taskListSubject.next(this.taskList);
    });
  }

  get taskListSubject(): Subject<Array<Task>> {
    return this._taskListSubject;
  }
}

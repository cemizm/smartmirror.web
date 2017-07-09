import {Component, Input} from "@angular/core";
import {Widget} from "@cemizm/smartmirror-shared";

@Component({
  selector: 'app-widget-container',
  template: `
    <app-weatherpreview *ngIf="widget.type == 1" [setting]="widget.setting"></app-weatherpreview>
    <app-calendar-view *ngIf="widget.type == 2" [setting]="widget.setting"></app-calendar-view>
    <app-news-view *ngIf="widget.type == 3" [setting]="widget.setting"></app-news-view>
    <app-mail-view *ngIf="widget.type == 4" [setting]="widget.setting"></app-mail-view>
    <app-note-view *ngIf="widget.type == 5" [setting]="widget.setting"></app-note-view>
  `
})
export class WidgetContainerComponent {
  @Input() widget: Widget | Widget;
}

import {Component, Input} from "@angular/core";
import {Widget} from "@cemizm/smartmirror-shared";

@Component({
  selector: 'app-widget-container',
  template: `
    <app-weatherpreview *ngIf="widget.type == 1"></app-weatherpreview>
    <app-calendar-view *ngIf="widget.type == 2"></app-calendar-view>
    <app-news-view *ngIf="widget.type == 3"></app-news-view>
    <app-mails *ngIf="widget.type == 4"></app-mails>
    <app-note *ngIf="widget.type == 5"></app-note>
  `
})
export class WidgetContainerComponent {
  @Input() widget: Widget;
}

import {NgModule, OnInit} from "@angular/core";
import {NoteViewComponent} from "./note-view/note-view.component";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [NoteViewComponent],
  declarations: [NoteViewComponent]
})
export class NoteModule implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}

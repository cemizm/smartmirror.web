import {NgModule, OnInit} from "@angular/core";
import {NoteViewComponent} from "./note-view/note-view.component";
import {NoteService} from "./note.service";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [NoteViewComponent],
  declarations: [NoteViewComponent],
  providers: [NoteService]
})
export class NoteModule implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}

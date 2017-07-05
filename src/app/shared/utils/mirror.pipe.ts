import { Pipe, PipeTransform } from '@angular/core';
import {Mirror, Widget, WidgetSide} from "@cemizm/smartmirror-shared";

@Pipe({
  name: 'mirrorPipe'
})
export class MirrorPipe implements PipeTransform {

  transform(mirror: Mirror, side: number): Array<Widget> {

    return mirror.widgets.filter(widget => widget.side == side)
      .sort((a, b) => a.order - b.order);
  }

}

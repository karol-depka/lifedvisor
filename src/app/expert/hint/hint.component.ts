import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { LiHint } from '../../shared-with-testcafe/Hint';

/** Hint, Wish, Problem */
@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css']
})
export class HintComponent implements OnInit {


  @Input()
  isExpanded = false

  @Input()
  wish: LiHint
  //   = {
  //   text: 'Avoid overeating',
  //   children: [
  //     {
  //       text: 'Avoid procrastinating'
  //     },
  //     {
  //       text: 'Make small progress'
  //     }
  //   ]
  // }


  constructor() { }

  ngOnInit() {
  }

  onClickYes() {
    this.isExpanded = true
  }
}

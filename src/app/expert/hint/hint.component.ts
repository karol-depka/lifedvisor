import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

/** Hint, Wish, Problem */
@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css']
})
export class HintComponent implements OnInit {

  @Input()
  wish
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

  isExpanded = false;


  constructor() { }

  ngOnInit() {
  }

  onClickYes() {
    this.isExpanded = true
  }
}

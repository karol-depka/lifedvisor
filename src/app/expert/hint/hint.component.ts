import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  Filter,
  LiHint,
} from '../../shared-with-testcafe/Hint';
import { HintFinder } from '../ask-page/HintFinder';

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
  filter: Filter = ``

  @Input()
  wish: LiHint

  @Input()
  ancestorMatchesFilter: LiHint

  get isOnlyVisibleToShowChild () {
    return ! ( this.matchesFilter() || this.ancestorMatchesFilter )
  }
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

  matchesFilter() {
    // return true
    return new HintFinder().matchesFilter(this.wish, this.filter)
  }

  isVisibleViaFilter(wish: LiHint| string) {
    return new HintFinder().isVisibleViaFilter(wish, this.filter)
  }
}

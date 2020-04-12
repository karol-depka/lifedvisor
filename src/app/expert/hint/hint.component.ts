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
  selector: 'app-hint[filter][wish]',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css']
})
export class HintComponent implements OnInit {

  @Input()
  isExpanded = false

  @Input()
  filter: Filter = ``

  @Input()
  wish!: LiHint | string

  @Input()
  ancestorMatchesFilter?: boolean

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

  static hintsCount = 0
  static hintsCountStrings = 0

  constructor() { }

  ngOnInit() {
    // console.log('hint', HintComponent.hintsCount ++, this.wish)

    if ( typeof this.wish === 'string' ) {
      // console.log('wish is string', HintComponent.hintsCountStrings++)
    }
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

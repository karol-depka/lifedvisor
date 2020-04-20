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

/** Hint, Wish, Problem / Question */
@Component({
  selector: 'app-hint[filter][wish]',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css']
})
export class HintComponent implements OnInit {

  @Input()
  isExpandedManually = false

  @Input()
  filter: Filter = ``

  @Input()
  wish!: LiHint

  @Input()
  ancestorMatchesFilter?: boolean

  get isOnlyVisibleToShowChild () {
    return ! ( this.matchesFilter() || this.ancestorMatchesFilter )
  }

  static hintsCount = 0
  static hintsCountStrings = 0

  constructor() { }

  ngOnInit() {
    // console.log('hint', HintComponent.hintsCount ++, this.wish)

    // if ( typeof this.wish === 'string' ) {
      // console.log('wish is string', HintComponent.hintsCountStrings++)
    // }
  }

  onClickYes() {
    this.isExpandedManually = true
  }

  matchesFilter() {
    // return true
    return new HintFinder().matchesFilter(this.wish, this.filter)
  }

  isVisibleViaFilter(wish: LiHint| string) {
    return new HintFinder().isVisibleViaFilter(wish, this.filter)
  }
}

import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  Filter,
  LiHint,
  LiHintImpl,
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
  wish ! : LiHintImpl

  @Input()
  ancestorMatchesFilter ? : boolean

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
    return this.wish.matchesFilter(this.filter)
  }

  isVisibleViaFilter(hint: LiHintImpl) {
    return hint.isVisibleViaFilter(this.filter)
  }
}

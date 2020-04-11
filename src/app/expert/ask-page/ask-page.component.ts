import {
  Component,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { LiHint } from '../../shared-with-testcafe/Hint';
import { questionsProblemsWishes } from '../../shared-with-testcafe/hints';
import { HintFinder } from './HintFinder';

@Component({
  selector: 'app-ask-page',
  templateUrl: './ask-page.component.html',
  styleUrls: ['./ask-page.component.css']
})
export class AskPageComponent implements OnInit {

  textField = ''
  textFieldDummy = ''

  // filteredProblems = [
  //   {
  //     problemText: 'I have a problem going to sleep at the right time'
  //   },
  //   {
  //     problemText: 'I play too much computer games'
  //   },
  // ]
  //
  //
  filteredProblems: LiHint[] = Object.values(questionsProblemsWishes)
  isExpandAll = false /* better for debugging */

  filterToThrottle$ = new EventEmitter<string>()

  hintFinder = new HintFinder()

  constructor() {
    this.filterToThrottle$.pipe(
      debounceTime(100)
    ).subscribe(value => {
      this.textField = value
    })
  }

  ngOnInit() {
  }

  onChangeFilterText(ev) {
    // console.log('ev', ev)
    if ( typeof ev === 'string' ) {
      // this.filteredProblems = this.hintFinder.getFilteredHints(ev)
      this.filterToThrottle$.emit(ev)
    }
  }

  isVisibleViaFilter(wish: LiHint | string) {
    return this.hintFinder.isVisibleViaFilter(wish, this.textField)
  }
}

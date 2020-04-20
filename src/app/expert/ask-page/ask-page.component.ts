import {
  Component,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import {
  LiHint,
  LiHintImpl,
} from '../../shared-with-testcafe/Hint';
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

  filteredProblems: LiHintImpl[] = Object.values(questionsProblemsWishes)
  isExpandAll = false /* better for debugging */

  filterToThrottle$ = new EventEmitter<string>()

  hintFinder = HintFinder.instance

  constructor() {
    this.filterToThrottle$.pipe(
      debounceTime(100)
    ).subscribe(value => {
      this.textField = value
    })
  }

  ngOnInit() {
  }

  onChangeFilterText(ev: any) {
    // console.log('ev', ev)
    if ( typeof ev === 'string' ) {
      // this.filteredProblems = this.hintFinder.getFilteredHints(ev)
      this.filterToThrottle$.emit(ev)
    }
  }

  isVisibleViaFilter(hint: LiHintImpl) {
    return hint.isVisibleViaFilter(this.textField)
  }
}

import { Component, OnInit } from '@angular/core';
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
  isExpandAll = true /* better for debugging */

  hintFinder = new HintFinder()

  constructor() { }

  ngOnInit() {
  }

  onChangeFilterText(ev) {
    // console.log('ev', ev)
    if ( typeof ev === 'string' ) {
      this.filteredProblems = this.hintFinder.getFilteredHints(ev)
    }
  }
}

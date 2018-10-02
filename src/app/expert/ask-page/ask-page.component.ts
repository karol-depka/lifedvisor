import { Component, OnInit } from '@angular/core';
import { questionsProblemsWishes } from '../../core/hints_problems_questions.data';

@Component({
  selector: 'app-ask-page',
  templateUrl: './ask-page.component.html',
  styleUrls: ['./ask-page.component.css']
})
export class AskPageComponent implements OnInit {

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
  filteredProblems = Object.values(questionsProblemsWishes)
  isExpandAll = false

  constructor() { }

  ngOnInit() {
  }

}

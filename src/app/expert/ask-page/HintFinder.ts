import {
  Filter,
  LiHint,
  LiHintImpl,
} from '../../shared-with-testcafe/Hint';
import { QuestionsProblemsWishes } from '../../shared-with-testcafe/QuestionsProblemsWishes';


export class HintFinder {

  static instance = new HintFinder()

  public questionsProblemsWishes = new QuestionsProblemsWishes()

  constructor(

  ) {}

  getFilteredHints(filter: Filter) {
    return this.questionsProblemsWishes.asArray.filter(hint => {
      // console.log('hint to filter', hint)
      return hint.isVisibleViaFilter(filter)
    })
  }
}

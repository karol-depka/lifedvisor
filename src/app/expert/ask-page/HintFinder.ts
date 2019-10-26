import { QuestionsProblemsWishes } from '../../core/QuestionsProblemsWishes';

export class HintFinder {

  public questionsProblemsWishes = new QuestionsProblemsWishes()

  constructor(

  ) {}

  getFilteredHints(filterText: string) {
    return this.questionsProblemsWishes.asArray.filter(hint => {
      console.log('hint to filter', hint)
      return hint.text.toLowerCase().match(filterText.toLowerCase())
      // return matches(filterText)
    })
  }
}

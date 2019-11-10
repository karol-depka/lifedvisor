import { QuestionsProblemsWishes } from '../../shared-with-testcafe/QuestionsProblemsWishes';

export function textMatch(searchIn: string, searched: string) {
  return searchIn && searchIn.toLowerCase().match(searched.toLowerCase())
}

export class HintFinder {

  public questionsProblemsWishes = new QuestionsProblemsWishes()

  constructor(

  ) {}

  getFilteredHints(filterText: string) {
    return this.questionsProblemsWishes.asArray.filter(hint => {
      // console.log('hint to filter', hint)
      return (
        textMatch(hint.text, filterText) ||
        textMatch(hint.byLang && hint.byLang.es, filterText) ||
        textMatch(hint.byLang && hint.byLang.pl, filterText)
      )
    })
  }
}

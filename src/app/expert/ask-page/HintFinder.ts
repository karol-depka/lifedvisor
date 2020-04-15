import {
  Filter,
  LiHint,
} from '../../shared-with-testcafe/Hint';
import { QuestionsProblemsWishes } from '../../shared-with-testcafe/QuestionsProblemsWishes';
import { escapeRegExp } from '../../utils/regexp.utils';

export function textMatch(searchIn: string | null | undefined, searched: string) {
  searchIn = searchIn || ''
  searched = escapeRegExp(searched)
  let strings = searched.split(' ')
  return strings.every(string => !! (searchIn ?. toLowerCase().match(string.trim().toLowerCase())))
  // for ( let string of strings ) {
  //   const isMatching =
  //   if ( isMatching ) {
  //     return true
  //   }
  // }
  // return false
}

export class HintFinder {

  public questionsProblemsWishes = new QuestionsProblemsWishes()

  constructor(

  ) {}

  getFilteredHints(filter: Filter) {
    return this.questionsProblemsWishes.asArray.filter(hint => {
      // console.log('hint to filter', hint)
      return this.isVisibleViaFilter(hint, filter)
    })
  }

  public matchesFilter(hint: LiHint | string, filter?: Filter): boolean {
    // https://www.wordsapi.com/
    // https://github.com/FinNLP/synonyms
    // https://fusejs.io/demo.html -- fuzzy search with misspellings and accents!
    if ( ! filter ) {
      return true
    }
    if ( typeof hint === 'string' ) {
      return textMatch(hint, filter)
    }
    return (
      // TODO: weights
      textMatch(hint.title, filter) ||
      textMatch(hint.text, filter) ||
      textMatch(hint.subTitle, filter) ||
      textMatch(hint.comments, filter) ||
      textMatch(hint.byLang ?. es, filter) ||
      textMatch(hint.byLang ?. pl, filter) ||
      textMatch(hint.id, filter) ||
      !! hint.keywords ?. some(keyword => textMatch(keyword, filter))
    );
  }

  public isVisibleViaFilter(wish: LiHint | string, filter: Filter): boolean {
    const hint = wish as LiHint;
    return this.matchesFilter(wish, filter)
      || !! ( hint.ifYes ?. some(childWish => this.isVisibleViaFilter(childWish, filter)) )
  }
}

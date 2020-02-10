import {
  Filter,
  LiHint,
} from '../../shared-with-testcafe/Hint';
import { QuestionsProblemsWishes } from '../../shared-with-testcafe/QuestionsProblemsWishes';
import { escapeRegExp } from '../../utils/regexp.utils';

export function textMatch(searchIn: string, searched: string) {
  searched = escapeRegExp(searched)
  let strings = searched.split(' ')
  return strings.every(string => !! (searchIn && searchIn.toLowerCase().match(string.trim().toLowerCase())))
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

  public matchesFilter(hint: LiHint | string, filter?: Filter) {
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
      textMatch(hint.byLang && hint.byLang.es, filter) ||
      textMatch(hint.byLang && hint.byLang.pl, filter)
    );
  }

  public isVisibleViaFilter(wish: LiHint | string, filter: Filter) {
    return this.matchesFilter(wish, filter)
      || (wish as LiHint).ifYes && (wish as LiHint).ifYes.some(childWish => !! this.isVisibleViaFilter(childWish, filter))
  }
}

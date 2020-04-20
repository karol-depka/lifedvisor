import { escapeRegExp } from '../utils/regexp.utils';
import { HintSource } from './HintSource';

export type Filter = string

export class LiHintInclusion {
  /* TODO: examples in the inclusion context; e.g. prioritizing things-hardest-to-change in the context of software design
   * general principle is the same, and the user might have already learned the principle, but the contextual examples might clarify and make the connections stronger
   *
   * Also this could could allow annotating contextually deeper hints in the sub-tree;
   *
   * Users will be able to add their own thoughts and examples OrYoL-style.
   *
   * And journal / progress-tracking for each hint!
   */
}

export class LiHintCommon {

}

export class LiHintDeclaration {

}

export class LiHint {

  constructor(
    public id?: string,
    public ifYes?: LiHintImpl[],
    public byLang?: { es?: string, pl?: string },
    public title?: string /* will be non-optional when I finish removing `text` */,
    public titleSuffix?: string,
    /** TODO: split into title and contents;
     * bodyText? */
    public text?: string,
    public subTitle?: string,
    public exceptions?: string[],
    public source?: string,
    public sources?: HintSource [],
    public when?: string,
    public example?: string /* | LiHintInclusion []*/,
    public examples?: string[] /* | LiHintInclusion []*/,
    public comments?: string,
    public problemText?: string,
    public benefits?: string[],
    /** like Tags in YouTube? - groupings of potential search phrases, as opposed to just keyWORDS? To help improve scoring in algorithm */
    public searchTerms?: string[],
  ) {
  }

}

export function textMatch(searchIn: string | null | undefined, searched: string) {
  if ( ! searchIn ) {
    return false
  }
  searchIn = searchIn ?. toLowerCase() || ''
  searched = escapeRegExp(searched)
  let stringsSplit = searched.split(' ')
  return stringsSplit.every(curString => !! ((searchIn as string).match(curString.trim().toLowerCase())))
}

export class LiHintImpl extends LiHint {

  memoized_matchesFilter = new Map<Filter, boolean>()
  memoized_isVisibleViaFilter = new Map<Filter, boolean>()

  matchesFilter(filter?: Filter): boolean {
    if ( ! filter ) {
      return true
    }
    let memoized = this.memoized_matchesFilter.get(filter);
    if ( ! memoized ) {
      // https://www.wordsapi.com/
      // https://github.com/FinNLP/synonyms
      // https://fusejs.io/demo.html -- fuzzy search with misspellings and accents!
      memoized = (
        // TODO: weights
        textMatch(this.title, filter) ||
        textMatch(this.titleSuffix, filter) ||
        textMatch(this.text, filter) ||
        textMatch(this.subTitle, filter) ||
        textMatch(this.comments, filter) ||
        textMatch(this.byLang?.es, filter) ||
        textMatch(this.byLang?.pl, filter) ||
        textMatch(this.id, filter) ||
        !! this.searchTerms?.some(
          searchTerm => textMatch(searchTerm, filter)
        )
      );
      this.memoized_matchesFilter.set(filter, memoized)
    }
    return memoized
  }

  isVisibleViaFilter(filter: Filter): boolean {
    let memoized = this.memoized_isVisibleViaFilter.get(filter);
    if ( ! memoized ) {
      memoized = this.matchesFilter(filter)
        || !! ( this.ifYes ?. some(childWish => childWish.isVisibleViaFilter(filter)) )
      this.memoized_isVisibleViaFilter.set(filter, memoized)
    }
    return memoized
  }

}

export function hint(param?: LiHint | string): LiHintImpl {
  if ( typeof param === 'string' ) {
    return new LiHintImpl(param)
  } else {
    // TODO: move this check into LiHint self-check method
    if ( param ?. ifYes ?. some(ifYesEl => ! ifYesEl) ) {
      window.alert(Error('bad ifYesEl for ' + JSON.stringify(param)))
    }
  }
  return Object.assign(new LiHintImpl(), (param || {}))
}

/** a marker for hint giving context to redirect to other hint */
export const hintBridge = hint
export const problem = hint
export const wish = hint
export const question = hint

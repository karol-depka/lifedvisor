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
    public ifYes?: LiHint[],
    public byLang?: { es?: string, pl?: string },
    public title?: string /* will be non-optional when I finish removing `text` */,
    /** TODO: split into title and contents */
    public text?: string,
    public subTitle?: string,
    public source?: string,
    public sources?: HintSource [],
    public when?: string,
    public example?: string /* | LiHintInclusion []*/,
    public examples?: string[] /* | LiHintInclusion []*/,
    public comments?: string,
    public problemText?: string,
    public benefits?: string[],
    public keywords?: string[],
  ) {
  }
}

export function hint(param?: LiHint | string): LiHint {
  if ( typeof param === 'string' ) {
    return new LiHint(param)
  }
  return param || {};
}

export const problem = hint
export const wish = hint

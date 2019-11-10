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

export class LiHint {
  id?: string
  constructor(
    public ifYes?: (LiHint | string)[],
    public byLang?: { es?: string, pl?: string },
    /** TODO: rename to title */
    public text?: string,
    public source?: string,
    public when?: string,
    public example?: string /* | LiHintInclusion []*/,
    public examples?: string[] /* | LiHintInclusion []*/,
    public comments?: string,
    public problemText?: string,
    public benefits?: string[],
  ) {
  }
}

export function hint(param?: LiHint): LiHint {
  return param || {};
}

export const problem = hint

import {
  Dict,
  getDictionaryValuesAsArray,
} from '../utils/dictionary-utils';
import { LiHint } from './Hint';
import { questionsProblemsWishes } from './hints';

export class QuestionsProblemsWishes {

  questionsProblemsWishes = questionsProblemsWishes

  asArray = getDictionaryValuesAsArray((this.questionsProblemsWishes as any) as Dict<LiHint>)

}

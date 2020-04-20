import {
  Dict,
  getDictionaryValuesAsArray,
} from '../utils/dictionary-utils';
import {
  LiHint,
  LiHintImpl,
} from './Hint';
import { questionsProblemsWishes } from './hints';

export class QuestionsProblemsWishes {

  questionsProblemsWishes = questionsProblemsWishes

  asArray = getDictionaryValuesAsArray((this.questionsProblemsWishes as any) as Dict<LiHintImpl>)

}

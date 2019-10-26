import {
  Dict,
  getDictionaryValuesAsArray,
} from '../utils/dictionary-utils';
import { questionsProblemsWishes } from './hints';
import { LiHint } from './hints_problems_questions.data';

export class QuestionsProblemsWishes {

  questionsProblemsWishes = questionsProblemsWishes

  asArray = getDictionaryValuesAsArray((this.questionsProblemsWishes as any) as Dict<LiHint>)

}

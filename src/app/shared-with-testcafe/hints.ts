import { LiHint } from './Hint';
import { Questions } from './hints_problems_questions_public.data';
import { PersonalHints } from './hints_problems_questions_personal.data';

function processQuestions(questions: Questions) {
  let keys = Object.keys(questions) as any as keyof Questions;
  let questionsMap = questions as any as ({ [key: string]: LiHint });
  for ( const key of keys ) {
    let value = questionsMap[key];
    if ( ! value ) {
      value = {}
      questionsMap[key] = value
    }
    value.text = value.text || key
    value.id = value.id || key
  }
  return questions
}

export const questionsProblemsWishes = processQuestions(new PersonalHints());

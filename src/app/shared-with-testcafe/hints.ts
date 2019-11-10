import { LiHint } from './Hint';
import { Questions } from './hints_problems_questions.data';
import { PersonalHints } from './hints_problems_questions_personal.data';

function processQuestions(questions: Questions) {
  for ( const key of Object.keys(questions) ) {
    let value = questions[key] as LiHint;
    if ( ! value ) {
      value = {}
      questions[key] = value
    }
    value.text = value.text || key
    value.id = value.id || key
  }
  return questions
}

export const questionsProblemsWishes = processQuestions(new PersonalHints());

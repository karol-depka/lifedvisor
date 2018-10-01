 // Hints, problems, questions, wishes

// Every HINT is also a WISH

export class Questions {

  'progress' = {
    text: 'Make a little progress to boost confidence',
  }

  'confidence' = {
    text: 'Confidence',
    /* text inferred from field name for now */
    ifYes: [
      this.progress,
      {
        text: 'Have a confident body language and posture (body posture and movement can affect the mind/mood'
      }
    ]
  }

  'motivation' = {}
  'discipline' = {}

  'focus' = {
    ifYes: [
      {
        text: 'Invest in removing distracting elements from your surroundings'
      }, {
        text: 'do little tasks quickly, to free the mind from distracting nagging thoughts'
      },
    ]
  }

  'productivity' = {
    ifYes: [
      this.confidence,
      this.focus,
      this.motivation,
      this.discipline,
    ]
  }

  'decisions' = {
    ifYes: [
      {
        text: 'cost-benefit'
      },
      {
        text: 'compare cost (real cost) by the difference to alternatives (no absolute cost)'
      },
      {
        text: 'consider the alternatives'
      },
      {
        text: 'use Pareto principle'
      },
      {
        text: 'Visualize consequences (financial, emotional, physical, productivity, etc)'
      },
    ]
  }
}

function processQuestions(questions: Questions) {
  for ( const key of Object.keys(questions) ) {
    let value = questions[key];
    if ( ! value ) {
      value = {}
      questions[key] = value
    }
    value.text = value.text || key
    value.id = value.id || key
  }
  return questions
}

export const questionsProblemsWishes = processQuestions(new Questions())

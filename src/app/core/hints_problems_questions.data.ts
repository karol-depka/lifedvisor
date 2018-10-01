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




  'I have trouble going to sleep at the right time' = {
    ifYes: [
      {
        text: 'Do you turn off and put away (hide) your electronics and other temptations, including computer, mobile phones'
      },
      {
        text: 'Think about (and visualize) the benefits of going to sleep at the right time, including being well-rested'
      },
    ]
  }

  'Have good sleep' = {
    ifYes: [
      this['I have trouble going to sleep at the right time'],

    ]
  }


  'good decisions' = {
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
      this['Have good sleep'],
    ]
  }

  'productivity' = {
    ifYes: [
      this.confidence,
      this.focus,
      this.motivation,
      this.discipline,
      this['good decisions'],
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

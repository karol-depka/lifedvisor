 // Hints, problems, questions, wishes

// Every HINT is also a WISH

// Ideas:
/* 2018-10-02 22:08 Use */

export class Questions {

  /* cross-cutting concern? But can describe in general too */
  'Progress' = {
    text: 'Make a little progress to boost confidence',
  }

  'Confidence' = {
    /* text inferred from field name for now */
    ifYes: [
      this.Progress,
      {
        text: 'Have a confident body language and posture (body posture and movement can affect the mind/mood'
      }
    ]
  }

  'Self-Esteem' = {
    when: '2018-10-02 22:09',
    ifYes: [
      {
        text: 'Make sure to not make too long breaks between working (and progress, even if small progress) on mayor goals and using major skills, to keep self-esteem up',
        examples: '2018-10-02 22:10 working on TopicFriends/LifeDvisor'
      },
    ]
  }

  'Motivation' = {
    ifYes: [
      /* hope/belief */
      { text: 'Reach a critical mass (proof-of-concept), to legitimize the project in your own mind, and to be able to show others',
        when: '2018-10-02 22:13'
      },
      this['Self-Esteem']
    ]
  }

  'Discipline' = {
    ifYes: [
      this['Motivation'] /* Does discipline require motivation ? */
    ]
  }

  'Write down things (e.g. lists, email draft) to free your mind from nagging thoughts' = {}


  'Focus' = {
    ifYes: [
      {
        text: 'Invest in removing distracting elements from your surroundings'
      }, {
        text: 'do little tasks quickly, to free the mind from distracting nagging thoughts'
      },
      this['Write down things (e.g. lists, email draft) to free your mind from nagging thoughts']
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
      {
        text: 'Improve falling asleep',
        ifYes: [
          this['Write down things (e.g. lists, email draft) to free your mind from nagging thoughts']
        ]
      },
      this['I have trouble going to sleep at the right time'],
    ]
  }


  /* cross-cutting concern? */
  'Good decisions' = {
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
      'When trapped into thinking "either-or", think of ways of being able to realize all the options, or combinations of them. E.g. build a business AND be able to travel -> lifestyle business.'

    ]
  }

  'Energy' = {
    ifYes: [
      {
        text: 'Do physical activity to increase blood oxigenation and feeling of control',
        ifYes: [
          'You can use cleaning (e.g. vacuuming, house cleaning) as a good way to get physical activity while at the same improving the surroundings'
        ]
      },
      this['Have good sleep']
    ]
  }

  'Prioritizing' = {
    ifYes: [
      'Prioritize prioritizing itself',
      'Prioritize things which can shed better light (provide understanding/information) on subsequent tasks (reconnaissance)',
      'Then Prioritize things which involve making decisions which can affect further priorities',
      'Can prioritize things with external dependencies, because of uncertainty of how much they will take',
      'Can prioritize the part (thus need to split tasks) of tasks, where things are written down, to not forget them and to stop nagging thoughts. The other part of the task can be done later when time permits.'
    ]
  }

  'Planning' = {
    ifYes: [
      this['Prioritizing']
    ]
  }

  'Planning a day' = {
    ifYes: [this['Planning']]
  }
  'Planning a life' = {
    ifYes: [this['Planning']]
  }

  'Productivity' = {
    ifYes: [
      this.Confidence,
      this.Focus,
      this.Motivation,
      this.Discipline,
      this['Planning'],
      this['Energy'],
      this['Good decisions'],
    ]
  }

  'Software design' = {
    ifYes: [
      'Early spend the most time&energy designing things that will affect the most other things and the things that will be hardest to change. Things that are easy to change later, should be left out crude, to free up energy and focus on the more important things',
      this['Prioritizing'],
    ]
  }

  'Debugging' = {
    ifYes: [
      'Watch out for false assumptions which make you miss the actual cause of the problemisExpandALl'
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

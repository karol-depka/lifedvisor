// Hints, problems, questions, wishes

// Every HINT is also a WISH

// Ideas:
/* 2018-10-02 22:08 Use */

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
  constructor(
    public ifYes?: (LiHint|string)[],
    /** TODO: rename to title */
    public text?: string,
    public when?: string,
    public example?: string /* | LiHintInclusion []*/,
    public comments?: string,
  ) {}
}

export function hint(param?: LiHint) {
  return param || {}
}

export class Questions {

  'Utilize virtuous circle (and avoid VICIOUS circle no X -> no Y -> etc): motivation/dopamine -> discipline/perseverance -> progress -> self esteem, excitement, confidence -> more motivation' = hint()

  /* cross-cutting concern? But can describe in general too */
  'Progress' = hint({
    ifYes: [
      this['Utilize virtuous circle (and avoid VICIOUS circle no X -> no Y -> etc): motivation/dopamine -> discipline/perseverance -> progress -> self esteem, excitement, confidence -> more motivation'],
    ],
    text: 'Make a little progress to boost confidence',
  })

  'Confidence' = hint({
    /* text inferred from field name for now */
    ifYes: [
      this['Utilize virtuous circle (and avoid VICIOUS circle no X -> no Y -> etc): motivation/dopamine -> discipline/perseverance -> progress -> self esteem, excitement, confidence -> more motivation'],
      this.Progress,
      {
        text: 'Have a confident body language and posture (body posture and movement can affect the mind/mood'
      }
    ]
  })

  'Self-Esteem' = hint({
    when: '2018-10-02 22:09',
    ifYes: [
      this['Utilize virtuous circle (and avoid VICIOUS circle no X -> no Y -> etc): motivation/dopamine -> discipline/perseverance -> progress -> self esteem, excitement, confidence -> more motivation'],
      {
        text: 'Make sure to not make too long breaks between working (and progress, even if small progress) on mayor goals and using major skills, to keep self-esteem up',
        example: '2018-10-02 22:10 working on TopicFriends/LifeDvisor'
      },
      {
        when: '2018-10-03 22:41',
        text: 'Play a game competing against yourself (previous attempts), it will raise your feeling of status. Whereas competing against others can have negative consequences in the form of a threat of lowering their status.',
        comments: '(from Your Brain At Work audiobook)'
      }
    ]
  })


  'Motivation' = hint({
    ifYes: [
      /* FIXME: 'Fun/dopamine' */
      { text: 'Distinguish between "Have to" and "Want to"',
        example: `including company invoices; I don't have to do this`
      },
      this['Utilize virtuous circle (and avoid VICIOUS circle no X -> no Y -> etc): motivation/dopamine -> discipline/perseverance -> progress -> self esteem, excitement, confidence -> more motivation'],
      /* hope/belief */
      { text: 'Reach a critical mass (proof-of-concept), to legitimize the project in your own mind, and to be able to show others',
        when: '2018-10-02 22:13'
      },
      this['Self-Esteem'],
    ]
  })

  'Discipline' = hint({
    ifYes: [
      `Delay gratification, don't DENY gratification`,
      this['Utilize virtuous circle (and avoid VICIOUS circle no X -> no Y -> etc): motivation/dopamine -> discipline/perseverance -> progress -> self esteem, excitement, confidence -> more motivation'],
      this['Motivation'] /* Does discipline require motivation ? */
    ]
  })

  'Write down things (e.g. lists, email draft) to free your mind from nagging thoughts' = hint({})


  'Focus' = hint({
    text: 'Focus and avoiding distractions',
    ifYes: [
      {
        text: 'Invest in removing distracting elements from your surroundings',
        ifYes: [
          'Close unneeded browser tabs and/or open a separate window for the task at hand',
        ]
      }, {
        text: 'do little tasks quickly, to free the mind from distracting nagging thoughts'
      },
      this['Write down things (e.g. lists, email draft) to free your mind from nagging thoughts'],
      'Have separate e-mail/IM accounts for various purposes, to not get distracted by another area while dealing with one area.' +
        '\nConsider innotopic.consulting@gmail.com or consulting@innotopic.com, apps.feedback@innotopic.com, apps.development@innotopic.com, innotopic.apps@gmail.com, etc., to not get distracted in one area while working in another.' +
        'Also topicfriends@gmail.com; also keep in mind delegating (or giving access to) stuff to other people, e.g. assistant, another developer ' ,
      'Disable notifications (sound; and perhaps even on-screen notifications) in all communication media except those used for dealing with urgent things (e.g. phone)'
    ]
  })

  'Go to sleep at the right time' = hint({
    ifYes: [
      {
        text: 'Do you turn off and put away (hide) your electronics and other temptations, including computer, mobile phones'
      },
      {
        text: 'Tomorrow is a day, too (jutro też jest dzień)'
      },
      {
        text: 'Think about (and visualize) the benefits of going to sleep at the right time, including being well-rested'
      },
    ]
  })

  'Have good sleep' = hint({
    ifYes: [
      {
        text: 'Improve falling asleep',
        ifYes: [
          this['Write down things (e.g. lists, email draft) to free your mind from nagging thoughts']
        ]
      },
      this['Go to sleep at the right time'],
    ]
  })


  /* cross-cutting concern? */
  'Good decisions' = hint({
    ifYes: [
      {
        text: 'cost-benefit',
        ifYes: [
          'Consider the following "resources" for cost/benefit: health, time, money, emotion(own/others), energy, focus, reputation, .... TODO from my papelito'
        ]
      },
      {
        text: 'compare cost (real cost) by the difference to alternatives (no absolute cost) or to "default/current" state',
        example: 'e.g. something costs 100 EUR a month but if I don\'t pay this, I have to pay 70 EUR/month anyway,' +
          'so the real cost is 30 EUR, not 100EUR (making the decision easier); and the benefit is e.g. saved time/emotion or other resources.',
      },
      {
        text: 'consider the alternatives',
        ifYes: [
          'Look also at the consequences of inaction or not making the decision',
        ]
      },
      {
        text: 'use Pareto principle'
      },
      {
        text: 'Visualize consequences (financial, emotional, physical, productivity, etc)'
      },
      this['Have good sleep'],
      'When trapped into thinking "either-or", think of ways of being able to realize all the options, or combinations of them. E.g. build a business AND be able to travel -> lifestyle business.',
      'Sleep over it',
      'Visualize consequences of various decisions',
      'Watch out for priming effects',
      'Watch out for cognitive biases; TODO: you are not so smart audiobook',
    ]
  })

  'Decide what I want to be; I can\'t be a sumo wrestler and ski jumper at the same time' = hint({
    ifYes: [
      {
        text: 'Choose if I want to still be free and explore or settle down.'
      }
    ]
  })

  'Energetic music' = hint({})

  'Getting up from sleep/bed' = hint({
    ifYes: [
      this['Energetic music'],
      { when: '2018-10-06 23:04',
        text: '(?) Have done something exciting the previous day/afternoon/evening, to have the dopamine effect spill to the next morning. E.g. in my case it was alcohol/games etc.',
        comments: 'Could be something like a nice TED or progress on an attractive non-vague, non-vaguely-needed task',
        example: 'Kurzweil, TED (psychology/tech/science), Interviews, commencement addresses with Jobs, '
      },
      { text: 'Have a strong light source',
        comments: 'Could be natural sunlight or wake-up light or wake-up clock with light.'
      },
      {
        text: 'Start the day with something fun/energizing and with get-up/bootstrap routine; don\'t try to start with some unattractive/difficult tasks (unless they are urgent enough to get going)',
        comments: 'Then, plan the day; which could be motivating too, to see how much I can achieve.'
        /* TODO: lots of practical examples */
      }
    ]
  })

  /* same as motivation/dopamine ? */
  'Energy' = hint({
    ifYes: [
      {
        text: 'Do physical activity to increase blood oxigenation and feeling of control',
        ifYes: [
          'You can use cleaning (e.g. vacuuming, house cleaning) as a good way to get physical activity while at the same improving the surroundings'
        ]
      },
      this['Have good sleep'],
      this['Energetic music'],
    ]
  })

  'Prioritizing' = hint({
    ifYes: [
      'Early spend the most time&energy designing things that will affect the most other things and the things that will be hardest to change. Things that are easy to change later, should be left out crude, to free up energy and focus on the more important things',
      'Prioritize prioritizing itself',
      'Prioritize things which can shed better light (provide understanding/information) on subsequent tasks (reconnaissance)',
      'Then Prioritize things which involve making decisions which can affect further priorities',
      'Can prioritize things with external dependencies, because of uncertainty of how much they will take',
      'Can prioritize the part (thus need to split tasks) of tasks, where things are written down, to not forget them and to stop nagging thoughts. The other part of the task can be done later when time permits.'
    ]
  })

  'Planning' = hint({
    ifYes: [
      this['Prioritizing']
    ]
  })

  'Planning a day' = hint({
    ifYes: [this['Planning']]
  })

  'Planning a life' = hint({
    ifYes: [this['Planning']]
  })

  'Effectiveness / optimizations' = hint({
    ifYes: [
      {
        text: 'Look for, and utilize, little accidental or semi-accidental coincidences, patterns; it can even double effectiveness; even though it might feel like "cheating".'
      }
    ]
  })

  'Productivity' = hint({
    ifYes: [
      this.Confidence,
      this.Focus,
      this.Motivation,
      this.Discipline,
      this['Planning'],
      this['Energy'],
      this['Good decisions'],
      this['Effectiveness / optimizations']
    ]
  })

  'Software design' = hint({
    ifYes: [
      this['Prioritizing'],
    ]
  })

  'Solving problems' = hint({
    ifYes: [
      'Use lateral thinking',
      'Try to see the problem in a broader context, avoid tunnel vision; perhaps the real/root problems are somewhere else and/or I\'m using incorrect reference point in judging the situation',
      'Look for root-causes (root cause analysis); use the N-whys technique.',
      'Watch out for false assumptions which make you miss the actual cause of the problem',
    ]
  })

  'Debugging' = hint({
    ifYes: [
      this['Solving problems']
    ]
  })

  'Software development' = hint({
    ifYes: [
      {
        text: 'Be faster at programming',
        ifYes: [
          'Use IDE/editor navigation history; back/forward',
          'Use keyboard shortcut to get to matching brace (^M)'
        ]
      },
    ]
  })

  'Dealing with other people' = hint({
    ifYes: [
      {
        text: 'Watch out for triggering other people\'s "status threat"',
        when: '2018-10-06 22:46',
      },
      {
        text: 'Allocate effort on bonding between people',
        example: 'play games together; example: odkrywanki; '
      }
    ]
  })

  'Avoid over-eating' = hint({
    ifYes: [
      'Avoid thinking stressful thoughts while eating'
    ]
  })

  'Reduce calories consumption' = hint({
    ifYes: [
      this['Avoid over-eating'],
      'Drink water while at the computer, instead of juice',
    ]

  })

}


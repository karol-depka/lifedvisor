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
    public source?: string,
    public when?: string,
    public example?: string /* | LiHintInclusion []*/,
    public examples?: string[] /* | LiHintInclusion []*/,
    public comments?: string,
    public problemText?: string,
  ) {}
}

export function hint(param?: LiHint) {
  return param || {}
}

export class Questions {

  'Utilize and build virtuous circles (and avoid VICIOUS circles, no X -> no Y -> etc): motivation/dopamine -> discipline/perseverance -> progress -> self esteem, excitement, confidence -> more motivation' = hint()

  /* cross-cutting concern? But can describe in general too */
  'Progress' = hint({
    problemText: 'Feel stuck (no progress)',
    ifYes: [
      this['Utilize and build virtuous circles (and avoid VICIOUS circles, no X -> no Y -> etc): motivation/dopamine -> discipline/perseverance -> progress -> self esteem, excitement, confidence -> more motivation'],
      // 'Determine where Your bottleneck(s) are.'
    ],
    text: 'Make a little progress to boost confidence',
  })

  'Confidence' = hint({
    /* text inferred from field name for now */
    ifYes: [
      this['Utilize and build virtuous circles (and avoid VICIOUS circles, no X -> no Y -> etc): motivation/dopamine -> discipline/perseverance -> progress -> self esteem, excitement, confidence -> more motivation'],
      this.Progress,
      {
        text: 'Have a confident body language and posture (body posture and movement can affect the mind/mood'
      }
    ]
  })

  'Mood' = hint({
    ifYes: [
      'Smile (part of body language) and it will affect mood'
    ]
  })

  'Self-Esteem' = hint({
    when: '2018-10-02 22:09',
    ifYes: [
      this['Utilize and build virtuous circles (and avoid VICIOUS circles, no X -> no Y -> etc): motivation/dopamine -> discipline/perseverance -> progress -> self esteem, excitement, confidence -> more motivation'],
      {
        text: 'Make sure to not make too long breaks between working (and progress, even if small progress) on mayor goals and using major skills, to keep self-esteem up',
        example: '2018-10-02 22:10 working on TopicFriends/LifeDvisor'
      },
      {
        when: '2018-10-03 22:41',
        text: 'Play a game competing against yourself (previous attempts), it will raise your feeling of status. Whereas competing against others can have negative consequences in the form of a threat of lowering their status.',
        comments: '(from "Your Brain At Work" audiobook)'
      },
      {
        when: '2019-07-26, 14:55',
        text: 'Recall what I have achieved so far. Natural languages, Programming. Money earned. Earning capability. Persuasion/recruitment skills. TopicFriends. Well-read.'
      },
      {
        when: '2019-07-26, 15:01',
        text: 'Think what I\'m going to achieve when I continue on the right path (on which I mostly am). Freedom of space and time. Satisfaction, self-esteem.',
      },
    ]
  })


  'Motivation' = hint({
    // negative/problem version for text search: "I don't feel like ..."
    // symptoms:
    // es: no tengo ganas; pereza
    // pl: nie chce mi się
    ifYes: [
      'Why should I be motivated to do what I think I should do? Because everything else is just *inferior*.',
      /* FIXME: 'Fun/dopamine' */
      { text: 'Distinguish between "Have to" and "Want to"',
        example: `including company invoices; I don't have to do this`
      },
      this['Utilize and build virtuous circles (and avoid VICIOUS circles, no X -> no Y -> etc): motivation/dopamine -> discipline/perseverance -> progress -> self esteem, excitement, confidence -> more motivation'],
      /* hope/belief */
      { text: 'Reach a critical mass (proof-of-concept), to legitimize the project in your own mind, and to be able to show others',
        when: '2018-10-02 22:13'
      },
      this['Self-Esteem'],
      'For better motivation (more "toward" state and less "away" state), focus on the desired outcomes of tasks, not problems/effort/uncertainty. According to "Your Brain at work": probably do not focus of undesired outcomes of not doing tasks.',
      'Do not "try" to "replace" actual living with writing down notes about living, like e.g. here. Treat the notes just as supplements and optimizations. They can can cause a kind of inner heaviness (e.g. worrying too much about doing everything right). However writing down notes about balance of fun, watching out for dangerous perfectionism, can help keep a proper balance.',
      'Keep in mind, that the anticipation of something happening can be as powerful and pleasurable/dopamine-inducing (or even more) as the actual experience. And much cheaper to achieve. However requires a degree of belief in it, which might require some preparation/sampling.',
      'When motivation comes, for a more "fragile-motivation" task, make sure to not waste it. E.g. for programming own apps. Put other things aside for a while to ride the wave of the more valuable motivation. Write down the other pending tasks, to clear my mind of them.',
      'Do not suppress things which I am aching to do, and are ',
      'Do not try to do (or get motivated for) too many things at the time. I get motivation for one thing, then if it makes any sense, do it. Otherwise it is jumping between tasks and diluting/depleting the motivation. Do not feel *guilty* of not doing some-other-task, while doing current task.' +
        'Even if the other task\'s priority might seem slightly higher, the importance of riding the wave of motivation and finishing the task at hand, is important. Unless the other task is really urgent.',
      'Avoid self-oppression',
      'It\'s good to ask why - why I should I be motivated towards something. But not as many times as to reach origin of life or the universe or even meaning of life',
      {
        text: 'Recall earlier times when You did big progress, eg when You were younger and more hungry. How did You reach here? Now repeat that spirit with all the more resources and wisdom that You have.',
        ifYes: [
          {
            text: 'Recall what things were connected to the earlier times of progress; e.g. music, sports, certain inspiring movies/documentaries',
            examples: [
              'Machine Head, etc. from 2011 just before CollabNet',
              'Chess, beer, counterstrike with Mariusz',
              'Excitement with new car Ford Galaxy',
            ]
          },
        ]
      },
      ''
    ]
  })

  'Discipline' = hint({
    // negative/problem version for text search: "I don't feel like ..."
    ifYes: [
      `Delay gratification, don't DENY gratification`,
      this['Utilize and build virtuous circles (and avoid VICIOUS circles, no X -> no Y -> etc): motivation/dopamine -> discipline/perseverance -> progress -> self esteem, excitement, confidence -> more motivation'],
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
        '\nConsider innotopic.consulting@gmail.com or consulting@innotopic.com, apps.feedback@innotopic.com, apps.development@innotopic.com, innotopic.apps@gmail.com, even better: app-name-here.users@innotopic.com, etc., to not get distracted in one area while working in another.' +
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
        text: 'Choose if I want to still be free and explore or settle down. BUT building a solid base and income can make it easier to travel.'
      }
    ]
  })

  'Energetic music' = hint({})
  'Choosing/Assesing Products' = hint({
    ifYes: [
      {
        text: 'Don\'t compare to some imaginary perfect ideal, but rather to other products that You have encountered',
        examples: [
          'Wireless headphones. Probably PowerBeats Pro best ever, even though not perfect',
        ]
      }
    ]
  })

  // 'Choices' -> 'Be a satisficer, not a maximiser"

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
  '[Low] Energy' = hint({
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

  // 2019-01-13 1:12 finished reading ~here

  'Prioritizing' = hint({
    ifYes: [
      'Prioritize prioritizing itself',
      'Early spend the most time&energy designing things that will affect the most other things and the things that will be hardest to change. Things that are easy to change later, should be left out crude, to free up energy and focus on the more important things',
      'Prioritize things which can shed better light (provide understanding/information) on subsequent tasks (reconnaissance)',
      'Then Prioritize things which involve making decisions which can affect further priorities',
      'Can prioritize things with external dependencies, because of uncertainty of how much they will take',
      'Can prioritize things which need external people / resources (because their availability might come and go) - e.g. making appointments',
      'Can prioritize the part (thus need to split tasks) of tasks, where things are written down, to not forget them and to stop nagging thoughts. The other part of the task can be done later when time permits.',
      'Can prioritize starting things, which can happen in parallel without much intervention while they are happening (e.g. laundry)',
      'Can prioritize things which are quick to do (but be careful of doing too many "fun and easy" things). Often in the mind an item is an item, no matter if it takes 1 minute or 1 hour. So doing a number of small items can quickly reduce noise in the mind',
      'Can prioritize things in such a way to group related things together, to utilize/discover relationships between them and facilitate INSIGHTS which might sprout from the relationships.',
      'Specify non-goals, posteriorities, not just priorities.',
      'MoSCoW',
      'ABCDE method',
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
      // this['Energy'],
      this['Good decisions'],
      this['Effectiveness / optimizations'],
      'Have more time ...',
      'Use the time better ...[-> focus, organisation, tools, etc]',
      'Delegate',
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
        text: 'Allocate effort on bonding and team-building between people, before diving into work (work which might trigger tensions between people)',
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

  'Changing/improving yourself (neuroplasticity?)' = hint({
    ifYes: [
      {
        text: 'Changing/improving yourself requires attention (mindfulness?) ',
        comments: '(From Your Brain At Work audiobook)'
      }
    ]
  })

  'Managing gratification' = hint({
    ifYes: [
      'Take gratification from little things. E.g. nicely executing tasks (good effort but don not rely on good outcomes, which are often not under our control) or everyday things',
      'Take gratification from self-improvement',
      'Take gratification from contemplation, getting insights, understanding things better',
      'Take gratification from having freedom, free will, existing in the world and being able to observe, explore and contemplate it.',
      'Take gratification from finishing tasks and making improvements',
      'Take gratification from learning new things and strengthening previous knowledge',
      'Take gratification from being/becoming well-organized, ready, prepared, clean',
    ]
  })

  /** Things that apply everywhere (will probably have the app display that everywhere later) */
  'General' = hint({
    ifYes: [
      {
        text: 'Build good habits/routines and eliminate/modify bad habits. Habits let you do things better while making them automatic, thus reducing energy/focus consumption',
        ifYes: [
          'For motivation about working on habits: treat habits (which can feel boring sometimes) as BUILDING BLOCKS to build bigger and more exciting things'
        ]

      },
      `Remember, that most things in life are experiments. So, do not assume immediate success. Make educated guesses, try things out, observe, take note, analyze, improve, repeat. Patience. Accept possibility of failure, but don't worry about it too much. Enjoy the process of of the experiments, observations, gradual improvements, discoveries.`,
      'Ask myself: have I bee in a similar situation before? What were the causes? What were the outcomes?'
    ]
  })

  'Build Momentum' = hint({
    ifYes: [
      'Fake it till you make it.',
      'Use duct-tape/hacks if necessary to get unstuck from chicken&egg problems, etc.'
    ]
  })

  'Use stepping stones' = hint()

  'Feeling Overwhelmed' = hint({
    ifYes: [
      this['Prioritizing'],
      // Choosing / satisficer not maximizer
      this['Build Momentum'],
      'Split things into smaller parts. Tackle one thing at a time. Swiss cheesing',
      'Move things into buckets/inbox/todo (GTD)',
      this['Use stepping stones'],
    ]
  })


  'Resolve internal conflict' = hint({
    ifYes: [
      'Stop and reflect on Your values, based on past experiences and future plans/dreams, Ikigai.',
      this['Use stepping stones'],
    ]
  })

  'Feeling Good | Feeling Bad (root?)' = hint({
    ifYes: [
      hint({
        text: 'Happiness',
        ifYes: [
          'Progressive realization of a worthy goal',
          'Remember that happiness cannot be a direct goal. Instead, it is a byproduct.',
        ]
      }),
      'Optimism (is the glass half-empty... TODO: reinterpretation, :when life gives You lemons)',
      hint({
        text: 'Peace of mind'
      }),
      hint({
        text: 'Guilt free (part of peace of mind?)'
      }),
      hint({
        text: 'Happiness is a choice',
        source: 'The ~100yr old guy interviewed, His greatest regret was about ... realising happiness is a choice',
      }),
      hint({
        text: 'Remember that wanting something else than is currently (as opposed to working toward changing stuff), leads to unhappiness',
      }),
      hint({
        text: 'To motivate to be more happy, remember, the Happiness Advantage',
        source: 'Happiness Advantage book',
      }),
    ]
  })

  Selling = hint({
    ifYes: [
      'With best salesmen it is not even apparent that they are selling',
    ]
  })

  'Be a keen observer, which might help. But that does not mean to be a judgemental observer.' = hint()
  'Remember that it is as if we have two brains, two beings within us. The old brain: food, fighting, sex, limbic system... The new brain: higher values and cognition, relationships. So keep them both satisfied. Or dissatisfied equally? Their unifying goals are perhaps WTP, reproduction?' = hint()

  Regret = hint({
    // guilt
    ifYes: [
      'Leave it behind. Take it as lessons learned, dont torture yourself',
    ]
  })

  // Worry:
  // Frustrated
  // -> Reach a state of flow
  //
  'Cravings for computer games' = hint({
    ifYes: [
      'Play the game that is life. But prefer to play against previous versions of yourself, and/or against obstacles',
    ]

  })
  'Cravings for acohol' = hint({
    ifYes: [
      'Get "drunk"/high on visions of what You can achieve and on striving towards it'
    ]
  })
  'Feel bad' = hint({
    ifYes: [
      'Guilt-free entertainment' /*
        allocate time for entertaniment
        first do dinner before desert
        try przyjemne z pożytecznym so that You dont feel guilty
      */
    ]
  })

  'Annoyed / Irritable' = hint({
    /* Find something enjoyable where You can have internal locus of control; fitting ikigai; guilt-free entertainment */
  })

  'Acting stupid' = hint({

  })

}


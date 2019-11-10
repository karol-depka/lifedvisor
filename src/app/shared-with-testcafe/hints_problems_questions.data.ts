// Hints, problems, questions, wishes

// Every HINT is also a WISH

// Ideas:
/* 2018-10-02 22:08 Use */

// Later when I have editing in web browser, I can use like grammarly and thesaurus to improve my writing.

// Idea: can have referral programs with products helping in given category, e.g. language learning

// Marketing: put in https://alternativeto.net/
// keywords: coaching, life coaching

import {
  hint,
  problem,
} from './Hint';


export class Questions {

  'Low-information diet' = hint()

  'Make everyday real life more enjoyable (so as to avoid escapism and low mood)' = {
    ifYes: [
      `Invest the time to make your surroundings clean, neat and functional`,
      `Invest the time to finish nagging loose ends, instead of trying to escape from them (can swiss-cheese them if too overwhelming)`,
    ]
  }

  'Travel' = {
    ifYes: [
      `Use hanging toiletry organizers and wardrobe organizers`,
      `Use transparent bags/cases to more quickly find things in your bag`,
      {text: `User 4-wheel rolling bag`,
        benefits: [
          `more maneuverable in tight situations like security checkpoints, food places; saving time and frustration and risk of causing accident`,
          `less strain on the back while walking with it`,
        ]
      }
    ]
  }

  'Learning things' = {
    ifYes: [
      `Use spaced repetition`,
    ]
  }

  'Learning languages' = {
    ifYes: [
      `Listen to Audiobooks in given language`, /* Idea: referral program with audible */
      `Watch movies in given language with subtitles in given/native language`,
    ]
  }

  'Being healthy at office job/computer' = {
    ifYes: [
      `Use standing desk (alternate between different positions)`,
      { text: `Make breaks and micro-breaks`,
        ifYes: [
          `Use an app that reminds about breaks`,
        ]
      }
    ]
  }

  'Success / achievement' = {
    ifYes: [
      `Dont confuse activity with achievement`,
      { text: `Define what success means for You`,
        ifYes: [
          `Acknowledge certain limitations`,
          `You cannot be a sumo wrestler and ski jumper at the same time.`,
          `Use Ikigai`
        ]
      }
    ]
  }


  'Utilize and build virtuous circles (and avoid VICIOUS circles, no X -> no Y -> etc)' = hint(
    {
      comments: `motivation/dopamine -> discipline/perseverance -> progress -> self esteem, excitement, confidence -> more motivation`
    }
  )

  /* cross-cutting concern? But can describe in general too */
  'Progress' = hint({
    problemText: 'Feel stuck (no progress)',
    ifYes: [
      this['Utilize and build virtuous circles (and avoid VICIOUS circles, no X -> no Y -> etc)'],
      // 'Determine where Your bottleneck(s) are.'
    ],
    text: 'Make a little progress to boost confidence',
  })

  'Confidence' = hint({
    /* text inferred from field name for now */
    ifYes: [
      this['Utilize and build virtuous circles (and avoid VICIOUS circles, no X -> no Y -> etc)'],
      this.Progress,
      {
        text: 'Have a confident body language and posture (body posture and movement can affect the mind/mood'
      },
      `"Fake it till You make it" (otherwise You can end up with a chicken&egg problem). But be careful to not end up unethical.`
    ]
  })

  'Mood' /* TODO unite with happy/unhappy */ = hint({
    ifYes: [
      'Smile (part of body language) and it will affect mood'
    ]
  })

  'Self-Esteem' = hint({
    when: '2018-10-02 22:09',
    ifYes: [
      this['Utilize and build virtuous circles (and avoid VICIOUS circles, no X -> no Y -> etc)'],
      {
        text: 'Make sure to not make too long breaks between working (and progress, even if small progress) on mayor goals and using major skills, to keep self-esteem up',
        example: '2018-10-02 22:10 working on TopicFriends/LifeDvisor'
      },
      {
        when: '2018-10-03 22:41',
        text: 'Play a game competing against yourself (previous attempts), it will raise your feeling of status. Whereas competing against others can have negative consequences in the form of a threat of lowering their status.',
        source: '"Your Brain At Work" audiobook)'
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
    byLang: {
      es: 'pereza; no tengo ganas',
    },
    ifYes: [
      `As Confucius said: "Choose a job you love, and you will never have to work a day in your life."`,
      '#Visualise the benefits, the desired state',
      'Why should I be motivated to do what I think I should do? Because everything else is just *inferior*.',
      /* FIXME: 'Fun/dopamine' */
      { text: 'Distinguish between "Have to" and "Want to"',
        example: `including company invoices; I don't have to do this`
      },
      this['Utilize and build virtuous circles (and avoid VICIOUS circles, no X -> no Y -> etc)'],
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
      `Find motivation by being strong for others for whom You are wishing well.`
    ]
  })

  'Discipline' = hint({
    // negative/problem version for text search: "I don't feel like ..."
    ifYes: [
      `Have a long time perspective`,
      `Delay gratification, don't DENY gratification`,
      this['Utilize and build virtuous circles (and avoid VICIOUS circles, no X -> no Y -> etc)'],
      this['Motivation'] /* Does discipline require motivation ? */,
      `In order to have discipline, You need motivation` /* example of inclusion / connector hint/text */,
      { text: `Motivation for discipline and benefits of it`,
        ifYes: [ /* maybe move this to `benefits: ` field; benefits are also like reverse dependencies; but I probably need to write custom texts anyway */
          { text: `(Misconception) You will get benefits of discipline immediately (not only after years) in the form of #endorphins, increased #self-esteem, reduction of #worry, increase in order and reduction of chaos`,
            source: 'Brian Tracy - The Miracle of Self-Discipline',
          },
          { text: `(Misconception) In the big picture, discipline does not reduce your #freedom, but rather increases it by giving you more time/energy/resources to do what you really want to do`},
        ]
      }
    ]
  })

  'Write down things (e.g. lists, email draft) to free your mind from nagging thoughts' = hint({})


  'Focus' = hint({
    text: 'Focus and avoiding distractions',
    ifYes: [
      this['Low-information diet'],
      `Use ear-plugs`,
      { text: `Minimize context switching. Write things down instead of acting on them immediately.`,
        comments: `Example: write ideas in source code of another project, instead of acting on them immediately.`
      },
      'In order to focus one thing, we have to cut out other things (positive #Sacrifice)',
      {
        text: 'Focus is a #skill like any other, therefore requires practice, repetition'
      },
      { /* inclusion / connector / explanation */
        text: `We focus better when we have good motivation. It's easier to discard other lesser value temptations, when we see high value (thus we are motivated) in what we are doing right now.`,
        ifYes: [
          this.Motivation,
        ]
      },
      {
        text: '#Invest in removing distracting elements from your surroundings',
        ifYes: [
          'Close unneeded browser tabs and/or open a separate window for the task at hand',
          { text: `Block distracting unrelated elements in web pages; e.g. amazon, stackoverflow, YouTube suggestions`},
          { text: `Clear search/browsing history to not get distracted by previous activities. Store the stuff you might need later, in bookmarks / notes.`},
        ]
      },
      {
        text: 'Do little tasks quickly, to free the mind from distracting nagging thoughts'
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
      { text: 'Build a #habit of going to sleep at the right time'
      },
      { text: 'Do you turn off and put away (hide) your electronics and other temptations, including computer, mobile phones. ' +
          `Can keep Your laptop in another room`,
      },
      { text: 'Tomorrow is a day, too (jutro też jest dzień)'
      },
      { text: 'Think about (and visualize) the benefits of going to sleep at the right time, including being well-rested and the #consecuences of not having enough sleep (harder to control cravings, impaired thinking and memory)'
      },
    ]
  })

  'Have good sleep' = hint({
    ifYes: [
      `Build good sleep habits`,
      {
        text: 'Improve falling asleep',
        ifYes: [
          this['Write down things (e.g. lists, email draft) to free your mind from nagging thoughts'],
          `Avoid light shortly before going asleep; especially bright/blue light.`,
          `Avoid too energetic music in the evening.`,
          `Avoid caffeine in the evening.`,
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
    /* cross-cutting concern */
    ifYes: [
      `Prioritize according to goals and values`,
      'Prioritize prioritizing itself',
      `Figure out what the biggest bottleneck is, and prioritize it, to unblock`,
      `Use the N-minute rule`,
      { text: 'Early spend the most time&energy designing things that will affect the most other things and the things that will be hardest to change.',
        comments: `Things that are easy to change later, should be left out crude, to free up energy and focus on the more important things. Exception: things that are very salient and annoying while being easy to change, thus reducing motivation and confidence in the efforts.`
      },
      `Can Prioritize things which help You use the product yourself.`,
      `Can Prioritize things which help You show Your work to others`,
      `Can Prioritize things which will help you build/rekindle motivation`,
      `Prioritise according to ROI (Return on investment). For that You need to do a quick #estimation.`,
      'Prioritize things which can shed better light (provide understanding/information) on subsequent tasks (reconnaissance)',
      'Then Prioritize things which involve making decisions which can affect further priorities',
      'Can prioritize things with external dependencies, because of uncertainty of how much they will take',
      {
        text: 'Can prioritize things which need external people / resources',
        comments: `(because their availability might come and go) - e.g. making appointments`
      },
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
      this['Prioritizing'],
      `Write down the plan`,
      {
        text: `Try to estimate duration and cost.`,
        comments: `If the estimation turns out not accurate - don't worry - treat it as a learning experience and re-estimate. An imperfect estimation is better than no estimation. Estimating also forces us to think about various considerations.`
      },
      `Plan in multiple stages, with stepping stones, milestones, checkpoints and decision points (if-then-else-...) to make your plan more flexible and adaptable.`,
      `Periodically revise and adjust your plan.`,
      `The plan is to set a general direction, but it will have to be adjusted along the way. Which is still better than no plan at all (like ship without a rudder heading in a random direction).`
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
      {text: 'Delegate',
        ifYes: [
          `Spend time assigning/coordinating/checking work of other people, knowing it will pay off, whereas neglecting it will have negative consequences in morale/quality/quantity of work.`
        ]
      },
      `Reach a state of Flow`,
      `Avoid mental blocks`,
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
      { text: `Assess quality / popularity of given project/library/program`,
        ifYes: [
          `Use https://bestofjs.org/projects/testcafe`,
          `Use StackShare`
        ]
      },
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


  'Changing/improving yourself (neuroplasticity?)' = hint({
    ifYes: [
      {
        text: 'Changing/improving yourself requires attention (mindfulness?) ',
        source: '"Your Brain At Work" audiobook'
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
      { text: `First apply quicker/cheaper workarounds`,
        comments: `Even if it costs money to apply the temporary workaround. \n` +
          `It will pay off in reduced overwhelm, reduced stress, steady progress without creating circular dependencies. \n` +
          `And You should not feel like You are *cheating* by taking a simplified route. It's an optimization.`,
        examples: [
          `Buying a protective case for Galaxy Note 9 instead of going and spending extra time and money on new phone while already having a big backlog`,
        ]
      }
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
      { text: `Playing games in controlled way`,
        ifYes: [
          `Do not start at too late hour, risking losing good sleep`,
          `Consider playing one game and get really good at it to get a feeling of satisfaction which will help You at ending a given playing session`,
          {
            text: `Play/practice against computer opponents or play predefined missions`,
            comments: `From time to time You can play with human opponents, just to satisfy the craving and as a reality check of how good you are`,
            benefits: [
              `not get constantly defeated (which can cause You to want to play longer), by people who play much more than You`,
              `maximize quick feedback`,
              `have a better measurement of your skill improvement`,
              `be able to hone particular elements/skills of the game without risking wasting a match`,
              `avoid negative influence from addictive/toxic gamers`,
              `minimize time spent waiting for match to start, minimizing frustration, improving satisfaction`,
              `reduce dependence on good internet connection; minimizing frustration, improving satisfaction`,
              `Can choose whichever map and settings and number of opponents you like.`
            ]
          },
        ]
      },
      'Play the game that is life. But prefer to play against previous versions of yourself, and/or against obstacles',
      this['Make everyday real life more enjoyable (so as to avoid escapism and low mood)'],
      `Hide your gaming devices to stop them from tempting/distracting and to introduce a barrier of time/effort.`
    ]

  })
  'Cravings for alcohol' = hint({
    ifYes: [
      this['Make everyday real life more enjoyable (so as to avoid escapism and low mood)'],
      'Get "drunk"/high on visions of what You can achieve and on striving towards it'
    ]
  })

  'Bored / Boredom' = hint({
    ifYes: [
      {
        text: `Excitement`,
        ifYes: [
          'Strive to expand your person; learn new skills, improve your conditions, meet new people. Examples: learning new language. Find new music, new artists, new albums, even new genres.',
          `Re-kindle excitement for the thing that You are supposed to be doing right now.`,
          `Re-kindle / revive things that were exciting to You in the past, e.g. old music / activities / games / friends / projects`,
        ]
      }
    ]
  })

  'Guilt-free entertainment (fun)' = hint({
    ifYes: [
      `allocate time for entertainment`,
      `first do dinner before desert`,
      `try przyjemne z pożytecznym so that You dont feel guilty`,
      `do not sacrifice other things to do entertainment`,
    ],
  })

  'Feel bad' = hint({
    ifYes: [
      this['Guilt-free entertainment (fun)'],
    ]
  })

  'Annoyed / Irritable' = hint({
    /* Find something enjoyable where You can have internal locus of control; fitting ikigai; guilt-free entertainment */
  })

  'Acting stupid' = hint({
    /* wanna be smarter more clever, intelligent */
    ifYes: [
      `Breathing`,
      `Avoid sugar spikes`,
      `Exercise for highly oxigenated blood`,
    ]
  })

  'Build own business' = hint({
    ifYes: [
      `Get feedback from trusted people, early and often`,
      {text: `Decide what kind of business You want - big / VC-funded / lifestyle / bootstrapped`,
        ifYes: [
          `Decide how many hours per week/day/mont You would like to spend working: 1. in the initial growth period; 2. as a target`,
          `Decide if You would like to hire employees/freelancers and how many; depends on your introversion/extroversion level and how much You like/dislike dealing with people`
        ]
      },
      `Remember, that You might/need want to pivot`,
      this['Productivity'],
      this['Being healthy at office job/computer'],
      { text: `Maintain motivation for building a business`  /* progress, momentum */,
        ifYes: [
          this.Motivation,
          {text: `Weave in attractive/exciting aspects, like using new tools and learning things along the way. But prefer relatively low-hanging less-risky things, to not jeopardize the business`,
            examples: [
              `Elm (learning about the language is ok, to use as inspiration; but using the language is too far fetched)`,
              `TypeScript 3.7.1-rc in Ionic too far-fetched; but maybe strictNullChecks is ok`,
            ]
          },
        ],
      },
      { text: `Overcome fear of failure.`,
        ifYes: [
          `Even if You fail, the journey makes You stronger, more resourceful and ready to try another time or pivot to something else.`,
          `Failure is not so probable really, since You have been gathering skills, resources, contacts and personal qualities for a long time, ready to put them to good use.`,
          `Realise, that You control the probability of success`,
        ]
      },
      /* Fear of wasting time / failing: remember there will be activities that You like and are proud of; e.g. programming, designing apps */
      `Don't worry as much about chasing the latest and greatest technologies, because You will hardly release anything. Focus on value for users and, building working prototypes, and on releaseable version.`,
      `At first, skip certain details that can be defined later.`,
    ]
  })

  'Avoid over-eating / binge eating' = hint({
    ifYes: [
      'Avoid thinking stressful thoughts while eating',
      `Eat slowly to let the brain register that it has had enough food. Allocate e.g. 10 minutes for the eating process.`,
      `Pre-prepare portions of given size, to draw a line.`
    ]
  })

  'Reduce calories consumption' = hint({
    ifYes: [
      this['Avoid over-eating / binge eating'],
      'Drink water while at the computer, instead of juice',
    ]

  })

  'Deal with food #cravings / overeating / snacking' = problem({
    ifYes: [
      this['Avoid over-eating / binge eating'],
      `Brush teeth to signal that eating is over and reduce temptation.`,
      `#Visualise #Consequences: - being fat (bad self esteem, not attractive to opposite sex), impaired thinking from sugar spikes, spending a lot of money, spending too much time on the toilet.`,
      `Sleep well to reduce craving for food`,
      `Avoid alcohol`,
      `Get occupied with something else`,
      `Eat healthy snacks, like carrots, non-fried nuts`,
    ]
  })

  'Worry / anxiety' = problem({
    ifYes: [
      `Purposeful action is a way to cure worry. Just the act of taking action pushes out worry thought.` +
        `And results of these actions have big probability of reducing/eliminating the worry situation.`,
      this['Low-information diet'],
    ]
  })

  'Health / Sick' = problem({
    ifYes: [
      `Drink a lot of water`,
      `Exercise`,
      { text: `(connector) Having good sleep prevents making poor decisions related to health; reduces overeating`,
        ifYes: [
          this['Have good sleep'],
        ]
      }
    ]
  })

  'Get more freedom' = problem({
    ifYes: [
      {text: `[linker] Discipline (a bit counter-intuitively) gives You more freedom, by allowing You to deal more effectively with things that You have to do, leaving You more time / energy to do things which You really want to do, while making you better at those things as well`,
        ifYes: [
          this['Discipline'],
        ]
      },
      this['Build own business'],
    ]
  })

  'Dealing with problems' = problem({
    ifYes: [
      `Accept or overcome`,
      { text: `You might or might not be responsible for the problem occurring but You are responsible on how you handle it`,
        comments: `"The problem... is not the problem. The problem is our approach to the problem"`,
      }
    ]
  })

  'Being / feeling out of control' = problem({
    ifYes: [
      `Mindfulness (meditation) to increase self-control and prevent "headless chicken autopilot mode"`,
      this['Discipline'],
      `TODO: unbalanced`,
    ]
  })

  'Procrastination' = problem({
    ifYes: [
      `Consider and visualise the positive and negative consequences of doing and not doing the thing You should do. Focus on the positive, to keep dopamine level up.`,
    ]
  })

  'Organising things (e.g. at home)' = problem({
    ifYes: [
      `First split the day-to-day things that you will really need in the coming days, from the someday-maybe / undecided / unordered things.`,
      { text: `Put related things together`,
        benefits: [
          `See how much space a given category of things really takes.`,
          `Detect duplicates or redundancies / excess`,
          `Make it easier to find things, via close "psychological distance"`,
          `Make it easier to analyze if we really have everything we need; to take an inventory of what we have.`,
          `General feeling of order`,
        ]
      }
    ]
  })

  'Negotiating contracts' = problem({
    ifYes: [
      { text: `Negotiate remote work`,
        ifYes: [
          `Use any of your situation for arguing for remote work (can be partial at first) : health, family situation, experience, life values`,
          `First negotiate / ask for a bit of remote work, e.g. for specific periods or certain number of days per week/month, later to be expanded once confidence grows.`
        ]
      },
      `Check, and try to put a time limit on, non-compete / non-solicitation clauses.`
    ]
  })

  'Programming when having trouble thinking/focusing (e.g. sleepy / not had enough sleep / hangover / distractions / mental fog etc)' = problem({
    comments: `(Example of something that is on intersection of multiple aspects; this could be taken from search keywords).`,
    ifYes: [
      `Focus on things that improve confidence, e.g. writing tests or working in areas with good test coverage, to not introduce more bugs.`,
      `Make sure changes are committed, to not make a mess.`
    ]
  })

  // coasting
  // chaos
  // negotiation
  // persuasion

  /* CoViOb 2 policies vs Lifedvisor:
    - Coviob 2:
    . - has more personal epiphanies, etc. + timestamps for context (although somewhat repetitive and chaotic)
    - Lifedvisor:
    . - has more generic things and in process of productizing and organizing it
    . - works on mobile
   */


}


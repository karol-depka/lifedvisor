// Hints, problems, questions, wishes

// Every HINT is also a WISH

// Ideas:
/* 2018-10-02 22:08 Use */

// Later when I have editing in web browser, I can use like grammarly and thesaurus to improve my writing.

// Idea: can have referral programs with products helping in given category, e.g. language learning

// Marketing: put in https://alternativeto.net/
// keywords: coaching, life coaching

/* Idea:  2019-11-19: Hints/problems could be contextual, e.g. morning, evening, weekend, etc. And appear at the right moment.

  2019-12-25 TODO: !!! contexts (e.g. "Context: Time: after waking up", "Context: before sitting down to work"), habits, order of hints 1. 2. 3. ...
  - to avoid overwhelm (what should I really do now) - get the right advice in the right context and the right order
  - distinguish between "at given time" context from "to improve X" - e.g. "after getting up from bed", vs "to improve getting up from bed" (which could involve activities e.g. in the evening before)
 */

/* 2019-12-25 Self-rating would be really important for actual accountability and force myself to really evaluate current state and what are weakest/strongest points */

/**
 * Root tree structure:
 * - "Have a good life" - root wish/hint
 */

import {
  hint,
  problem,
  wish,
} from './Hint';
import { HintSource } from './HintSource';
import { sources } from './sources_data';


export class Questions {

  'Relax and do not stress' = problem({
    ifYes: [
      { text: `While relaxing to Yourself "everything will be fine (one way or another)", instead of "I don't care about anything"`,
        comments: `If You are using "I don't care about anything", You would diminish Your motivation`
      }
    ]
  })

  'Low-information diet' = hint()

  'Make everyday real life more enjoyable (so as to avoid escapism and low mood)' = hint({
    ifYes: [
      hint(`Invest the time to make your surroundings clean, neat and functional`),
      { text: `Invest the time to finish nagging loose ends, instead of trying to escape from them (can swiss-cheese them if too overwhelming)`,
        ifYes: [
          { text: `Find motivation to invest in fix nagging loose ends (even though we think sometimes we should ignore them as fixing them seems like not being a productive activity)`,
            ifYes: [
              { text: `Think how nagging loose ends are slowing you down in the long run, like a handbrake.`,
                comments: `Like a persistent overhead. They cause annoyance, anxiety, drain energy.`,
              },
            ]
          }
        ]
      },
    ]
  })

  'Travel' = wish({
    ifYes: [
      hint(`Use hanging toiletry organizers and wardrobe organizers`),
      hint(`Use transparent bags/cases to more quickly find things in your bag`),
      {text: `Use 4-wheel rolling bag`,
        benefits: [
          `more maneuverable in tight situations like security checkpoints, food places; saving time and frustration and risk of causing accident`,
          `less strain on the back while walking with it`,
        ]
      }
    ]
  })

  'Learning things' = wish({
    ifYes: [
      hint(`Use spaced repetition`),
    ]
  })

  'Learning languages' = wish({
    ifYes: [
      hint(`Listen to Audiobooks in given language`), /* Idea: referral program with audible */
      hint(`Watch movies in given language with subtitles in given/native language`),
    ]
  })

  'Being healthy at office job/computer work' = wish({
    ifYes: [
      hint(`Use standing desk (alternate between different positions)`),
      { text: `Make breaks and micro-breaks`,
        ifYes: [
          hint(`Use an app that reminds about breaks`),
        ]
      },
      { text: `Relax and do not stress while working`,
        ifYes: [
          this['Relax and do not stress']
        ]
      }
    ]
  })

  'Success / achievement' = wish({
    ifYes: [
      hint(`Dont confuse activity with achievement`),
      { text: `Define what success means for You`,
        ifYes: [
          hint(`Acknowledge certain limitations`),
          hint(`You cannot be a sumo wrestler and ski jumper at the same time.`),
          hint(`Use Ikigai`),
        ]
      }
    ]
  })


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
      hint('Determine where Your bottleneck(s) are.'),
    ],
    text: 'Make a little progress to boost confidence',
  })

  'Confidence' = hint({
    /* text inferred from field name for now */
    ifYes: [
      this['Utilize and build virtuous circles (and avoid VICIOUS circles, no X -> no Y -> etc)'],
      this.Progress,
      {
        title: 'Have a confident body language and posture',
        subTitle: `(body posture and movement can affect the mind/mood)`,
      },
      hint(`"Fake it till You make it" (otherwise You can end up with a chicken&egg problem). But be careful to not end up unethical.`),
    ]
  })

  'Mood' /* TODO unite with happy/unhappy */ = hint({
    ifYes: [
      hint('Smile (part of body language) and it will affect mood'),
      hint(`In life, have a bias towards optimism and excitement (while still steering away from problems) - it creates a kind of positive mood shield "bubble".`),
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

  'Motivation for projects' = hint({
    ifYes: [
      {
        text: 'Use stretch goals to improve motivation',
        sources: [
          new HintSource('https://charlesduhigg.com/books/smarter-faster-better/'),
        ]
      }
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
      hint(`Sampling of future bigger pleasures.`) /* TODO: for balance between productivity and fun */,
      hint({title: `Overcome doubts via thinking`}),
      hint(`Create positive associations with the things You would like be motivated towards.`),
      hint(`As Confucius said: "Choose a job you love, and you will never have to work a day in your life."`),
      hint('#Visualise the benefits, the desired state'),
      hint('Why should I be motivated to do what I think I should do? Because everything else is just *inferior*.'),
      /* FIXME: 'Fun/dopamine' */
      { text: 'Distinguish between "Have to" and "Want to" (locus of control)',
        example: `including company invoices; I don't have to do this`
      },
      this['Utilize and build virtuous circles (and avoid VICIOUS circles, no X -> no Y -> etc)'],
      /* hope/belief */
      { text: 'Reach a critical mass (proof-of-concept), to legitimize the project in your own mind, and to be able to show others',
        when: '2018-10-02 22:13'
      },
      this['Self-Esteem'],
      hint('For better motivation (more "toward" state and less "away" state), focus on the desired outcomes of tasks, not problems/effort/uncertainty. According to "Your Brain at work": probably do not focus of undesired outcomes of not doing tasks.'),
      hint('Do not "try" to "replace" actual living with writing down notes about living, like e.g. here. Treat the notes just as supplements and optimizations. They can can cause a kind of inner heaviness (e.g. worrying too much about doing everything right). However writing down notes about balance of fun, watching out for dangerous perfectionism, can help keep a proper balance.'),
      hint('Keep in mind, that the anticipation of something happening can be as powerful and pleasurable/dopamine-inducing (or even more) as the actual experience. And much cheaper to achieve. However requires a degree of belief in it, which might require some preparation/sampling.'),
      hint('When motivation comes, for a more "fragile-motivation" task, make sure to not waste it. E.g. for programming own apps. Put other things aside for a while to ride the wave of the more valuable motivation. Write down the other pending tasks, to clear my mind of them.'),
      hint('Do not suppress things which I am aching to do, and are '),
      hint('Do not try to do (or get motivated for) too many things at the time. I get motivation for one thing, then if it makes any sense, do it. Otherwise it is jumping between tasks and diluting/depleting the motivation. Do not feel *guilty* of not doing some-other-task, while doing current task.' +
        'Even if the other task\'s priority might seem slightly higher, the importance of riding the wave of motivation and finishing the task at hand, is important. Unless the other task is really urgent.'),
      hint('Avoid self-oppression'),
      hint(`It's good to ask why to increase motivation - why I should I be motivated towards something. But not as many times as to reach origin of life or the universe or even meaning of life (can risk triggering existential void)`),
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
      hint(`Find motivation by being strong for others for whom You are wishing well.`),
      hint(`Have exciting goals.`),
    ]
  })

  'Discipline' = hint({
    // negative/problem version for text search: "I don't feel like ..."
    ifYes: [
      hint(`Visualise the positive/negative consequences of doing / not doing the things You should do.`),
      hint(`Have a long time perspective`),
      { text: `Delay gratification, don't DENY gratification`,
        comments: `Distinguish between "No" and "Yes/Maybe but later". A "No" is negative/inhibitive thought which can lower Your dopamine level.`},
      this['Utilize and build virtuous circles (and avoid VICIOUS circles, no X -> no Y -> etc)'],
      this['Motivation'] /* Does discipline require motivation ? */,
      hint(`In order to have discipline, You need motivation`) /* example of inclusion / connector hint/text */,
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
    text: 'Focus and avoiding distractions (in general)',
    ifYes: [
      { text: `Increase signal-to-noise ratio.`
      },
      { text: `Use time tracker to stay focused and see how much time is being spent on each activity.`,
      },
      { title: `When switching activity, mark the place where You are.`,
        subTitle: `To minimize time (time-consuming linear search) needed to get back on track. E.g. via selecting text or putting a bookmark.`,
      },
      { text: `When entering a potentially very distracting website (e.g. twitter or LinkedIn)`,
        subTitle: `raise your guard, buckle up and prepare to deflect distractions and temptations`,
        /* "The discipline of focus" */
      },
      { text: `Focus on zone of influence, instead of zone of preoccupation`,
        sources: [
          sources['7 Habits of Highly Successful people'],
        ]
      },
      this['Low-information diet'],
      {text: `Work from a list to have a clear track to run on and to avoid distractions.`,
        ifYes: [
          hint(`Have the list always open and visible (e.g. on a separate monitor or under a shortcut key).`),
        ]
      },
      hint(`Use ear-plugs`),
      { text: `Minimize context switching. Write things down instead of acting on them immediately.`,
        comments: `Example: write ideas in source code of another project, instead of acting on them immediately.`
      },
      hint('In order to focus on one thing, we have to cut out other things (positive #Sacrifice)'),
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
          hint('Close unneeded browser tabs and/or open a separate window for the task at hand'),
          { text: `Block distracting unrelated elements in web pages; e.g. amazon, stackoverflow, YouTube suggestions`},
          { text: `Clear search/browsing history and close tabs to not get distracted by previous activities. Store the stuff you might need later, in bookmarks / notes.`},
        ]
      },
      {
        text: 'Do little tasks quickly, to free the mind from distracting nagging thoughts'
      },
      this['Write down things (e.g. lists, email draft) to free your mind from nagging thoughts'],
      hint('Have separate e-mail/IM accounts for various purposes, to not get distracted by another area while dealing with one area.' +
        '\nConsider innotopic.consulting@gmail.com or consulting@innotopic.com, apps.feedback@innotopic.com, apps.development@innotopic.com, innotopic.apps@gmail.com, even better: app-name-here.users@innotopic.com, etc., to not get distracted in one area while working in another.' +
        'Also topicfriends@gmail.com; also keep in mind delegating (or giving access to) stuff to other people, e.g. assistant, another developer ' ),
      hint('Disable notifications (sound; and perhaps even on-screen notifications) in all communication media except those used for dealing with urgent things (e.g. phone)'),
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
      { text: 'Think about (and visualize) the benefits of going to sleep at the right time, including being well-rested and the #consecuences of not having enough sleep (harder to control cravings, impaired thinking and memory), leading to bad life quality, bad emotions, frustration, sickness.'
      },
    ]
  })

  'Have good sleep' = hint({
    ifYes: [
      hint(`Build good sleep habits`),
      {
        text: 'Improve falling asleep',
        ifYes: [
          this['Write down things (e.g. lists, email draft) to free your mind from nagging thoughts'],
          { text: `Avoid light shortly before going asleep; especially bright/blue light.`,
            ifYes: [
              hint(`Use dark mode in operating system and apps.`),
            ]
          },
          hint(`Avoid too energetic music in the evening.`),
          hint(`Avoid caffeine in the evening.`),
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
          hint('Consider the following "resources" for cost/benefit: health, time, money, emotion(own/others), energy, focus, reputation, .... TODO from my papelito'),
        ]
      },
      {
        text: 'compare cost (real cost) by the difference to alternatives (no absolute cost) or to "default/current" state',
        example: 'e.g. something costs 100 EUR a month but if I don\'t pay this, I have to pay 70 EUR/month anyway,' +
          'so the real cost is 30 EUR, not 100EUR (making the decision easier); and the benefit is e.g. saved time/emotion or other resources.',
      },
      {
        title: `Think of higher more general principles`,
        subTitle: `They could help You in making a specific decision`,
      },
      {
        text: 'consider the alternatives',
        ifYes: [
          hint('Look also at the consequences of inaction or not making the decision'),
        ]
      },
      {
        text: 'use Pareto principle'
      },
      {
        text: 'Visualize consequences (financial, emotional, physical, productivity, etc)'
      },
      this['Have good sleep'],
      hint('When trapped into thinking "either-or", think of ways of being able to realize all the options, or combinations of them. E.g. build a business AND be able to travel -> lifestyle business.'),
      hint('Sleep over it'),
      hint('Visualize consequences of various decisions'),
      hint('Watch out for priming effects'),
      hint('Watch out for cognitive biases; TODO: you are not so smart audiobook'),
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
      { text: `Treat getting up as something You *want* to do, as opposed to *have-to* do.`},
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
          hint('You can use cleaning (e.g. vacuuming, house cleaning) as a good way to get physical activity while at the same improving the surroundings'),
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
      hint(`Prioritize according to goals and values`),
      hint('Prioritize prioritizing itself'),
      hint(`Figure out what the biggest bottleneck is, and prioritize it, to unblock`),
      hint(`Use the N-minute rule`),
      { text: 'Early spend the most time&energy designing things that will affect the most other things and the things that will be hardest to change.',
        comments: `Things that are easy to change later, should be left out crude, to free up energy and focus on the more important things. Exception: things that are very salient and annoying while being easy to change, thus reducing motivation and confidence in the efforts.`
      },
      hint(`Can Prioritize things which help You use the product yourself.`),
      hint(`Can Prioritize things which help You show Your work to others`),
      hint(`Can Prioritize things which will help you build/rekindle motivation`),
      hint(`Prioritise according to ROI (Return on investment). For that You need to do a quick #estimation.`),
      hint('Prioritize things which can shed better light (provide understanding/information) on subsequent tasks (reconnaissance)'),
      hint('Then Prioritize things which involve making decisions which can affect further priorities'),
      hint('Can prioritize things with external dependencies, because of uncertainty of how much they will take'),
      {
        text: 'Can prioritize things which need external people / resources',
        comments: `(because their availability might come and go) - e.g. making appointments`
      },
      hint('Can prioritize the part (thus need to split tasks) of tasks, where things are written down, to not forget them and to stop nagging thoughts. The other part of the task can be done later when time permits.'),
      hint('Can prioritize starting things, which can happen in parallel without much intervention while they are happening (e.g. laundry)'),
      hint('Can prioritize things which are quick to do (but be careful of doing too many "fun and easy" things). Often in the mind an item is an item, no matter if it takes 1 minute or 1 hour. So doing a number of small items can quickly reduce noise in the mind'),
      hint('Can prioritize things in such a way to group related things together, to utilize/discover relationships between them and facilitate INSIGHTS which might sprout from the relationships.'),
      hint('Specify non-goals, posteriorities, not just priorities.'),
      hint('MoSCoW'),
      hint('ABCDE method'),
    ]
  })

  'Planning' = hint({
    ifYes: [
      this['Prioritizing'],
      hint(`Write down the plan`),
      hint(`Don't be afraid of writing the things You want to do. Even though it might be overwhelming, but it will keep You at the right track and will help You visualise the outcomes / dream.`),
      {
        text: `Try to estimate duration and cost.`,
        comments: `If the estimation turns out not accurate - don't worry - treat it as a learning experience and re-estimate. An imperfect estimation is better than no estimation. Estimating also forces us to think about various considerations.`
      },
      hint(`Plan in multiple stages, with stepping stones, milestones, checkpoints and decision points (if-then-else-...) to make your plan more flexible and adaptable.`),
      hint(`Periodically revise and adjust your plan.`),
      hint(`The plan is to set a general direction, but it will have to be adjusted along the way. Which is still better than no plan at all (like ship without a rudder heading in a random direction).`),
      hint(`Can use time-boxing as an alternative to estimates`),
      hint(`Estimating: Some tasks should have an extra amount of time allocated to them, even if a minimalistic version of the task could be completed much faster; to ensure quality and coherence.`),
      hint(`Can estimate optimistic (minimum) times as well, for extra motivation (like OrYoL's min time column)`),
    ]
  })

  'Planning a day' = hint({
    ifYes: [this['Planning']]
  })

  'Planning a life' = hint({
    ifYes: [this['Planning']]
  })

  'Effectiveness' = hint({
    subTitle: `Doing the right things and doing them efficiently`,
    ifYes: [
      {
        title: `Efficiency / optimizations`,
        ifYes: [
          {
            text: 'Look for, and utilize, little accidental or semi-accidental coincidences, patterns; it can even double effectiveness; even though it might feel like "cheating".'
          },
          {
            title: `Batch related activities`,
            subTitle: `to decrease overhead and context switching and increase efficiency`
          },
          {
            title: `Don't be afraid to use quick little hacks, quick workaround`,
            subTitle: `"Duct Tape". As opposed to keeping suffering some deficiency or planning a big expensive and/or time-consuming fix someday-maybe`,
          },
        ],
      }
    ]
  })

  'Productivity' = hint({
    ifYes: [
      { title: `Motivation for productivity`,

        ifYes: [
          { title: `Get out of your own way`, subTitle: `Stay calm and let Your subconscious mind to its best job as opposed to being anxious about results. You can only directly control the actions/effort, not the result itself.`},
          {
            title: `Get a sense of urgency`,
            subTitle: `Time is passing. The only way to deal with this is to use the time better.`,
            ifYes: [
              hint(`User time-tracker with time-boxing and time-left/overtime notification.`),
              { title: `Know when things are good enough.` /* for search keywords: excessive self-criticism */,
                ifYes: [
                  { title: `Ask Yourself: would You buy this product? Would people buy this product? Would they like it already? Probably. So let's move to the next item...` },
                  { title: `Ask Yourself: if You saw (without looking too much into tiny details) this thing done by someone else, would You like it? Most often we get too self-critical when looking at our own work.` },
                ],
              },
            ],
          },
          { title: `Productivity is really the only non-random way to do things` },
          { title: `Competitiveness`,
            subTitle: `I want to do it better! It's a foundation of a strong system. It lifts everyone up.`,
            ifYes: [
              { title: `Overcome objections (conscious or unconscious) to competitiveness` /* this could be a field `objections` */,
                ifYes: [
                  { title: `Objection: Isn't competing bad/aggressive/brutal ?`,
                    subTitle: `As long as we don't do anything unethical, competition is actually good. Friendly competition is possible.`
                  },
                  { title: `Objection: Isn't cooperating better than competing?`,
                    subTitle: `One does not exclude the other.`
                  }
                ],
              }
            ]
          },
          { title: `Visualise the benefits of productivity`, subTitle: `You are going to feel better, stronger, a better person. There will be useful outcomes. You can help others.` }
        ],
      },
      { title: `Use the best tool for the job.`},
      { title: `Let focus on results (ends) guide You, instead of dwelling on means.`},
      this.Confidence,
      this.Focus,
      this.Motivation,
      this.Discipline,
      this['Planning'],
      // this['Energy'],
      this['Good decisions'],
      this['Effectiveness'],
      hint('Have more time ... - create more usable time'),
      hint('Use the time better ...[-> focus, organisation, tools, etc]'),
      {text: 'Delegate',
        ifYes: [
          hint(`Spend time assigning/coordinating/checking work of other people, knowing it will pay off, whereas neglecting it will have negative consequences in morale/quality/quantity of work.`),
        ]
      },
      hint(`Reach a state of Flow`),
      hint(`Sustained relaxed focus`),
      hint(`Avoid mental blocks`),
      hint(`Clarity`),
      hint(`Work from a list`),
    ]
  })

  'Software design' = hint({
    ifYes: [
      this['Prioritizing'],
    ]
  })

  'Solving problems' = hint({
    ifYes: [
      hint(`Thinking is a skill too`),
      hint('Use lateral thinking'),
      hint(`Take time to think!`),
      hint('Try to see the problem in a broader context (think holistically), avoid tunnel vision; perhaps the real/root problems are somewhere else and/or I\'m using incorrect reference point in judging the situation'),
      hint('Look for root-causes (root cause analysis); use the N-whys technique.'),
      hint('Watch out for false assumptions which make you miss the actual cause of the problem'),
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
          hint(`Use https://bestofjs.org/projects/testcafe`),
          hint(`Use StackShare`),
        ]
      },
      {
        text: 'Be faster at programming',
        ifYes: [
          hint('Use IDE/editor navigation history; back/forward'),
          hint('Use keyboard shortcut to get to matching brace (^M)'),
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
      },
      {
        text: `Seek to understand before being understood`,
      },
      {
        text: `Be a good listener`,
        ifYes: [
          hint(`Avoid interrupting`),
        ]
      }
    ]
  })

  'Meeting People' = hint({
    ifYes: [
      this['Dealing with other people'],
    ]
  })

  'Making presentations' = hint({
    ifYes: [

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
      hint('Take gratification from little things. E.g. nicely executing tasks (good effort but don not rely on good outcomes, which are often not under our control) or everyday things'),
      hint('Take gratification from self-improvement'),
      hint('Take gratification from contemplation, getting insights, understanding things better'),
      hint('Take gratification from having freedom, free will, existing in the world and being able to observe, explore and contemplate it.'),
      hint('Take gratification from finishing tasks and making improvements'),
      hint('Take gratification from learning new things and strengthening previous knowledge'),
      hint('Take gratification from being/becoming well-organized, ready, prepared, clean'),
    ]
  })

  /** Things that apply everywhere (will probably have the app display that everywhere later) */
  'General' = hint({

    /*
    * Stuff that probably applies to everything:
    * - habits
    * - solve problems
    * - thinking
    * - discipline -> motivation
    * - effectiveness -> efficiency
    * - decisions
    * - optimizations
    * */
    ifYes: [
      {
        text: 'Build good *habits*/routines and eliminate/modify bad habits. Habits let you do things better while making them automatic, thus reducing energy/focus consumption',
        ifYes: [
          hint('For motivation about working on habits: treat habits (which can feel boring sometimes) as BUILDING BLOCKS to build bigger and more exciting things'),
          hint(`Don't worry about having "too many" habits. Once they settle as entrenched habits, They become automatic and thus don't require effort.`),
        ]
      },
      hint(`Remember, that most things in life are experiments. So, do not assume immediate success. Make educated guesses, try things out, observe, take note, analyze, improve, repeat. Patience. Accept possibility of failure, but don't worry about it too much. Enjoy the process of of the experiments, observations, gradual improvements, discoveries.`),
      hint('Ask myself: have I bee in a similar situation before? What were the causes? What were the outcomes?'),
      { text: `Patience` },
      { text: `Law of Cause and Effect (Sowing and Reaping)` },
      hint(`Emotional Hygiene`),
      hint(`Persistence`),
      hint(`Law of indirect effort`),
    ]
  })

  'Build Momentum' = hint({
    ifYes: [
      hint('Fake it till you make it.'),
      hint('Use duct-tape/hacks if necessary to get unstuck from chicken&egg problems, etc.'),
    ]
  })

  'Use stepping stones' = hint()

  'Feeling Overwhelmed' = hint({
    ifYes: [
      this['Prioritizing'],
      // Choosing / satisficer not maximizer
      this['Build Momentum'],
      hint('Split things into smaller parts. Tackle one thing at a time. Swiss cheesing'),
      hint('Move things into buckets/inbox/todo (GTD)'),
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
      hint('Stop and reflect on Your values, based on past experiences and future plans/dreams, Ikigai.'),
      this['Use stepping stones'],
    ]
  })

  'Feeling Good | Feeling Bad (root?)' = hint({
    ifYes: [
      hint(`Internal locus of control`),
      hint({
        text: 'Happiness',
        ifYes: [
          hint('Progressive realization of a worthy goal'),
          hint(`Just solving problems and trying to stay safe and comfortable, won't make a great life or great happiness. Need to work towards worthy transcendent goals.`),
          hint('Remember that happiness cannot be a direct goal. Instead, it is a byproduct.'),
          hint(`Avoid Negativity, as it can spill into other areas. As for example "the weather is bad".`),
          hint(`Finishing tasks and projects (or just making a progress on them) can make You happy`),
          hint(`Improving Your surroundings/situation can make You happy.`),
        ]
      }),
      hint('Optimism (is the glass half-empty... TODO: reinterpretation, :when life gives You lemons)'),
      hint({
        text: 'Peace of mind'
      }),
      hint({
        text: 'Guilt free (part of peace of mind?) - dealing with feeling guilt',
        ifYes: [
          hint(`Doing good while doing well`),
        ]
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
      hint('With best salesmen it is not even apparent that they are selling'),
    ]
  })

  'Be a keen observer, which might help. But that does not mean to be a judgemental observer.' = hint()
  'Remember that it is as if we have two brains, two beings within us. The old brain: food, fighting, sex, limbic system... The new brain: higher values and cognition, relationships. So keep them both satisfied. Or dissatisfied equally? Their unifying goals are perhaps WTP, reproduction?' = hint()

  Regret = hint({
    // guilt
    ifYes: [
      hint('Leave it behind. Take it as lessons learned, dont torture yourself'),
    ]
  })

  Cravings = problem({
    text: `Dealing with cravings / urges (in general)`,
    ifYes: [
      hint(`Surfing the urge`),
      this['Managing gratification'],
      hint(`Realise that You can take pleasure from just sitting down / lying down and relaxing and calming and thinking / reflecting / visualising / dreaming without the need of binging on cravings`),
      hint(/* duplicate? */`Just relax and enjoy just being (as opposed to the tension created by the urge)`),
      hint(`Satisfy other instincts / cravings, e.g. creativity, hobbies, learning things`),
    ]
  })

  // Worry:
  // Frustrated
  // -> Reach a state of flow
  Frustrations = hint({
    title: `Dealing with frustrations / anger`,
    ifYes: [
      hint(`A person is as big as the things that can make the person angry/frustrated`),
    ]
  })
  //
  'Cravings for computer games' = hint({
    ifYes: [
      this.Cravings,
      { text: `Playing games in controlled way`,
        ifYes: [
          hint(`Do not start at too late hour, risking losing good sleep`),
          hint(`Consider playing one game and get really good at it to get a feeling of satisfaction which will help You at ending a given playing session`),
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
      hint('Play the game that is life. But prefer to play against previous versions of yourself, and/or against obstacles'),
      hint('There are game-like aspects and tasks in all activities. Use it to Your advantage to gradually replace your vices.'),
      hint(`Learn new things for excitement. The Excitement is double: 1. new things; 2. feeling like becoming a more skilled resourceful person. And don't be afraid to spend money & time on the new activities - as You would have spent money and time on your vices anyway, right?`),
      this['Make everyday real life more enjoyable (so as to avoid escapism and low mood)'],
      hint(`Hide your gaming devices to stop them from tempting/distracting and to introduce a barrier of time/effort.`),
      hint(`Think how playing games is really an infinite chase down an infinite rabbit hole that is also a tar pit trap and fly paper of fake dopamine.`),
    ]

  })
  'Cravings for alcohol' = hint({
    ifYes: [
      this.Cravings,
      this['Make everyday real life more enjoyable (so as to avoid escapism and low mood)'],
      hint('Get "drunk"/high on visions of what You can achieve and on striving towards it'),
    ]
  })

  'Bored / Boredom' = hint({
    ifYes: [
      {
        text: `Excitement`,
        ifYes: [
          { text: 'Strive to expand your person; learn new skills, improve your conditions, meet new people. Examples: learning new language. Find new music, new artists, new albums, even new genres.',
            ifYes: [
              { text: `Don't limit your thinking to your current job/industry. Think how after reaching a certain level, you can pivot/synergize onto other fields`,
                examples: [
                  `Elon Musk: Tesla, Solar City`,
                  `Steve Jobs: Mac -> iPhone, ...`,
                ]
              }
            ]
          },
          hint(`Re-kindle excitement for the thing that You are supposed to be doing right now.`),
          hint(`Re-kindle / revive things that were exciting to You in the past, e.g. old music / activities / games / friends / projects`),
          hint(`Have a bias towards excitement.`),
        ]
      }
    ]
  })

  'Guilt-free entertainment (fun)' = hint({
    ifYes: [
      hint(`allocate time for entertainment`),
      hint(`first do dinner before desert`),
      hint(`try przyjemne z pożytecznym so that You dont feel guilty`),
      hint(`do not sacrifice other things to do entertainment`),
      hint(`Maintain a list of fun-yet-useful activities You can do` /* e.g. my list-tree of such activities in OrYoL 2020-04-03, 05:59*/),
    ],
  })

  'Feel bad' = hint({
    ifYes: [
      this['Guilt-free entertainment (fun)'],
      hint(`Progress on a worthwhile goal`),
    ]
  })

  'Annoyed / Irritable' = hint({
    /* Find something enjoyable where You can have internal locus of control; fitting ikigai; guilt-free entertainment */
  })

  'Acting stupid' = hint({
    /* wanna be smarter more clever, intelligent */
    ifYes: [
      hint(`Breathing`),
      hint(`Avoid sugar spikes`),
      hint(`Exercise for highly oxygenated blood`),
    ]
  })

  'Build own business' = hint({
    ifYes: [
      { title: `Think like a business person!`,
        subTitle: `It requires as certain reprogramming of mindset. Need to get rid of habits of thought and action related to being an employee.`,
        ifYes: [
          { title: `Watch / listen to interviews with Business people.`,
            subTitle: `What made them succeed, what did they overcome.`,
          }
        ],
      },
      { title: `Determination!`,
        subTitle: `Without determination You will not go far - you will get stuck in a kind of middle-zone limbo.`,
      },
      hint(`Get feedback from trusted people, early and often`),
      {text: `Decide what kind of business You want - big / VC-funded / lifestyle / bootstrapped`,
        ifYes: [
          hint(`Decide how many hours per week/day/mont You would like to spend working: 1. in the initial growth period; 2. as a target`),
          hint(`Decide if You would like to hire employees/freelancers and how many; depends on your introversion/extroversion level and how much You like/dislike dealing with people`),
        ]
      },
      hint(`Remember, that You might need/want to pivot`),
      this['Productivity'],
      this['Being healthy at office job/computer work'],
      { text: `Maintain motivation for building a business`  /* progress, momentum */,
        ifYes: [
          { text: `Overcome fears of making Your own business`,
            ifYes: [
              hint(`Remember that beginnings are often humble and crummy and with failure`),
            ]
          },
          this.Motivation,
          { text: `It is just a superior outcome and becoming a superior person in the process.` },
          { text: `Think of all the great connections You can make while developing the business.`},
          { text: `Remove / get done with nagging loose ends which create a conflict between working on the business or working/worrying about them`},
          { text: `Weave in some nice visual improvements/changes to rekindle motivation for the project via the limbic system.`},
          {text: `Weave in attractive/exciting aspects, like using new tools and learning things along the way. But prefer relatively low-hanging less-risky things, to not jeopardize the business`,
            examples: [
              `Elm (learning about the language is ok, to use as inspiration; but using the language is too far fetched)`,
              `TypeScript 3.7.1-rc in Ionic too far-fetched; but maybe strictNullChecks is ok`,
            ]
          },
          { text: `Imagine thousands/millions of people using your product or service and getting value out of it and paying you.`
          }
        ],
      },
      { text: `Overcome fear of failure.`,
        ifYes: [
          hint(`Even if You fail, the journey makes You stronger, more resourceful and ready to try another time or pivot to something else.`),
          hint(`Failure is not so probable really, since You have been gathering skills, resources, contacts and personal qualities for a long time, ready to put them to good use.`),
          hint(`Realise, that You control the probability of success`),
        ]
      },
      {
        title: `Overcome fear of success.`,
      },
      /* Fear of wasting time / failing: remember there will be activities that You like and are proud of; e.g. programming, designing apps */
      hint(`Don't worry as much about chasing the latest and greatest technologies, because You will hardly release anything. Focus on value for users and, building working prototypes, and on releaseable version.`),
      hint(`At first, skip certain details that can be defined later.`),
    ]
  })

  'Avoid over-eating / binge eating' = hint({
    ifYes: [
      hint('Avoid thinking stressful thoughts while eating'),
      hint(`Eat slowly to let the brain register that it has had enough food. Allocate e.g. 10 minutes for the eating process.`),
      hint(`Pre-prepare portions of given size, to draw a line.`),
    ]
  })

  'Reduce calories consumption' = hint({
    ifYes: [
      this['Avoid over-eating / binge eating'],
      hint('Drink water while at the computer, instead of juice'),
    ]

  })

  'Deal with food #cravings / overeating / snacking' = problem({
    ifYes: [
      this.Cravings,
      this['Avoid over-eating / binge eating'],
      hint(`Brush teeth to signal that eating is over and reduce temptation.`),
      hint(`#Visualise #Consequences: - being fat (bad self esteem, not attractive to opposite sex), impaired thinking from sugar spikes, spending a lot of money, spending too much time on the toilet.`),
      hint(`Sleep well to reduce craving for food`),
      hint(`Avoid alcohol`),
      hint(`Get occupied with something else`),
      hint(`Eat healthy snacks, like carrots, non-fried nuts`),
    ]
  })

  'Worry / anxiety' = problem({
    keywords: ['worried', `worrying too much`, `anxious`],
    ifYes: [
      hint(`Purposeful action is a way to cure worry. Just the act of taking action pushes out worry thought.` +
        `And results of these actions have big probability of reducing/eliminating the worry situation.`),
      this['Low-information diet'],
      hint(`«I'm an old man and have known many troubles - most of which never happened.»`),
    ]
  })

  'Health / Sick' = problem({
    ifYes: [
      hint(`Drink a lot of water`),
      { text: `Exercise / Sports`,
        ifYes: [
          { text: `Don't have time / energy / money for exercises / sports / gymnasium`,
            ifYes: [
              hint(`Consider home exercises, like vertical push-ups, lifting water bottles`),
              hint(`Consider using exercise equipment in public spaces`),
              hint(`Consider fast walking.`),
              hint(`Consider walking up-hill / up stairs`),
            ]
          },
        ]
      },
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

  'Dealing with, solving, problems' = problem({
    ifYes: [
      hint(`Accept or overcome`),
      { text: `You might or might not be responsible for the problem occurring but You are responsible on how you handle it`,
        comments: `"The problem... is not the problem. The problem is our approach to the problem"`,
      }
    ]
  })

  'Being / feeling out of control' = problem({
    ifYes: [
      hint(`Mindfulness (meditation) to increase self-control and prevent "headless chicken autopilot mode"`),
      this['Discipline'],
      hint(`TODO: unbalanced`),
    ]
  })

  'Procrastination' = problem({
    /*  search keywords: 'don't feel like, nie chce mi się, no tengo ganas; laziness; lazy' */
    ifYes: [
      this['Motivation'],
      hint(`Consider and visualise the positive and negative consequences of doing and not doing the thing You should do. Focus on the positive, to keep dopamine level up.`),
      { title: `Overcoming procrastination for a given activity, could be a task on its own.`, subTitle: `So feel free to allocate&spend time, energy, money on it ` },
      { title: `It's okay to ask why`, subTitle: `But don't ask "why" too many times`}
    ]
  })

  'Organising things (e.g. at home)' = problem({
    ifYes: [
      hint(`First split the day-to-day things that you will really need in the coming days, from the someday-maybe / undecided / unordered things.`),
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
          hint(`Use any of your situation for arguing for remote work (can be partial at first) : health, family situation, experience, life values`),
          hint(`First negotiate / ask for a bit of remote work, e.g. for specific periods or certain number of days per week/month, later to be expanded once confidence grows.`),
        ]
      },
      hint(`Check, and try to put a time limit on, non-compete / non-solicitation clauses.`),
      { text: `If the client/employer is not giving a quick decision or is complaining about "too expensive", to "help them make the decision", give a deadline with sub-deadlines, surpassing which would result in You getting out of the talks completely.`
        /* If any of those things fail to happen, I might be out completely to free my time and focus:
          - some concrete info from You&Ana by Sunday afternoon
          - some concrete progress mid-Monday
          - final decision, first 50% transfer confirmation by end of Monday */
      }
    ]
  })

  'Programming when having trouble thinking/focusing (e.g. sleepy / not had enough sleep / hangover / distractions / mental fog etc)' = problem({
    comments: `(Example of something that is on intersection of multiple aspects; this could be taken from search keywords).`,
    ifYes: [
      hint(`Focus on things that improve confidence, e.g. writing tests or working in areas with good test coverage, to not introduce more bugs.`),
      hint(`Make sure changes are committed, to not make a mess.`),
    ]
  })

  'Start the day well' = problem({
    ifYes: [
      this['Getting up from sleep/bed'],
      { text: `Build a good routine at the start of the day`,
        ifYes: [
          hint(`Wash your face and even neck with cold water to awaken fully.`),
          { text: `Plan the day`,
            ifYes: [
              this['Planning a day']
            ]
          }
        ]
      }
    ]
  })

  'Self-improvement and personal transformation (become better)' = problem({
    subTitle: `Positive personal change, changing for the better`,
    ifYes: [
      hint(`Mindfulness`),
      hint(`Allocate and spend time on self-improvement`),
      hint(`When you get an idea or epiphany, take a moment to acknowledge it, reflect on it, internalize it, let it sink in.`),
      hint(`Cultivate Your Epiphanies`),
      hint(`Actively look for positive/negative patterns that occur in Your life, Your behaviour.`),
      { title: `When You are becoming better than average, don't be afraid of becoming a bit different from most people.`,
        subTitle: `Don't be afraid to be a bit in your own (positive) bubble.`
      },
      hint(`Work on Yourself at least as hard as on your work.`),
      {
        title: `Acknowledge that some outcomes in life are better than others`,
      }
    ]
  })

  'Dealing with jealousy / envy' = problem({
    ifYes: [
      hint(`Either decide to not want the given thing, or say to yourself that one day you will obtain the given thing / quality / situation (in which case the envy is motivating). Instead of hating the person. (special case of accept or overcome)`),
    ]
  })

  'How to not get bored at home (Coronavirus quarantine)' = wish({} /* TODO */)

  /* Root */
  'Have a great life (root)' = problem({
    subTitle: `Live a great life. Live a great way`,
    ifYes: [
      { text: `Balance`
      }
    ]
  })

  'Excessive Perfectionism' = problem({})

  'Impostor Syndrome' = problem({
    ifYes: [
      hint(`Remember that the more we know, the more we know we don't know`),
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


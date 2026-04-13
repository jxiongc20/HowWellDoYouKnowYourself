const CHARS = {
  alex:  { name: "Alex", role: "You", color: "#f5c842", skin: "#f0c7a0", hair: "#6f523c", hairHi: "#8a6a50", shirt: "#567ec3", jacket: "#24395e", pants: "#233047", shoes: "#181818" },
  priya: { name: "Priya", role: "Senior Engineer", color: "#62c08c", skin: "#c77d4a", hair: "#3b2418", hairHi: "#5a3a2b", shirt: "#4ea97a", jacket: "#1f3d33", pants: "#2a2f3a", shoes: "#181818" },
  sam:   { name: "Sam", role: "Your Manager", color: "#63aeea", skin: "#e7c49d", hair: "#a07a5f", hairHi: "#bc9476", shirt: "#6f7bc5", jacket: "#364376", pants: "#27334d", shoes: "#181818" },
  kai:   { name: "Kai", role: "Junior Designer", color: "#ea9b57", skin: "#f0d2af", hair: "#5a3a28", hairHi: "#7a5238", shirt: "#e28643", jacket: "#6d2f1d", pants: "#2d2430", shoes: "#181818" },
  jordan:{ name: "Jordan", role: "Product Lead", color: "#9f84ef", skin: "#d5ae88", hair: "#4a3124", hairHi: "#684636", shirt: "#8268db", jacket: "#36285e", pants: "#27293d", shoes: "#181818" },
  bg1:   { name: "Mia", role: "", color: "#ea7198", skin: "#e4b193", hair: "#7a4f3a", hairHi: "#9a6b52", shirt: "#d95a84", jacket: "#7a2747", pants: "#2c1b24", shoes: "#181818" },
  bg2:   { name: "Theo", role: "", color: "#62c08c", skin: "#b37e52", hair: "#4b3022", hairHi: "#6a4836", shirt: "#4aa06f", jacket: "#234430", pants: "#232a34", shoes: "#181818" }
};

const POSITIONS = {
  desk_alex:   { x: 30, y: 37 },
  desk_priya:  { x: 56, y: 31 },
  desk_sam:    { x: 72, y: 45 },
  desk_kai:    { x: 39, y: 56 },
  desk_jordan: { x: 59, y: 58 },
  bean_bag:    { x: 19, y: 63 },
  coffee:      { x: 82, y: 30 },
  meeting:     { x: 52, y: 45 },
  center:      { x: 46, y: 46 },
  bg1_pos:     { x: 20, y: 47 },
  bg2_pos:     { x: 68, y: 29 }
};

const CHAPTER_POOLS = [
  {
    id: 0,
    time: "9:04 AM",
    title: "Monday Morning",
    desc: "Your coffee's getting cold. Slack is not.",
    pick: 2,
    scenes: [
      {
        id: "m1",
        setup: [
          { char: "alex", pos: "desk_alex", mood: "😊" },
          { char: "priya", pos: "desk_priya", mood: "💬" },
          { char: "sam", pos: "desk_sam", mood: "📋" },
          { char: "kai", pos: "desk_kai", mood: "😊" },
          { char: "jordan", pos: "desk_jordan", mood: "🤔" },
          { char: "bg1", pos: "bg1_pos", mood: "😊" },
          { char: "bg2", pos: "bg2_pos", mood: "😊" }
        ],
        event: {
          char: "priya",
          pos: "desk_priya",
          bubble: "hey! can you clean up the onboarding doc? no rush but also ideally today lol 😅"
        },
        narrator: "Priya messages you about the onboarding doc. 'Make it better' is doing a lot of heavy lifting as a brief.",
        prompt: "What do you do?",
        choices: [
          {
            icon: "💬",
            main: "Reply asking what 'better' means — who's it for?",
            eq: 1, iq: 2, sig: "clarity",
            reaction: {
              type: "good",
              head: "Priya lights up.",
              body: "She walks over and explains: it's for external partners, needs a totally different tone. You now have a clear brief.",
              moveTo: "desk_priya",
              mood: "😄"
            },
            alexMood: "😌"
          },
          {
            icon: "📄",
            main: "Open the doc, read through, form your own view first",
            eq: 0, iq: 2, sig: "action",
            reaction: {
              type: "good",
              head: "You spot it yourself.",
              body: "The doc is full of internal jargon. You flag it to Priya with a fix. She replies: 'Yes — exactly this.'",
              moveTo: "desk_alex",
              mood: "👍"
            },
            alexMood: "😊"
          },
          {
            icon: "🤝",
            main: "Start by asking what outcome would help Priya most",
            eq: 2, iq: 0, sig: "coachability",
            reaction: {
              type: "good",
              head: "The conversation gets warmer and clearer.",
              body: "You learn what matters most to her before touching the doc.",
              moveTo: "desk_priya",
              mood: "😊"
            },
            alexMood: "😄"
          },
          {
            icon: "✏️",
            main: "Start editing immediately — figure it out as you go",
            eq: 0, iq: 1, sig: "action",
            reaction: {
              type: "okay",
              head: "You hit a wall midway.",
              body: "Halfway through you realize you do not know the audience. Rework follows.",
              moveTo: "bean_bag",
              mood: "😐"
            },
            alexMood: "😅"
          }
        ]
      },
      {
        id: "m2",
        setup: [
          { char: "alex", pos: "desk_alex", mood: "😊" },
          { char: "priya", pos: "desk_priya", mood: "😊" },
          { char: "sam", pos: "desk_sam", mood: "📋" },
          { char: "kai", pos: "desk_kai", mood: "😊" },
          { char: "jordan", pos: "desk_jordan", mood: "🤔" },
          { char: "bg1", pos: "bg1_pos", mood: "😊" },
          { char: "bg2", pos: "bg2_pos", mood: "😊" }
        ],
        event: {
          char: "sam",
          pos: "desk_sam",
          bubble: "how's the doc going? also — team retro at 2pm, good to have you there 👋"
        },
        narrator: "Sam asks about the doc and mentions the retro. You're in flow, but the retro matters.",
        prompt: "How do you respond?",
        choices: [
          {
            icon: "📩",
            main: "Reply with a clear update and confirm you'll be there",
            eq: 1, iq: 2, sig: "clarity",
            reaction: {
              type: "good",
              head: "Sam gets exactly what she needed.",
              body: "You finish your work and walk into the afternoon with no loose threads.",
              moveTo: "desk_sam",
              mood: "😊"
            },
            alexMood: "😄"
          },
          {
            icon: "🏃",
            main: "Say yes to the retro and finish the doc after",
            eq: 2, iq: 0, sig: "coachability",
            reaction: {
              type: "good",
              head: "The retro was worth it.",
              body: "A process change comes up that would have forced a rework later.",
              moveTo: "center",
              mood: "😊"
            },
            alexMood: "😊"
          },
          {
            icon: "🧠",
            main: "Give a quick status, then protect your focus block",
            eq: 0, iq: 2, sig: "independence",
            reaction: {
              type: "good",
              head: "You manage both clarity and output.",
              body: "The message is brief, but enough. You keep momentum without disappearing.",
              moveTo: "desk_alex",
              mood: "😌"
            },
            alexMood: "😌"
          },
          {
            icon: "🔇",
            main: "Keep your head down and reply later",
            eq: 0, iq: 1, sig: "action",
            reaction: {
              type: "okay",
              head: "You delivered, but the silence was noticed.",
              body: "The work got done. The communication piece landed weaker.",
              moveTo: "desk_sam",
              mood: "😐"
            },
            alexMood: "😅"
          }
        ]
      },
      {
        id: "m3",
        setup: [
          { char: "alex", pos: "desk_alex", mood: "😊" },
          { char: "priya", pos: "desk_priya", mood: "😊" },
          { char: "sam", pos: "desk_sam", mood: "😊" },
          { char: "kai", pos: "desk_kai", mood: "🎨" },
          { char: "jordan", pos: "desk_jordan", mood: "🤔" },
          { char: "bg1", pos: "bg1_pos", mood: "😊" },
          { char: "bg2", pos: "bg2_pos", mood: "😊" }
        ],
        event: {
          char: "kai",
          pos: "desk_kai",
          bubble: "hey, I have two homepage mockups. which direction feels stronger? 👀"
        },
        narrator: "Kai asks for quick feedback, but you can tell he is also looking for confidence.",
        prompt: "How do you respond?",
        choices: [
          {
            icon: "🧭",
            main: "Ask what the page needs to do before picking",
            eq: 0, iq: 2, sig: "clarity",
            reaction: {
              type: "good",
              head: "The feedback gets sharper fast.",
              body: "Once the goal is clear, your answer becomes more useful than a style preference.",
              moveTo: "desk_kai",
              mood: "😊"
            },
            alexMood: "😌"
          },
          {
            icon: "✨",
            main: "Pick the cleaner one and explain why",
            eq: 1, iq: 1, sig: "action",
            reaction: {
              type: "good",
              head: "Kai gets both direction and reassurance.",
              body: "Quick, clear, and supportive. It lands well.",
              moveTo: "desk_kai",
              mood: "😄"
            },
            alexMood: "😊"
          },
          {
            icon: "🤝",
            main: "Start with what is working in both options",
            eq: 2, iq: 0, sig: "coachability",
            reaction: {
              type: "good",
              head: "Kai visibly relaxes.",
              body: "The critique becomes easier to hear because you opened with signal, not doubt.",
              moveTo: "desk_kai",
              mood: "😊"
            },
            alexMood: "😄"
          },
          {
            icon: "⏳",
            main: "Tell him you'll circle back later",
            eq: 0, iq: 1, sig: "independence",
            reaction: {
              type: "okay",
              head: "Reasonable, but the moment passes.",
              body: "Kai moves on without your input. Not harmful, just a missed interaction.",
              moveTo: "desk_kai",
              mood: "😐"
            },
            alexMood: "😅"
          }
        ]
      },
      {
        id: "m4",
        setup: [
          { char: "alex", pos: "desk_alex", mood: "😊" },
          { char: "priya", pos: "desk_priya", mood: "😊" },
          { char: "sam", pos: "desk_sam", mood: "😊" },
          { char: "kai", pos: "desk_kai", mood: "😊" },
          { char: "jordan", pos: "desk_jordan", mood: "📈" },
          { char: "bg1", pos: "bg1_pos", mood: "😊" },
          { char: "bg2", pos: "bg2_pos", mood: "😊" }
        ],
        event: {
          char: "jordan",
          pos: "desk_jordan",
          bubble: "quick one — what metric would you watch first on this launch?"
        },
        narrator: "Jordan is testing how you think, not asking for a perfect answer.",
        prompt: "What do you say?",
        choices: [
          {
            icon: "📊",
            main: "Ask what the launch is trying to prove first",
            eq: 0, iq: 2, sig: "clarity",
            reaction: {
              type: "good",
              head: "The question lands well.",
              body: "You avoid naming a metric too early and instead anchor to goal first.",
              moveTo: "desk_jordan",
              mood: "😊"
            },
            alexMood: "😌"
          },
          {
            icon: "🎯",
            main: "Pick one metric and explain your reasoning",
            eq: 0, iq: 2, sig: "independence",
            reaction: {
              type: "good",
              head: "Jordan likes the decisiveness.",
              body: "A grounded answer shows confidence and structure.",
              moveTo: "desk_jordan",
              mood: "😄"
            },
            alexMood: "😊"
          },
          {
            icon: "🤝",
            main: "Start by asking who cares most about the result",
            eq: 2, iq: 0, sig: "coachability",
            reaction: {
              type: "good",
              head: "You shift the conversation toward stakeholders.",
              body: "That people-centered framing changes how the metric discussion unfolds.",
              moveTo: "desk_jordan",
              mood: "😊"
            },
            alexMood: "😄"
          },
          {
            icon: "🌀",
            main: "List a bunch of possible metrics at once",
            eq: 0, iq: 1, sig: "action",
            reaction: {
              type: "okay",
              head: "It sounds busy, not sharp.",
              body: "You had ideas, but the answer lacked a clear anchor.",
              moveTo: "desk_jordan",
              mood: "😐"
            },
            alexMood: "😅"
          }
        ]
      }
    ]
  },
  {
    id: 1,
    time: "2:30 PM",
    title: "Afternoon Turbulence",
    desc: "Feedback arrives. Not what you hoped.",
    pick: 2,
    scenes: [
      {
        id: "a1",
        setup: [
          { char: "alex", pos: "desk_alex", mood: "😊" },
          { char: "priya", pos: "desk_priya", mood: "😊" },
          { char: "sam", pos: "desk_sam", mood: "📋" },
          { char: "kai", pos: "desk_kai", mood: "😐" },
          { char: "jordan", pos: "desk_jordan", mood: "🤔" },
          { char: "bg1", pos: "bean_bag", mood: "😊" },
          { char: "bg2", pos: "bg2_pos", mood: "😊" }
        ],
        event: {
          char: "sam",
          pos: "desk_sam",
          bubble: "looked at your deck — it's not quite landing. can you take another pass? 🙏"
        },
        narrator: "You spent real time on this. The feedback is short and vague.",
        prompt: "Your first reaction. What do you do?",
        choices: [
          {
            icon: "🧘",
            main: "Take a breath, then ask what specifically isn't landing",
            eq: 2, iq: 1, sig: "coachability",
            reaction: {
              type: "good",
              head: "The revision gets easier.",
              body: "You get direct feedback and avoid rebuilding blind.",
              moveTo: "desk_sam",
              mood: "😊"
            },
            alexMood: "😌"
          },
          {
            icon: "📝",
            main: "Explain your reasoning before changing anything",
            eq: 0, iq: 2, sig: "defensiveness",
            reaction: {
              type: "okay",
              head: "Your thinking is heard, but it still needs work.",
              body: "You eventually get there, just through a longer route.",
              moveTo: "desk_sam",
              mood: "😐"
            },
            alexMood: "😅"
          },
          {
            icon: "🔁",
            main: "Start rebuilding from scratch immediately",
            eq: 0, iq: 2, sig: "independence",
            reaction: {
              type: "okay",
              head: "You move fast, but not fully accurately.",
              body: "Without clearer direction, some effort misses the real issue.",
              moveTo: "desk_alex",
              mood: "😐"
            },
            alexMood: "😐"
          },
          {
            icon: "🤝",
            main: "Ask for 10 minutes to talk it through together",
            eq: 2, iq: 1, sig: "coachability",
            reaction: {
              type: "good",
              head: "The conversation saves time.",
              body: "Clarity turns a frustrating note into a fixable problem.",
              moveTo: "meeting",
              mood: "😄"
            },
            alexMood: "😄"
          }
        ]
      },
      {
        id: "a2",
        setup: [
          { char: "alex", pos: "desk_alex", mood: "😊" },
          { char: "priya", pos: "desk_priya", mood: "😊" },
          { char: "sam", pos: "desk_sam", mood: "📋" },
          { char: "kai", pos: "desk_kai", mood: "😬" },
          { char: "jordan", pos: "desk_jordan", mood: "🤔" },
          { char: "bg1", pos: "bean_bag", mood: "😊" },
          { char: "bg2", pos: "bg2_pos", mood: "😊" }
        ],
        event: {
          char: "kai",
          pos: "desk_kai",
          bubble: "sorry to bother you — I sent Jordan a proposal last week and haven't heard back. is that normal? 😬"
        },
        narrator: "Kai is clearly unsure whether to follow up or wait.",
        prompt: "How do you respond to Kai?",
        choices: [
          {
            icon: "💡",
            main: "Tell Kai directly to follow up",
            eq: 1, iq: 1, sig: "coachability",
            reaction: {
              type: "good",
              head: "The advice helps.",
              body: "Jordan replies the same day. Kai feels more confident after that.",
              moveTo: "desk_kai",
              mood: "😊"
            },
            alexMood: "😄"
          },
          {
            icon: "👂",
            main: "Ask how important this project is to him first",
            eq: 2, iq: 0, sig: "coachability",
            reaction: {
              type: "good",
              head: "The conversation gets more grounded.",
              body: "Your advice lands better because you understood the stakes first.",
              moveTo: "desk_kai",
              mood: "😊"
            },
            alexMood: "😊"
          },
          {
            icon: "🧠",
            main: "Help him draft a short follow-up message",
            eq: 1, iq: 2, sig: "clarity",
            reaction: {
              type: "good",
              head: "It becomes practical fast.",
              body: "You give support and structure at the same time.",
              moveTo: "desk_kai",
              mood: "😄"
            },
            alexMood: "😌"
          },
          {
            icon: "🔇",
            main: "Tell him you're swamped and you'll circle back later",
            eq: 0, iq: 1, sig: "action",
            reaction: {
              type: "okay",
              head: "Understandable, but it closes the moment.",
              body: "Kai figures it out. The connection opportunity fades a bit.",
              moveTo: "desk_kai",
              mood: "😐"
            },
            alexMood: "😅"
          }
        ]
      },
      {
        id: "a3",
        setup: [
          { char: "alex", pos: "desk_alex", mood: "😊" },
          { char: "priya", pos: "desk_priya", mood: "😬" },
          { char: "sam", pos: "desk_sam", mood: "📋" },
          { char: "kai", pos: "desk_kai", mood: "😊" },
          { char: "jordan", pos: "desk_jordan", mood: "🤔" },
          { char: "bg1", pos: "bg1_pos", mood: "😊" },
          { char: "bg2", pos: "bg2_pos", mood: "😊" }
        ],
        event: {
          char: "priya",
          pos: "desk_priya",
          bubble: "I think I may have misunderstood the request from the client 😬"
        },
        narrator: "Priya is sharp, so the fact she is bringing this to you means she wants a grounded read, not panic.",
        prompt: "What do you do?",
        choices: [
          {
            icon: "🧩",
            main: "Ask what changed between the request and the current work",
            eq: 0, iq: 2, sig: "clarity",
            reaction: {
              type: "good",
              head: "The problem gets smaller immediately.",
              body: "Once the change point is visible, the fix becomes manageable.",
              moveTo: "desk_priya",
              mood: "😊"
            },
            alexMood: "😌"
          },
          {
            icon: "🫱",
            main: "Calm her down first before troubleshooting",
            eq: 2, iq: 0, sig: "coachability",
            reaction: {
              type: "good",
              head: "She settles quickly.",
              body: "That emotional reset makes the next conversation much cleaner.",
              moveTo: "desk_priya",
              mood: "😮‍💨"
            },
            alexMood: "😊"
          },
          {
            icon: "🔍",
            main: "Look through the latest notes yourself before asking more",
            eq: 0, iq: 2, sig: "action",
            reaction: {
              type: "good",
              head: "You catch the mismatch.",
              body: "The notes reveal where the interpretation drifted.",
              moveTo: "desk_alex",
              mood: "👍"
            },
            alexMood: "😊"
          },
          {
            icon: "📨",
            main: "Tell Priya to email the client for clarification now",
            eq: 0, iq: 1, sig: "action",
            reaction: {
              type: "okay",
              head: "It works, but maybe a little too fast.",
              body: "Clarification helps, but immediate escalation was not the only path.",
              moveTo: "desk_priya",
              mood: "😐"
            },
            alexMood: "😅"
          }
        ]
      },
      {
        id: "a4",
        setup: [
          { char: "alex", pos: "desk_alex", mood: "😊" },
          { char: "priya", pos: "desk_priya", mood: "😊" },
          { char: "sam", pos: "desk_sam", mood: "📋" },
          { char: "kai", pos: "desk_kai", mood: "😊" },
          { char: "jordan", pos: "desk_jordan", mood: "📌" },
          { char: "bg1", pos: "bg1_pos", mood: "😊" },
          { char: "bg2", pos: "bg2_pos", mood: "😊" }
        ],
        event: {
          char: "jordan",
          pos: "desk_jordan",
          bubble: "this meeting keeps drifting — any thought on how to tighten it up?"
        },
        narrator: "Jordan is asking for a process read, but the room dynamic matters too.",
        prompt: "What do you suggest?",
        choices: [
          {
            icon: "🧱",
            main: "Suggest a tighter agenda and time boxes",
            eq: 0, iq: 2, sig: "clarity",
            reaction: {
              type: "good",
              head: "Process wins fast.",
              body: "The suggestion is simple, concrete, and easy to use immediately.",
              moveTo: "desk_jordan",
              mood: "😊"
            },
            alexMood: "😌"
          },
          {
            icon: "👥",
            main: "Point out that unclear ownership is part of the drift",
            eq: 1, iq: 2, sig: "prioritize",
            reaction: {
              type: "good",
              head: "The insight lands.",
              body: "You name the human and structural side of the issue together.",
              moveTo: "desk_jordan",
              mood: "😄"
            },
            alexMood: "😊"
          },
          {
            icon: "🤝",
            main: "Ask who in the room needs to feel heard for the meeting to work",
            eq: 2, iq: 0, sig: "coachability",
            reaction: {
              type: "good",
              head: "It reframes the problem.",
              body: "You shift the conversation from efficiency alone to dynamics too.",
              moveTo: "desk_jordan",
              mood: "😊"
            },
            alexMood: "😄"
          },
          {
            icon: "🎲",
            main: "Say every meeting drifts a little and move on",
            eq: 0, iq: 0, sig: "independence",
            reaction: {
              type: "okay",
              head: "It closes the moment quickly.",
              body: "Not harmful, just not very helpful.",
              moveTo: "desk_jordan",
              mood: "😐"
            },
            alexMood: "😅"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    time: "4:45 PM",
    title: "End of Day Fire Drill",
    desc: "Three things. One hour. Go.",
    pick: 2,
    scenes: [
      {
        id: "e1",
        setup: [
          { char: "alex", pos: "desk_alex", mood: "😊" },
          { char: "priya", pos: "desk_priya", mood: "😰" },
          { char: "sam", pos: "desk_sam", mood: "📋" },
          { char: "kai", pos: "desk_kai", mood: "😊" },
          { char: "jordan", pos: "coffee", mood: "🤔" },
          { char: "bg1", pos: "bg1_pos", mood: "😊" },
          { char: "bg2", pos: "bg2_pos", mood: "😊" }
        ],
        event: {
          char: "priya",
          pos: "desk_priya",
          bubble: "client portal is throwing errors for some users 😰 someone's going to notice"
        },
        narrator: "Three things are happening at once and none of them want to wait.",
        prompt: "One thing at a time. What's your move?",
        choices: [
          {
            icon: "📣",
            main: "Message everyone with your plan, then tackle the portal first",
            eq: 1, iq: 2, sig: "prioritize",
            reaction: {
              type: "good",
              head: "Nobody is left wondering.",
              body: "Clear communication protects the work and the people around it.",
              moveTo: "desk_priya",
              mood: "😊"
            },
            alexMood: "😄"
          },
          {
            icon: "🐛",
            main: "Go straight to the portal — client-facing always wins",
            eq: 0, iq: 2, sig: "action",
            reaction: {
              type: "okay",
              head: "The fix lands, but the silence has a cost.",
              body: "The priority was right. The communication lag created extra confusion.",
              moveTo: "desk_priya",
              mood: "😐"
            },
            alexMood: "😅"
          },
          {
            icon: "📋",
            main: "Ask Sam to set the order of operations",
            eq: 1, iq: 0, sig: "clarity",
            reaction: {
              type: "good",
              head: "Clarity removes guesswork.",
              body: "The explicit order makes the rest of the hour easier.",
              moveTo: "desk_sam",
              mood: "😊"
            },
            alexMood: "😌"
          },
          {
            icon: "👤",
            main: "Clear your calendar first, then handle the work",
            eq: 1, iq: 1, sig: "clarity",
            reaction: {
              type: "good",
              head: "A small structural move helps everything else.",
              body: "Once the unnecessary commitment is cleared, you can focus for real.",
              moveTo: "desk_jordan",
              mood: "😊"
            },
            alexMood: "😊"
          }
        ]
      },
      {
        id: "e2",
        setup: [
          { char: "alex", pos: "desk_alex", mood: "😊" },
          { char: "priya", pos: "desk_priya", mood: "🙌" },
          { char: "sam", pos: "desk_sam", mood: "📋" },
          { char: "kai", pos: "desk_kai", mood: "😊" },
          { char: "jordan", pos: "desk_jordan", mood: "🤔" },
          { char: "bg1", pos: "bg1_pos", mood: "😊" },
          { char: "bg2", pos: "bg2_pos", mood: "😊" }
        ],
        event: {
          char: "priya",
          pos: "desk_priya",
          bubble: "portal's back 🙌 nice catch"
        },
        narrator: "The portal is fixed. You still have one more summary to deliver before the day ends.",
        prompt: "How do you finish the day?",
        choices: [
          {
            icon: "⚡",
            main: "Push through and send a fully polished version",
            eq: 0, iq: 2, sig: "action",
            reaction: {
              type: "good",
              head: "It lands strong.",
              body: "The work is sharp and the day closes cleanly.",
              moveTo: "desk_alex",
              mood: "😄"
            },
            alexMood: "😄"
          },
          {
            icon: "📩",
            main: "Send a solid version with a note on what you'd refine later",
            eq: 1, iq: 1, sig: "clarity",
            reaction: {
              type: "good",
              head: "The transparency helps.",
              body: "Sam calibrates quickly because she knows what she is getting.",
              moveTo: "desk_sam",
              mood: "😊"
            },
            alexMood: "😊"
          },
          {
            icon: "⏰",
            main: "Ask for a little more time to send something stronger",
            eq: 1, iq: 1, sig: "coachability",
            reaction: {
              type: "good",
              head: "The extra time is worth it.",
              body: "Asking for what you needed helped the final work land better.",
              moveTo: "desk_sam",
              mood: "😄"
            },
            alexMood: "😌"
          },
          {
            icon: "🎯",
            main: "Send what you have and offer to refine tomorrow",
            eq: 0, iq: 1, sig: "action",
            reaction: {
              type: "okay",
              head: "It works for now.",
              body: "You met the moment, but tomorrow's version would be stronger.",
              moveTo: "desk_sam",
              mood: "😐"
            },
            alexMood: "😅"
          }
        ]
      },
      {
        id: "e3",
        setup: [
          { char: "alex", pos: "desk_alex", mood: "😊" },
          { char: "priya", pos: "desk_priya", mood: "😊" },
          { char: "sam", pos: "desk_sam", mood: "📋" },
          { char: "kai", pos: "desk_kai", mood: "😬" },
          { char: "jordan", pos: "desk_jordan", mood: "🤔" },
          { char: "bg1", pos: "bg1_pos", mood: "😊" },
          { char: "bg2", pos: "bg2_pos", mood: "😊" }
        ],
        event: {
          char: "jordan",
          pos: "desk_jordan",
          bubble: "before you log off — can you give me a quick read on this roadmap note?"
        },
        narrator: "You are mentally at the end of the day, but Jordan is asking for one more pass.",
        prompt: "How do you handle it?",
        choices: [
          {
            icon: "🧠",
            main: "Give a concise read now and keep it focused",
            eq: 0, iq: 2, sig: "clarity",
            reaction: {
              type: "good",
              head: "Useful and efficient.",
              body: "You helped without letting the task sprawl into a second meeting.",
              moveTo: "desk_jordan",
              mood: "😊"
            },
            alexMood: "😌"
          },
          {
            icon: "🤝",
            main: "Help, but start by asking what Jordan actually needs from you",
            eq: 2, iq: 1, sig: "coachability",
            reaction: {
              type: "good",
              head: "The answer gets tighter.",
              body: "Once the ask is defined, your input becomes immediately more valuable.",
              moveTo: "desk_jordan",
              mood: "😊"
            },
            alexMood: "😊"
          },
          {
            icon: "📅",
            main: "Suggest picking it up first thing tomorrow",
            eq: 1, iq: 0, sig: "independence",
            reaction: {
              type: "okay",
              head: "Fair boundary, slightly delayed help.",
              body: "Jordan accepts it. Reasonable, just less responsive in the moment.",
              moveTo: "desk_jordan",
              mood: "😐"
            },
            alexMood: "😌"
          },
          {
            icon: "⚡",
            main: "Skim fast and throw out a quick opinion",
            eq: 0, iq: 1, sig: "action",
            reaction: {
              type: "okay",
              head: "It is something, but not your best read.",
              body: "The response is fast, though not as grounded as it could have been.",
              moveTo: "desk_jordan",
              mood: "😐"
            },
            alexMood: "😅"
          }
        ]
      },
      {
        id: "e4",
        setup: [
          { char: "alex", pos: "desk_alex", mood: "😊" },
          { char: "priya", pos: "desk_priya", mood: "😊" },
          { char: "sam", pos: "desk_sam", mood: "📋" },
          { char: "kai", pos: "desk_kai", mood: "😓" },
          { char: "jordan", pos: "desk_jordan", mood: "🤔" },
          { char: "bg1", pos: "bg1_pos", mood: "😊" },
          { char: "bg2", pos: "bg2_pos", mood: "😊" }
        ],
        event: {
          char: "sam",
          pos: "desk_sam",
          bubble: "one more thing — I need a quick update I can send upstairs before I leave"
        },
        narrator: "You are tired. Sam needs something usable now, not a long explanation.",
        prompt: "What do you send?",
        choices: [
          {
            icon: "📌",
            main: "Give a three-line summary with status, risk, and next step",
            eq: 1, iq: 2, sig: "clarity",
            reaction: {
              type: "good",
              head: "Exactly right for the moment.",
              body: "It is brief, useful, and easy for Sam to pass along.",
              moveTo: "desk_sam",
              mood: "😊"
            },
            alexMood: "😌"
          },
          {
            icon: "💬",
            main: "Start with reassurance, then give the update",
            eq: 2, iq: 0, sig: "coachability",
            reaction: {
              type: "good",
              head: "The tone helps.",
              body: "You reduce tension first, then give enough signal to move forward.",
              moveTo: "desk_sam",
              mood: "😊"
            },
            alexMood: "😊"
          },
          {
            icon: "📄",
            main: "Send a fuller explanation so nothing is misunderstood",
            eq: 0, iq: 2, sig: "independence",
            reaction: {
              type: "okay",
              head: "Thorough, but heavier than needed.",
              body: "The detail is solid, though a faster summary would have fit the moment better.",
              moveTo: "desk_sam",
              mood: "😐"
            },
            alexMood: "😅"
          },
          {
            icon: "⏳",
            main: "Ask if it can wait until tomorrow",
            eq: 0, iq: 0, sig: "action",
            reaction: {
              type: "okay",
              head: "Fair question, wrong timing.",
              body: "It was understandable, but the need was clearly immediate.",
              moveTo: "desk_sam",
              mood: "😐"
            },
            alexMood: "😅"
          }
        ]
      }
    ]
  }
];

const ARCHETYPES = [
  {
    name: "The Empathetic Analyst",
    match: (eq, iq) => eq >= 6 && iq >= 6 && Math.abs(eq - iq) <= 2,
    color: "#63aeea",
    icon: "✦",
    summary: "You combine emotional awareness with structured thinking. You tend to read people well, ask clarifying questions, and make moves that feel both thoughtful and effective.",
    cultures: {
      fit: [
        "Cross-functional teams spanning people and technical work",
        "Organizations where trust and rigor both matter",
        "Strategic roles requiring judgment across groups",
        "Teams navigating change or complexity"
      ],
      avoid: [
        "High-volume environments rewarding speed over alignment",
        "Teams where communication is treated as overhead",
        "Cultures with low psychological safety"
      ]
    },
    growth: [
      { title: "Commit a little faster", desc: "You often get useful context, but sometimes you already have enough. Practice moving once the signal is clear." },
      { title: "Make your thinking visible", desc: "People trust your judgment faster when they understand how you got there, not just the answer." },
      { title: "Separate calibration from hesitation", desc: "There is a difference between gathering useful information and delaying a decision you already know." }
    ]
  },
  {
    name: "The Connector",
    match: (eq, iq) => eq - iq >= 3,
    color: "#62c08c",
    icon: "◉",
    summary: "You naturally notice people, emotional tone, and relationship dynamics. You often create trust before others realize it's needed.",
    cultures: {
      fit: [
        "People-first organizations with intentional culture",
        "High-context environments with stakeholder dynamics",
        "Facilitation or team-facing roles",
        "Organizations in transition needing cohesion"
      ],
      avoid: [
        "Highly transactional environments",
        "Cultures that undervalue emotional intelligence",
        "Individual-contributor-heavy teams with little collaboration"
      ]
    },
    growth: [
      { title: "Structure your instincts", desc: "Your people read is often strong. It becomes even more powerful when paired with sharper framing and prioritization." },
      { title: "Rank impact as well as emotion", desc: "Before helping, ask not just who needs support, but what matters most right now." },
      { title: "Practice directness", desc: "The next level is caring and clear, even when the truth is uncomfortable." }
    ]
  },
  {
    name: "The Systematic Solver",
    match: (eq, iq) => iq - eq >= 3,
    color: "#9f84ef",
    icon: "◫",
    summary: "You shine when the problem is concrete and the output matters. You tend to think in systems, structure, and measurable progress.",
    cultures: {
      fit: [
        "Analytical, technical, or process-heavy environments",
        "Teams where evidence matters",
        "Roles with measurable outcomes",
        "Organizations that value precision"
      ],
      avoid: [
        "High-ambiguity roles without clear success metrics",
        "Environments needing constant emotional attunement",
        "Teams where influence is mostly informal"
      ]
    },
    growth: [
      { title: "Bring people into the solution", desc: "Even a strong answer lands better when others understand it and feel considered." },
      { title: "Ask one context question first", desc: "A simple question about desired outcome can change the direction of your solution." },
      { title: "Treat emotional cues as data", desc: "Feelings in the room are not noise. They often explain why a strong idea may or may not land." }
    ]
  },
  {
    name: "The Adaptive Operator",
    match: (eq, iq) => eq >= 4 && iq >= 4,
    color: "#ea9b57",
    icon: "◎",
    summary: "You adjust to the room, the pressure, and the ask. Your strength is flexibility — especially when situations keep changing.",
    cultures: {
      fit: [
        "Fast-moving, cross-functional organizations",
        "Generalist or hybrid roles",
        "Early-stage environments where roles evolve",
        "Teams that reward versatility"
      ],
      avoid: [
        "Rigid, process-only environments",
        "Narrow specialist roles with little variation",
        "Cultures where judgment is constrained by hierarchy"
      ]
    },
    growth: [
      { title: "Define your default", desc: "Adaptability becomes even stronger when it is anchored to one principle you trust." },
      { title: "Separate urgency from importance", desc: "Not everything loud is important. Pause long enough to sort the two." },
      { title: "Say what you think", desc: "There are moments when people need your point of view, not just your balance." }
    ]
  },
  {
    name: "The Steady Independent",
    match: () => true,
    color: "#f5c842",
    icon: "◐",
    summary: "You tend to work through problems on your own before bringing others in. You come across as steady, self-sufficient, and reliable under pressure.",
    cultures: {
      fit: [
        "Autonomous individual-contributor environments",
        "Teams with clear deliverables and high trust",
        "Remote or self-directed setups",
        "Organizations with defined systems"
      ],
      avoid: [
        "Cultures requiring constant visible collaboration",
        "Environments where visibility matters as much as output",
        "Roles where alignment must happen early and often"
      ]
    },
    growth: [
      { title: "Show your thinking earlier", desc: "The earlier people see your process, the easier it is to catch blind spots before they grow." },
      { title: "Communicate before going heads-down", desc: "A quick heads-up often prevents a lot of uncertainty for everyone else." },
      { title: "Invite midpoint feedback", desc: "Input halfway through is often more useful than feedback once the work is already finished." }
    ]
  }
];

let STORY = [];
let G = {
  eq: 0,
  iq: 0,
  signals: {},
  badges: [],
  chIdx: 0,
  scIdx: 0,
  reacting: false,
  alexMood: "😊"
};

let charEls = {};
let bubbleTimer = null;

function $(id) {
  return document.getElementById(id);
}

function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const target = $(id);
  if (target) target.classList.add("active");
}

function mk(tag, cls, html) {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (html !== undefined) el.innerHTML = html;
  return el;
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildRunStory() {
  return CHAPTER_POOLS.map(chapter => {
    const pickedScenes = shuffle(chapter.scenes).slice(0, chapter.pick);
    return {
      id: chapter.id,
      time: chapter.time,
      title: chapter.title,
      desc: chapter.desc,
      scenes: pickedScenes
    };
  });
}

function svgChar(c, size = 92) {
  return `
    <svg width="${size}" height="${size * 1.24}" viewBox="0 0 92 114" xmlns="http://www.w3.org/2000/svg" class="char-svg">
      <g class="char-rig">
        <ellipse cx="46" cy="108" rx="18" ry="5" fill="rgba(0,0,0,.06)"/>

        <!-- legs -->
        <path d="M37 70 L34 99 Q34 102 36 102 L44 102 Q46 102 46 99 L47 74 Z" fill="${c.pants}"/>
        <path d="M55 70 L57 99 Q57 102 55 102 L47 102 Q45 102 45 99 L44 74 Z" fill="${c.pants}"/>

        <!-- shoes -->
        <ellipse cx="39" cy="104" rx="7" ry="3.2" fill="${c.shoes}"/>
        <ellipse cx="53" cy="104" rx="7" ry="3.2" fill="${c.shoes}"/>

        <!-- torso -->
        <path d="M30 39 Q46 31 62 39 L58 74 Q46 79 34 74 Z" fill="${c.shirt}"/>

        <!-- jacket -->
        <path d="M27 40 Q32 33 39 31 L36 74 Q29 71 26 63 Z" fill="${c.jacket}"/>
        <path d="M65 40 Q60 33 53 31 L56 74 Q63 71 66 63 Z" fill="${c.jacket}"/>

        <!-- neck -->
        <rect x="41" y="28" width="10" height="9" rx="4" fill="${c.skin}"/>

        <!-- arms -->
        <path d="M30 42 Q20 50 21 62 Q22 68 28 68 L31 67 Q27 56 35 46 Z" fill="${c.skin}"/>
        <path d="M62 42 Q72 49 73 61 Q73 67 67 68 L63 67 Q66 56 58 46 Z" fill="${c.skin}"/>

        <!-- head -->
        <ellipse cx="46" cy="21.5" rx="17.8" ry="18.8" fill="${c.skin}"/>

        <!-- base hair -->
        <path d="M29 12 Q31 3 46 3 Q61 3 63 12 Q63 19 58 23 Q54 19 46 19 Q38 19 34 23 Q29 19 29 12 Z" fill="${c.hair}"/>

        <!-- top highlight layer -->
        <path d="M33 11 Q37 8 41 6.8 Q44 8 46 8 Q49 8 54 6.8 Q57.5 8 60 11 Q55 9.8 46 9.8 Q37 9.8 33 11 Z" fill="${c.hairHi || c.hair}"/>

        <!-- subtle shine -->
        <path d="M35 10.8 Q40 8.6 46 8.6 Q52 8.6 57 10.8"
              stroke="rgba(255,255,255,.14)"
              stroke-width="1"
              fill="none"
              stroke-linecap="round"/>

        <!-- forehead highlight -->
        <ellipse cx="40" cy="14.5" rx="5.8" ry="2.7" fill="rgba(255,255,255,.20)"/>

        <!-- ears -->
        <circle cx="29.8" cy="22.5" r="2.1" fill="${c.skin}"/>
        <circle cx="62.2" cy="22.5" r="2.1" fill="${c.skin}"/>

        <!-- eyes -->
        <ellipse cx="40.5" cy="21.2" rx="1.15" ry="1.3" fill="#3a2a22"/>
        <ellipse cx="51.5" cy="21.2" rx="1.15" ry="1.3" fill="#3a2a22"/>

        <!-- brows -->
        <path d="M37.8 18.4 Q40.5 17.6 42.8 18.1" stroke="#6a4d3d" stroke-width=".65" fill="none" stroke-linecap="round"/>
        <path d="M49.2 18.1 Q51.5 17.6 54.2 18.4" stroke="#6a4d3d" stroke-width=".65" fill="none" stroke-linecap="round"/>

        <!-- nose -->
        <path d="M46 22.8 L45.4 25.2 Q46 25.5 46.6 25.2 Z" fill="rgba(140,80,58,.06)"/>

        <!-- mouth -->
        <path d="M41.8 29.2 Q46 30.8 50.2 29.2" stroke="#9a645f" stroke-width=".95" fill="none" stroke-linecap="round"/>
      </g>
    </svg>
  `;
}

function buildIsoSVG() {
  return `
    <svg viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg" class="iso-svg">
      <defs>
        <linearGradient id="wallLeft" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#b17652"/>
          <stop offset="100%" stop-color="#81472a"/>
        </linearGradient>
        <linearGradient id="wallRight" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#c78b5e"/>
          <stop offset="100%" stop-color="#985634"/>
        </linearGradient>
        <radialGradient id="lampGlow">
          <stop offset="0%" stop-color="rgba(255,240,190,.75)"/>
          <stop offset="100%" stop-color="rgba(255,240,190,0)"/>
        </radialGradient>
        <pattern id="tilePattern" width="80" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 20 L40 0 L80 20 L40 40 Z" fill="#c4a078"/>
          <path d="M0 20 L40 0 L80 20 L40 40 Z" fill="none" stroke="#b18961" stroke-width="1"/>
        </pattern>
      </defs>

      <rect width="1440" height="900" fill="#211613"/>
      <rect width="1440" height="900" fill="url(#lampGlow)" opacity=".08"/>

      <polygon points="120,470 720,170 1320,470 720,760" fill="url(#tilePattern)"/>
      <polygon points="120,470 720,760 720,790 120,500" fill="#6e3b20" opacity=".3"/>
      <polygon points="720,760 1320,470 1320,500 720,790" fill="#814828" opacity=".32"/>

      <polygon points="120,470 120,200 720,170 720,440" fill="url(#wallLeft)"/>
      <polygon points="720,440 720,170 1320,470 1320,200" fill="url(#wallRight)"/>

      <g opacity=".22" stroke="#5d3018" stroke-width="2">
        <line x1="120" y1="250" x2="720" y2="220"/>
        <line x1="120" y1="310" x2="720" y2="280"/>
        <line x1="120" y1="370" x2="720" y2="340"/>
        <line x1="120" y1="430" x2="720" y2="400"/>
      </g>

      <g>
        <polygon points="240,250 400,240 400,355 240,365" fill="#42657e" opacity=".55"/>
        <polygon points="240,250 400,240 400,355 240,365" fill="none" stroke="#9fc3de" stroke-width="3" opacity=".45"/>
      </g>

      <g>
        <polygon points="1030,285 1185,315 1185,425 1030,397" fill="#42657e" opacity=".55"/>
        <polygon points="1030,285 1185,315 1185,425 1030,397" fill="none" stroke="#9fc3de" stroke-width="3" opacity=".45"/>
      </g>

      <g>
        <line x1="460" y1="165" x2="460" y2="245" stroke="#8d7458" stroke-width="3"/>
        <circle cx="460" cy="258" r="24" fill="#f5e7a9" opacity=".9"/>
        <circle cx="460" cy="258" r="70" fill="url(#lampGlow)" opacity=".22"/>

        <line x1="720" y1="160" x2="720" y2="240" stroke="#8d7458" stroke-width="3"/>
        <circle cx="720" cy="252" r="24" fill="#f5e7a9" opacity=".9"/>
        <circle cx="720" cy="252" r="70" fill="url(#lampGlow)" opacity=".22"/>

        <line x1="980" y1="175" x2="980" y2="255" stroke="#8d7458" stroke-width="3"/>
        <circle cx="980" cy="268" r="24" fill="#f5e7a9" opacity=".9"/>
        <circle cx="980" cy="268" r="70" fill="url(#lampGlow)" opacity=".22"/>
      </g>

      <g>
        <polygon points="250,490 370,430 465,480 345,542" fill="#92613d"/>
        <polygon points="250,490 250,455 370,395 370,430" fill="#6f4528"/>
      </g>

      <g>
        <polygon points="620,410 740,350 835,400 715,462" fill="#92613d"/>
        <polygon points="620,410 620,376 740,316 740,350" fill="#6f4528"/>
      </g>

      <g>
        <polygon points="980,500 1100,440 1195,490 1075,552" fill="#92613d"/>
        <polygon points="980,500 980,466 1100,406 1100,440" fill="#6f4528"/>
      </g>

      <g>
        <ellipse cx="300" cy="650" rx="72" ry="42" fill="#7f3d58"/>
        <ellipse cx="390" cy="685" rx="62" ry="36" fill="#355482"/>
      </g>

      <g>
        <ellipse cx="180" cy="560" rx="18" ry="8" fill="#213719"/>
        <ellipse cx="180" cy="550" rx="14" ry="18" fill="#3e6c2d"/>
      </g>

      <g>
        <ellipse cx="1275" cy="560" rx="18" ry="8" fill="#213719"/>
        <ellipse cx="1275" cy="550" rx="14" ry="18" fill="#3e6c2d"/>
      </g>

      <text x="590" y="215" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="800" fill="#f5c842" opacity=".82" letter-spacing="3">MERIDIAN LOFT</text>
    </svg>
  `;
}

function getCharSize(key, stageW) {
  if (key === "alex") return Math.max(92, Math.min(132, stageW * 0.09));
  return Math.max(82, Math.min(118, stageW * 0.082));
}

function placeChar(key, posKey, mood) {
  const stage = $("iso-stage");
  const stageW = stage.offsetWidth || 1280;
  const stageH = stage.offsetHeight || 720;
  const pos = POSITIONS[posKey] || POSITIONS.center;
  const data = CHARS[key];
  const size = getCharSize(key, stageW);

  if (!charEls[key]) {
    const wrap = mk("div", "char idle");
    wrap.id = "char-" + key;
    wrap.innerHTML = svgChar(data, size);

    const moodEl = mk("div", "mood-indicator");
    moodEl.id = "mood-" + key;
    moodEl.textContent = mood || "😊";
    wrap.appendChild(moodEl);

    $("char-layer").appendChild(wrap);
    charEls[key] = wrap;
  } else {
    charEls[key].innerHTML = svgChar(data, size) + `<div class="mood-indicator" id="mood-${key}">${mood || "😊"}</div>`;
  }

  const el = charEls[key];
  const x = (pos.x / 100) * stageW - size / 2;
  const y = (pos.y / 100) * stageH - size;

  el.style.left = x + "px";
  el.style.top = y + "px";

  const moodEl = $("mood-" + key);
  if (moodEl) moodEl.textContent = mood || "😊";
}

function moveChar(key, posKey, newMood, onDone) {
  const el = charEls[key];
  if (!el) {
    if (onDone) onDone();
    return;
  }

  el.classList.remove("idle");
  el.classList.add("walk");

  const stage = $("iso-stage");
  const stageW = stage.offsetWidth || 1280;
  const stageH = stage.offsetHeight || 720;
  const pos = POSITIONS[posKey] || POSITIONS.center;
  const size = getCharSize(key, stageW);

  el.style.left = (pos.x / 100) * stageW - size / 2 + "px";
  el.style.top = (pos.y / 100) * stageH - size + "px";

  if (newMood) {
    const moodEl = $("mood-" + key);
    if (moodEl) moodEl.textContent = newMood;
  }

  setTimeout(() => {
    el.classList.remove("walk");
    el.classList.add("idle");
    if (onDone) onDone();
  }, 760);
}

function clearSpeechBubbles() {
  document.querySelectorAll(".speech-bubble").forEach(b => b.remove());
  clearTimeout(bubbleTimer);
}

function showBubble(key, text, duration = 3500) {
  clearSpeechBubbles();

  const charEl = charEls[key];
  if (!charEl) return;

  const stage = $("iso-stage");
  const stageW = stage.offsetWidth || 1280;
  const stageH = stage.offsetHeight || 720;
  const rect = charEl.getBoundingClientRect();
  const stageRect = stage.getBoundingClientRect();

  const charCenterX = rect.left - stageRect.left + rect.width / 2;
  const charTopY = rect.top - stageRect.top;
  const charMidY = rect.top - stageRect.top + rect.height * 0.34;

  const bubble = mk("div", "speech-bubble");
  bubble.textContent = text;

  const bubbleWidth = 240;
  const gap = 14;

  let left;
  let top = Math.max(charMidY - 24, 16);

  // Prefer putting bubble on the right side of the character
  if (charCenterX < stageW * 0.62) {
    left = charCenterX + gap;
    bubble.classList.add("left");
  } else {
    left = charCenterX - bubbleWidth - gap;
    bubble.classList.add("right");
  }

  // Keep on screen
  left = Math.max(10, Math.min(left, stageW - bubbleWidth - 10));
  top = Math.max(16, Math.min(top, stageH - 90));

  bubble.style.left = left + "px";
  bubble.style.top = top + "px";

  stage.appendChild(bubble);

  if (duration !== null) {
    bubbleTimer = setTimeout(() => {
      bubble.remove();
    }, duration);
  }
}

function updateMoodPips() {
  const total = G.eq + G.iq;
  const pips = document.querySelectorAll(".mood-pip");
  const onCount = Math.round((total / 14) * 6);

  pips.forEach((pip, i) => {
    if (i < onCount) pip.classList.add("on");
    else pip.classList.remove("on");
  });
}

function clearOverlays() {
  $("scene-overlay").innerHTML = "";
  $("choice-bubbles").innerHTML = "";
  $("reaction-overlay").innerHTML = "";
  $("chapter-overlay").innerHTML = "";
}

function startGame() {
  STORY = buildRunStory();

  G = {
    eq: 0,
    iq: 0,
    signals: {},
    badges: [],
    chIdx: 0,
    scIdx: 0,
    reacting: false,
    alexMood: "😊"
  };

  charEls = {};
  clearSpeechBubbles();
  show("s-game");
  showChapterCard();
}

function showChapterCard() {
  const ch = STORY[G.chIdx];
  $("world-time").textContent = ch.time;
  clearOverlays();

  const holder = $("chapter-overlay");
  const card = mk("div", "chapter-card");
  card.innerHTML = `
    <div class="ch-time">${ch.time}</div>
    <h2 class="ch-title">${ch.title}</h2>
    <p class="ch-desc">${ch.desc}</p>
    <button class="ch-btn" onclick="beginChapter()">
      ${G.chIdx === 0 ? "Start the day →" : "Continue →"}
    </button>
  `;
  holder.appendChild(card);
}

function beginChapter() {
  $("chapter-overlay").innerHTML = "";
  G.scIdx = 0;
  setupScene();
}

function setupScene() {
  const ch = STORY[G.chIdx];
  const sc = ch.scenes[G.scIdx];

  clearOverlays();
  clearSpeechBubbles();

  $("char-layer").innerHTML = "";
  charEls = {};

  const setup = sc.setup || [];
  setup.forEach(item => placeChar(item.char, item.pos, item.mood));

  setTimeout(() => {
    if (sc.event) {
      const ev = sc.event;
      moveChar(ev.char, ev.pos, null, () => {
        showBubble(ev.char, ev.bubble, null);
        setTimeout(renderScene, 300);
      });
    } else {
      renderScene();
    }
  }, 300);
}

function renderScene() {
  const ch = STORY[G.chIdx];
  const sc = ch.scenes[G.scIdx];

  $("scene-overlay").innerHTML = `
    <div class="scene-card">
      <div class="scene-kicker">${ch.time}</div>
      <div class="scene-prompt">${sc.prompt}</div>
      <div class="scene-narrator">${sc.narrator}</div>
    </div>
  `;

  $("reaction-overlay").innerHTML = "";
  $("choice-bubbles").innerHTML = "";

  sc.choices.forEach((choice, index) => {
    const btn = mk("button", "choice-bubble");
    btn.type = "button";
    btn.style.animationDelay = `${index * 70}ms`;
    btn.innerHTML = `
      <span class="choice-bubble-icon">${choice.icon}</span>
      <span class="choice-bubble-main">${choice.main}</span>
    `;
    btn.addEventListener("click", () => handleChoice(index));
    $("choice-bubbles").appendChild(btn);
  });
}

function handleChoice(index) {
  if (G.reacting) return;
  G.reacting = true;

  const ch = STORY[G.chIdx];
  const sc = ch.scenes[G.scIdx];
  const choice = sc.choices[index];

  G.eq += choice.eq || 0;
  G.iq += choice.iq || 0;

  if (choice.sig) {
    G.signals[choice.sig] = (G.signals[choice.sig] || 0) + 1;
  }

  G.alexMood = choice.alexMood || "😊";
  updateMoodPips();

  const alexMood = $("mood-alex");
  if (alexMood) alexMood.textContent = G.alexMood;

  const reaction = choice.reaction;
  const activeChar = sc.event?.char || "priya";

  clearSpeechBubbles();

  if (reaction.moveTo && charEls[activeChar]) {
    moveChar(activeChar, reaction.moveTo, reaction.mood, () => {
      showBubble(activeChar, "...", 900);
    });
  }

  setTimeout(() => showReaction(choice), 550);
}

function getContinueLabel() {
  const ch = STORY[G.chIdx];
  const isLastScene = G.scIdx >= ch.scenes.length - 1;
  const isLastChapter = G.chIdx >= STORY.length - 1;

  if (isLastScene && isLastChapter) return "See your day snapshot";
  if (isLastScene) return "Next chapter";
  return "Continue the day";
}

function showReaction(choice) {
  const reaction = choice.reaction;
  $("choice-bubbles").innerHTML = "";

  showBubble("alex", choice.main.slice(0, 64) + (choice.main.length > 64 ? "…" : ""), 2400);

  $("reaction-overlay").innerHTML = `
    <div class="reaction-card ${reaction.type}">
      <div class="reaction-head">${reaction.head}</div>
      <div class="reaction-body">${reaction.body}</div>
      <button class="continue-btn" onclick="advanceAfterReaction()">
        ${getContinueLabel()} <span>→</span>
      </button>
    </div>
  `;
}

function advanceAfterReaction() {
  const ch = STORY[G.chIdx];
  const isLastScene = G.scIdx >= ch.scenes.length - 1;
  const isLastChapter = G.chIdx >= STORY.length - 1;
  const badges = ["Morning Opener", "Afternoon Moves", "End of Day Close"];

  G.reacting = false;
  clearSpeechBubbles();
  $("reaction-overlay").innerHTML = "";

  if (isLastScene && isLastChapter) {
    G.badges.push(badges[G.chIdx]);
    showResult();
  } else if (isLastScene) {
    G.badges.push(badges[G.chIdx]);
    G.chIdx += 1;
    G.scIdx = 0;
    showChapterCard();
  } else {
    G.scIdx += 1;
    setupScene();
  }
}

function getTopSignals(limit = 3) {
  const entries = Object.entries(G.signals).sort((a, b) => b[1] - a[1]);
  const labels = {
    clarity: "Asked for clarity",
    action: "Moved into action",
    coachability: "Stayed coachable",
    prioritize: "Prioritized under pressure",
    independence: "Worked independently",
    defensiveness: "Protected your reasoning"
  };
  return entries.slice(0, limit).map(([key]) => labels[key] || key);
}

function showResult() {
  show("s-result");

  const profile = ARCHETYPES.find(p => p.match(G.eq, G.iq));
  const rc = $("result-container");
  rc.innerHTML = "";

  const wrap = mk("div", "result-wrap");
  const topSignals = getTopSignals(3);

  const card = mk("div", "share-card");
  card.innerHTML = `
    <div class="share-kicker">Screenshot this card</div>

    <div class="share-top">
      <div>
        <div class="share-title" style="color:${profile.color}">Your Meridian Day Snapshot</div>
        <div class="share-sub">${profile.summary}</div>
      </div>
      <div class="share-icon" style="background:${profile.color}22;color:${profile.color};border-color:${profile.color}44">
        ${profile.icon}
      </div>
    </div>

    <div class="share-grid">
      <div class="share-stat">
        <div class="share-stat-label">Read of the day</div>
        <div class="share-stat-value">${profile.name}</div>
        <div class="share-stat-sub">The overall pattern your choices pointed to most</div>
      </div>
    </div>

    <div class="share-patterns">
      ${topSignals.map(signal => `<div class="share-pill">${signal}</div>`).join("")}
      ${G.badges.map(badge => `<div class="share-pill">${badge}</div>`).join("")}
    </div>

    <div class="result-sec">
      <div class="rs-label">Where you work best</div>
      <div class="rs-title">The kind of environment where your style tends to land best</div>
      <div class="rs-body">This connects your result to real teams, project styles, and work environments.</div>

      <div class="culture-grid">
        <div class="cul-card seek">
          <div class="cul-lbl">You tend to do well in</div>
          <ul class="cul-list">
            ${profile.cultures.fit.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>

        <div class="cul-card care">
          <div class="cul-lbl">Can feel harder when</div>
          <ul class="cul-list">
            ${profile.cultures.avoid.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>

    <div class="result-sec">
      <div class="rs-label">Keep building</div>
      <div class="rs-title">A few edges to sharpen next</div>
      <div class="rs-body">These are the next-level moves suggested by how you handled the day.</div>

      <div class="growth-list">
        ${profile.growth.map((g, i) => `
          <div class="growth-row">
            <div class="growth-n">${i + 1}</div>
            <div>
              <div class="growth-title">${g.title}</div>
              <div class="growth-desc">${g.desc}</div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>

    <div class="share-note">Tip: screenshot this full card or the top section only.</div>
  `;

  wrap.appendChild(card);

  const replayWrap = mk("div", "replay-wrap");
  const replayBtn = mk("button", "replay-btn", "Play the day again");
  replayBtn.type = "button";
  replayBtn.addEventListener("click", startGame);
  replayWrap.appendChild(replayBtn);
  wrap.appendChild(replayWrap);

  wrap.appendChild(mk("div", "print-note", "This ending is designed as one cleaner snapshot card."));
  rc.appendChild(wrap);
}

function resizeScene() {
  const gameScreen = $("s-game");
  if (!gameScreen || !gameScreen.classList.contains("active")) return;

  const chapter = STORY[G.chIdx];
  const scene = chapter?.scenes?.[G.scIdx];
  if (!scene) return;

  $("char-layer").innerHTML = "";
  charEls = {};

  const setup = scene.setup || [];
  setup.forEach(item => placeChar(item.char, item.pos, item.mood));

  if (!G.reacting && scene.event) {
    showBubble(scene.event.char, scene.event.bubble, null);
  }
}

function boot() {
  const root = $("root");

  root.innerHTML = `
    <div id="s-intro" class="screen active">
      <div class="intro-wrap">
        <div class="intro-kicker">A Day at Meridian</div>
        <h1 class="intro-h1">It's Monday.<br><span class="muted">Let's see how<br>you work.</span></h1>
        <p class="intro-sub">
          You're three weeks into a new job at a startup loft. Every run now pulls a different mix of scenes.
          Your choices shape the rhythm of the day.
        </p>
        <div class="cast-preview" id="cast-preview"></div>
        <button class="intro-cta" onclick="startGame()">Start the day →</button>
        <p class="intro-note">Each playthrough now uses 6 scenes chosen from 12 total scene options.</p>
      </div>
    </div>

    <div id="s-game" class="screen">
      <div class="world-shell">
        <div class="world-header">
          <div>
            <div class="world-time" id="world-time">9:04 AM</div>
            <div class="world-day">Monday — Meridian Loft</div>
          </div>
          <div class="mood-bar">
            <span class="mood-label">Vibe</span>
            <div class="mood-pips" id="mood-pips">
              ${Array(6).fill('<div class="mood-pip"></div>').join("")}
            </div>
          </div>
        </div>

        <div class="iso-stage" id="iso-stage">
          ${buildIsoSVG()}
          <div class="char-layer" id="char-layer"></div>
          <div class="scene-overlay" id="scene-overlay"></div>
          <div class="choice-bubbles" id="choice-bubbles"></div>
          <div class="reaction-overlay" id="reaction-overlay"></div>
          <div class="chapter-overlay" id="chapter-overlay"></div>
        </div>
      </div>
    </div>

    <div id="s-result" class="screen result-screen">
      <div id="result-container"></div>
    </div>
  `;

  const castPreview = $("cast-preview");
  ["priya", "sam", "kai", "jordan"].forEach(key => {
    const c = CHARS[key];
    const chip = mk("div", "cast-chip");
    const av = mk("div", "cast-chip-av");
    av.style.background = c.color + "22";
    av.style.color = c.color;
    av.textContent = c.name[0];

    const info = mk("div");
    info.appendChild(mk("div", "cast-chip-name", c.name));
    info.appendChild(mk("div", "cast-chip-role", c.role));

    chip.appendChild(av);
    chip.appendChild(info);
    castPreview.appendChild(chip);
  });
}

window.startGame = startGame;
window.beginChapter = beginChapter;
window.advanceAfterReaction = advanceAfterReaction;

window.addEventListener("resize", resizeScene);

boot();
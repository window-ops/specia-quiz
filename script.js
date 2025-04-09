const questions = {
  strength: [{
      question: "Physical Conflicts: How do you generally approach physical confrontations?",
      answers: [{
          text: "I avoid them whenever possible.",
          score: 0
        },
        {
          text: "I try to resolve them with minimal force.",
          score: 1
        },
        {
          text: "I confidently engage physically if necessary.",
          score: 2
        }
      ]
    },
    {
      question: "Lifting Objects: How comfortable are you with lifting heavy objects?",
      answers: [{
          text: "I struggle with even light objects.",
          score: 0
        },
        {
          text: "I can handle light to moderate weights.",
          score: 1
        },
        {
          text: "I can lift very heavy objects easily.",
          score: 2
        }
      ]
    },
    {
      question: "Endurance in Sports: How do you perform in endurance sports like long-distance running?",
      answers: [{
          text: "I tire quickly.",
          score: 0
        },
        {
          text: "I can maintain a moderate pace for a while.",
          score: 1
        },
        {
          text: "I excel at maintaining a strong pace over time.",
          score: 2
        }
      ]
    },
    {
      question: "Manual Labor: Are you comfortable with manual labor tasks like construction?",
      answers: [{
          text: "No, I prefer less physically demanding jobs.",
          score: 0
        },
        {
          text: "Yes, but I don’t excel at them.",
          score: 1
        },
        {
          text: "Yes, I’m skilled and enjoy them.",
          score: 2
        }
      ]
    },
    {
      question: "Moving Furniture: How easy is it for you to move heavy furniture?",
      answers: [{
          text: "Very difficult; I usually need help.",
          score: 0
        },
        {
          text: "Somewhat difficult but manageable alone.",
          score: 1
        },
        {
          text: "Easy; I can move heavy pieces alone.",
          score: 2
        }
      ]
    },
    {
      question: "Climbing: How comfortable are you with climbing structures like rocks or buildings?",
      answers: [{
          text: "Not comfortable at all.",
          score: 0
        },
        {
          text: "Somewhat comfortable with easy climbs.",
          score: 1
        },
        {
          text: "Very comfortable with challenging climbs.",
          score: 2
        }
      ]
    },
    {
      question: "Self-Defense Classes: Have you ever taken self-defense classes?",
      answers: [{
          text: "No.",
          score: 0
        },
        {
          text: "Yes, but didn’t complete the course.",
          score: 1
        },
        {
          text: "Yes, and I completed it successfully.",
          score: 2
        }
      ]
    },
    {
      question: "Gym Attendance: How regularly do you attend the gym?",
      answers: [{
          text: "Rarely.",
          score: 0
        },
        {
          text: "Occasionally.",
          score: 1
        },
        {
          text: "Regularly.",
          score: 2
        }
      ]
    },
    {
      question: "Bodyweight Exercises: How skilled are you with bodyweight exercises like push-ups and squats?",
      answers: [{
          text: "I struggle with them.",
          score: 0
        },
        {
          text: "I can perform them adequately.",
          score: 1
        },
        {
          text: "I excel at them.",
          score: 2
        }
      ]
    },
    {
      question: "Competitive Sports: Have you ever competed in physically demanding sports?",
      answers: [{
          text: "No.",
          score: 0
        },
        {
          text: "Yes, at an amateur level.",
          score: 1
        },
        {
          text: "Yes, at a professional or high competitive level.",
          score: 2
        }
      ]
    }
  ],
  perception: [{
      question: "Notice Details: How often do you notice small details others might miss?",
      answers: [{
          text: "Rarely; I’m a big-picture person.",
          score: 0
        },
        {
          text: "Occasionally; I notice some details.",
          score: 1
        },
        {
          text: "Frequently; I catch most details.",
          score: 2
        }
      ]
    },
    {
      question: "Aural Awareness: How sensitive are you to sounds around you?",
      answers: [{
          text: "Not very; I often miss quiet noises.",
          score: 0
        },
        {
          text: "Somewhat; I notice moderate sounds.",
          score: 1
        },
        {
          text: "Very; I pick up on faint sounds easily.",
          score: 2
        }
      ]
    },
    {
      question: "Visual Memory: How strong is your visual memory?",
      answers: [{
          text: "Weak; I forget faces quickly.",
          score: 0
        },
        {
          text: "Moderate; I remember some faces over time.",
          score: 1
        },
        {
          text: "Strong; I recall faces and details well.",
          score: 2
        }
      ]
    },
    {
      question: "Intuition: Do you often have a strong intuition about situations?",
      answers: [{
          text: "Rarely; I rely on facts.",
          score: 0
        },
        {
          text: "Sometimes; I get gut feelings occasionally.",
          score: 1
        },
        {
          text: "Often; my intuition is usually correct.",
          score: 2
        }
      ]
    },
    {
      question: "Reading People: How skilled are you at reading people's emotions and intentions?",
      answers: [{
          text: "Not very skilled.",
          score: 0
        },
        {
          text: "Somewhat skilled; I can pick up on obvious cues.",
          score: 1
        },
        {
          text: "Very skilled; I sense subtle cues easily.",
          score: 2
        }
      ]
    },
    {
      question: "Analyzing Situations: How well can you analyze complex situations?",
      answers: [{
          text: "Poorly; I get overwhelmed easily.",
          score: 0
        },
        {
          text: "Adequately; I can break down some factors.",
          score: 1
        },
        {
          text: "Expertly; I can analyze multiple factors quickly.",
          score: 2
        }
      ]
    },
    {
      question: "Catching Lies: How good are you at spotting when someone is lying?",
      answers: [{
          text: "Not very good; I often believe what I’m told.",
          score: 0
        },
        {
          text: "Fairly good; I can spot some lies.",
          score: 1
        },
        {
          text: "Very good; I can usually tell when someone is dishonest.",
          score: 2
        }
      ]
    },
    {
      question: "Puzzle Solving: How adept are you at solving puzzles or riddles?",
      answers: [{
          text: "Not adept at all.",
          score: 0
        },
        {
          text: "Somewhat adept; I enjoy puzzles but may struggle with complex ones.",
          score: 1
        },
        {
          text: "Very adept; I solve puzzles quickly and enjoy challenging ones.",
          score: 2
        }
      ]
    },
    {
      question: "Observing Nature: How often do you observe and appreciate nature’s details?",
      answers: [{
          text: "Rarely; I’m not very interested.",
          score: 0
        },
        {
          text: "Occasionally; I notice some natural details.",
          score: 1
        },
        {
          text: "Frequently; I’m fascinated by nature’s intricacies.",
          score: 2
        }
      ]
    },
    {
      question: "Alertness: How alert are you in new or unfamiliar environments?",
      answers: [{
          text: "Not very; I can be caught off guard.",
          score: 0
        },
        {
          text: "Somewhat; I’m moderately aware of my surroundings.",
          score: 1
        },
        {
          text: "Very; I’m always on the lookout for potential dangers.",
          score: 2
        }
      ]
    }
  ],
  endurance: [{
      question: "Marathon Running: Have you ever completed a marathon or a similar endurance event?",
      answers: [{
          text: "No.",
          score: 0
        },
        {
          text: "Yes, but it was a struggle.",
          score: 1
        },
        {
          text: "Yes, and I performed well.",
          score: 2
        }
      ]
    },
    {
      question: "Tolerating Pain: How well do you tolerate physical pain or discomfort?",
      answers: [{
          text: "Poorly; I seek relief quickly.",
          score: 0
        },
        {
          text: "Moderately; I can endure some pain.",
          score: 1
        },
        {
          text: "Well; I can tolerate significant pain.",
          score: 2
        }
      ]
    },
    {
      question: "Working Long Hours: How well do you handle working long, physically demanding hours?",
      answers: [{
          text: "Poorly; I tire quickly.",
          score: 0
        },
        {
          text: "Adequately; I can manage for a while but need rest.",
          score: 1
        },
        {
          text: "Well; I can maintain my energy over long periods.",
          score: 2
        }
      ]
    },
    {
      question: "Withstanding Extreme Weather: How well can you withstand extreme weather conditions?",
      answers: [{
          text: "Poorly; I seek shelter quickly.",
          score: 0
        },
        {
          text: "Moderately; I can handle some extreme conditions for short periods.",
          score: 1
        },
        {
          text: "Well; I can endure harsh weather for extended periods.",
          score: 2
        }
      ]
    },
    {
      question: "Recovering from Injuries: How quickly do you recover from physical injuries?",
      answers: [{
          text: "Slowly; it takes me a while to heal.",
          score: 0
        },
        {
          text: "At a medium pace; healing takes some time.",
          score: 1
        },
        {
          text: "Quickly; I recover faster than most people.",
          score: 2
        }
      ]
    },
    {
      question: "Resistance to Illness: How often do you get sick compared to others?",
      answers: [{
          text: "Frequently; I’m more susceptible to illness.",
          score: 0
        },
        {
          text: "Occasionally; I get sick from time to time.",
          score: 1
        },
        {
          text: "Rarely; I have a strong immune system.",
          score: 2
        }
      ]
    },
    {
      question: "Sleep Patterns: How well do you function on minimal sleep?",
      answers: [{
          text: "Poorly; I need a lot of sleep to function well.",
          score: 0
        },
        {
          text: "Moderately; I can manage with some less sleep.",
          score: 1
        },
        {
          text: "Well; I can perform effectively with minimal sleep.",
          score: 2
        }
      ]
    },
    {
      question: "Physical Conditioning: How regularly do you engage in physical conditioning exercises?",
      answers: [{
          text: "Rarely.",
          score: 0
        },
        {
          text: "Occasionally; I exercise sporadically.",
          score: 1
        },
        {
          text: "Regularly; I prioritize physical fitness.",
          score: 2
        }
      ]
    },
    {
      question: "Survival Skills: Do you have experience with wilderness survival skills?",
      answers: [{
          text: "No experience.",
          score: 0
        },
        {
          text: "Some basic skills; I’ve learned from books or short courses.",
          score: 1
        },
        {
          text: "Extensive experience; I’m skilled in survival techniques.",
          score: 2
        }
      ]
    },
    {
      question: "Mental Resilience: How well do you handle mental stress or pressure?",
      answers: [{
          text: "Poorly; I struggle with mental resilience.",
          score: 0
        },
        {
          text: "Adequately; I handle stress but may need support.",
          score: 1
        },
        {
          text: "Well; I maintain my mental stability under pressure.",
          score: 2
        }
      ]
    }
  ],
  charisma: [{
      question: "Public Speaking: How comfortable are you with public speaking?",
      answers: [{
          text: "Not comfortable at all.",
          score: 0
        },
        {
          text: "Somewhat comfortable; I can speak in front of small groups.",
          score: 1
        },
        {
          text: "Very comfortable; I enjoy speaking in front of large groups.",
          score: 2
        }
      ]
    },
    {
      question: "Influencing Others: How well can you influence others to do something?",
      answers: [{
          text: "Poorly; I struggle to convince others.",
          score: 0
        },
        {
          text: "Moderately; I can influence some people.",
          score: 1
        },
        {
          text: "Well; I can easily persuade most people.",
          score: 2
        }
      ]
    },
    {
      question: "Networking: How actively do you engage in networking and building professional relationships?",
      answers: [{
          text: "Not actively; I prefer smaller social circles.",
          score: 0
        },
        {
          text: "Somewhat actively; I attend networking events occasionally.",
          score: 1
        },
        {
          text: "Very actively; I prioritize building wide networks.",
          score: 2
        }
      ]
    },
    {
      question: "Empathy: How empathetic are you towards others' feelings and situations?",
      answers: [{
          text: "Not very empathetic.",
          score: 0
        },
        {
          text: "Somewhat empathetic; I can understand some emotions.",
          score: 1
        },
        {
          text: "Very empathetic; I can deeply understand others’ feelings.",
          score: 2
        }
      ]
    },
    {
      question: "Negotiation Skills: How skilled are you at negotiating deals or agreements?",
      answers: [{
          text: "Not skilled; I prefer to avoid negotiations.",
          score: 0
        },
        {
          text: "Somewhat skilled; I can negotiate basic terms.",
          score: 1
        },
        {
          text: "Very skilled; I can negotiate complex agreements effectively.",
          score: 2
        }
      ]
    },
    {
      question: "Sense of Humor: How often do you use humor to lighten the mood or connect with others?",
      answers: [{
          text: "Rarely; I’m not comfortable with humor in social situations.",
          score: 0
        },
        {
          text: "Occasionally; I use humor but may not always connect.",
          score: 1
        },
        {
          text: "Frequently; my sense of humor helps me bond with others.",
          score: 2
        }
      ]
    },
    {
      question: "Diplomacy: How skilled are you at resolving conflicts peacefully?",
      answers: [{
          text: "Not skilled; I avoid conflicts if possible.",
          score: 0
        },
        {
          text: "Somewhat skilled; I can resolve simple disagreements.",
          score: 1
        },
        {
          text: "Very skilled; I can resolve complex conflicts diplomatically.",
          score: 2
        }
      ]
    },
    {
      question: "Stage Presence: How comfortable are you performing in front of an audience or on stage?",
      answers: [{
          text: "Not comfortable at all.",
          score: 0
        },
        {
          text: "Somewhat comfortable; I can perform in front of small audiences.",
          score: 1
        },
        {
          text: "Very comfortable; I enjoy performing for large audiences.",
          score: 2
        }
      ]
    },
    {
      question: "Building Trust: How easily can you build trust with strangers or new acquaintances?",
      answers: [{
          text: "With difficulty; it takes me a while.",
          score: 0
        },
        {
          text: "Moderately easily; people generally trust me after some time.",
          score: 1
        },
        {
          text: "Very easily; people tend to trust me quickly.",
          score: 2
        }
      ]
    },
    {
      question: "Conflict Resolution: How well can you resolve disputes between others?",
      answers: [{
          text: "Poorly; I avoid mediating conflicts.",
          score: 0
        },
        {
          text: "Adequately; I can resolve simple disputes.",
          score: 1
        },
        {
          text: "Well; I can mediate complex conflicts effectively.",
          score: 2
        }
      ]
    }
  ],
  intelligence: [{
      question: "Problem Solving: How adept are you at solving abstract problems or puzzles?",
      answers: [{
          text: "Not adept at all.",
          score: 0
        },
        {
          text: "Somewhat adept; I can solve some puzzles but struggle with complex ones.",
          score: 1
        },
        {
          text: "Very adept; I quickly solve complex puzzles and problems.",
          score: 2
        }
      ]
    },
    {
      question: "Learning New Subjects: How quickly can you learn new subjects or technologies?",
      answers: [{
          text: "Slowly; I struggle to grasp new concepts.",
          score: 0
        },
        {
          text: "At a medium pace; I need some time but can learn new subjects.",
          score: 1
        },
        {
          text: "Quickly; I pick up new subjects easily and efficiently.",
          score: 2
        }
      ]
    },
    {
      question: "Academic Background: How well did you perform academically in school?",
      answers: [{
          text: "Poorly; I struggled with academic work.",
          score: 0
        },
        {
          text: "Adequately; I passed with average grades.",
          score: 1
        },
        {
          text: "Excellently; I had outstanding grades and achievements.",
          score: 2
        }
      ]
    },
    {
      question: "Science and Technology: How interested are you in science and technology?",
      answers: [{
          text: "Not interested at all.",
          score: 0
        },
        {
          text: "Somewhat interested; I follow basic developments.",
          score: 1
        },
        {
          text: "Very interested; I follow and understand complex scientific and technological advancements.",
          score: 2
        }
      ]
    },
    {
      question: "Critical Thinking: How well do you analyze information critically?",
      answers: [{
          text: "Poorly; I tend to accept information at face value.",
          score: 0
        },
        {
          text: "Adequately; I question some information but may miss deeper insights.",
          score: 1
        },
        {
          text: "Well; I always analyze information thoroughly and critically.",
          score: 2
        }
      ]
    },
    {
      question: "Creativity: How creative are you in solving problems or creating new ideas?",
      answers: [{
          text: "Not creative; I rely on established methods.",
          score: 0
        },
        {
          text: "Somewhat creative; I occasionally come up with innovative solutions.",
          score: 1
        },
        {
          text: "Very creative; I consistently generate new and innovative ideas.",
          score: 2
        }
      ]
    },
    {
      question: "Memorization: How well can you memorize and recall information?",
      answers: [{
          text: "Poorly; I need reminders often.",
          score: 0
        },
        {
          text: "Moderately; I can recall some information but may need aids.",
          score: 1
        },
        {
          text: "Well; I have excellent memory and rarely need reminders.",
          score: 2
        }
      ]
    },
    {
      question: "Analyzing Complex Data: How well can you analyze complex data sets or research?",
      answers: [{
          text: "Poorly; I struggle to understand complex data.",
          score: 0
        },
        {
          text: "Adequately; I can analyze some complex data but may need guidance.",
          score: 1
        },
        {
          text: "Well; I can easily analyze and draw insights from complex data.",
          score: 2
        }
      ]
    },
    {
      question: "Innovative Solutions: How often do you come up with innovative solutions to problems?",
      answers: [{
          text: "Rarely; I stick to tried-and-true methods.",
          score: 0
        },
        {
          text: "Occasionally; I find some new solutions but often rely on existing ones.",
          score: 1
        },
        {
          text: "Frequently; I consistently find new and effective solutions.",
          score: 2
        }
      ]
    },
    {
      question: "Research Skills: How skilled are you at conducting thorough research on a topic?",
      answers: [{
          text: "Not skilled; I struggle to find relevant information.",
          score: 0
        },
        {
          text: "Somewhat skilled; I can find some relevant sources.",
          score: 1
        },
        {
          text: "Very skilled; I can efficiently find and synthesize complex information.",
          score: 2
        }
      ]
    }
  ],
  agility: [{
      question: "Physical Reflexes: How quick are your physical reflexes in responding to sudden situations?",
      answers: [{
          text: "Slow; I often react too late.",
          score: 0
        },
        {
          text: "Moderate; I react adequately but not exceptionally fast.",
          score: 1
        },
        {
          text: "Quick; I have excellent reflexes.",
          score: 2
        }
      ]
    },
    {
      question: "Coordinating Activities: How well can you coordinate multiple activities simultaneously?",
      answers: [{
          text: "Poorly; I struggle to multitask.",
          score: 0
        },
        {
          text: "Adequately; I can manage a few tasks at once.",
          score: 1
        },
        {
          text: "Well; I can handle multiple complex tasks simultaneously.",
          score: 2
        }
      ]
    },
    {
      question: "Dexterity: How skilled are you with your hands or in tasks requiring fine motor skills?",
      answers: [{
          text: "Not skilled; I struggle with delicate tasks.",
          score: 0
        },
        {
          text: "Somewhat skilled; I can perform basic tasks but may struggle with intricate ones.",
          score: 1
        },
        {
          text: "Very skilled; I excel at tasks requiring precision and dexterity.",
          score: 2
        }
      ]
    },
    {
      question: "Flexibility: How flexible are you physically?",
      answers: [{
          text: "Not very flexible; I struggle with stretching and bending.",
          score: 0
        },
        {
          text: "Somewhat flexible; I can manage basic yoga poses.",
          score: 1
        },
        {
          text: "Very flexible; I excel at advanced flexibility exercises.",
          score: 2
        }
      ]
    },
    {
      question: "Reaction Time: How quickly do you react to unexpected events?",
      answers: [{
          text: "Slowly; I often miss opportunities.",
          score: 0
        },
        {
          text: "Adequately; I react in a reasonable amount of time.",
          score: 1
        },
        {
          text: "Quickly; I react instantly to most situations.",
          score: 2
        }
      ]
    },
    {
      question: "Learning New Skills: How quickly can you learn new physical skills like dance or acrobatics?",
      answers: [{
          text: "Slowly; I struggle to master new physical skills.",
          score: 0
        },
        {
          text: "At a medium pace; I need practice but can learn them.",
          score: 1
        },
        {
          text: "Quickly; I pick up new physical skills efficiently.",
          score: 2
        }
      ]
    },
    {
      question: "Balancing Acts: How well can you perform balancing tasks like a tightrope or a balance beam?",
      answers: [{
          text: "Poorly; I struggle to maintain balance.",
          score: 0
        },
        {
          text: "Somewhat; I can balance for a short time but may stumble.",
          score: 1
        },
        {
          text: "Very well; I can maintain balance for extended periods.",
          score: 2
        }
      ]
    },
    {
      question: "Acrobatic Skills: How skilled are you at performing acrobatic maneuvers like flips or gymnastics?",
      answers: [{
          text: "Not skilled; I avoid acrobatic activities.",
          score: 0
        },
        {
          text: "Somewhat skilled; I can perform basic acrobatic moves.",
          score: 1
        },
        {
          text: "Very skilled; I excel at complex acrobatic maneuvers.",
          score: 2
        }
      ]
    },
    {
      question: "Quick Changes in Direction: How well can you quickly change direction while moving?",
      answers: [{
          text: "Poorly; I struggle to change direction quickly.",
          score: 0
        },
        {
          text: "Somewhat; I can change direction but may lose momentum.",
          score: 1
        },
        {
          text: "Well; I can make quick turns without losing speed.",
          score: 2
        }
      ]
    },
    {
      question: "Performance Under Pressure: How well do you maintain agility in high-pressure situations?",
      answers: [{
          text: "Poorly; I get distracted and lose agility.",
          score: 0
        },
        {
          text: "Somewhat; I can maintain some agility but may make mistakes.",
          score: 1
        },
        {
          text: "Well; I consistently perform with high agility even under pressure.",
          score: 2
        }
      ]
    }
  ]
};

// Function to generate the questions
function generateQuestions() {
  const questionsDiv = document.getElementById('questions');

  for (const category in questions) {
    const categoryCard = document.createElement('div');
    categoryCard.classList.add('card', 'mb-3');

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    cardHeader.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Questions`;
    categoryCard.appendChild(cardHeader);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    categoryCard.appendChild(cardBody);

    questions[category].forEach((q, qi) => {
      const questionContainer = document.createElement('div');
      questionContainer.innerHTML = `
                <p>Question ${qi + 1} - ${q.question}</p>
                <div class="form-check">
                    <input type="radio" class="form-check-input" id="${category}-q${qi}-0" name="${category}-q${qi}" value="0">
                    <label class="form-check-label" for="${category}-q${qi}-0">${q.answers[0].text}</label>
                </div>
                <div class="form-check">
                    <input type="radio" class="form-check-input" id="${category}-q${qi}-1" name="${category}-q${qi}" value="1">
                    <label class="form-check-label" for="${category}-q${qi}-1">${q.answers[1].text}</label>
                </div>
                <div class="form-check ${qi === questions[category].length - 1 ? '' : 'mb-3'}">
                    <input type="radio" class="form-check-input" id="${category}-q${qi}-2" name="${category}-q${qi}" value="2">
                    <label class="form-check-label" for="${category}-q${qi}-2">${q.answers[2].text}</label>
                </div>
            `;
      cardBody.appendChild(questionContainer);
    });

    questionsDiv.appendChild(categoryCard);
  }

  // Show the submit button after all questions are generated
  document.getElementById('submit').classList.remove('d-none');
}

// Function to calculate scores
function calculateScores() {
  let strength = 0,
    perception = 0,
    endurance = 0,
    charisma = 0,
    intelligence = 0,
    agility = 0;

  for (const category in questions) {
    let allQuestionsAnswered = true;
    questions[category].forEach((q, qi) => {
      const selectedAnswer = document.querySelector(`input[name="${category}-q${qi}"]:checked`);
      if (!selectedAnswer) {
        allQuestionsAnswered = false;
      } else {
        if (category === 'strength') strength += parseInt(selectedAnswer.value);
        if (category === 'perception') perception += parseInt(selectedAnswer.value);
        if (category === 'endurance') endurance += parseInt(selectedAnswer.value);
        if (category === 'charisma') charisma += parseInt(selectedAnswer.value);
        if (category === 'intelligence') intelligence += parseInt(selectedAnswer.value);
        if (category === 'agility') agility += parseInt(selectedAnswer.value);
      }
    });

    if (!allQuestionsAnswered) {
      alert(`Please answer all questions in the ${category} section.`);
      return null; // Stop execution if any section is incomplete
    }
  }

  return {
    strength,
    perception,
    endurance,
    charisma,
    intelligence,
    agility
  };
}

// Show results
function showResults() {
  const scores = calculateScores();
  if (scores) {
    document.getElementById('questions').style.display = 'none';
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('submit').style.display = 'none';
    document.getElementById('results').style.display = 'block';

    document.getElementById('strength-score').textContent = scores.strength;
    document.getElementById('strength-progress').style.width = `${(scores.strength / 20) * 100}%`;

    document.getElementById('perception-score').textContent = scores.perception;
    document.getElementById('perception-progress').style.width = `${(scores.perception / 20) * 100}%`;

    document.getElementById('endurance-score').textContent = scores.endurance;
    document.getElementById('endurance-progress').style.width = `${(scores.endurance / 20) * 100}%`;

    document.getElementById('charisma-score').textContent = scores.charisma;
    document.getElementById('charisma-progress').style.width = `${(scores.charisma / 20) * 100}%`;

    document.getElementById('intelligence-score').textContent = scores.intelligence;
    document.getElementById('intelligence-progress').style.width = `${(scores.intelligence / 20) * 100}%`;

    document.getElementById('agility-score').textContent = scores.agility;
    document.getElementById('agility-progress').style.width = `${(scores.agility / 20) * 100}%`;
  }
}

// Start by generating questions
generateQuestions();

// Add event listener for submitting answers
document.getElementById('submit').addEventListener('click', showResults);
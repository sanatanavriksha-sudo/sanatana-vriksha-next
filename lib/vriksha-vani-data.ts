export interface DailyNewsletterIssue {
  id: number;
  date: string;
  concept: string;
  tithiName: string;
  tithiPhase: 'Shukla' | 'Krishna';
  tithiDesc: string;
  scriptureRef: {
    verseSanskrit: string;
    translation: string;
    source: string;
  };
  explanation: string;
  dharmicPractice: {
    title: string;
    howTo: string;
    benefit: string;
  };
  yogicPractice: {
    title: string;
    howTo: string;
    benefit: string;
  };
  journalPrompt: string;
}

export const CURATED_DAILY_ISSUES: DailyNewsletterIssue[] = [
  {
    id: 1,
    date: 'June 12, 2026',
    concept: 'Dharma',
    tithiName: 'Dwādashī',
    tithiPhase: 'Krishna',
    tithiDesc: 'A potent twelfth lunar day dedicated to mental self-sovereignty, internal purification, and absolute integrity.',
    scriptureRef: {
      verseSanskrit: 'धर्म एव हतो हन्ति धर्मो रक्षति रक्षितः ।',
      translation: 'Dharma, when violated, ruins. Dharma, when protected, preserves and protects the protector.',
      source: 'Manu Smṛti 8.15',
    },
    explanation: 'Dharma is not a set of rigid rules or external cosmic punishments. It is the natural, gentle axle of integrity that keeps our everyday lives spinning smoothly. Just as it is the dharma of water to flow and fire to warm, your dharma is your unique pathway to living in absolute alignment with your inner conscience, your loved ones, and nature.',
    dharmicPractice: {
      title: 'Mindful Truth Filter (Satyāgraha)',
      howTo: "Before speaking or typing any criticism today, run your words through the three gates of speech: 'Is it completely true?', 'Is it spoken in gentle kindness?', and 'Is it absolutely necessary?'",
      benefit: 'Instantly dissolves conversational friction and anchors your speech in quiet dignity.',
    },
    yogicPractice: {
      title: 'Concentrated Earth Mudrā (Pṛthvī Mudrā)',
      howTo: 'Sit symmetrically. Join the tips of your ring finger and thumb on both hands with light pressure, extending the other three fingers straight. Rest your hands on your knees and breathe deeply for 3 minutes.',
      benefit: 'Soothes feelings of restlessness, grounds neural electricity, and immediately restores body stability.',
    },
    journalPrompt: 'Where in my current life am I taking minor shortcuts, and what is one gentle adjustment I can make today to realign with my core values?',
  },
  {
    id: 2,
    date: 'June 13, 2026',
    concept: 'Karma Yoga',
    tithiName: 'Trayodashī',
    tithiPhase: 'Krishna',
    tithiDesc: 'The thirteenth lunar day — associated with Pradosha, a traditional epoch of quietude and dissolution of mental stress.',
    scriptureRef: {
      verseSanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।',
      translation: 'Your right and duty is to perform the action alone, never to its speculative fruits or outcome.',
      source: 'Bhagavad Gītā 2.47',
    },
    explanation: 'We experience mental tension when we attempt to force future outcomes to bend to our anxieties. Karma Yoga invites us to devote 100% of our creative heart to the work we are doing right now, while gently surrendering the final reward to the universe. This simple pivot converts daily chores from nervous transactions into joyful meditations.',
    dharmicPractice: {
      title: 'Dedicated Action Surrender (Arpana)',
      howTo: "Select one minor chore today — washing a cup, drafting a message, wiping down a table. Execute it with pristine, exquisite care, and mentally whisper: 'Offered with love, let go.'",
      benefit: 'Breaks the constant craving for instant reassurance and frees your creative flow.',
    },
    yogicPractice: {
      title: 'Rhythmic Breath-Action Wave (Prāṇa-Samyoga)',
      howTo: 'While standing or seated, inhale slowly for 4 seconds as you sweep your arms wide up to the sky. Exhale for 4 seconds as you bring your palms down to your heart. Repeat 10 times in perfect synchrony.',
      benefit: 'Coordinates the breath with motor systems to dissolve modern, high-speed cognitive panic.',
    },
    journalPrompt: 'What task am I doing purely for the sake of secondary approval or progress, and how would it feel if I performed it with pure love instead?',
  },
  {
    id: 3,
    date: 'June 14, 2026',
    concept: 'Dhyāna',
    tithiName: 'Chaturdashī',
    tithiPhase: 'Krishna',
    tithiDesc: 'The fourteenth lunar day — associated with Shiva, representing absolute internal stillness and deep silence.',
    scriptureRef: {
      verseSanskrit: 'बहिरङ्गं तु यद्यपि ध्यानं तदप्यन्तर्विशिष्यते ।',
      translation: 'External practices of focus are helpful, but inward-turned meditation is far superior.',
      source: 'Yogasūtra Bhāṣya',
    },
    explanation: 'The hyperactive mind behaves like a turbulent glass of water mixed with sand. If you shake it continuously with frantic thoughts, it remains dark and cluttered. But if you simply set the glass down in quietude, the silt settles naturally to the bottom, revealing pristine water. Meditation is not a battle; it is the art of sitting still and letting thoughts settle.',
    dharmicPractice: {
      title: 'Radical Unconditional Goodwill (Maitrī)',
      howTo: "Close your eyes for one minute. Visualize a person with whom you have experienced friction or tension. Silently speak to them: 'May you be peaceful, may you be free from internal sorrow.'",
      benefit: 'Shatters defensive ego blockages and releases stored emotional tightness in the chest.',
    },
    yogicPractice: {
      title: 'Alternate Nostril Breath (Nāḍī Shodhana)',
      howTo: 'Sit tall. Gently block your right nostril, inhale left for 4s. Block left, exhale right for 4s. Inhale right for 4s, block right, exhale left for 4s. Repeat this exchange for 12 complete breath cycles.',
      benefit: 'Gently balances the left and right hemispheres of the brain, instantly slowing down racing thoughts.',
    },
    journalPrompt: 'When my mind feels cluttered or anxious, do I immediately try to think my way out of it, or can I sit in gentle, non-judgmental awareness of the noise?',
  },
  {
    id: 4,
    date: 'June 15, 2026',
    concept: 'Sevā',
    tithiName: 'Amāvāsyā',
    tithiPhase: 'Krishna',
    tithiDesc: 'The silent, restful night of the New Moon — ideal for honoring ancestral roots, giving back, and practicing selflessness.',
    scriptureRef: {
      verseSanskrit: 'परोपकाराय फलन्ति वृक्षाः परोपकाराय वहन्ति नद्यः ।',
      translation: 'Trees bear sweet fruit to feed others, and rivers flow only to give water to the world.',
      source: 'Traditional Subhāṣita',
    },
    explanation: "Our consumerist culture trains us to constantly ask: 'What do I get out of this?' Sevā (selfless service) gently flips this perspective to ask: 'How can my heart serve?' When we serve without expectations, we peel away the small boundaries of the ego, feeling a natural, sweet connection to the universal spark resting in everyone else.",
    dharmicPractice: {
      title: 'The Anonymous Kind Gesture',
      howTo: 'Identify one person in your home, neighborhood, or office. Perform a small, genuinely helpful act for them completely in secret with zero expectation of recognition.',
      benefit: 'Quietly dissolves pride, leaving a deep sense of warmth and universal alignment.',
    },
    yogicPractice: {
      title: 'Expansive Heart Opener (Anāhata Kriyā)',
      howTo: 'Sit upright. Hold your hands up, palms facing forward at shoulder height. Inhale fully, gently pulling your elbows back to expand your ribcage. Exhale, returning to center. Repeat 12 times.',
      benefit: 'Creates physical space around the lungs, inviting oxygenation and feelings of safety and compassion.',
    },
    journalPrompt: 'Who is someone in my life who seems weary or distant, and what is one small, quiet way I can support them without demanding credit?',
  },
  {
    id: 5,
    date: 'June 16, 2026',
    concept: 'Santoṣa',
    tithiName: 'Prathamā',
    tithiPhase: 'Shukla',
    tithiDesc: 'The first day of the waxing moon — a fresh cosmic slate representing the planting of positive spiritual seeds.',
    scriptureRef: {
      verseSanskrit: 'सन्तोषादनुत्तमः सुखलाभः ।',
      translation: 'From pure Santoṣa (contentment), one attains unsurpassed happiness and absolute inner peace.',
      source: 'Yoga Sūtra 2.42',
    },
    explanation: 'Santoṣa is not lazy resignation or giving up on personal growth. It is the brilliant, radiant realization that you are already whole and complete in this exact moment, completely independent of external circumstances. True ease resides only in resting contentedly right here and right now.',
    dharmicPractice: {
      title: 'Simple Digital-Free Evening Inventory',
      howTo: 'Before looking at any screens tonight, sit at the edge of your bed. Look around your space, find three physical details — a quiet window, a warm blanket — and mentally offer gratitude for how they shelter you.',
      benefit: 'Interrupts the dopamine-depletion feedback cycle, grounding you in calm and peaceful sleep.',
    },
    yogicPractice: {
      title: 'Post-Exhale Pause (Bāhya Kumbhaka)',
      howTo: 'Inhale gently for 4 seconds, exhale fully for 4 seconds. Hold your breath out on empty for just 3 seconds, staying completely relaxed. Inhale again. Repeat 8 times.',
      benefit: 'Unlocks a profound, chemical-free stillness in the nervous system, dissolving chronic stress.',
    },
    journalPrompt: 'If I stopped believing that I need to acquire or change anything to be happy, what is the deepest peace I could sink into right now?',
  },
  {
    id: 6,
    date: 'June 17, 2026',
    concept: 'Svādhyāya',
    tithiName: 'Dwitīyā',
    tithiPhase: 'Shukla',
    tithiDesc: 'The second day of the waxing moon — symbolizing high resolve, self-knowledge, and quiet focus.',
    scriptureRef: {
      verseSanskrit: 'स्वाध्यायादिष्टदेवतासंप्रयोगः ।',
      translation: 'Through Svādhyāya (self-study and sacred reading), one connects deeply with their inner divine guide.',
      source: 'Yoga Sūtra 2.44',
    },
    explanation: 'We feed our bodies healthy foods, but we often feed our minds a steady diet of aggressive headlines, viral gossip, and toxic virtual comparisons. Self-study (Svādhyāya) invites us to spend small moments every single day feeding our intellects with high-quality sacred texts and contemplating our own habitual reactions.',
    dharmicPractice: {
      title: 'Intentional Sacred Reading Pause',
      howTo: 'Put your phone in another room. Dedicate exactly 5 minutes to reading any beautiful wisdom text or book with absolute focus. Underline one single phrase that directly resonates with your day.',
      benefit: 'Nourishes the intellect with positive inputs, elevating you above noisy digital distractions.',
    },
    yogicPractice: {
      title: 'The Witness Meditation (Draṣṭā Bhāva)',
      howTo: 'Sit quietly for 3 minutes. Leave your eyes half-closed. Do not try to control your thoughts; simply observe them as clouds passing across a broad, blue sky. Mentally repeat: "I am the observer."',
      benefit: 'Dissolves identification with transient worries, reminding you of the vast peace of pure consciousness.',
    },
    journalPrompt: 'What recurrent loop, habit, or defense mechanism has my mind repeatedly used this week, and how can I bring compassionate understanding to it?',
  },
];

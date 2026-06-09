-- ============================================================
-- Sanātana Vṛkṣa — Service seed data
-- Source: lib/data.js (homas, poojas, samskaras, specialized)
-- Total rows: 50
-- Safe to run multiple times: ON CONFLICT (slug) DO UPDATE
-- ============================================================

INSERT INTO public.services (
  title,
  slug,
  category,
  description,
  image_url,
  price_label,
  devanagari_name,
  glyph,
  is_active,
  sort_order
)
VALUES

-- ─── HOMAS (9 rows, sort_order 0–8) ─────────────────────────────────────────

  (
    'Dhanvantari Homa',
    'dhanvantari-homa',
    'homas',
    'Invoked for health, healing, and recovery from illness.',
    '/assets/homas/h2.jpg',
    'from $251',
    'धन्वन्तरि होम',
    'धं',
    TRUE, 0
  ),
  (
    'Durgā Homa',
    'durga-homa',
    'homas',
    'For courage, protection, and removal of negative forces.',
    '/assets/homas/h3.jpg',
    'from $251',
    'दुर्गा होम',
    'दुं',
    TRUE, 1
  ),
  (
    'Gaṇapati Homa',
    'ganapati-homa',
    'homas',
    'Removes obstacles before any new beginning or venture.',
    '/assets/homas/h1.jpg',
    'from $201',
    'गणपति होम',
    'गं',
    TRUE, 2
  ),
  (
    'Lakṣmī Kubera Homa',
    'lakshmi-kubera-homa',
    'homas',
    'For abundance, wealth, and lasting prosperity.',
    '/assets/homas/h4.jpg',
    'from $301',
    'लक्ष्मी कुबेर होम',
    'श्रीं',
    TRUE, 3
  ),
  (
    'Mṛtyuñjaya Homa',
    'mrityunjaya-homa',
    'homas',
    'For longevity, wellbeing, and freedom from fear.',
    '/assets/homas/h5.jpg',
    'from $301',
    'मृत्युञ्जय होम',
    'हौं',
    TRUE, 4
  ),
  (
    'Navagraha Homa',
    'navagraha-homa',
    'homas',
    'Balances planetary influences for harmony and progress.',
    '/assets/homas/h6.jpg',
    'from $351',
    'नवग्रह होम',
    'नव',
    TRUE, 5
  ),
  (
    'Śāsta Homa',
    'shasta-homa',
    'homas',
    'Invokes Lord Ayyappa for peace and family protection.',
    '/assets/homas/h7.jpg',
    'from $251',
    'शास्ता होम',
    'शा',
    TRUE, 6
  ),
  (
    'Sudarśana Homa',
    'sudarsana-homa',
    'homas',
    'Dispels negativity and shields against unseen harm.',
    '/assets/homas/h8.jpg',
    'from $301',
    'सुदर्शन होम',
    'हुं',
    TRUE, 7
  ),
  (
    'Chaṇḍī Saptaśatī Homa',
    'chandi-saptashati-homa',
    'homas',
    'A grand invocation of the Divine Mother for supreme grace.',
    '/assets/homas/h3.jpg',
    'from $451',
    'चण्डी होम',
    'ऐं',
    TRUE, 8
  ),

-- ─── POOJAS (11 rows, sort_order 0–10) ──────────────────────────────────────

  (
    'Abhiśeka — Any Deity',
    'abhisheka-any-deity',
    'poojas',
    'Sacred ceremonial bathing of the chosen deity with offerings.',
    '/assets/poojas/p1.jpg',
    'from $151',
    'अभिषेक',
    'ॐ',
    TRUE, 0
  ),
  (
    'Durgā Pūjā',
    'durga-puja',
    'poojas',
    'Worship of the Divine Mother for strength and protection.',
    '/assets/poojas/p5.jpg',
    'from $151',
    'दुर्गा पूजा',
    'दुं',
    TRUE, 1
  ),
  (
    'Gaṇapati Pūjā',
    'ganapati-puja',
    'poojas',
    'The auspicious first worship to clear all obstacles.',
    '/assets/poojas/p4.jpg',
    'from $121',
    'गणपति पूजा',
    'गं',
    TRUE, 2
  ),
  (
    'Kalaśa Pūjā',
    'kalasha-puja',
    'poojas',
    'Sanctifies the sacred pot invoking divine presence.',
    '/assets/poojas/p2.jpg',
    'from $121',
    'कलश पूजा',
    'कं',
    TRUE, 3
  ),
  (
    'Lakṣmī Pūjā',
    'lakshmi-puja',
    'poojas',
    'Invites prosperity, fortune, and household harmony.',
    '/assets/poojas/p11.jpg',
    'from $151',
    'लक्ष्मी पूजा',
    'श्रीं',
    TRUE, 4
  ),
  (
    'Navagraha Pūjā',
    'navagraha-puja',
    'poojas',
    'Honors the nine planets for balance and wellbeing.',
    '/assets/poojas/p10.jpg',
    'from $171',
    'नवग्रह पूजा',
    'नव',
    TRUE, 5
  ),
  (
    'Rudrābhiśeka',
    'rudrabhisheka',
    'poojas',
    'Powerful abhiṣeka of Lord Śiva for peace and renewal.',
    '/assets/poojas/p3.jpg',
    'from $201',
    'रुद्राभिषेक',
    'नमः',
    TRUE, 6
  ),
  (
    'Sarasvatī Pūjā',
    'sarasvati-puja',
    'poojas',
    'For knowledge, learning, the arts, and clarity of mind.',
    '/assets/poojas/p6.jpg',
    'from $121',
    'सरस्वती पूजा',
    'ऐं',
    TRUE, 7
  ),
  (
    'Śāsta Pūjā',
    'shasta-puja',
    'poojas',
    'Devotional worship of Lord Ayyappa for the family.',
    '/assets/poojas/p7.jpg',
    'from $151',
    'शास्ता पूजा',
    'शा',
    TRUE, 8
  ),
  (
    'Satyanārāyaṇa Pūjā',
    'satyanarayana-puja',
    'poojas',
    'Worship of Lord Viṣṇu for gratitude and fulfilled vows.',
    '/assets/poojas/p8.jpg',
    'from $151',
    'सत्यनारायण पूजा',
    'ॐ',
    TRUE, 9
  ),
  (
    'Hanumān Pūjā',
    'hanuman-puja',
    'poojas',
    'For strength, devotion, and protection from adversity.',
    '/assets/poojas/p9.jpg',
    'from $121',
    'हनुमान पूजा',
    'राम',
    TRUE, 10
  ),

-- ─── SAMSKARAS (10 rows, sort_order 0–9, no image_url) ──────────────────────

  (
    'Akṣarābhyāsa',
    'aksharabhyasa',
    'samskaras',
    'A child''s sacred initiation into the world of learning.',
    NULL,
    'Inquire',
    'अक्षराभ्यास',
    'अ',
    TRUE, 0
  ),
  (
    'Anna Śrāddha with Homa',
    'anna-shraddha-with-homa',
    'samskaras',
    'Reverent rites honoring departed ancestors.',
    NULL,
    'Inquire',
    'अन्न श्राद्ध',
    'पितृ',
    TRUE, 1
  ),
  (
    'Annaprāśana / Chorūṇu',
    'annaprasana-chorunu',
    'samskaras',
    'The joyful first-feeding ceremony for an infant.',
    NULL,
    'Inquire',
    'अन्नप्राशन',
    'अन्न',
    TRUE, 2
  ),
  (
    'Āyushya Homa',
    'ayushya-homa',
    'samskaras',
    'Blessings of long life and vitality, often on birthdays.',
    NULL,
    'Inquire',
    'आयुष्य होम',
    'आयु',
    TRUE, 3
  ),
  (
    'Bhīmaratha Śānti',
    'bhimaratha-shanti',
    'samskaras',
    'A revered ceremony marking the 70th birthday.',
    NULL,
    'Inquire',
    'भीमरथ शान्ति',
    '७०',
    TRUE, 4
  ),
  (
    'Garbhādāna',
    'garbhadana',
    'samskaras',
    'The sacred rite welcoming the journey of parenthood.',
    NULL,
    'Inquire',
    'गर्भादान',
    'गर्भ',
    TRUE, 5
  ),
  (
    'Hiraṇya Śrāddha',
    'hiranya-shraddha',
    'samskaras',
    'An ancestral offering performed with devotion.',
    NULL,
    'Inquire',
    'हिरण्य श्राद्ध',
    'पितृ',
    TRUE, 6
  ),
  (
    'Jātakarma',
    'jatakarma',
    'samskaras',
    'The birth ceremony welcoming a newborn into dharma.',
    NULL,
    'Inquire',
    'जातकर्म',
    'जन्म',
    TRUE, 7
  ),
  (
    'Kalyāṇa — Wedding',
    'kalyana-wedding',
    'samskaras',
    'The sacred Vedic union of two souls in marriage.',
    NULL,
    'Inquire',
    'कल्याण',
    'विवाह',
    TRUE, 8
  ),
  (
    'Kanakābhiṣeka',
    'kanakabhisheka',
    'samskaras',
    'A grand celebration honoring the 100th birthday.',
    NULL,
    'Inquire',
    'कनकाभिषेक',
    '१००',
    TRUE, 9
  ),

-- ─── SPECIALIZED (20 rows, sort_order 0–19) ──────────────────────────────────

  (
    'Puruṣa Sūkta Homa',
    'purusha-sukta-homa',
    'specialized',
    'A grand Vedic fire offering using the Puruṣa Sūkta, invoking the cosmic form of the Divine for universal harmony.',
    '/assets/homas/h1.jpg',
    'from $351',
    'पुरुष सूक्त होम',
    'पुरु',
    TRUE, 0
  ),
  (
    'Medhā Sūktam Homa',
    'medha-suktam-homa',
    'specialized',
    'A sacred fire offering with the Medhā Sūktam, invoking blessings of wisdom, memory, and sharp intellect.',
    '/assets/homas/h2.jpg',
    'from $251',
    'मेधा सूक्तम् होम',
    'मेधा',
    TRUE, 1
  ),
  (
    'Bhagavatī Sevā',
    'bhagavati-seva',
    'specialized',
    'Devotional worship offered to the Divine Mother Bhagavatī, invoking her grace, protection, and abundant blessings.',
    '/assets/poojas/p5.jpg',
    'Inquire',
    'भगवती सेवा',
    'भग',
    TRUE, 2
  ),
  (
    'Chaṇḍī Homa',
    'chandi-homa',
    'specialized',
    'A powerful homa invoking Goddess Chaṇḍī for strength, protection, and victory over all obstacles.',
    '/assets/homas/h3.jpg',
    'from $351',
    'चण्डी होम',
    'ऐं',
    TRUE, 3
  ),
  (
    'Durgā Pūjā — Bengali',
    'durga-puja-bengali',
    'specialized',
    'The grand Bengali tradition of Durgā worship performed with full ritual procedure, devotion, and festive offerings.',
    '/assets/poojas/p5.jpg',
    'Inquire',
    'दुर्गा पूजा (बंगाली)',
    'दुं',
    TRUE, 4
  ),
  (
    'Ekādaśa Vāra Rudra Homa',
    'ekadasha-vara-rudra-homa',
    'specialized',
    'The eleven-fold invocation of Lord Rudra through sacred fire offerings, for peace, health, and liberation from suffering.',
    '/assets/homas/h8.jpg',
    'from $501',
    'एकादश वार रुद्र होम',
    'रुद्र',
    TRUE, 5
  ),
  (
    'Ekādaśa Vāra Rudra Pūjā / Abhiśeka',
    'ekadasha-vara-rudra-puja-abhisheka',
    'specialized',
    'Eleven sacred repetitions of Rudra worship and ceremonial abhiṣeka, invoking Lord Śiva''s grace for healing and renewal.',
    '/assets/poojas/p3.jpg',
    'from $351',
    'एकादश वार रुद्र पूजा',
    'रुद्र',
    TRUE, 6
  ),
  (
    'Graha Praveśa / Vāstu Śānti',
    'graha-pravesha-vastu-shanti',
    'specialized',
    'The sacred housewarming ceremony and Vāstu Śānti ritual to bless, purify, and consecrate a new home or space.',
    '/assets/poojas/p2.jpg',
    'Inquire',
    'गृह प्रवेश / वास्तु शान्ति',
    'गृह',
    TRUE, 7
  ),
  (
    'Guru Śānti Homa',
    'guru-shanti-homa',
    'specialized',
    'A sacred fire ritual honoring the Guru lineage and seeking blessings of wisdom, guidance, and spiritual peace.',
    '/assets/homas/h7.jpg',
    'from $251',
    'गुरु शान्ति होम',
    'गुरु',
    TRUE, 8
  ),
  (
    'Mahārudram',
    'maharudram',
    'specialized',
    'The magnificent Mahārudram — an extended, powerful invocation of Lord Śiva with full Vedic recitation and ritual offerings.',
    '/assets/homas/h5.jpg',
    'Inquire',
    'महारुद्रम्',
    'रुद्र',
    TRUE, 9
  ),
  (
    'Manda Maṅgala Śānti Homa',
    'manda-mangala-shanti-homa',
    'specialized',
    'A peace-restoring homa addressing the combined planetary influence of Saturn and Mars, performed for harmony and protection.',
    '/assets/homas/h6.jpg',
    'from $301',
    'मन्द मङ्गल शान्ति होम',
    'शान्ति',
    TRUE, 10
  ),
  (
    'Nakṣatra Homa',
    'nakshatra-homa',
    'specialized',
    'A fire ritual dedicated to your birth star, invoking its presiding deity for harmony, health, and auspiciousness in life.',
    '/assets/homas/h6.jpg',
    'from $251',
    'नक्षत्र होम',
    'नक्ष',
    TRUE, 11
  ),
  (
    'Parihāra for Jyotiṣa Services',
    'parihara-for-jyotisha-services',
    'specialized',
    'Personalized Vedic astrological remedies — tailored rituals, offerings, and prayers to address specific planetary imbalances.',
    '/assets/poojas/p1.jpg',
    'Inquire',
    'परिहार ज्योतिष सेवा',
    'ग्रह',
    TRUE, 12
  ),
  (
    'Pitṛdoṣa Nivāraṇa Homa',
    'pitrdosha-nivarana-homa',
    'specialized',
    'A sacred fire ritual performed to alleviate ancestral afflictions, bringing peace to departed souls and harmony to the family.',
    '/assets/homas/h5.jpg',
    'from $351',
    'पितृदोष निवारण होम',
    'पितृ',
    TRUE, 13
  ),
  (
    'Sahasra Liṅgārchana',
    'sahasra-lingarchana',
    'specialized',
    'The sacred offering of one thousand bilva leaves or flowers to the Śiva Liṅga, performed for deep devotion and divine grace.',
    '/assets/poojas/p3.jpg',
    'Inquire',
    'सहस्र लिङ्गार्चन',
    'नमः',
    TRUE, 14
  ),
  (
    'Sahasranāma Archana',
    'sahasranama-archana',
    'specialized',
    'The recitation of one thousand divine names of a deity, accompanied by flower offerings, for blessings and liberation.',
    '/assets/poojas/p1.jpg',
    'from $151',
    'सहस्रनाम अर्चना',
    'ॐ',
    TRUE, 15
  ),
  (
    'Śani Śānti Homa',
    'shani-shanti-homa',
    'specialized',
    'A fire ritual dedicated to Lord Śani to pacify Saturn''s influence and restore balance, peace, and forward progress in life.',
    '/assets/homas/h6.jpg',
    'from $251',
    'शनि शान्ति होम',
    'शनि',
    TRUE, 16
  ),
  (
    'Sarasvatī Pūjā — Bengali',
    'sarasvati-puja-bengali',
    'specialized',
    'The celebrated Bengali tradition of Sarasvatī worship, performed with devotion, offerings, and the spirit of festive learning.',
    '/assets/poojas/p6.jpg',
    'Inquire',
    'सरस्वती पूजा (बंगाली)',
    'ऐं',
    TRUE, 17
  ),
  (
    'Svayamvarā Kalā Pārvatī Homa',
    'svayamvara-kala-parvati-homa',
    'specialized',
    'A sacred homa invoking Goddess Svayamvarā Pārvatī for blessings of a harmonious marriage, love, and companionship.',
    '/assets/homas/h3.jpg',
    'from $301',
    'स्वयम्वर काला पार्वती होम',
    'श्रीं',
    TRUE, 18
  ),
  (
    'Manyu Sūktam Homa',
    'manyu-suktam-homa',
    'specialized',
    'A powerful fire offering using the Manyu Sūktam, invoking divine strength, courage, and protection from adversity.',
    '/assets/homas/h5.jpg',
    'from $251',
    'मन्यु सूक्तम् होम',
    'मन्यु',
    TRUE, 19
  )

ON CONFLICT (slug) DO UPDATE SET
  title           = EXCLUDED.title,
  category        = EXCLUDED.category,
  description     = EXCLUDED.description,
  image_url       = EXCLUDED.image_url,
  price_label     = EXCLUDED.price_label,
  devanagari_name = EXCLUDED.devanagari_name,
  glyph           = EXCLUDED.glyph,
  is_active       = EXCLUDED.is_active,
  sort_order      = EXCLUDED.sort_order;

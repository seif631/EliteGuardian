// Service-specific variant configurations
// Each service can have completely unique options
// Prices updated to match SkyCoach exactly (converted from EUR to USD at 1.10 rate)
export const serviceVariants = {
  // Rufus's Fury - EXACT SkyCoach match
  'raid-rufus-fury': [
    {
      key: 'rollType',
      label: 'Roll Type',
      options: [
        { id: 'random', label: 'Roll with Random Perks', priceAdd: 0 },
        { id: 'guaranteed-perk', label: 'Roll with Guaranteed Perk List', priceAdd: 29.40 }, // €26.73 * 1.1
        { id: 'god-roll', label: 'God Rolls List', priceAdd: 65.04 } // €59.13 * 1.1
      ]
    },
    {
      key: 'godRollChoice',
      label: 'Select God Roll (if God Rolls List selected)',
      options: [
        { id: 'demo-hatchling', label: 'Demolitionist + Hatchling', priceAdd: 0 },
        { id: 'demo-adrenaline', label: 'Demolitionist + Adrenaline Junkie', priceAdd: 0 },
        { id: 'rewind-target', label: 'Rewind Rounds + Target Lock', priceAdd: 0 }
      ]
    },
    {
      key: 'guaranteedPerk',
      label: 'Guaranteed Perk (if Guaranteed Perk List selected)',
      options: [
        { id: 'none', label: 'Select a perk', priceAdd: 0 },
        { id: 'target-lock', label: 'Target Lock', priceAdd: 0 },
        { id: 'adrenaline-junkie', label: 'Adrenaline Junkie', priceAdd: 0 },
        { id: 'hatchling', label: 'Hatchling', priceAdd: 0 },
        { id: 'frenzy', label: 'Frenzy', priceAdd: 0 },
        { id: 'demolitionist', label: 'Demolitionist', priceAdd: 0 },
        { id: 'reconstruction', label: 'Reconstruction', priceAdd: 0 },
        { id: 'rewind-rounds', label: 'Rewind Rounds', priceAdd: 0 },
        { id: 'paracausal', label: 'Paracausal Affinity', priceAdd: 0 }
      ]
    },
    {
      key: 'collection',
      label: 'Collection Status',
      options: [
        { id: 'unlocked', label: "I've unlocked this weapon in Collection", priceAdd: 0 },
        { id: 'need-unlock', label: 'I need to unlock this weapon in Collection', priceAdd: 2.67 } // €2.43 * 1.1
      ]
    },
    {
      key: 'deepsight',
      label: 'Deepsight Options',
      options: [
        { id: 'none', label: 'No Deepsight', priceAdd: 0 },
        { id: 'deepsight', label: 'Deepsight Version', priceAdd: 4.46 }, // €4.05 * 1.1
        { id: 'full-pattern', label: 'Full Pattern Unlock', priceAdd: 53.46 } // €48.60 * 1.1
      ]
    },
    {
      key: 'extras',
      label: 'Choose Extras',
      options: [
        { id: 'none', label: 'No Extras', priceAdd: 0 },
        { id: 'sherpa', label: 'Self-play (Sherpa)', priceAdd: 4.00 } // €3.64 * 1.1
      ]
    },
    {
      key: 'speed',
      label: 'Completion Speed',
      options: [
        { id: 'normal', label: 'Normal', priceAdd: 0 },
        { id: 'express', label: 'Express', priceAdd: 2.40 } // €2.18 * 1.1
      ]
    }
  ],

  // Forbearance - EXACT SkyCoach match
  'raid-forbearance': [
    {
      key: 'rollType',
      label: 'Roll Type',
      options: [
        { id: 'random', label: 'Roll with Random Perks', priceAdd: 0 }
      ]
    },
    {
      key: 'deepsight',
      label: 'Deepsight Options',
      options: [
        { id: 'none', label: 'No Deepsight', priceAdd: 0 },
        { id: 'deepsight', label: 'Deepsight Version', priceAdd: 2.67 }, // €2.43 * 1.1
        { id: 'full-pattern', label: 'Unlock Crafting Pattern', priceAdd: 69.50 } // €63.18 * 1.1
      ]
    },
    {
      key: 'speed',
      label: 'Completion Speed',
      options: [
        { id: 'normal', label: 'Normal', priceAdd: 0 },
        { id: 'express', label: 'Express', priceAdd: 1.96 }, // €1.78 * 1.1
        { id: 'super', label: 'Super Express', priceAdd: 3.92 } // €3.56 * 1.1
      ]
    }
  ],

  // Apex Predator - EXACT SkyCoach match
  'raid-apex-predator': [
    {
      key: 'rollType',
      label: 'Roll Type',
      options: [
        { id: 'random', label: 'Roll with Random Perks', priceAdd: 0 },
        { id: 'guaranteed-perk', label: 'Roll with x1 Guaranteed Perk', priceAdd: 35.64 }, // €32.40 * 1.1
        { id: 'god-roll', label: 'God Roll (x2 Perks)', priceAdd: 79.30 } // €72.09 * 1.1
      ]
    },
    {
      key: 'godRollChoice',
      label: 'Select God Roll (if God Roll selected)',
      options: [
        { id: 'reconstruction-bait', label: 'Reconstruction + Bait and Switch (Enhanced)', priceAdd: 0 },
        { id: 'reconstruction-explosive', label: 'Reconstruction + Explosive Light (Enhanced)', priceAdd: 0 }
      ]
    },
    {
      key: 'guaranteedPerk',
      label: 'Guaranteed Perk (if x1 Guaranteed Perk selected)',
      options: [
        { id: 'none', label: 'Select a perk', priceAdd: 0 },
        { id: 'reconstruction', label: 'Reconstruction', priceAdd: 0 },
        { id: 'demolitionist', label: 'Demolitionist', priceAdd: 0 },
        { id: 'explosive-light', label: 'Explosive Light', priceAdd: 0 },
        { id: 'bait-and-switch', label: 'Bait and Switch', priceAdd: 0 },
        { id: 'bipod', label: 'Bipod', priceAdd: 0 }
      ]
    },
    {
      key: 'collection',
      label: 'Collection Status',
      options: [
        { id: 'unlocked', label: "I've unlocked this weapon in Collection", priceAdd: 0 },
        { id: 'need-unlock', label: 'I need to unlock this weapon in Collection', priceAdd: 2.67 } // €2.43 * 1.1
      ]
    },
    {
      key: 'deepsight',
      label: 'Deepsight Options',
      options: [
        { id: 'none', label: 'No Deepsight', priceAdd: 0 },
        { id: 'deepsight', label: 'Deepsight Version', priceAdd: 3.12 }, // €2.84 * 1.1
        { id: 'full-pattern', label: 'Full Pattern Unlock', priceAdd: 53.46 } // €48.60 * 1.1
      ]
    },
    {
      key: 'extras',
      label: 'Choose Extras',
      options: [
        { id: 'none', label: 'No Extras', priceAdd: 0 },
        { id: 'sherpa', label: 'Self-play (Sherpa)', priceAdd: 5.61 } // €5.10 * 1.1
      ]
    },
    {
      key: 'speed',
      label: 'Completion Speed',
      options: [
        { id: 'normal', label: 'Normal', priceAdd: 0 },
        { id: 'express', label: 'Express', priceAdd: 2.24 }, // €2.04 * 1.1
        { id: 'super', label: 'Super Express', priceAdd: 4.49 } // €4.08 * 1.1
      ]
    }
  ],

  // Fatebringer - EXACT SkyCoach match
  'raid-fatebringer': [
    {
      key: 'rollType',
      label: 'Roll Type',
      options: [
        { id: 'random', label: 'Roll with Random Perks', priceAdd: 0 }
      ]
    },
    {
      key: 'collection',
      label: 'Collection Status',
      options: [
        { id: 'unlocked', label: "I've unlocked this weapon in Collection", priceAdd: 0 },
        { id: 'need-unlock', label: 'I need to unlock this weapon in Collection', priceAdd: 2.67 } // €2.43 * 1.1
      ]
    },
    {
      key: 'speed',
      label: 'Completion Speed',
      options: [
        { id: 'normal', label: 'Normal', priceAdd: 0 },
        { id: 'express', label: 'Express', priceAdd: 1.69 }, // €1.54 * 1.1
        { id: 'super', label: 'Super Express', priceAdd: 3.39 } // €3.08 * 1.1
      ]
    }
  ],

  // Zaouli's Bane - EXACT SkyCoach match
  'raid-zaoulis-bane': [
    {
      key: 'rollType',
      label: 'Roll Type',
      options: [
        { id: 'random', label: 'Roll with Random Perks', priceAdd: 0 },
        { id: 'guaranteed-perk', label: 'Guaranteed Perk List', priceAdd: 40.10 }, // €36.45 * 1.1
        { id: 'god-roll', label: 'God Rolls List', priceAdd: 80.19 } // €72.90 * 1.1
      ]
    },
    {
      key: 'godRollChoice',
      label: 'Select God Roll (if God Rolls List selected)',
      options: [
        { id: 'explosive-incandescent', label: 'Explosive Payload + Incandescent', priceAdd: 0 },
        { id: 'explosive-firefly', label: 'Explosive Payload + Firefly', priceAdd: 0 }
      ]
    },
    {
      key: 'guaranteedPerk',
      label: 'Guaranteed Perk (if Guaranteed Perk List selected)',
      options: [
        { id: 'none', label: 'Select a perk', priceAdd: 0 },
        { id: 'explosive-payload', label: 'Explosive Payload', priceAdd: 0 },
        { id: 'surrounded', label: 'Surrounded', priceAdd: 0 },
        { id: 'incandescent', label: 'Incandescent', priceAdd: 0 },
        { id: 'eye-of-storm', label: 'Eye of the Storm', priceAdd: 0 },
        { id: 'firefly', label: 'Firefly', priceAdd: 0 },
        { id: 'rampage', label: 'Rampage', priceAdd: 0 }
      ]
    },
    {
      key: 'collection',
      label: 'Collection Status',
      options: [
        { id: 'unlocked', label: "I've unlocked this weapon in Collection", priceAdd: 0 },
        { id: 'need-unlock', label: 'I need to unlock this weapon in Collection', priceAdd: 2.67 } // €2.43 * 1.1
      ]
    },
    {
      key: 'deepsight',
      label: 'Deepsight Options',
      options: [
        { id: 'none', label: 'No Deepsight', priceAdd: 0 },
        { id: 'deepsight', label: 'I Need Deepsight Version', priceAdd: 4.46 }, // €4.05 * 1.1
        { id: 'full-pattern', label: 'Unlock Crafting Pattern', priceAdd: 54.35 } // €49.41 * 1.1
      ]
    },
    {
      key: 'speed',
      label: 'Completion Speed',
      options: [
        { id: 'normal', label: 'Normal', priceAdd: 0 },
        { id: 'express', label: 'Express', priceAdd: 1.61 }, // €1.46 * 1.1
        { id: 'super', label: 'Super Express', priceAdd: 3.20 } // €2.91 * 1.1
      ]
    }
  ],

  // Nullify - EXACT SkyCoach match
  'raid-nullify': [
    {
      key: 'rollType',
      label: 'Roll Type',
      options: [
        { id: 'random', label: 'Roll with Random Perks', priceAdd: 0 },
        { id: 'pattern', label: 'Crafting Pattern Unlock', priceAdd: 0 }
      ]
    },
    {
      key: 'deepsightRolls',
      label: 'Deepsight Rolls (if Crafting Pattern selected)',
      options: [
        { id: '1', label: '1 Roll', priceAdd: 4.46 }, // €4.05 (difference from 8.09 to 12.14) * 1.1
        { id: '2', label: '2 Rolls', priceAdd: 8.92 },
        { id: '3', label: '3 Rolls', priceAdd: 13.38 },
        { id: '4', label: '4 Rolls', priceAdd: 17.84 },
        { id: '5', label: '5 Rolls (Full Pattern)', priceAdd: 31.19 } // €28.35 (difference from 8.09 to 36.44) * 1.1
      ]
    },
    {
      key: 'collection',
      label: 'Collection Status',
      options: [
        { id: 'unlocked', label: "I've unlocked this weapon in Collection", priceAdd: 0 },
        { id: 'need-unlock', label: 'I need to unlock this weapon in Collection', priceAdd: 2.50 } // €2.27 * 1.1
      ]
    },
    {
      key: 'speed',
      label: 'Completion Speed',
      options: [
        { id: 'normal', label: 'Normal', priceAdd: 0 },
        { id: 'express', label: 'Express', priceAdd: 1.78 }, // €1.62 * 1.1
        { id: 'super', label: 'Super Express', priceAdd: 3.56 } // €3.24 * 1.1
      ]
    }
  ],

  // Imminence - EXACT SkyCoach match
  'raid-imminence': [
    {
      key: 'rollType',
      label: 'Roll Type',
      options: [
        { id: 'random', label: 'Roll with Random Perks', priceAdd: 0 },
        { id: 'pattern', label: 'Crafting Pattern Unlock', priceAdd: 0 }
      ]
    },
    {
      key: 'deepsightRolls',
      label: 'Deepsight Rolls (if Crafting Pattern selected)',
      options: [
        { id: '1', label: '1 Roll', priceAdd: 4.46 }, // €4.05 (difference from 8.09 to 12.14) * 1.1
        { id: '2', label: '2 Rolls', priceAdd: 8.92 },
        { id: '3', label: '3 Rolls', priceAdd: 13.38 },
        { id: '4', label: '4 Rolls', priceAdd: 17.84 },
        { id: '5', label: '5 Rolls (Full Pattern)', priceAdd: 31.19 } // €28.35 (difference from 8.09 to 36.44) * 1.1
      ]
    },
    {
      key: 'collection',
      label: 'Collection Status',
      options: [
        { id: 'unlocked', label: "I've unlocked this weapon in Collection", priceAdd: 0 },
        { id: 'need-unlock', label: 'I need to unlock this weapon in Collection', priceAdd: 2.50 } // €2.27 * 1.1
      ]
    },
    {
      key: 'speed',
      label: 'Completion Speed',
      options: [
        { id: 'normal', label: 'Normal', priceAdd: 0 },
        { id: 'express', label: 'Express', priceAdd: 1.78 }, // €1.62 * 1.1
        { id: 'super', label: 'Super Express', priceAdd: 3.56 } // €3.24 * 1.1
      ]
    }
  ],

  // Stormchaser - EXACT SkyCoach match
  'dungeon-stormchaser': [
    {
      key: 'rollType',
      label: 'Roll Type',
      options: [
        { id: 'random', label: 'Roll with Random Perks', priceAdd: 0 },
        { id: 'guaranteed-perk', label: 'Roll with Guaranteed Perk List', priceAdd: 34.75 }, // €31.59 * 1.1
        { id: 'god-roll', label: 'God Rolls List', priceAdd: 69.50 } // €63.18 * 1.1
      ]
    },
    {
      key: 'godRollChoice',
      label: 'Select God Roll (if God Rolls List selected)',
      options: [
        { id: 'clown-firing', label: 'Clown Cartridge + Firing Line', priceAdd: 0 },
        { id: 'rapid-vorpal', label: 'Rapid Hit + Vorpal Weapon', priceAdd: 0 }
      ]
    },
    {
      key: 'guaranteedPerk',
      label: 'Guaranteed Perk (if Guaranteed Perk List selected)',
      options: [
        { id: 'none', label: 'Select a perk', priceAdd: 0 },
        { id: 'firing-line', label: 'Firing Line', priceAdd: 0 },
        { id: 'vorpal-weapon', label: 'Vorpal Weapon', priceAdd: 0 },
        { id: 'frenzy', label: 'Frenzy', priceAdd: 0 },
        { id: 'clown-cartridge', label: 'Clown Cartridge', priceAdd: 0 },
        { id: 'rapid-hit', label: 'Rapid Hit', priceAdd: 0 },
        { id: 'auto-loading', label: 'Auto-Loading Holster', priceAdd: 0 }
      ]
    },
    {
      key: 'extras',
      label: 'Choose Extras',
      options: [
        { id: 'none', label: 'No Extras', priceAdd: 0 },
        { id: 'day-one', label: 'Day One Team', priceAdd: 4.17 }, // €3.79 * 1.1
        { id: 'sherpa', label: 'Self-play (Sherpa)', priceAdd: 5.21 } // €4.74 * 1.1
      ]
    },
    {
      key: 'speed',
      label: 'Completion Speed',
      options: [
        { id: 'normal', label: 'Normal', priceAdd: 0 },
        { id: 'express', label: 'Express', priceAdd: 3.12 } // €2.84 * 1.1
      ]
    }
  ],

  // Eyasluna - EXACT SkyCoach match
  'dungeon-eyasluna': [
    {
      key: 'rollType',
      label: 'Roll Type',
      options: [
        { id: 'random', label: 'Roll with Random Perks', priceAdd: 0 },
        { id: 'guaranteed-perk', label: 'Rolls with Guaranteed Perk List', priceAdd: 30.29 }, // €27.54 * 1.1
        { id: 'god-roll', label: 'God Rolls List', priceAdd: 73.95 } // €67.23 * 1.1
      ]
    },
    {
      key: 'godRollChoice',
      label: 'Select God Roll (if God Rolls List selected)',
      options: [
        { id: 'outlaw-kill', label: 'Outlaw + Kill Clip', priceAdd: 0 },
        { id: 'rangefinder-kill', label: 'Rangefinder + Kill Clip', priceAdd: 0 }
      ]
    },
    {
      key: 'guaranteedPerk',
      label: 'Guaranteed Perk (if Guaranteed Perk List selected)',
      options: [
        { id: 'none', label: 'Select a perk', priceAdd: 0 },
        { id: 'kill-clip', label: 'Kill Clip', priceAdd: 0 },
        { id: 'headstone', label: 'Headstone', priceAdd: 0 },
        { id: 'rapid-hit', label: 'Rapid Hit', priceAdd: 0 },
        { id: 'rangefinder', label: 'Rangefinder', priceAdd: 0 },
        { id: 'perpetual-motion', label: 'Perpetual Motion', priceAdd: 0 },
        { id: 'outlaw', label: 'Outlaw', priceAdd: 0 }
      ]
    },
    {
      key: 'extras',
      label: 'Choose Extras',
      options: [
        { id: 'none', label: 'No Extras', priceAdd: 0 },
        { id: 'sherpa', label: 'Self-play (Sherpa)', priceAdd: 4.00 } // €3.64 * 1.1
      ]
    },
    {
      key: 'speed',
      label: 'Completion Speed',
      options: [
        { id: 'normal', label: 'Normal', priceAdd: 0 },
        { id: 'express', label: 'Express', priceAdd: 1.61 }, // €1.46 * 1.1
        { id: 'super', label: 'Super Express', priceAdd: 3.20 } // €2.91 * 1.1
      ]
    }
  ],

  // Swordbreaker - EXACT SkyCoach match
  'raid-swordbreaker': [
    {
      key: 'rollType',
      label: 'Weapon Version',
      options: [
        { id: 'random', label: 'Roll with Random Perks', priceAdd: 0 },
        { id: 'deepsight', label: 'Deepsight Roll', priceAdd: 3.56 } // €3.24 * 1.1
      ]
    },
    {
      key: 'collection',
      label: 'Collection Status',
      options: [
        { id: 'unlocked', label: "I've unlocked this weapon in Collection", priceAdd: 0 },
        { id: 'need-unlock', label: 'I need to unlock this weapon in Collection', priceAdd: 2.67 } // €2.43 * 1.1
      ]
    },
    {
      key: 'extras',
      label: 'Choose Extras',
      options: [
        { id: 'none', label: 'No Extras', priceAdd: 0 },
        { id: 'day-one', label: 'Day One Team', priceAdd: 2.82 } // €2.56 * 1.1 (increases to €3.85 if Deepsight, handled in logic)
      ]
    },
    {
      key: 'speed',
      label: 'Completion Speed',
      options: [
        { id: 'normal', label: 'Normal', priceAdd: 0 },
        { id: 'express', label: 'Express', priceAdd: 1.41 }, // €1.28 * 1.1
        { id: 'super', label: 'Super Express', priceAdd: 2.82 } // €2.56 * 1.1
      ]
    }
  ],

  // Salvation's Edge Raid - Raid completion options
  'raid-salvations-edge': [
    {
      key: 'encounters',
      label: 'Raid Encounters',
      options: [
        { id: 'full', label: 'Full Raid Clear', multiplier: 1.0 },
        { id: 'final-boss', label: 'Final Boss Only', multiplier: 0.6 },
        { id: 'specific', label: 'Specific Encounter', multiplier: 0.4 }
      ]
    },
    {
      key: 'lootRuns',
      label: 'Loot Runs',
      options: [
        { id: '1', label: '1 Run', multiplier: 1.0 },
        { id: '3', label: '3 Runs', multiplier: 2.8 },
        { id: '5', label: '5 Runs', multiplier: 4.5 }
      ]
    },
    {
      key: 'serviceType',
      label: 'Service Type',
      options: [
        { id: 'recovery', label: 'Recovery', description: 'We play on your account', multiplier: 1.0 },
        { id: 'sherpa', label: 'Sherpa', description: 'Play with our team', multiplier: 0.9 }
      ]
    },
    {
      key: 'speed',
      label: 'Completion Speed',
      options: [
        { id: 'normal', label: 'Normal (2-3 days)', multiplier: 1.0 },
        { id: 'express', label: 'Express (24h)', multiplier: 1.4 },
        { id: 'super', label: 'Super Express (12h)', multiplier: 1.8 }
      ]
    }
  ],

  // Trials Flawless - PvP specific options
  'trials-flawless': [
    {
      key: 'flawlessType',
      label: 'Flawless Type',
      options: [
        { id: 'standard', label: 'Standard Flawless (7-0)', multiplier: 1.0 },
        { id: 'confidence', label: 'Confidence Card', multiplier: 1.3 },
        { id: 'recoveries', label: 'Multiple Cards', multiplier: 1.6 }
      ]
    },
    {
      key: 'lootChoice',
      label: 'Adept Weapon Choice',
      options: [
        { id: 'weekly', label: 'Weekly Weapon', multiplier: 1.0 },
        { id: 'specific', label: 'Specific God Roll', multiplier: 1.4 }
      ]
    },
    {
      key: 'serviceType',
      label: 'Service Type',
      options: [
        { id: 'recovery', label: 'Recovery', description: 'We play on your account', multiplier: 1.0 },
        { id: 'carry', label: 'Carry (Play Together)', description: 'You play with 2 pros', multiplier: 1.2 }
      ]
    }
  ],

  // GM Nightfall options
  'pve-gm-nightfall': [
    {
      key: 'runs',
      label: 'Number of Runs',
      options: [
        { id: '1', label: '1 Completion', multiplier: 1.0 },
        { id: '3', label: '3 Completions', multiplier: 2.7 },
        { id: '5', label: '5 Completions', multiplier: 4.3 },
        { id: '10', label: '10 Completions', multiplier: 8.0 }
      ]
    },
    {
      key: 'loot',
      label: 'Loot Focus',
      options: [
        { id: 'materials', label: 'Materials Farm (Shards)', multiplier: 1.0 },
        { id: 'weapon', label: 'Adept Weapon Farm', multiplier: 1.3 }
      ]
    },
    {
      key: 'serviceType',
      label: 'Service Type',
      options: [
        { id: 'recovery', label: 'Recovery', multiplier: 1.0 },
        { id: 'sherpa', label: 'Sherpa', multiplier: 0.85 }
      ]
    }
  ],

  // Duality Dungeon
  'dungeon-duality': [
    {
      key: 'completion',
      label: 'Completion Type',
      options: [
        { id: 'normal', label: 'Normal Clear', multiplier: 1.0 },
        { id: 'master', label: 'Master Difficulty', multiplier: 1.5 },
        { id: 'solo-flawless', label: 'Solo Flawless', multiplier: 4.0 }
      ]
    },
    {
      key: 'runs',
      label: 'Number of Runs',
      options: [
        { id: '1', label: '1 Run', multiplier: 1.0 },
        { id: '3', label: '3 Runs', multiplier: 2.6 },
        { id: '5', label: '5 Runs', multiplier: 4.0 }
      ]
    },
    {
      key: 'serviceType',
      label: 'Service Type',
      options: [
        { id: 'recovery', label: 'Recovery', multiplier: 1.0 },
        { id: 'sherpa', label: 'Sherpa', multiplier: 0.9 }
      ]
    }
  ],

  // Exotic weapon farm (Heartshadow example)
  'dungeon-heartshadow': [
    {
      key: 'guarantee',
      label: 'Guarantee Type',
      options: [
        { id: 'until-drop', label: 'Farm Until Drop', multiplier: 1.0 },
        { id: '5-runs', label: '5 Runs (No Guarantee)', multiplier: 0.6 },
        { id: '10-runs', label: '10 Runs (No Guarantee)', multiplier: 1.0 }
      ]
    },
    {
      key: 'serviceType',
      label: 'Service Type',
      options: [
        { id: 'recovery', label: 'Recovery', multiplier: 1.0 },
        { id: 'sherpa', label: 'Sherpa', multiplier: 0.85 }
      ]
    }
  ],

  // Power leveling
  'power-campaign-legendary': [
    {
      key: 'completion',
      label: 'Campaign Options',
      options: [
        { id: 'story-only', label: 'Story Missions Only', multiplier: 1.0 },
        { id: 'full-exotic', label: 'Story + Exotic Class Item', multiplier: 1.4 },
        { id: 'all-triumphs', label: 'Full 100% + Triumphs', multiplier: 1.8 }
      ]
    },
    {
      key: 'speed',
      label: 'Completion Speed',
      options: [
        { id: 'standard', label: 'Standard (6-8h)', multiplier: 1.0 },
        { id: 'express', label: 'Express (4-6h)', multiplier: 1.3 },
        { id: 'super', label: 'Super Express (2-4h)', multiplier: 1.6 }
      ]
    }
  ]
};

export function getAvailableVariants(serviceId) {
  return serviceVariants[serviceId] || [];
}

export function getDefaultVariants(serviceId) {
  const variants = getAvailableVariants(serviceId);
  const defaults = {};
  variants.forEach(variant => {
    if (variant.options && variant.options.length > 0) {
      defaults[variant.key] = variant.options[0].id; // Default to first option
    }
  });
  return defaults;
}

export function calculatePrice(basePrice, selectedVariants, serviceId) {
  const variants = getAvailableVariants(serviceId);
  let price = basePrice;
  let multiplier = 1.0;

  if (selectedVariants && variants.length > 0) {
    Object.entries(selectedVariants).forEach(([key, value]) => {
      const variantGroup = variants.find(v => v.key === key);
      if (variantGroup) {
        const option = variantGroup.options.find(o => o.id === value);
        if (option) {
          if (option.priceAdd) {
            price += option.priceAdd;
          }
          if (option.multiplier) {
            multiplier *= option.multiplier;
          }
        }
      }
    });
  }

  return Math.round(price * multiplier * 100) / 100;
}


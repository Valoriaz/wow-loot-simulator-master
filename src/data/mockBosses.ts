
import { Boss } from '../types/wow';

export const mockBosses: Boss[] = [
  {
    id: 1,
    name: "Ragnaros",
    instance: "Molten Core",
    expansion: "Classic",
    npcId: 11502,
    lootTable: [
      {
        id: 17076,
        name: "Bonereaver's Edge",
        quality: "epic",
        dropRate: 3.5,
        slot: "Two-Hand",
        type: "Sword"
      },
      {
        id: 17102,
        name: "Cloak of the Shrouded Mists",
        quality: "epic",
        dropRate: 18.2,
        slot: "Back",
        type: "Cloak"
      },
      {
        id: 17103,
        name: "Crown of Destruction",
        quality: "epic",
        dropRate: 15.8,
        slot: "Head",
        type: "Cloth"
      },
      {
        id: 17063,
        name: "Band of Accuria",
        quality: "epic",
        dropRate: 8.1,
        slot: "Finger",
        type: "Ring"
      },
      {
        id: 17082,
        name: "Shard of the Flame",
        quality: "epic",
        dropRate: 12.4,
        slot: "Off Hand",
        type: "Shield"
      }
    ]
  },
  {
    id: 2,
    name: "The Lich King",
    instance: "Icecrown Citadel",
    expansion: "Wrath of the Lich King",
    npcId: 36597,
    lootTable: [
      {
        id: 50818,
        name: "Invincible's Reins",
        quality: "epic",
        dropRate: 1.0,
        slot: "Mount",
        type: "Mount"
      },
      {
        id: 50735,
        name: "Sharpened Twilight Scale",
        quality: "epic",
        dropRate: 15.2,
        slot: "Trinket",
        type: "Trinket"
      },
      {
        id: 50616,
        name: "Bulwark of Smouldering Steel",
        quality: "epic",
        dropRate: 12.8,
        slot: "Off Hand",
        type: "Shield"
      },
      {
        id: 50672,
        name: "Bloodvenom Blade",
        quality: "epic",
        dropRate: 18.5,
        slot: "Main Hand",
        type: "Dagger"
      }
    ]
  },
  {
    id: 3,
    name: "Illidan Stormrage",
    instance: "Black Temple",
    expansion: "The Burning Crusade",
    npcId: 22917,
    lootTable: [
      {
        id: 32837,
        name: "Warglaives of Azzinoth",
        quality: "legendary",
        dropRate: 5.0,
        slot: "Main Hand",
        type: "Glaive"
      },
      {
        id: 32838,
        name: "Warglaives of Azzinoth",
        quality: "legendary",
        dropRate: 5.0,
        slot: "Off Hand",
        type: "Glaive"
      },
      {
        id: 32496,
        name: "Memento of Tyrande",
        quality: "epic",
        dropRate: 20.1,
        slot: "Trinket",
        type: "Trinket"
      },
      {
        id: 32235,
        name: "Cursed Vision of Sargeras",
        quality: "epic",
        dropRate: 16.7,
        slot: "Head",
        type: "Leather"
      }
    ]
  },
  {
    id: 4,
    name: "Deathwing",
    instance: "Dragon Soul",
    expansion: "Cataclysm",
    npcId: 56173,
    lootTable: [
      {
        id: 77067,
        name: "Reins of the Blazing Drake",
        quality: "epic",
        dropRate: 1.5,
        slot: "Mount",
        type: "Mount"
      },
      {
        id: 71614,
        name: "No'Kaled, the Elements of Death",
        quality: "legendary",
        dropRate: 8.2,
        slot: "Main Hand",
        type: "Sword"
      },
      {
        id: 77211,
        name: "Elementium Dragonscale Cloak",
        quality: "epic",
        dropRate: 22.4,
        slot: "Back",
        type: "Cloak"
      }
    ]
  },
  {
    id: 5,
    name: "Garrosh Hellscream",
    instance: "Siege of Orgrimmar",
    expansion: "Mists of Pandaria",
    npcId: 71865,
    lootTable: [
      {
        id: 112931,
        name: "Kor'kron Juggernaut",
        quality: "epic",
        dropRate: 1.2,
        slot: "Mount",
        type: "Mount"
      },
      {
        id: 105674,
        name: "Xal'atoh, Desecrated Image of Gorehowl",
        quality: "epic",
        dropRate: 14.8,
        slot: "Two-Hand",
        type: "Axe"
      },
      {
        id: 105679,
        name: "Revelations of Y'Shaarj",
        quality: "epic",
        dropRate: 18.9,
        slot: "Trinket",
        type: "Trinket"
      }
    ]
  },
  {
    id: 6,
    name: "Archimonde",
    instance: "Hellfire Citadel",
    expansion: "Warlords of Draenor",
    npcId: 91331,
    lootTable: [
      {
        id: 123890,
        name: "Felsteel Annihilator",
        quality: "epic",
        dropRate: 1.8,
        slot: "Mount",
        type: "Mount"
      },
      {
        id: 124378,
        name: "Prophecy of Fear",
        quality: "epic",
        dropRate: 19.2,
        slot: "Trinket",
        type: "Trinket"
      },
      {
        id: 124367,
        name: "Calamity's Edge",
        quality: "epic",
        dropRate: 16.5,
        slot: "Two-Hand",
        type: "Sword"
      }
    ]
  }
];

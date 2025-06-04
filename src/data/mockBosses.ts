
import { Boss } from '../types/wow';

export const mockBosses: Boss[] = [
  // ========== CLASSIC (1.0-1.12) ==========
  // Molten Core
  {
    id: 1,
    name: "Ragnaros",
    instance: "Molten Core",
    expansion: "Classic",
    npcId: 11502,
    lootTable: [
      { id: 17076, name: "Bonereaver's Edge", quality: "epic", dropRate: 3.5, slot: "Two-Hand", type: "Sword" },
      { id: 17102, name: "Cloak of the Shrouded Mists", quality: "epic", dropRate: 18.2, slot: "Back", type: "Cloak" },
      { id: 17103, name: "Crown of Destruction", quality: "epic", dropRate: 15.8, slot: "Head", type: "Cloth" },
      { id: 17063, name: "Band of Accuria", quality: "epic", dropRate: 8.1, slot: "Finger", type: "Ring" },
      { id: 17082, name: "Shard of the Flame", quality: "epic", dropRate: 12.4, slot: "Off Hand", type: "Shield" },
      { id: 17104, name: "Spinal Reaper", quality: "epic", dropRate: 14.3, slot: "Two-Hand", type: "Axe" },
      { id: 18803, name: "Finkle's Lava Dredger", quality: "epic", dropRate: 22.1, slot: "Main Hand", type: "Mace" }
    ]
  },
  {
    id: 2,
    name: "Baron Geddon",
    instance: "Molten Core",
    expansion: "Classic",
    npcId: 12056,
    lootTable: [
      { id: 18563, name: "Bindings of the Windseeker", quality: "legendary", dropRate: 3.7, slot: "Trinket", type: "Legendary Component" },
      { id: 19142, name: "Fire Runed Grimoire", quality: "epic", dropRate: 18.5, slot: "Off Hand", type: "Held In Off-hand" },
      { id: 18564, name: "Bindings of the Windseeker", quality: "legendary", dropRate: 3.7, slot: "Trinket", type: "Legendary Component" },
      { id: 18872, name: "Manastorm Leggings", quality: "epic", dropRate: 16.2, slot: "Legs", type: "Cloth" },
      { id: 18861, name: "Flamewaker Legplates", quality: "epic", dropRate: 14.8, slot: "Legs", type: "Plate" }
    ]
  },
  
  // Blackwing Lair
  {
    id: 3,
    name: "Nefarian",
    instance: "Blackwing Lair",
    expansion: "Classic",
    npcId: 11583,
    lootTable: [
      { id: 19003, name: "Head of Nefarian", quality: "epic", dropRate: 100.0, slot: "Quest", type: "Quest Item" },
      { id: 19375, name: "Prestor's Talisman of Connivery", quality: "epic", dropRate: 18.7, slot: "Neck", type: "Amulet" },
      { id: 19334, name: "The Untamed Blade", quality: "epic", dropRate: 4.2, slot: "Two-Hand", type: "Sword" },
      { id: 19364, name: "Ashkandi, Greatsword of the Brotherhood", quality: "epic", dropRate: 4.8, slot: "Two-Hand", type: "Sword" },
      { id: 19002, name: "Elementium Threaded Cloak", quality: "epic", dropRate: 16.3, slot: "Back", type: "Cloak" }
    ]
  },

  // Naxxramas (Classic)
  {
    id: 4,
    name: "Kel'Thuzad",
    instance: "Naxxramas",
    expansion: "Classic",
    npcId: 15990,
    lootTable: [
      { id: 22520, name: "The Phylactery of Kel'Thuzad", quality: "epic", dropRate: 100.0, slot: "Quest", type: "Quest Item" },
      { id: 22798, name: "Might of Menethil", quality: "epic", dropRate: 5.2, slot: "Two-Hand", type: "Mace" },
      { id: 22802, name: "Kingsfall", quality: "epic", dropRate: 4.8, slot: "One-Hand", type: "Dagger" },
      { id: 23207, name: "Mark of the Champion", quality: "epic", dropRate: 18.4, slot: "Trinket", type: "Trinket" },
      { id: 22799, name: "Soulseeker", quality: "epic", dropRate: 15.7, slot: "One-Hand", type: "Sword" }
    ]
  },

  // ========== THE BURNING CRUSADE (2.0-2.4.3) ==========
  // Karazhan
  {
    id: 5,
    name: "Prince Malchezaar",
    instance: "Karazhan",
    expansion: "The Burning Crusade",
    npcId: 15690,
    lootTable: [
      { id: 28770, name: "Nathrezim Mindblade", quality: "epic", dropRate: 14.2, slot: "One-Hand", type: "Sword" },
      { id: 28773, name: "Gorehowl", quality: "epic", dropRate: 8.1, slot: "Two-Hand", type: "Axe" },
      { id: 28772, name: "Sunfury Bow of the Phoenix", quality: "epic", dropRate: 12.5, slot: "Ranged", type: "Bow" },
      { id: 28789, name: "Eye of Magtheridon", quality: "epic", dropRate: 16.8, slot: "Trinket", type: "Trinket" },
      { id: 28765, name: "Devastation", quality: "epic", dropRate: 9.3, slot: "Two-Hand", type: "Polearm" }
    ]
  },

  // Black Temple
  {
    id: 6,
    name: "Illidan Stormrage",
    instance: "Black Temple",
    expansion: "The Burning Crusade",
    npcId: 22917,
    lootTable: [
      { id: 32837, name: "Warglaives of Azzinoth", quality: "legendary", dropRate: 5.0, slot: "Main Hand", type: "Glaive" },
      { id: 32838, name: "Warglaives of Azzinoth", quality: "legendary", dropRate: 5.0, slot: "Off Hand", type: "Glaive" },
      { id: 32496, name: "Memento of Tyrande", quality: "epic", dropRate: 20.1, slot: "Trinket", type: "Trinket" },
      { id: 32235, name: "Cursed Vision of Sargeras", quality: "epic", dropRate: 16.7, slot: "Head", type: "Leather" },
      { id: 32524, name: "Bloom of Malygos", quality: "epic", dropRate: 18.3, slot: "Off Hand", type: "Held In Off-hand" }
    ]
  },

  // Sunwell Plateau
  {
    id: 7,
    name: "Kil'jaeden",
    instance: "Sunwell Plateau",
    expansion: "The Burning Crusade",
    npcId: 25315,
    lootTable: [
      { id: 34334, name: "Thori'dal, the Stars' Fury", quality: "legendary", dropRate: 15.2, slot: "Ranged", type: "Bow" },
      { id: 34329, name: "Crux of the Apocalypse", quality: "epic", dropRate: 18.7, slot: "Trinket", type: "Trinket" },
      { id: 34331, name: "Hand of the Deceiver", quality: "epic", dropRate: 14.8, slot: "One-Hand", type: "Fist Weapon" },
      { id: 34336, name: "Sunflare", quality: "epic", dropRate: 12.4, slot: "Off Hand", type: "Shield" },
      { id: 34335, name: "Hammer of Sanctification", quality: "epic", dropRate: 16.1, slot: "Two-Hand", type: "Mace" }
    ]
  },

  // ========== WRATH OF THE LICH KING (3.0-3.3.5) ==========
  // Naxxramas (WotLK)
  {
    id: 8,
    name: "Sapphiron",
    instance: "Naxxramas",
    expansion: "Wrath of the Lich King",
    npcId: 15989,
    lootTable: [
      { id: 39229, name: "Embrace of the Spider", quality: "epic", dropRate: 17.4, slot: "Back", type: "Cloak" },
      { id: 39232, name: "The Turning Tide", quality: "epic", dropRate: 14.8, slot: "Trinket", type: "Trinket" },
      { id: 39230, name: "Bone Scarab", quality: "epic", dropRate: 16.2, slot: "Trinket", type: "Trinket" },
      { id: 39233, name: "Aegis of Damnation", quality: "epic", dropRate: 13.7, slot: "Off Hand", type: "Shield" },
      { id: 39231, name: "Wraith Spear", quality: "epic", dropRate: 12.1, slot: "Two-Hand", type: "Polearm" }
    ]
  },

  // Icecrown Citadel
  {
    id: 9,
    name: "The Lich King",
    instance: "Icecrown Citadel",
    expansion: "Wrath of the Lich King",
    npcId: 36597,
    lootTable: [
      { id: 50818, name: "Invincible's Reins", quality: "epic", dropRate: 1.0, slot: "Mount", type: "Mount" },
      { id: 50735, name: "Sharpened Twilight Scale", quality: "epic", dropRate: 15.2, slot: "Trinket", type: "Trinket" },
      { id: 50616, name: "Bulwark of Smouldering Steel", quality: "epic", dropRate: 12.8, slot: "Off Hand", type: "Shield" },
      { id: 50672, name: "Bloodvenom Blade", quality: "epic", dropRate: 18.5, slot: "Main Hand", type: "Dagger" },
      { id: 50730, name: "Glorenzelg, High-Blade of the Silver Hand", quality: "legendary", dropRate: 8.3, slot: "Two-Hand", type: "Sword" }
    ]
  },

  // Ulduar
  {
    id: 10,
    name: "Yogg-Saron",
    instance: "Ulduar",
    expansion: "Wrath of the Lich King",
    npcId: 33288,
    lootTable: [
      { id: 45693, name: "Mimiron's Head", quality: "epic", dropRate: 1.0, slot: "Mount", type: "Mount" },
      { id: 45887, name: "Destroyer's Shoulderguards", quality: "epic", dropRate: 16.7, slot: "Shoulder", type: "Plate" },
      { id: 45888, name: "Mantle of the Wayward Conqueror", quality: "epic", dropRate: 18.2, slot: "Shoulder", type: "Token" },
      { id: 45620, name: "Starshard Edge", quality: "epic", dropRate: 14.3, slot: "One-Hand", type: "Sword" },
      { id: 45619, name: "Caress of Insanity", quality: "epic", dropRate: 12.8, slot: "One-Hand", type: "Dagger" }
    ]
  },

  // ========== CATACLYSM (4.0-4.3.4) ==========
  // Dragon Soul
  {
    id: 11,
    name: "Deathwing",
    instance: "Dragon Soul",
    expansion: "Cataclysm",
    npcId: 56173,
    lootTable: [
      { id: 77067, name: "Reins of the Blazing Drake", quality: "epic", dropRate: 1.5, slot: "Mount", type: "Mount" },
      { id: 71614, name: "No'Kaled, the Elements of Death", quality: "legendary", dropRate: 8.2, slot: "Main Hand", type: "Sword" },
      { id: 77211, name: "Elementium Dragonscale Cloak", quality: "epic", dropRate: 22.4, slot: "Back", type: "Cloak" },
      { id: 78777, name: "Vishanka, Jaws of the Earth", quality: "legendary", dropRate: 8.2, slot: "Ranged", type: "Bow" },
      { id: 71797, name: "Scepter of Azj'Aqir", quality: "epic", dropRate: 14.6, slot: "One-Hand", type: "Mace" }
    ]
  },

  // Firelands
  {
    id: 12,
    name: "Ragnaros",
    instance: "Firelands",
    expansion: "Cataclysm",
    npcId: 52409,
    lootTable: [
      { id: 69224, name: "Pureblood Fire Hawk", quality: "epic", dropRate: 1.7, slot: "Mount", type: "Mount" },
      { id: 71355, name: "Dragonwrath, Tarecgosa's Rest", quality: "legendary", dropRate: 100.0, slot: "Two-Hand", type: "Staff" },
      { id: 71787, name: "Ko'gun, Hammer of the Firelord", quality: "epic", dropRate: 15.8, slot: "Main Hand", type: "Mace" },
      { id: 71616, name: "Crown of Flame", quality: "epic", dropRate: 17.3, slot: "Head", type: "Plate" },
      { id: 70723, name: "Sulfuras, the Extinguished Hand", quality: "epic", dropRate: 16.2, slot: "Two-Hand", type: "Mace" }
    ]
  },

  // ========== MISTS OF PANDARIA (5.0-5.4.8) ==========
  // Siege of Orgrimmar
  {
    id: 13,
    name: "Garrosh Hellscream",
    instance: "Siege of Orgrimmar",
    expansion: "Mists of Pandaria",
    npcId: 71865,
    lootTable: [
      { id: 112931, name: "Kor'kron Juggernaut", quality: "epic", dropRate: 1.2, slot: "Mount", type: "Mount" },
      { id: 105674, name: "Xal'atoh, Desecrated Image of Gorehowl", quality: "epic", dropRate: 14.8, slot: "Two-Hand", type: "Axe" },
      { id: 105679, name: "Revelations of Y'Shaarj", quality: "epic", dropRate: 18.9, slot: "Trinket", type: "Trinket" },
      { id: 105687, name: "Kor'kron Spire of Supremacy", quality: "epic", dropRate: 16.4, slot: "Two-Hand", type: "Polearm" },
      { id: 105681, name: "Cowl of Smoking Dreams", quality: "epic", dropRate: 19.7, slot: "Head", type: "Cloth" }
    ]
  },

  // Throne of Thunder
  {
    id: 14,
    name: "Ra-den",
    instance: "Throne of Thunder",
    expansion: "Mists of Pandaria",
    npcId: 69473,
    lootTable: [
      { id: 95712, name: "Unerring Vision of Lei Shen", quality: "epic", dropRate: 18.5, slot: "Trinket", type: "Trinket" },
      { id: 95717, name: "Torall, Rod of the Shattered Throne", quality: "epic", dropRate: 14.2, slot: "Main Hand", type: "Mace" },
      { id: 95718, name: "Nostalgic Echo", quality: "epic", dropRate: 16.8, slot: "Off Hand", type: "Held In Off-hand" },
      { id: 95715, name: "Zeeg's Ancient Kegsmasher", quality: "epic", dropRate: 12.7, slot: "Two-Hand", type: "Mace" },
      { id: 95719, name: "Eye of the Titan", quality: "epic", dropRate: 15.3, slot: "Trinket", type: "Trinket" }
    ]
  },

  // ========== WARLORDS OF DRAENOR (6.0-6.2.4) ==========
  // Hellfire Citadel
  {
    id: 15,
    name: "Archimonde",
    instance: "Hellfire Citadel",
    expansion: "Warlords of Draenor",
    npcId: 91331,
    lootTable: [
      { id: 123890, name: "Felsteel Annihilator", quality: "epic", dropRate: 1.8, slot: "Mount", type: "Mount" },
      { id: 124378, name: "Prophecy of Fear", quality: "epic", dropRate: 19.2, slot: "Trinket", type: "Trinket" },
      { id: 124367, name: "Calamity's Edge", quality: "epic", dropRate: 16.5, slot: "Two-Hand", type: "Sword" },
      { id: 124379, name: "Libram of Vindication", quality: "epic", dropRate: 17.8, slot: "Trinket", type: "Trinket" },
      { id: 124366, name: "Felfire Munitions", quality: "epic", dropRate: 14.9, slot: "Ranged", type: "Gun" }
    ]
  },

  // Blackrock Foundry
  {
    id: 16,
    name: "Blackhand",
    instance: "Blackrock Foundry",
    expansion: "Warlords of Draenor",
    npcId: 77325,
    lootTable: [
      { id: 113979, name: "Blackhand's Crucifix", quality: "epic", dropRate: 18.7, slot: "Trinket", type: "Trinket" },
      { id: 113982, name: "The Doomhammer", quality: "epic", dropRate: 14.3, slot: "Main Hand", type: "Mace" },
      { id: 113980, name: "Ironflesh Crushers", quality: "epic", dropRate: 16.2, slot: "Hands", type: "Plate" },
      { id: 113981, name: "Helm of the Soot-Stained Engineer", quality: "epic", dropRate: 15.9, slot: "Head", type: "Mail" },
      { id: 113977, name: "Phoenixfire Staff", quality: "epic", dropRate: 12.8, slot: "Two-Hand", type: "Staff" }
    ]
  },

  // ========== LEGION (7.0-7.3.5) ==========
  // Antorus, the Burning Throne
  {
    id: 17,
    name: "Argus the Unmaker",
    instance: "Antorus, the Burning Throne",
    expansion: "Legion",
    npcId: 124828,
    lootTable: [
      { id: 153115, name: "Scythe of the Unmaker", quality: "legendary", dropRate: 5.8, slot: "Two-Hand", type: "Scythe" },
      { id: 155880, name: "Shackled Ur'zul", quality: "epic", dropRate: 1.3, slot: "Mount", type: "Mount" },
      { id: 154172, name: "Aman'Thul's Vision", quality: "epic", dropRate: 17.6, slot: "Trinket", type: "Trinket" },
      { id: 154175, name: "Golganneth's Vitality", quality: "epic", dropRate: 16.8, slot: "Trinket", type: "Trinket" },
      { id: 154174, name: "Khaz'goroth's Courage", quality: "epic", dropRate: 15.4, slot: "Trinket", type: "Trinket" }
    ]
  },

  // Tomb of Sargeras
  {
    id: 18,
    name: "Kil'jaeden",
    instance: "Tomb of Sargeras",
    expansion: "Legion",
    npcId: 117269,
    lootTable: [
      { id: 147007, name: "The Deceiver's Grand Design", quality: "epic", dropRate: 18.3, slot: "Trinket", type: "Trinket" },
      { id: 147010, name: "Felstorm", quality: "epic", dropRate: 14.7, slot: "Two-Hand", type: "Sword" },
      { id: 147012, name: "Terminus Signaling Beacon", quality: "epic", dropRate: 16.2, slot: "Trinket", type: "Trinket" },
      { id: 147009, name: "Lash of the Burning Deacon", quality: "epic", dropRate: 13.8, slot: "Main Hand", type: "Whip" },
      { id: 147011, name: "Seal of the Second Duumvirate", quality: "epic", dropRate: 17.9, slot: "Finger", type: "Ring" }
    ]
  },

  // ========== BATTLE FOR AZEROTH (8.0-8.3.7) ==========
  // Ny'alotha, the Waking City
  {
    id: 19,
    name: "N'Zoth the Corruptor",
    instance: "Ny'alotha, the Waking City",
    expansion: "Battle for Azeroth",
    npcId: 158041,
    lootTable: [
      { id: 174103, name: "Qwor N'lyeth", quality: "epic", dropRate: 15.2, slot: "Main Hand", type: "Dagger" },
      { id: 174105, name: "Devastation's Hour", quality: "epic", dropRate: 13.8, slot: "Two-Hand", type: "Polearm" },
      { id: 174102, name: "Eyestalk of Il'gynoth", quality: "epic", dropRate: 17.6, slot: "Trinket", type: "Trinket" },
      { id: 174106, name: "Torment in a Jar", quality: "epic", dropRate: 16.4, slot: "Trinket", type: "Trinket" },
      { id: 174104, name: "Whispering Eldritch Bow", quality: "epic", dropRate: 14.9, slot: "Ranged", type: "Bow" }
    ]
  },

  // The Eternal Palace
  {
    id: 20,
    name: "Queen Azshara",
    instance: "The Eternal Palace",
    expansion: "Battle for Azeroth",
    npcId: 152910,
    lootTable: [
      { id: 169223, name: "Dribbling Inkpod", quality: "epic", dropRate: 17.8, slot: "Trinket", type: "Trinket" },
      { id: 169316, name: "Anu-Azshara, Staff of the Eternal", quality: "epic", dropRate: 14.6, slot: "Two-Hand", type: "Staff" },
      { id: 169315, name: "Aqueous Reliquary", quality: "epic", dropRate: 16.3, slot: "Trinket", type: "Trinket" },
      { id: 169314, name: "Fang of the Deep", quality: "epic", dropRate: 13.7, slot: "Main Hand", type: "Dagger" },
      { id: 169313, name: "Coral-Edged Ceremonial Dagger", quality: "epic", dropRate: 15.8, slot: "One-Hand", type: "Dagger" }
    ]
  },

  // ========== SHADOWLANDS (9.0-9.2.7) ==========
  // Sepulcher of the First Ones
  {
    id: 21,
    name: "The Jailer",
    instance: "Sepulcher of the First Ones",
    expansion: "Shadowlands",
    npcId: 180990,
    lootTable: [
      { id: 189862, name: "Gavel of the First Arbiter", quality: "epic", dropRate: 15.4, slot: "Main Hand", type: "Mace" },
      { id: 189863, name: "Antumbra, Shadow of the Cosmos", quality: "epic", dropRate: 14.2, slot: "Off Hand", type: "Held In Off-hand" },
      { id: 189864, name: "Ephemeral Recovery", quality: "epic", dropRate: 17.9, slot: "Trinket", type: "Trinket" },
      { id: 189865, name: "Elegy of the Eternals", quality: "epic", dropRate: 16.7, slot: "Trinket", type: "Trinket" },
      { id: 189861, name: "Edge of Night", quality: "epic", dropRate: 13.8, slot: "Two-Hand", type: "Sword" }
    ]
  },

  // Castle Nathria
  {
    id: 22,
    name: "Sire Denathrius",
    instance: "Castle Nathria",
    expansion: "Shadowlands",
    npcId: 167406,
    lootTable: [
      { id: 183892, name: "Remornia", quality: "epic", dropRate: 16.3, slot: "Two-Hand", type: "Sword" },
      { id: 183893, name: "Dreadfire Vessel", quality: "epic", dropRate: 17.8, slot: "Trinket", type: "Trinket" },
      { id: 183894, name: "Mace of Transformed Bone", quality: "epic", dropRate: 14.7, slot: "Main Hand", type: "Mace" },
      { id: 183895, name: "Blood-Spattered Scale", quality: "epic", dropRate: 15.9, slot: "Trinket", type: "Trinket" },
      { id: 183891, name: "Nathrian Usurper's Mask", quality: "epic", dropRate: 18.2, slot: "Head", type: "Leather" }
    ]
  },

  // ========== DRAGONFLIGHT (10.0-10.2.7) ==========
  // Amirdrassil, the Dream's Hope
  {
    id: 23,
    name: "Fyrakk the Blazing",
    instance: "Amirdrassil, the Dream's Hope",
    expansion: "Dragonflight",
    npcId: 206448,
    lootTable: [
      { id: 207784, name: "Fyr'alath the Dreamrender", quality: "legendary", dropRate: 6.7, slot: "Two-Hand", type: "Axe" },
      { id: 207785, name: "Shadowflame Ore", quality: "epic", dropRate: 100.0, slot: "Crafting", type: "Crafting Reagent" },
      { id: 207786, name: "Dreambinder, Loom of the Great Cycle", quality: "epic", dropRate: 15.8, slot: "Two-Hand", type: "Staff" },
      { id: 207787, name: "Rage of Fyrakk", quality: "epic", dropRate: 17.2, slot: "Trinket", type: "Trinket" },
      { id: 207783, name: "Fyrakk's Tainted Rageheart", quality: "epic", dropRate: 16.4, slot: "Trinket", type: "Trinket" }
    ]
  },

  // Aberrus, the Shadowed Crucible
  {
    id: 24,
    name: "Scalecommander Sarkareth",
    instance: "Aberrus, the Shadowed Crucible",
    expansion: "Dragonflight",
    npcId: 201754,
    lootTable: [
      { id: 204337, name: "Voice of the Silent Star", quality: "epic", dropRate: 15.7, slot: "Two-Hand", type: "Sword" },
      { id: 204465, name: "Reins of the Obsidian Worldbreaker", quality: "epic", dropRate: 1.0, slot: "Mount", type: "Mount" },
      { id: 204336, name: "Void Reaper's Contract", quality: "epic", dropRate: 17.3, slot: "Trinket", type: "Trinket" },
      { id: 204335, name: "Sarkareth's Abyssal Embrace", quality: "epic", dropRate: 16.8, slot: "Back", type: "Cloak" },
      { id: 204334, name: "Nasz'uro, the Unbound Legacy", quality: "legendary", dropRate: 8.2, slot: "Main Hand", type: "Dagger" }
    ]
  },

  // Vault of the Incarnates
  {
    id: 25,
    name: "Raszageth the Storm-Eater",
    instance: "Vault of the Incarnates",
    expansion: "Dragonflight",
    npcId: 199388,
    lootTable: [
      { id: 194299, name: "Spear of the Storm-Eater", quality: "epic", dropRate: 16.2, slot: "Two-Hand", type: "Polearm" },
      { id: 194300, name: "Storm-Eater's Boon", quality: "epic", dropRate: 17.8, slot: "Trinket", type: "Trinket" },
      { id: 194301, name: "Winds of the Stormcaller", quality: "epic", dropRate: 15.4, slot: "Back", type: "Cloak" },
      { id: 194302, name: "Lightning Lash of the Storm Herald", quality: "epic", dropRate: 14.6, slot: "Main Hand", type: "Whip" },
      { id: 194298, name: "Eye of the Storm", quality: "epic", dropRate: 18.3, slot: "Trinket", type: "Trinket" }
    ]
  },

  // ========== THE WAR WITHIN (11.0-11.1.5) ==========
  // Nerub-ar Palace
  {
    id: 26,
    name: "Queen Ansurek",
    instance: "Nerub-ar Palace",
    expansion: "The War Within",
    npcId: 218370,
    lootTable: [
      { id: 225636, name: "Sovereign's Disdain", quality: "epic", dropRate: 16.8, slot: "Two-Hand", type: "Sword" },
      { id: 225635, name: "Writhing Ringworm", quality: "epic", dropRate: 17.4, slot: "Trinket", type: "Trinket" },
      { id: 225637, name: "Queen's Mandate", quality: "epic", dropRate: 15.9, slot: "Trinket", type: "Trinket" },
      { id: 225634, name: "Ansurek's Final Judgment", quality: "epic", dropRate: 14.3, slot: "Main Hand", type: "Mace" },
      { id: 225638, name: "Chitin-Spiked Jackboots", quality: "epic", dropRate: 18.7, slot: "Feet", type: "Leather" }
    ]
  }
];

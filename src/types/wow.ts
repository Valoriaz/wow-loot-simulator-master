
export interface Boss {
  id: number;
  name: string;
  instance: string;
  expansion: string;
  npcId: number;
  lootTable: LootItem[];
}

export interface LootItem {
  id: number;
  name: string;
  quality: 'poor' | 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'artifact';
  dropRate: number; // percentage (0-100)
  slot?: string;
  type?: string;
}

export interface LootDrop {
  item: LootItem;
  dropped: boolean;
  rollCount?: number; // for multiple kills
}

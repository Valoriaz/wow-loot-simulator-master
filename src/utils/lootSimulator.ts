
import { Boss, LootDrop } from '../types/wow';

export const simulateKill = (boss: Boss, killCount: number = 1): LootDrop[] => {
  const results: LootDrop[] = [];
  
  for (const item of boss.lootTable) {
    let totalDrops = 0;
    
    // Simulate each kill
    for (let i = 0; i < killCount; i++) {
      const roll = Math.random() * 100;
      if (roll <= item.dropRate) {
        totalDrops++;
      }
    }
    
    results.push({
      item,
      dropped: totalDrops > 0,
      rollCount: totalDrops > 0 ? totalDrops : undefined
    });
  }
  
  return results;
};

export const calculateDropChance = (dropRate: number, attempts: number): number => {
  // Calculate the probability of getting at least one drop in multiple attempts
  return 1 - Math.pow(1 - dropRate / 100, attempts);
};

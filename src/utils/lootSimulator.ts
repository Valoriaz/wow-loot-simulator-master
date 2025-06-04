
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

export const simulateRealisticKill = (boss: Boss, killCount: number = 1): LootDrop[] => {
  const allResults: LootDrop[] = [];
  
  for (let kill = 0; kill < killCount; kill++) {
    // Each kill should drop 4-6 items typically
    const itemsToDropThisKill = Math.floor(Math.random() * 3) + 4; // 4-6 items
    const availableItems = [...boss.lootTable];
    const droppedThisKill: LootDrop[] = [];
    
    // Ensure we drop the right number of items
    for (let i = 0; i < itemsToDropThisKill && availableItems.length > 0; i++) {
      // Weighted selection based on drop rates (higher drop rate = more likely to be selected)
      const totalWeight = availableItems.reduce((sum, item) => sum + item.dropRate, 0);
      let random = Math.random() * totalWeight;
      
      let selectedIndex = 0;
      for (let j = 0; j < availableItems.length; j++) {
        random -= availableItems[j].dropRate;
        if (random <= 0) {
          selectedIndex = j;
          break;
        }
      }
      
      const selectedItem = availableItems[selectedIndex];
      droppedThisKill.push({
        item: selectedItem,
        dropped: true,
        rollCount: 1
      });
      
      // Remove item from available pool for this kill to avoid duplicates
      availableItems.splice(selectedIndex, 1);
    }
    
    // Merge results for multiple kills
    droppedThisKill.forEach(drop => {
      const existingDrop = allResults.find(r => r.item.id === drop.item.id);
      if (existingDrop) {
        existingDrop.rollCount = (existingDrop.rollCount || 0) + 1;
      } else {
        allResults.push({ ...drop });
      }
    });
  }
  
  // Add items that didn't drop
  boss.lootTable.forEach(item => {
    if (!allResults.find(r => r.item.id === item.id)) {
      allResults.push({
        item,
        dropped: false
      });
    }
  });
  
  return allResults;
};

export const calculateDropChance = (dropRate: number, attempts: number): number => {
  // Calculate the probability of getting at least one drop in multiple attempts
  return 1 - Math.pow(1 - dropRate / 100, attempts);
};

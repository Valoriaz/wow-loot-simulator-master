
import React from 'react';
import { LootDrop } from '../types/wow';
import { ExternalLink, Package, Sparkles } from 'lucide-react';

interface LootDisplayProps {
  loot: LootDrop[];
  isSimulating: boolean;
}

const qualityColors = {
  poor: 'text-gray-400 border-gray-400',
  common: 'text-white border-white',
  uncommon: 'text-green-400 border-green-400',
  rare: 'text-blue-400 border-blue-400',
  epic: 'text-purple-400 border-purple-400',
  legendary: 'text-orange-400 border-orange-400',
  artifact: 'text-yellow-400 border-yellow-400'
};

const qualityGlow = {
  poor: 'shadow-gray-400/20',
  common: 'shadow-white/20',
  uncommon: 'shadow-green-400/30',
  rare: 'shadow-blue-400/30',
  epic: 'shadow-purple-400/40',
  legendary: 'shadow-orange-400/50',
  artifact: 'shadow-yellow-400/50'
};

const LootDisplay: React.FC<LootDisplayProps> = ({ loot, isSimulating }) => {
  const droppedItems = loot.filter(drop => drop.dropped);
  const totalRolls = loot.reduce((sum, drop) => sum + (drop.rollCount || 1), 0);

  if (isSimulating) {
    return (
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
          <h3 className="text-xl font-bold text-white mb-2">Rolling for Loot...</h3>
          <p className="text-slate-400">The RNG gods are deciding your fate...</p>
        </div>
      </div>
    );
  }

  if (loot.length === 0) {
    return (
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
        <div className="text-center">
          <Package className="w-16 h-16 text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-400 mb-2">No Simulation Yet</h3>
          <p className="text-slate-500">Select a boss and simulate a kill to see loot drops!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-yellow-400" />
          Loot Results
        </h3>
        <div className="text-right">
          <div className="text-white font-medium">{droppedItems.length} items dropped</div>
          <div className="text-sm text-slate-400">from {totalRolls} total rolls</div>
        </div>
      </div>

      {droppedItems.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-4xl mb-4">💀</div>
          <div className="text-white font-medium mb-2">No loot this time!</div>
          <div className="text-slate-400">Better luck next kill...</div>
        </div>
      ) : (
        <div className="space-y-3">
          {droppedItems.map((drop, index) => (
            <div
              key={`${drop.item.id}-${index}`}
              className={`p-4 rounded-lg border-2 ${qualityColors[drop.item.quality]} ${qualityGlow[drop.item.quality]} bg-slate-700/30 transition-all duration-300 hover:bg-slate-700/50 animate-fadeIn`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded border-2 ${qualityColors[drop.item.quality]} bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center`}>
                      <Package className="w-4 h-4" />
                    </div>
                    <div>
                      <div className={`font-bold ${qualityColors[drop.item.quality].split(' ')[0]} text-lg`}>
                        {drop.item.name}
                      </div>
                      <div className="text-sm text-slate-400">
                        {drop.item.type} • {drop.item.dropRate}% drop rate
                        {drop.rollCount && drop.rollCount > 1 && (
                          <span className="ml-2 px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs">
                            Dropped {drop.rollCount}x
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={`https://www.wowhead.com/item=${drop.item.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-lg transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Wowhead
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LootDisplay;

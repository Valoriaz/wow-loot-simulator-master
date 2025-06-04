
import React from 'react';
import { Boss, LootDrop } from '../types/wow';
import { Clock, TrendingUp } from 'lucide-react';

interface LootHistoryProps {
  history: Array<{
    boss: Boss;
    loot: LootDrop[];
    timestamp: Date;
    killCount: number;
  }>;
}

const LootHistory: React.FC<LootHistoryProps> = ({ history }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getTotalDrops = () => {
    return history.reduce((sum, kill) => sum + kill.loot.filter(drop => drop.dropped).length, 0);
  };

  const getTotalKills = () => {
    return history.reduce((sum, kill) => sum + kill.killCount, 0);
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Clock className="w-5 h-5 text-blue-400" />
          Kill History
        </h3>
        {history.length > 0 && (
          <div className="text-right">
            <div className="text-sm text-slate-400">Session Stats</div>
            <div className="text-white font-medium">{getTotalDrops()} drops</div>
            <div className="text-xs text-slate-500">{getTotalKills()} kills</div>
          </div>
        )}
      </div>

      {history.length === 0 ? (
        <div className="text-center py-8">
          <TrendingUp className="w-12 h-12 text-slate-600 mx-auto mb-4" />
          <div className="text-slate-400 mb-2">No kills yet</div>
          <div className="text-sm text-slate-500">Your kill history will appear here</div>
        </div>
      ) : (
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {history.map((kill, index) => {
            const droppedItems = kill.loot.filter(drop => drop.dropped);
            
            return (
              <div key={index} className="p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-white">{kill.boss.name}</div>
                  <div className="text-xs text-slate-400">{formatTime(kill.timestamp)}</div>
                </div>
                
                <div className="text-sm text-slate-300 mb-2">
                  {kill.killCount > 1 ? `${kill.killCount}x kills` : '1x kill'} • {droppedItems.length} drops
                </div>

                {droppedItems.length > 0 ? (
                  <div className="space-y-1">
                    {droppedItems.slice(0, 3).map((drop, dropIndex) => (
                      <div key={dropIndex} className="text-xs text-slate-400 truncate">
                        • {drop.item.name}
                        {drop.rollCount && drop.rollCount > 1 && ` (${drop.rollCount}x)`}
                      </div>
                    ))}
                    {droppedItems.length > 3 && (
                      <div className="text-xs text-slate-500">
                        +{droppedItems.length - 3} more items...
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-xs text-slate-500 italic">No drops</div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LootHistory;

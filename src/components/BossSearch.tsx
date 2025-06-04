
import React, { useState, useMemo } from 'react';
import { Search, Crown } from 'lucide-react';
import { Boss } from '../types/wow';
import { mockBosses } from '../data/mockBosses';

interface BossSearchProps {
  onBossSelect: (boss: Boss) => void;
  selectedBoss: Boss | null;
}

const BossSearch: React.FC<BossSearchProps> = ({ onBossSelect, selectedBoss }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredBosses = useMemo(() => {
    if (!searchTerm) return mockBosses;
    return mockBosses.filter(boss => 
      boss.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      boss.instance.toLowerCase().includes(searchTerm.toLowerCase()) ||
      boss.expansion.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleBossSelect = (boss: Boss) => {
    onBossSelect(boss);
    setSearchTerm('');
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Crown className="w-5 h-5 text-yellow-400" />
          Select Boss
        </h2>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for a boss (e.g., Ragnaros, Lich King...)"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {isOpen && searchTerm && (
          <div className="absolute z-10 w-full mt-2 bg-slate-800 border border-slate-600 rounded-lg shadow-xl max-h-60 overflow-y-auto">
            {filteredBosses.length > 0 ? (
              filteredBosses.map((boss) => (
                <button
                  key={boss.id}
                  onClick={() => handleBossSelect(boss)}
                  className="w-full text-left px-4 py-3 hover:bg-slate-700 transition-colors border-b border-slate-700 last:border-b-0"
                >
                  <div className="text-white font-medium">{boss.name}</div>
                  <div className="text-sm text-slate-400">{boss.instance} • {boss.expansion}</div>
                </button>
              ))
            ) : (
              <div className="px-4 py-3 text-slate-400 text-center">
                No bosses found matching "{searchTerm}"
              </div>
            )}
          </div>
        )}

        {selectedBoss && (
          <div className="mt-4 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
            <div className="text-white font-medium">Selected: {selectedBoss.name}</div>
            <div className="text-sm text-slate-300">{selectedBoss.instance}</div>
            <div className="text-xs text-slate-400 mt-1">
              {selectedBoss.lootTable.length} items in loot table
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BossSearch;

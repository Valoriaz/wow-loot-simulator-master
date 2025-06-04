
import React, { useState } from 'react';
import BossSearch from '../components/BossSearch';
import LootDisplay from '../components/LootDisplay';
import LootHistory from '../components/LootHistory';
import { Boss, LootDrop } from '../types/wow';
import { simulateKill } from '../utils/lootSimulator';
import { Swords, Zap } from 'lucide-react';

const Index = () => {
  const [selectedBoss, setSelectedBoss] = useState<Boss | null>(null);
  const [currentLoot, setCurrentLoot] = useState<LootDrop[]>([]);
  const [lootHistory, setLootHistory] = useState<Array<{
    boss: Boss;
    loot: LootDrop[];
    timestamp: Date;
    killCount: number;
  }>>([]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [killCount, setKillCount] = useState(1);

  const handleBossSelect = (boss: Boss) => {
    setSelectedBoss(boss);
    setCurrentLoot([]);
  };

  const handleSimulateKill = async () => {
    if (!selectedBoss) return;
    
    setIsSimulating(true);
    
    // Add dramatic delay for effect
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const loot = simulateKill(selectedBoss, killCount);
    setCurrentLoot(loot);
    
    // Add to history
    setLootHistory(prev => [{
      boss: selectedBoss,
      loot,
      timestamp: new Date(),
      killCount
    }, ...prev.slice(0, 9)]); // Keep last 10 kills
    
    setIsSimulating(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Swords className="w-10 h-10 text-yellow-400" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                WoW Loot Simulator
              </h1>
              <Swords className="w-10 h-10 text-yellow-400" />
            </div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Experience the thrill of boss kills and epic loot drops from World of Warcraft's most legendary encounters
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Boss Search & Simulation */}
          <div className="lg:col-span-2 space-y-6">
            <BossSearch onBossSelect={handleBossSelect} selectedBoss={selectedBoss} />
            
            {selectedBoss && (
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{selectedBoss.name}</h2>
                    <p className="text-slate-300">{selectedBoss.instance} • {selectedBoss.expansion}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-400 mb-2">Kill Count</div>
                    <select 
                      value={killCount} 
                      onChange={(e) => setKillCount(Number(e.target.value))}
                      className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white"
                    >
                      <option value={1}>1x Kill</option>
                      <option value={5}>5x Kills</option>
                      <option value={10}>10x Kills</option>
                      <option value={25}>25x Kills</option>
                    </select>
                  </div>
                </div>
                
                <button
                  onClick={handleSimulateKill}
                  disabled={isSimulating}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 disabled:from-slate-600 disabled:to-slate-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSimulating ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Engaging Boss...
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5" />
                      Simulate Kill{killCount > 1 ? `s (${killCount}x)` : ''}
                    </>
                  )}
                </button>
              </div>
            )}

            <LootDisplay loot={currentLoot} isSimulating={isSimulating} />
          </div>

          {/* Right Column - Loot History */}
          <div className="lg:col-span-1">
            <LootHistory history={lootHistory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

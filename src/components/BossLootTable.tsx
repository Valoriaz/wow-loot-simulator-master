
import React from 'react';
import { Boss } from '../types/wow';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Package, ExternalLink } from 'lucide-react';

interface BossLootTableProps {
  boss: Boss | null;
}

const qualityColors = {
  poor: 'text-gray-400',
  common: 'text-white',
  uncommon: 'text-green-400',
  rare: 'text-blue-400',
  epic: 'text-purple-400',
  legendary: 'text-orange-400',
  artifact: 'text-yellow-400'
};

const BossLootTable: React.FC<BossLootTableProps> = ({ boss }) => {
  if (!boss) {
    return (
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
        <div className="text-center py-8">
          <Package className="w-12 h-12 text-slate-600 mx-auto mb-4" />
          <div className="text-slate-400 mb-2">No Boss Selected</div>
          <div className="text-sm text-slate-500">Select a boss to view their loot table</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Package className="w-5 h-5 text-blue-400" />
          Loot Table
        </h3>
        <div className="text-right">
          <div className="text-white font-medium">{boss.lootTable.length} items</div>
          <div className="text-sm text-slate-400">{boss.name}</div>
        </div>
      </div>

      <div className="rounded-lg border border-slate-600 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-slate-600 hover:bg-slate-700/50">
              <TableHead className="text-slate-300 font-semibold">Item</TableHead>
              <TableHead className="text-slate-300 font-semibold">Type</TableHead>
              <TableHead className="text-slate-300 font-semibold">Drop Rate</TableHead>
              <TableHead className="text-slate-300 font-semibold w-20">Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {boss.lootTable.map((item, index) => (
              <TableRow key={item.id} className="border-slate-600 hover:bg-slate-700/30">
                <TableCell className="py-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded border ${qualityColors[item.quality]} bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center`}>
                      <Package className="w-3 h-3" />
                    </div>
                    <div>
                      <div className={`font-medium ${qualityColors[item.quality]}`}>
                        {item.name}
                      </div>
                      {item.slot && (
                        <div className="text-xs text-slate-500">{item.slot}</div>
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-slate-300">
                  {item.type || '-'}
                </TableCell>
                <TableCell className="text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="font-mono">{item.dropRate}%</span>
                    <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-red-500 to-green-500 rounded-full"
                        style={{ width: `${Math.min(item.dropRate, 100)}%` }}
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <a
                    href={`https://www.wowhead.com/item=${item.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-1 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded text-xs transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BossLootTable;

'use client';

import { use, useState } from 'react';
import { PROCEDURES } from '@/data/procedures';
import Link from 'next/link';

export default function ChecklistPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const procedure = PROCEDURES.find((p) => p.id === id);

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  if (!procedure) {
    return <div className="p-4 text-center">Procedimento não encontrado.</div>;
  }

  const toggleCheck = (itemId: string) => {
    setCheckedItems((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  return (
    <main className="min-h-screen bg-slate-50 p-4 max-w-md mx-auto pb-24">
      <header className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-slate-500 font-medium hover:text-slate-800">
          ← Voltar
        </Link>
      </header>

      <h1 className="text-xl font-bold text-slate-800">{procedure.title}</h1>
      <p className="text-xs text-slate-500 mb-4">Marque os itens à medida que realiza o preparo</p>

      <div className="space-y-2">
        {procedure.items.map((item) => (
          <label 
            key={item.id} 
            className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${
              checkedItems[item.id] ? 'bg-emerald-50 border-emerald-300' : 'bg-white border-slate-200'
            }`}
          >
            <input 
              type="checkbox" 
              checked={!!checkedItems[item.id]} 
              onChange={() => toggleCheck(item.id)}
              className="w-5 h-5 accent-emerald-600 rounded"
            />
            <span className={`ml-3 text-sm font-medium ${checkedItems[item.id] ? 'line-through text-slate-400' : 'text-slate-700'}`}>
              {item.label}
            </span>
          </label>
        ))}
      </div>
    </main>
  );
}
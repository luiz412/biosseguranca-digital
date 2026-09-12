'use client';

import { use, useState } from 'react';
import { PROCEDURES } from '@/data/procedures';
import Link from 'next/link';

export default function ChecklistPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const procedure = PROCEDURES.find((p) => p.id === id);

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [showValidation, setShowValidation] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!procedure) {
    return <div className="p-4 text-center text-slate-600">Procedimento não encontrado.</div>;
  }

  const toggleCheck = (itemId: string) => {
    setCheckedItems((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const totalItems = procedure.items.length;
  const completedItemsCount = Object.values(checkedItems).filter(Boolean).length;
  const pendingItems = procedure.items.filter((item) => !checkedItems[item.id]);

  const handleFinish = () => {
    if (pendingItems.length > 0) {
      setShowValidation(true);
    } else {
      setIsCompleted(true);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 p-4 max-w-md mx-auto pb-28 relative">
      <header className="flex justify-between items-center mb-6">
        <Link href="/" className="text-sm text-slate-500 font-medium hover:text-slate-900">
          ← Voltar
        </Link>
        <span className="text-xs font-semibold text-blue-950 bg-blue-100 px-2.5 py-1 rounded-full">
          {completedItemsCount}/{totalItems} concluídos
        </span>
      </header>

      <h1 className="text-xl font-bold text-slate-900">{procedure.title}</h1>
      <p className="text-xs text-slate-500 mb-4">Marque os itens à medida que realiza o preparo</p>

      {/* Lista de Itens */}
      <div className="space-y-2 mb-8">
        {procedure.items.map((item) => (
          <label 
            key={item.id} 
            className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${
              checkedItems[item.id] ? 'bg-blue-50 border-blue-900/30' : 'bg-white border-slate-200'
            }`}
          >
            <input 
              type="checkbox" 
              checked={!!checkedItems[item.id]} 
              onChange={() => toggleCheck(item.id)}
              className="w-5 h-5 accent-blue-900 rounded"
            />
            <span className={`ml-3 text-sm font-medium ${checkedItems[item.id] ? 'line-through text-slate-400' : 'text-slate-800'}`}>
              {item.label}
            </span>
          </label>
        ))}
      </div>

      {/* Botão Fixo de Finalizar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 max-w-md mx-auto">
        <button
          onClick={handleFinish}
          className="w-full bg-blue-900 hover:bg-blue-950 text-white font-medium py-3 rounded-xl transition-all shadow-sm"
        >
          Finalizar Checklist
        </button>
      </div>

      {/* Modal: Validação */}
      {showValidation && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl">
            <h2 className="text-lg font-bold text-amber-600 mb-2">⚠️ Atenção: Itens Pendentes</h2>
            <p className="text-xs text-slate-600 mb-4">
              Você ainda não marcou os seguintes itens de biossegurança:
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 mb-6 bg-amber-50 p-3 rounded-lg max-h-40 overflow-y-auto">
              {pendingItems.map((item) => (
                <li key={item.id} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  {item.label}
                </li>
              ))}
            </ul>
            <div className="flex gap-2">
              <button
                onClick={() => setShowValidation(false)}
                className="flex-1 bg-slate-100 text-slate-700 font-medium text-xs py-2.5 rounded-lg hover:bg-slate-200"
              >
                Voltar e Marcar
              </button>
              <button
                onClick={() => {
                  setShowValidation(false);
                  setIsCompleted(true);
                }}
                className="flex-1 bg-amber-600 text-white font-medium text-xs py-2.5 rounded-lg hover:bg-amber-700"
              >
                Concluir Mesmo Assim
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Sucesso */}
      {isCompleted && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl text-center">
            <div className="w-12 h-12 bg-blue-100 text-blue-900 text-2xl rounded-full flex items-center justify-center mx-auto mb-3">
              ✓
            </div>
            <h2 className="text-lg font-bold text-slate-900 mb-1">Procedimento Validado!</h2>
            <p className="text-xs text-slate-500 mb-6">
              Todos os protocolos de biossegurança foram verificados com sucesso.
            </p>
            <Link
              href="/"
              className="block w-full bg-blue-900 text-white font-medium text-sm py-2.5 rounded-xl hover:bg-blue-950"
            >
              Voltar ao Início
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

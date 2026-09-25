'use client';

import { use, useState } from 'react';
import { PROCEDURES } from '@/data/procedures';
import Link from 'next/link';
import Image from 'next/image';

export default function ChecklistPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const procedure = PROCEDURES.find((p) => p.id === id);

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [showValidation, setShowValidation] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!procedure) {
    return (
      <div className="p-8 text-center text-slate-600">
        <p className="mb-4">Procedimento não encontrado.</p>
        <Link href="/" className="text-blue-900 font-semibold underline">Voltar ao início</Link>
      </div>
    );
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
      <header className="flex justify-between items-center mb-5">
        <Link href="/" className="text-sm font-medium text-blue-900 flex items-center gap-1 hover:underline">
          ← Voltar
        </Link>
        
        {/* Logo menor com circulo de fundo no cabeçalho */}
        <div className="w-10 h-10 bg-white rounded-full p-1 shadow-sm border border-slate-200 flex items-center justify-center overflow-hidden">
          <Image src="/logo.png" alt="Logo" width={32} height={32} className="rounded-full object-cover" />
        </div>

        <span className="text-xs font-semibold text-blue-950 bg-blue-100 px-2.5 py-1 rounded-full">
          {completedItemsCount}/{totalItems}
        </span>
      </header>

      <div className="mb-4">
        <span className="text-[10px] font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded uppercase">
          {procedure.category}
        </span>
        <h1 className="text-lg font-bold text-slate-900 mt-1 leading-snug">{procedure.title}</h1>
        <p className="text-xs text-slate-500 mt-0.5">Marque cada item à medida que realiza a verificação</p>
      </div>

      {/* Lista de Itens */}
      <div className="space-y-2 mb-8">
        {procedure.items.map((item) => (
          <label 
            key={item.id} 
            className={`flex items-start p-3 rounded-lg border cursor-pointer transition-all ${
              checkedItems[item.id] ? 'bg-blue-50/60 border-blue-900/30' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <input 
              type="checkbox" 
              checked={!!checkedItems[item.id]} 
              onChange={() => toggleCheck(item.id)}
              className="w-5 h-5 accent-blue-900 rounded mt-0.5 shrink-0"
            />
            <div className="ml-3">
              <span className={`text-xs font-medium block leading-tight ${
                checkedItems[item.id] ? 'line-through text-slate-400' : 'text-slate-800'
              }`}>
                {item.label}
              </span>
            </div>
          </label>
        ))}
      </div>

      {/* Botão Fixo de Finalizar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 max-w-md mx-auto z-10">
        <button
          onClick={handleFinish}
          className="w-full bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 rounded-xl transition-all shadow-md active:scale-[0.98]"
        >
          Finalizar Checklist
        </button>
      </div>

      {/* Modal de Validação */}
      {showValidation && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-5 max-w-sm w-full shadow-2xl">
            <h2 className="text-base font-bold text-amber-600 mb-1 flex items-center gap-1.5">
              ⚠️ Atenção: Itens Pendentes
            </h2>
            <p className="text-xs text-slate-600 mb-3">
              Os seguintes protocolos ainda não foram marcados:
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 mb-5 bg-amber-50 p-3 rounded-xl max-h-40 overflow-y-auto border border-amber-200">
              {pendingItems.map((item) => (
                <li key={item.id} className="flex items-start gap-1.5 leading-tight">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1" />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-2">
              <button
                onClick={() => setShowValidation(false)}
                className="flex-1 bg-slate-100 text-slate-700 font-medium text-xs py-2.5 rounded-xl hover:bg-slate-200"
              >
                Voltar e Marcar
              </button>
              <button
                onClick={() => {
                  setShowValidation(false);
                  setIsCompleted(true);
                }}
                className="flex-1 bg-amber-600 text-white font-medium text-xs py-2.5 rounded-xl hover:bg-amber-700"
              >
                Concluir Assim
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Sucesso */}
      {isCompleted && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl text-center">
            <div className="w-12 h-12 bg-blue-100 text-blue-900 text-2xl rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
              ✓
            </div>
            <h2 className="text-lg font-bold text-slate-900 mb-1">Procedimento Validado!</h2>
            <p className="text-xs text-slate-500 mb-5">
              Todos os protocolos de biossegurança foram verificados com sucesso.
            </p>
            <Link
              href="/"
              className="block w-full bg-blue-900 text-white font-semibold text-sm py-3 rounded-xl hover:bg-blue-950 transition-all shadow-md"
            >
              Voltar ao Início
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
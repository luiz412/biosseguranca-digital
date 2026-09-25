'use client';

import { use, useState } from 'react';
import { PROCEDURES } from '@/data/procedures';
import Link from 'next/link';
import Image from 'next/image';

// Itens fixos do Checklist Geral Pré-Procedimento
const PREREQUISITES = [
  { id: 'pre-1', label: 'Paramentação inicial: Vestir touca e propé' },
  { id: 'pre-2', label: 'Calçar luva de borracha para iniciar a desinfecção do ambiente (álcool 70% e gaze/papel toalha)' },
  { id: 'pre-3', label: 'Realizar limpeza do equipo e da cuspideira (com detergente enzimático)' },
  { id: 'pre-4', label: 'Verificar reservatório de água, funcionamento do sugador e mangueiras do kit acadêmico' },
  { id: 'pre-5', label: 'Barreira plástica: Encosto da cadeira e encosto de cabeça' },
  { id: 'pre-6', label: 'Barreira plástica: Bandeja do equipo, mesa auxiliar e braço da cadeira' },
  { id: 'pre-7', label: 'Barreira plástica: Regulador do mocho e gorro no refletor' },
  { id: 'pre-8', label: 'Barreira plástica: Plástico de geladinho no sugador, seringa tríplice e kit acadêmico' },
  { id: 'pre-9', label: 'Acoplar canudinho na ponta da seringa tríplice' },
  { id: 'pre-10', label: 'Deixar bancada pronta com o material necessário e ambiente organizado' },
  { id: 'pre-11', label: 'Lavar as mãos rigorosamente' },
  { id: 'pre-12', label: 'Paramentação para atendimento: Jaleco, máscara, óculos de proteção e luvas de procedimento' },
];

export default function ChecklistPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const procedure = PROCEDURES.find((p) => p.id === id);

  // Controle de etapa: 1 = Pré-requisitos | 2 = Procedimento Clínico
  const [step, setStep] = useState<1 | 2>(1);

  const [checkedPre, setCheckedPre] = useState<Record<string, boolean>>({});
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

  // Alterna marcação na etapa 1 (Pré-requisitos)
  const togglePreCheck = (itemId: string) => {
    setCheckedPre((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  // Alterna marcação na etapa 2 (Itens do procedimento)
  const toggleItemCheck = (itemId: string) => {
    setCheckedItems((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  // Contadores Etapa 1
  const completedPreCount = Object.values(checkedPre).filter(Boolean).length;
  const pendingPreItems = PREREQUISITES.filter((item) => !checkedPre[item.id]);

  // Contadores Etapa 2
  const completedItemsCount = Object.values(checkedItems).filter(Boolean).length;
  const pendingItems = procedure.items.filter((item) => !checkedItems[item.id]);

  // Ação ao avançar para a Etapa 2
  const handleAdvanceToProcedure = () => {
    if (pendingPreItems.length > 0) {
      setShowValidation(true);
    } else {
      setStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Ação ao finalizar o procedimento
  const handleFinish = () => {
    if (pendingItems.length > 0) {
      setShowValidation(true);
    } else {
      setIsCompleted(true);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8 flex flex-col items-center pb-36 md:pb-40">
      <div className="w-full max-w-md md:max-w-2xl">
        
        {/* Cabeçalho de Navegação */}
        <header className="flex justify-between items-center mb-6 bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
          {step === 1 ? (
            <Link href="/" className="text-sm font-medium text-blue-900 flex items-center gap-1 hover:underline">
              ← Início
            </Link>
          ) : (
            <button 
              onClick={() => {
                setStep(1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="text-sm font-medium text-blue-900 flex items-center gap-1 hover:underline"
            >
              ← Voltar aos Pré-requisitos
            </button>
          )}
          
          <div className="w-9 h-9 bg-white rounded-full p-0.5 shadow-sm border border-slate-200 flex items-center justify-center overflow-hidden">
            <Image src="/logo.png" alt="Logo" width={30} height={30} className="rounded-full object-cover" />
          </div>

          <span className="text-xs font-semibold text-blue-950 bg-blue-100 px-3 py-1 rounded-full">
            {step === 1 ? `${completedPreCount}/${PREREQUISITES.length}` : `${completedItemsCount}/${procedure.items.length}`}
          </span>
        </header>

        {/* Indicador de Etapas (Stepper) */}
        <div className="flex items-center justify-between mb-6 bg-white p-3 rounded-xl border border-slate-200 text-xs font-medium">
          <div className={`flex items-center gap-2 ${step === 1 ? 'text-blue-900 font-bold' : 'text-slate-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === 1 ? 'bg-blue-900 text-white' : 'bg-slate-200 text-slate-600'}`}>1</span>
            Pré-requisitos Gerais
          </div>
          <span className="text-slate-300">➔</span>
          <div className={`flex items-center gap-2 ${step === 2 ? 'text-blue-900 font-bold' : 'text-slate-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === 2 ? 'bg-blue-900 text-white' : 'bg-slate-200 text-slate-600'}`}>2</span>
            Passo a Passo
          </div>
        </div>

        {/* Título do Procedimento */}
        <div className="mb-5">
          <span className="text-[10px] font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded uppercase tracking-wide">
            {procedure.category}
          </span>
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 mt-2 leading-snug">{procedure.title}</h1>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            {step === 1 ? 'Etapa 1: Confirme o preparo do ambiente e biossegurança antes de começar.' : 'Etapa 2: Realize a conferência do protocolo clínico.'}
          </p>
        </div>

        {/* ETAPA 1: Pré-requisitos de Biossegurança */}
        {step === 1 && (
          <div className="space-y-2.5 mb-8">
            <h2 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              🛡️ Pré-requisitos Gerais (Ambiente & Barreiras)
            </h2>
            {PREREQUISITES.map((item) => (
              <label 
                key={item.id} 
                className={`flex items-start p-3.5 rounded-xl border cursor-pointer transition-all ${
                  checkedPre[item.id] ? 'bg-blue-50/60 border-blue-900/30' : 'bg-white border-slate-200 shadow-sm hover:border-slate-300'
                }`}
              >
                <input 
                  type="checkbox" 
                  checked={!!checkedPre[item.id]} 
                  onChange={() => togglePreCheck(item.id)}
                  className="w-5 h-5 accent-blue-900 rounded mt-0.5 shrink-0 cursor-pointer"
                />
                <div className="ml-3">
                  <span className={`text-xs md:text-sm font-medium block leading-snug ${
                    checkedPre[item.id] ? 'line-through text-slate-400' : 'text-slate-800'
                  }`}>
                    {item.label}
                  </span>
                </div>
              </label>
            ))}
          </div>
        )}

        {/* ETAPA 2: Passo a Passo Clínico */}
        {step === 2 && (
          <div className="space-y-2.5 mb-8">
            <h2 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              🩺 Sequência Clínica do Procedimento
            </h2>
            {procedure.items.map((item) => (
              <label 
                key={item.id} 
                className={`flex items-start p-3.5 rounded-xl border cursor-pointer transition-all ${
                  checkedItems[item.id] ? 'bg-blue-50/60 border-blue-900/30' : 'bg-white border-slate-200 shadow-sm hover:border-slate-300'
                }`}
              >
                <input 
                  type="checkbox" 
                  checked={!!checkedItems[item.id]} 
                  onChange={() => toggleItemCheck(item.id)}
                  className="w-5 h-5 accent-blue-900 rounded mt-0.5 shrink-0 cursor-pointer"
                />
                <div className="ml-3">
                  <span className={`text-xs md:text-sm font-medium block leading-snug ${
                    checkedItems[item.id] ? 'line-through text-slate-400' : 'text-slate-800'
                  }`}>
                    {item.label}
                  </span>
                </div>
              </label>
            ))}
          </div>
        )}

        {/* Botão Fixo Inferior */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 z-10 flex justify-center">
          <div className="w-full max-w-md md:max-w-2xl">
            {step === 1 ? (
              <button
                onClick={handleAdvanceToProcedure}
                className="w-full bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3.5 rounded-xl transition-all shadow-md active:scale-[0.98]"
              >
                Avançar para o Passo a Passo →
              </button>
            ) : (
              <button
                onClick={handleFinish}
                className="w-full bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3.5 rounded-xl transition-all shadow-md active:scale-[0.98]"
              >
                Finalizar Checklist
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Modal de Validação de Itens Pendentes */}
      {showValidation && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <h2 className="text-base font-bold text-amber-600 mb-1 flex items-center gap-1.5">
              ⚠️ Atenção: Itens Pendentes
            </h2>
            <p className="text-xs text-slate-600 mb-3">
              {step === 1 
                ? 'Os seguintes pré-requisitos ainda não foram marcados:' 
                : 'Os seguintes passos ainda não foram marcados:'}
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 mb-5 bg-amber-50 p-3 rounded-xl max-h-40 overflow-y-auto border border-amber-200">
              {(step === 1 ? pendingPreItems : pendingItems).map((item) => (
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
                  if (step === 1) {
                    setStep(2);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    setIsCompleted(true);
                  }
                }}
                className="flex-1 bg-amber-600 text-white font-medium text-xs py-2.5 rounded-xl hover:bg-amber-700"
              >
                Avançar Assim
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Conclusão */}
      {isCompleted && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl text-center">
            <div className="w-12 h-12 bg-blue-100 text-blue-900 text-2xl rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
              ✓
            </div>
            <h2 className="text-lg font-bold text-slate-900 mb-1">Procedimento Validado!</h2>
            <p className="text-xs text-slate-500 mb-5">
              Todos os protocolos de biossegurança e procedimentos clínicos foram verificados com sucesso.
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
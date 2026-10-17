'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { PROCEDURES } from '@/data/procedures';

// Etapa 2 Fixo: Checklist do Ambiente, Barreiras e Paramentação (Padrão para todos os procedimentos)
const CHECKLIST_AMBIENTE_PRE_ATENDIMENTO = [
  { id: 'ca1', text: 'Se paramentar com touca e propé' },
  { id: 'ca2', text: 'Calçar luva de borracha para iniciar a desinfecção do ambiente (álcool 70% e gaze/papel toalha)' },
  { id: 'ca3', text: 'Limpeza do equipo' },
  { id: 'ca4', text: 'Limpeza da cuspideira (detergente enzimático)' },
  { id: 'ca5', text: 'Verificar se o reservatório de água está cheio' },
  { id: 'ca6', text: 'Verificar o funcionamento do sugador' },
  { id: 'ca7', text: 'Verificar o funcionamento das mangueiras onde acoplamos o kit acadêmico' },
  { id: 'ca8', text: 'Barreira plástica: Encosto da cadeira' },
  { id: 'ca9', text: 'Barreira plástica: Encosto da cabeça' },
  { id: 'ca10', text: 'Barreira plástica: Bandeja do equipo' },
  { id: 'ca11', text: 'Barreira plástica: Mesa auxiliar' },
  { id: 'ca12', text: 'Barreira plástica: Braço da cadeira e regulador do mocho' },
  { id: 'ca13', text: 'Gorro no refletor' },
  { id: 'ca14', text: 'Plástico de geladinho no sugador, seringa tríplice e kit acadêmico' },
  { id: 'ca15', text: 'Canudinho na ponta da seringa tríplice' },
  { id: 'ca16', text: 'Deixar a bancada pronta com o material' },
  { id: 'ca17', text: 'Ambiente organizado (guardar material e retirar os materiais que não serão utilizados da bancada)' },
  { id: 'ca18', text: 'Lavar as mãos' },
  { id: 'ca19', text: 'Se paramentar para o atendimento (Jaleco, máscara, óculos de proteção, luvas)' },
  { id: 'ca20', text: 'Começar o atendimento' },
];

export default function ChecklistPage() {
  const params = useParams();
  const router = useRouter();
  const procedure = PROCEDURES.find((p) => p.id === params.id);

  // Navegação: 1 = Materiais, 2 = Checklist Padrão da Clínica, 3 = Procedimento Clínico
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [checkedAmbiente, setCheckedAmbiente] = useState<Record<string, boolean>>({});
  const [checkedProcedimento, setCheckedProcedimento] = useState<Record<string, boolean>>({});

  if (!procedure) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
        <p className="text-sm text-slate-500 mb-4">Procedimento não encontrado.</p>
        <button
          onClick={() => router.push('/')}
          className="text-xs font-semibold text-blue-900 underline"
        >
          Voltar para o início
        </button>
      </div>
    );
  }

  const toggleAmbiente = (id: string) => {
    setCheckedAmbiente((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleProcedimento = (id: string) => {
    setCheckedProcedimento((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <main className="min-h-screen bg-slate-50 p-4 sm:p-6 md:p-10 flex flex-col items-center">
      <div className="w-full max-w-xl">
        {/* Botão Voltar */}
        <button
          onClick={() => router.push('/')}
          className="text-xs font-semibold text-blue-900 mb-4 inline-flex items-center gap-1 hover:underline"
        >
          ← Voltar para a lista de procedimentos
        </button>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <span className="text-[10px] font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-full uppercase">
            {procedure.category}
          </span>
          <h1 className="text-xl font-bold text-slate-900 mt-2 mb-4">{procedure.title}</h1>

          {/* Indicador de Progresso das 3 Etapas Solicitadas */}
          <div className="flex items-center justify-between gap-1 mb-6 border-b border-slate-100 pb-4">
            <div className={`flex items-center gap-1.5 text-xs font-bold ${currentStep === 1 ? 'text-blue-900' : 'text-slate-400'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep === 1 ? 'bg-blue-900 text-white' : 'bg-slate-200 text-slate-600'}`}>1</span>
              <span>Materiais</span>
            </div>
            <span className="text-slate-300">→</span>
            <div className={`flex items-center gap-1.5 text-xs font-bold ${currentStep === 2 ? 'text-blue-900' : 'text-slate-400'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep === 2 ? 'bg-blue-900 text-white' : 'bg-slate-200 text-slate-600'}`}>2</span>
              <span>Checklist da Clínica</span>
            </div>
            <span className="text-slate-300">→</span>
            <div className={`flex items-center gap-1.5 text-xs font-bold ${currentStep === 3 ? 'text-blue-900' : 'text-slate-400'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep === 3 ? 'bg-blue-900 text-white' : 'bg-slate-200 text-slate-600'}`}>3</span>
              <span>Procedimento</span>
            </div>
          </div>

          {/* ETAPA 1: INSTRUMENTAIS E MATERIAIS A SEPARAR */}
          {currentStep === 1 && (
            <div className="space-y-5">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
                <span className="text-xl">📦</span>
                <div>
                  <h2 className="text-xs font-bold text-amber-900 uppercase">Etapa 1: Instrumentais e Materiais a Separar</h2>
                  <p className="text-xs text-amber-700 mt-0.5">
                    Separe e confira os materiais e equipamentos do procedimento.
                  </p>
                </div>
              </div>

              <div>
                <ul className="space-y-2">
                  {procedure.materials.map((material, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100"
                    >
                      <span className="text-blue-900 font-bold">•</span>
                      <span>{material}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setCurrentStep(2)}
                className="w-full bg-blue-900 hover:bg-blue-950 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-md mt-4 flex items-center justify-center gap-2"
              >
                <span>Materiais conferidos — Avançar para Checklist da Clínica</span>
                <span>→</span>
              </button>
            </div>
          )}

          {/* ETAPA 2: CHECKLIST PADRÃO DA CLÍNICA (AO CHEGAR, AMBIENTE E BARREIRAS) */}
          {currentStep === 2 && (
            <div className="space-y-5">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3">
                <span className="text-xl">🪑</span>
                <div>
                  <h2 className="text-xs font-bold text-blue-900 uppercase">Etapa 2: Checklist Padrão ao Chegar na Clínica</h2>
                  <p className="text-xs text-blue-700 mt-0.5">
                    Desinfecção, montagem de barreiras de plástico filme e paramentação inicial.
                  </p>
                </div>
              </div>

              <div className="space-y-2.5">
                {CHECKLIST_AMBIENTE_PRE_ATENDIMENTO.map((item) => {
                  const isChecked = !!checkedAmbiente[item.id];
                  return (
                    <label
                      key={item.id}
                      onClick={() => toggleAmbiente(item.id)}
                      className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-emerald-50/50 border-emerald-200 text-emerald-900'
                          : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-900 focus:ring-blue-900"
                      />
                      <span className={`text-xs font-medium ${isChecked ? 'line-through text-slate-500' : ''}`}>
                        {item.text}
                      </span>
                    </label>
                  );
                })}
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl text-xs transition-all"
                >
                  ← Anterior
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="w-2/3 bg-blue-900 hover:bg-blue-950 text-white font-bold py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5"
                >
                  <span>Avançar para o Procedimento</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          )}

          {/* ETAPA 3: SEQUÊNCIA DO PROCEDIMENTO CLÍNICO */}
          {currentStep === 3 && (
            <div className="space-y-5">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex gap-3">
                <span className="text-xl">🩺</span>
                <div>
                  <h2 className="text-xs font-bold text-emerald-900 uppercase">Etapa 3: Sequência do Procedimento</h2>
                  <p className="text-xs text-emerald-700 mt-0.5">
                    Passo a passo da execução clínica/cirúrgica do procedimento.
                  </p>
                </div>
              </div>

              <div className="space-y-2.5">
                {procedure.steps.map((step) => {
                  const isChecked = !!checkedProcedimento[step.id];
                  return (
                    <label
                      key={step.id}
                      onClick={() => toggleProcedimento(step.id)}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-emerald-50/50 border-emerald-200 text-emerald-900'
                          : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-900 focus:ring-blue-900"
                      />
                      <span className={`text-xs font-medium ${isChecked ? 'line-through text-slate-500' : ''}`}>
                        {step.text}
                      </span>
                    </label>
                  );
                })}
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl text-xs transition-all"
                >
                  ← Voltar
                </button>
                <button
                  onClick={() => router.push('/')}
                  className="w-2/3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5"
                >
                  <span>Concluir Atendimento</span>
                  <span>✓</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
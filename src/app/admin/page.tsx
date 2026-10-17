'use client';

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';

interface AccessRecord {
  id: string;
  nome: string;
  perfil: 'academico' | 'cirurgiao_dentista';
  criadoEm?: any;
}

export default function AdminPage() {
  const [records, setRecords] = useState<AccessRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'acessos'));
        const data: AccessRecord[] = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() } as AccessRecord);
        });
        setRecords(data);
      } catch (error) {
        console.error('Erro ao carregar estatísticas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const totalAcessos = records.length;
  const totalAcademicos = records.filter((r) => r.perfil === 'academico').length;
  const totalDentistas = records.filter((r) => r.perfil === 'cirurgiao_dentista').length;

  const percentAcademicos = totalAcessos > 0 ? Math.round((totalAcademicos / totalAcessos) * 100) : 0;
  const percentDentistas = totalAcessos > 0 ? Math.round((totalDentistas / totalAcessos) * 100) : 0;

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-900">Painel de Acessos</h1>
            <p className="text-xs text-slate-500">Métricas e perfis de utilizadores</p>
          </div>
          <Link href="/" className="text-xs font-semibold text-blue-900 hover:underline">
            ← Voltar ao site
          </Link>
        </header>

        {loading ? (
          <p className="text-xs text-slate-500 text-center py-10">Carregando estatísticas...</p>
        ) : (
          <>
            {/* Cartões de Estatísticas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-xs font-bold text-slate-400 uppercase">Total de Acessos</span>
                <p className="text-3xl font-extrabold text-blue-950 mt-1">{totalAcessos}</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-xs font-bold text-blue-600 uppercase">Académicos</span>
                <p className="text-3xl font-extrabold text-slate-900 mt-1">{totalAcademicos}</p>
                <span className="text-xs text-slate-500 font-medium">{percentAcademicos}% do total</span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-xs font-bold text-emerald-600 uppercase">Cirurgiões-Dentistas</span>
                <p className="text-3xl font-extrabold text-slate-900 mt-1">{totalDentistas}</p>
                <span className="text-xs text-slate-500 font-medium">{percentDentistas}% do total</span>
              </div>
            </div>

            {/* Tabela de Histórico Recente */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <h2 className="text-sm font-bold text-slate-800 mb-4">Registro de Acessos</h2>
              <div className="space-y-2.5 max-h-80 overflow-y-auto">
                {records.length === 0 ? (
                  <p className="text-xs text-slate-400 text-center py-4">Nenhum acesso registrado ainda.</p>
                ) : (
                  records.map((r) => (
                    <div key={r.id} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <div>
                        <p className="text-xs font-semibold text-slate-800">{r.nome}</p>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                            r.perfil === 'academico' ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800'
                          }`}
                        >
                          {r.perfil === 'academico' ? 'Académico' : 'Cirurgião-Dentista'}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
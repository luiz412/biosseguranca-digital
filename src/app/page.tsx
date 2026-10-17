'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PROCEDURES } from '@/data/procedures';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [hasRegistered, setHasRegistered] = useState(false);
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState<'academico' | 'cirurgiao_dentista' | ''>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('user_profile');
    if (savedUser) {
      setHasRegistered(true);
    }
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userRole) return;

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'acessos'), {
        nome: userName.trim() || 'Anónimo',
        perfil: userRole,
        criadoEm: serverTimestamp(),
      });

      localStorage.setItem('user_profile', JSON.stringify({ nome: userName, perfil: userRole }));
      setHasRegistered(true);
    } catch (error) {
      console.error('Erro ao registrar acesso:', error);
      setHasRegistered(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredProcedures = PROCEDURES.filter(
    (procedure) =>
      procedure.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      procedure.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // --- TELA 1: CADASTRO INICIAL DEDICADO ---
  if (!hasRegistered) {
    return (
      <main className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 flex flex-col items-center">
          
          {/* Logo */}
          <div className="w-28 h-28 bg-white rounded-full p-2 shadow-md mb-4 flex items-center justify-center border border-slate-200 overflow-hidden">
            <Image
              src="/logo.png"
              alt="Biossegurança Digital"
              width={120}
              height={120}
              className="rounded-full object-cover"
              priority
            />
          </div>

          <h1 className="text-2xl font-extrabold text-slate-900 text-center">Biossegurança Digital</h1>
          <p className="text-xs font-medium text-slate-500 mt-1 text-center mb-6">
            Selecione o seu perfil para liberar o acesso aos checklists clínicos.
          </p>

          <form onSubmit={handleRegister} className="w-full space-y-5">
            {/* Campo Nome */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wide">
                Nome (Opcional)
              </label>
              <input
                type="text"
                placeholder="Digite o seu nome..."
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-900 focus:bg-white transition-all shadow-sm"
              />
            </div>

            {/* Seleção de Perfil */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-2 uppercase tracking-wide">
                Perfil Profissional *
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setUserRole('academico')}
                  className={`py-3.5 px-3 rounded-2xl border-2 text-xs font-bold flex flex-col items-center justify-center gap-1.5 transition-all ${
                    userRole === 'academico'
                      ? 'bg-blue-900 text-white border-blue-900 shadow-md scale-[1.02]'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-base">🎓</span>
                  <span>Académico</span>
                </button>

                <button
                  type="button"
                  onClick={() => setUserRole('cirurgiao_dentista')}
                  className={`py-3.5 px-3 rounded-2xl border-2 text-xs font-bold flex flex-col items-center justify-center gap-1.5 transition-all ${
                    userRole === 'cirurgiao_dentista'
                      ? 'bg-blue-900 text-white border-blue-900 shadow-md scale-[1.02]'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-base">🩺</span>
                  <span>Cirurgião-Dentista</span>
                </button>
              </div>
            </div>

            {/* Botão Entrar */}
            <button
              type="submit"
              disabled={!userRole || isSubmitting}
              className="w-full bg-blue-900 hover:bg-blue-950 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold py-3.5 rounded-2xl text-xs sm:text-sm transition-all shadow-md active:scale-[0.99] mt-2"
            >
              {isSubmitting ? 'A entrar...' : 'Acessar Checklists'}
            </button>
          </form>

        </div>
      </main>
    );
  }

  // --- TELA 2: PÁGINA DE CHECKLISTS (PÓS-CADASTRO) ---
  return (
    <main className="min-h-screen bg-slate-50 p-4 sm:p-6 md:p-10 flex flex-col items-center">
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-3xl">
        <header className="mb-6 text-center flex flex-col items-center">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full p-2 shadow-md mb-3 flex items-center justify-center border border-slate-200 overflow-hidden">
            <Image
              src="/logo.png"
              alt="Biossegurança Digital"
              width={120}
              height={120}
              className="rounded-full object-cover"
              priority
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-blue-950">Biossegurança Digital</h1>
          <p className="text-xs md:text-sm text-slate-500 mt-1">Checklists Clínicos</p>
        </header>

        {/* Barra de Pesquisa */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Pesquisar procedimento ou categoria..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 shadow-sm focus:outline-none focus:border-blue-900"
          />
        </div>

        {/* Lista de Procedimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredProcedures.map((procedure) => (
            <Link
              key={procedure.id}
              href={`/checklist/${procedure.id}`}
              className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-900 transition-all"
            >
              <span className="text-[10px] font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-full uppercase">
                {procedure.category}
              </span>
              <h2 className="text-base font-semibold text-slate-900 mt-2">{procedure.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
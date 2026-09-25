'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PROCEDURES } from '@/data/procedures';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtra os procedimentos pelo título ou pela categoria
  const filteredProcedures = PROCEDURES.filter((procedure) =>
    procedure.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    procedure.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50 p-4 sm:p-6 md:p-10 flex flex-col items-center">
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-3xl">
        
        <header className="mb-6 text-center flex flex-col items-center">
          <div className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-full p-2 shadow-md mb-4 flex items-center justify-center border border-slate-200 overflow-hidden">
            <Image
              src="/logo.png"
              alt="Biossegurança Digital"
              width={140}
              height={140}
              className="rounded-full object-cover"
              priority
            />
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-blue-950">Biossegurança Digital</h1>
          <p className="text-xs md:text-sm text-slate-500 mt-1">Checklists Clínicos de Dentística</p>
        </header>

        {/* Barra de Pesquisa */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar procedimento ou categoria..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-10 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-all"
            />
            <span className="absolute left-3.5 top-3.5 text-slate-400 text-sm">
              🔍
            </span>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600 text-xs font-bold bg-slate-100 rounded-full w-5 h-5 flex items-center justify-center"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Lista de Procedimentos Filtrados */}
        {filteredProcedures.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {filteredProcedures.map((procedure) => (
              <Link 
                key={procedure.id} 
                href={`/checklist/${procedure.id}`}
                className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-900 hover:shadow-md transition-all active:scale-[0.99] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {procedure.category}
                  </span>
                  <h2 className="text-base font-semibold text-slate-900 mt-2 leading-snug">
                    {procedure.title}
                  </h2>
                </div>
                <p className="text-xs text-slate-400 mt-3 flex items-center gap-1">
                  <span>📋</span> {procedure.items.length} itens no protocolo
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-white rounded-xl border border-slate-200 p-6">
            <p className="text-sm font-medium text-slate-600">Nenhum procedimento encontrado.</p>
            <p className="text-xs text-slate-400 mt-1">Tente pesquisar por outro termo.</p>
          </div>
        )}

      </div>
    </main>
  );
}
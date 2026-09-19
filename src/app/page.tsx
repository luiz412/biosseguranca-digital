import Link from 'next/link';
import Image from 'next/image';
import { PROCEDURES } from '@/data/procedures';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8">
      <header className="max-w-md mx-auto mb-6 text-center flex flex-col items-center">
        <Image
          src="/logo.png"
          alt="Biossegurança Digital"
          width={130}
          height={130}
          className="mb-3 drop-shadow-sm"
          priority
        />
        <h1 className="text-2xl font-bold text-blue-950">Biossegurança Digital</h1>
        <p className="text-xs text-slate-500 mt-1">Checklists Clínicos de Dentística</p>
      </header>

      <div className="max-w-md mx-auto space-y-3">
        {PROCEDURES.map((procedure) => (
          <Link 
            key={procedure.id} 
            href={`/checklist/${procedure.id}`}
            className="block p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-900 transition-all active:scale-[0.99]"
          >
            <span className="text-[10px] font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
              {procedure.category}
            </span>
            <h2 className="text-base font-semibold text-slate-900 mt-2 leading-snug">
              {procedure.title}
            </h2>
            <p className="text-xs text-slate-400 mt-1.5 flex items-center gap-1">
              <span>📋</span> {procedure.items.length} itens no protocolo
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
import Link from 'next/link';
import { PROCEDURES } from '@/data/procedures';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8">
      <header className="max-w-md mx-auto mb-6 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Biossegurança Digital</h1>
        <p className="text-sm text-slate-500">Selecione o procedimento para iniciar o checklist</p>
      </header>

      <div className="max-w-md mx-auto space-y-3">
        {PROCEDURES.map((procedure) => (
          <Link 
            key={procedure.id} 
            href={`/checklist/${procedure.id}`}
            className="block p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-900 transition-all"
          >
            <span className="text-xs font-semibold text-blue-900 bg-blue-50 px-2.5 py-1 rounded">
              {procedure.category}
            </span>
            <h2 className="text-lg font-medium text-slate-900 mt-2">{procedure.title}</h2>
            <p className="text-xs text-slate-400 mt-1">
              {procedure.items.length} itens no checklist
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
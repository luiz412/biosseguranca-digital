export interface ChecklistItem {
  id: string;
  label: string;
  category: 'EPI' | 'Superfície' | 'Instrumental' | 'Material' | 'Descarte';
}

export interface Procedure {
  id: string;
  title: string;
  category: string;
  items: ChecklistItem[];
}

export const PROCEDURES: Procedure[] = [
  {
    id: 'restauracao-resina',
    title: 'Restauração em Resina',
    category: 'Dentística',
    items: [
      { id: '1', label: 'Higienizar as mãos', category: 'EPI' },
      { id: '2', label: 'Colocar os EPIs', category: 'EPI' },
      { id: '3', label: 'Desinfetar superfícies', category: 'Superfície' },
      { id: '4', label: 'Preparar barreiras de proteção', category: 'Superfície' },
      { id: '5', label: 'Separar instrumentais', category: 'Instrumental' },
      { id: '6', label: 'Conferir materiais restauradores', category: 'Material' },
      { id: '7', label: 'Preparar sistema de sucção', category: 'Instrumental' },
      { id: '8', label: 'Conferir equipamentos', category: 'Instrumental' },
      { id: '9', label: 'Separar materiais para descarte', category: 'Descarte' },
    ],
  },
];
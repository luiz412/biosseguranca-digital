export interface ChecklistItem {
  id: string;
  label: string;
  category: 'Instrumental' | 'Material' | 'Sequência' | 'Conferência';
}

export interface Procedure {
  id: string;
  title: string;
  category: string;
  items: ChecklistItem[];
}

export const PROCEDURES: Procedure[] = [
  {
    id: 'restauracao-classe-1',
    title: 'Restauração Direta em Resina Composta - Classe I',
    category: 'Dentística',
    items: [
      { id: '1-1', label: 'Separar: Espelho, Sonda, Pinça clínica e Colher de dentina', category: 'Instrumental' },
      { id: '1-2', label: 'Separar: Rotatórios, Brocas, Espátula de resina, Instrumento de inserção e Polimento', category: 'Instrumental' },
      { id: '1-3', label: 'Separar: Papel carbono, Seringa tríplice, Sucção, Carpule e Agulha', category: 'Instrumental' },
      { id: '1-4', label: 'Materiais: Resina composta, Sistema adesivo e Ácido gravador', category: 'Material' },
      { id: '1-5', label: 'Materiais: Isolamento do campo operatório e Proteção dentino-pulpar (se indicada)', category: 'Material' },
      { id: '1-6', label: 'Confirmar checklist geral pré-procedimento concluído', category: 'Sequência' },
      { id: '1-7', label: 'Selecionar cor da resina (antes do isolamento)', category: 'Sequência' },
      { id: '1-8', label: 'Realizar anestesia local (se indicada) e Isolamento do campo operatório', category: 'Sequência' },
      { id: '1-9', label: 'Preparo cavitário / Remoção de tecido comprometido', category: 'Sequência' },
      { id: '1-10', label: 'Limpeza da cavidade e Proteção dentino-pulpar (se indicada)', category: 'Sequência' },
      { id: '1-11', label: 'Condicionamento ácido, Lavagem e Aplicação do Sistema Adesivo', category: 'Sequência' },
      { id: '1-12', label: 'Fotoativação do adesivo e Inserção de resina em incrementos com fotoativação', category: 'Sequência' },
      { id: '1-13', label: 'Escultura anatômica, Acabamento e Polimento', category: 'Sequência' },
      { id: '1-14', label: 'Ajuste oclusal com papel carbono, Remoção do isolamento e Limpeza final', category: 'Sequência' },
      { id: '1-15', label: 'Conferência: Instrumentais e materiais conferidos e organizados', category: 'Conferência' },
    ],
  },
  {
    id: 'restauracao-classe-2',
    title: 'Restauração Direta em Resina Composta - Classe II',
    category: 'Dentística',
    items: [
      { id: '2-1', label: 'Separar: Espelho, Sonda, Pinça, Colher de dentina, Rotatórios e Brocas', category: 'Instrumental' },
      { id: '2-2', label: 'Separar: Espátula, Instrumento de inserção, Sistema de matriz, Porta-matriz e Cunhas', category: 'Instrumental' },
      { id: '2-3', label: 'Separar: Tiras abrasivas, Polimento, Papel carbono, Seringa tríplice, Sucção e Anestesia', category: 'Instrumental' },
      { id: '2-4', label: 'Materiais: Resina, Sistema adesivo, Ácido, Isolamento, Matriz, Cunha e Proteção pulpar', category: 'Material' },
      { id: '2-5', label: 'Confirmar checklist pré-procedimento e Selecionar cor antes do isolamento', category: 'Sequência' },
      { id: '2-6', label: 'Anestesia local, Isolamento do campo e Remoção do tecido comprometido/restauração antiga', category: 'Sequência' },
      { id: '2-7', label: 'Adaptar matriz e cunha para reconstrução do ponto de contato proximal', category: 'Sequência' },
      { id: '2-8', label: 'Condicionamento ácido, Aplicação do Adesivo e Fotoativação', category: 'Sequência' },
      { id: '2-9', label: 'Reconstrução da parede proximal e Incrementos de resina fotoativados', category: 'Sequência' },
      { id: '2-10', label: 'Remoção de matriz/cunha, Verificação de ponto de contato e Adaptação marginal', category: 'Sequência' },
      { id: '2-11', label: 'Acabamento, Polimento, Tira abrasiva proximal e Checagem oclusal com carbono', category: 'Sequência' },
      { id: '2-12', label: 'Conferência: Etapas validadas e Campo/Paciente organizados', category: 'Conferência' },
    ],
  },
  {
    id: 'restauracao-classe-3',
    title: 'Restauração Direta em Resina Composta - Classe III',
    category: 'Dentística',
    items: [
      { id: '3-1', label: 'Separar: Espelho, Sonda, Pinça, Colher de dentina, Brocas e Espátula de resina', category: 'Instrumental' },
      { id: '3-2', label: 'Separar: Matriz para dentes anteriores, Cunhas, Tiras abrasivas e Discos de polimento', category: 'Instrumental' },
      { id: '3-3', label: 'Materiais: Resina composta, Adesivo, Ácido, Isolamento e Caracterizadores estéticos', category: 'Material' },
      { id: '3-4', label: 'Seleção de cor antes do isolamento e Anestesia local (se indicada)', category: 'Sequência' },
      { id: '3-5', label: 'Isolamento do campo operatório e Preparo da cavidade', category: 'Sequência' },
      { id: '3-6', label: 'Posicionamento de matriz/cunha para controle do contorno proximal', category: 'Sequência' },
      { id: '3-7', label: 'Adesão (Ácido + Adesivo + Fotoativação)', category: 'Sequência' },
      { id: '3-8', label: 'Inserção incremental da resina, Escultura e Fotoativação de cada camada', category: 'Sequência' },
      { id: '3-9', label: 'Acabamento com tiras abrasivas proximais e Integração estética final', category: 'Sequência' },
      { id: '3-10', label: 'Conferência: Procedimento finalizado e ambiente limpo', category: 'Conferência' },
    ],
  },
  {
    id: 'restauracao-classe-4',
    title: 'Restauração Direta em Resina Composta - Classe IV',
    category: 'Dentística',
    items: [
      { id: '4-1', label: 'Separar: Espelho, Sonda, Pinça, Rotatórios e Espátula de inserção', category: 'Instrumental' },
      { id: '4-2', label: 'Separar: Matriz anterior, Guia palatina/silicone, Discos, Borrachas e Tiras abrasivas', category: 'Instrumental' },
      { id: '4-3', label: 'Materiais: Resina com diferentes opacidades/translucidez, Adesivo, Ácido e Isolamento', category: 'Material' },
      { id: '4-4', label: 'Seleção detalhada de cor antes do isolamento', category: 'Sequência' },
      { id: '4-5', label: 'Isolamento do campo e Preparo do bisel/margens da fratura', category: 'Sequência' },
      { id: '4-6', label: 'Posicionamento da guia palatina de silicone e protocolo adesivo completo', category: 'Sequência' },
      { id: '4-7', label: 'Reconstrução da parede palatina em resina e camada de dentina/esmalte', category: 'Sequência' },
      { id: '4-8', label: 'Escultura da borda incisal e anatomia superficial com fotoativação incremental', category: 'Sequência' },
      { id: '4-9', label: 'Acabamento, Polimento de alto brilho e Checagem de movimentos excursivos', category: 'Sequência' },
      { id: '4-10', label: 'Conferência: Simetria, proporção e protocolos concluídos', category: 'Conferência' },
    ],
  },
  {
    id: 'restauracao-classe-5',
    title: 'Restauração Direta em Resina Composta - Classe V',
    category: 'Dentística',
    items: [
      { id: '5-1', label: 'Separar: Espelho, Sonda, Pinça, Colher de dentina, Brocas e Espátula de resina', category: 'Instrumental' },
      { id: '5-2', label: 'Separar: Instrumentos para acabamento cervical, Seringa tríplice e Sucção', category: 'Instrumental' },
      { id: '5-3', label: 'Materiais: Resina, Sistema adesivo, Ácido e Material para controle de umidade/afastamento', category: 'Material' },
      { id: '5-4', label: 'Seleção de cor, Anestesia e Isolamento com rigoroso controle de umidade', category: 'Sequência' },
      { id: '5-5', label: 'Limpeza e preparo cavitário / Remoção do tecido comprometido', category: 'Sequência' },
      { id: '5-6', label: 'Protocolo adesivo (Condicionamento + Adesivo + Fotoativação)', category: 'Sequência' },
      { id: '5-7', label: 'Inserção, modelagem do contorno cervical e fotoativação', category: 'Sequência' },
      { id: '5-8', label: 'Remoção de excessos subgengivais, Acabamento e Polimento fino', category: 'Sequência' },
      { id: '5-9', label: 'Conferência: Adaptação marginal verificada e higienização do local', category: 'Conferência' },
    ],
  },
  {
    id: 'restauracao-estetica-anterior',
    title: 'Restauração Estética Anterior em Resina Composta',
    category: 'Dentística',
    items: [
      { id: '6-1', label: 'Separar: Kit clínico, Espátulas de estética, Guia de silicone e Matrizes anteriores', category: 'Instrumental' },
      { id: '6-2', label: 'Separar: Kit de acabamento/polimento (Discos, Borrachas, Pastas e Tiras)', category: 'Instrumental' },
      { id: '6-3', label: 'Materiais: Resinas estéticas de estratificação, Adesivo, Ácido e Caracterizadores', category: 'Material' },
      { id: '6-4', label: 'Mapeamento de cor antes do isolamento e desidratação dental', category: 'Sequência' },
      { id: '6-5', label: 'Isolamento do campo e Preparo do substrato dental', category: 'Sequência' },
      { id: '6-6', label: 'Sistema adesivo e Fotoativação', category: 'Sequência' },
      { id: '6-7', label: 'Estratificação em camadas (Palatina, Dentina, Efeitos e Esmalte)', category: 'Sequência' },
      { id: '6-8', label: 'Polimento e caracterização de macro e microtextura superficial', category: 'Sequência' },
      { id: '6-9', label: 'Ajuste de oclusão e desoclusão', category: 'Sequência' },
      { id: '6-10', label: 'Conferência: Validação estética e protocolo finalizado', category: 'Conferência' },
    ],
  },
  {
    id: 'troca-restauracao-deficiente',
    title: 'Troca de Restauração Deficiente',
    category: 'Dentística',
    items: [
      { id: '7-1', label: 'Separar: Kit clínico, Brocas para remoção de restauração e Colher de dentina', category: 'Instrumental' },
      { id: '7-2', label: 'Separar: Espátula, Matriz, Cunhas, Polimento e Papel carbono', category: 'Instrumental' },
      { id: '7-3', label: 'Materiais: Novo material restaurador, Adesivo, Ácido e Proteção pulpar', category: 'Material' },
      { id: '7-4', label: 'Anestesia, Seleção de cor e Isolamento do campo', category: 'Sequência' },
      { id: '7-5', label: 'Remoção controlada do material deficiente preservando estrutura hígida', category: 'Sequência' },
      { id: '7-6', label: 'Limpeza, Proteção dentino-pulpar (se necessária) e Adaptação de matriz/cunha', category: 'Sequência' },
      { id: '7-7', label: 'Condicionamento ácido, Sistema adesivo e Fotoativação', category: 'Sequência' },
      { id: '7-8', label: 'Restauração incremental, Escultura, Acabamento e Polimento', category: 'Sequência' },
      { id: '7-9', label: 'Checagem de contatos proximais e Ajuste oclusal com carbono', category: 'Sequência' },
      { id: '7-10', label: 'Conferência: Procedimento concluído e descarte adequado', category: 'Conferência' },
    ],
  },
  {
    id: 'protecao-pulpar-indireta',
    title: 'Proteção Pulpar Indireta',
    category: 'Dentística',
    items: [
      { id: '8-1', label: 'Separar: Kit clínico, Colher de dentina, Brocas e Aplicadores de material protetor', category: 'Instrumental' },
      { id: '8-2', label: 'Separar: Espátulas de manipulação, Seringa tríplice e Sucção', category: 'Instrumental' },
      { id: '8-3', label: 'Materiais: Material de proteção pulpar (ex: Cimento de Hidróxido de Cálcio / CIV)', category: 'Material' },
      { id: '8-4', label: 'Materiais: Material restaurador para selamento provisório ou definitivo', category: 'Material' },
      { id: '8-5', label: 'Anestesia local e Isolamento do campo operatório', category: 'Sequência' },
      { id: '8-6', label: 'Remoção seletiva do tecido cariado profundo (evitando exposição pulpar)', category: 'Sequência' },
      { id: '8-7', label: 'Limpeza rigorosa da cavidade e confirmação da ausência de exposição pulpar', category: 'Sequência' },
      { id: '8-8', label: 'Aplicação do material protector sobre a parede de fundo', category: 'Sequência' },
      { id: '8-9', label: 'Restauração/Selamento hermético da cavidade', category: 'Sequência' },
      { id: '8-10', label: 'Conferência: Oclusão checada e paciente orientado', category: 'Conferência' },
    ],
  },
  {
    id: 'capeamento-pulpar-direto',
    title: 'Capeamento Pulpar Direto',
    category: 'Dentística',
    items: [
      { id: '9-1', label: 'Separar: Kit clínico, Colher de dentina e Aplicador de cimento biocompatível', category: 'Instrumental' },
      { id: '9-2', label: 'Separar: Espátulas, Seringa tríplice, Sucção e Material hemostático', category: 'Instrumental' },
      { id: '9-3', label: 'Materiais: Material biocompatível (ex: MTA / Cimento Biocerâmico / Hidróxido de Cálcio)', category: 'Material' },
      { id: '9-4', label: 'Materiais: Material para base protetora e Restauração provisória/definitiva', category: 'Material' },
      { id: '9-5', label: 'Anestesia local e Isolamento ABSOLUTO do campo operatório', category: 'Sequência' },
      { id: '9-6', label: 'Identificação da exposição pulpar e Controle da hemorragia/contaminação', category: 'Sequência' },
      { id: '9-7', label: 'Aplicação do material de capeamento biocompatível diretamente sobre a exposição', category: 'Sequência' },
      { id: '9-8', label: 'Aplicação da base/cobertura protetora e Selamento coronário imediato', category: 'Sequência' },
      { id: '9-9', label: 'Ajuste oclusal e Registro em prontuário para acompanhamento radiográfico', category: 'Sequência' },
      { id: '9-10', label: 'Conferência: Isolamento removido e protocolo de proservação agendado', category: 'Conferência' },
    ],
  },
];

// --- PROFILAXIA ODONTOLÓGICA ---
{
  id: 'profilaxia-odontologica',
  title: 'Profilaxia Odontológica',
  category: 'Profilaxia',
  items: [
    { id: 'prof-1', label: 'Separar instrumentais: Espelho, Sonda exploratória, Pinça clínica, Sonda periodontal, Instrumentais manuais de raspagem, Taça de borracha/escova de Robinson e Contra-ângulo' },
    { id: 'prof-2', label: 'Separar materiais: Pasta profilática, Fio dental, Gaze, Copos descartáveis e Solução de limpeza' },
    { id: 'prof-3', label: 'Antes de iniciar: Confirmar identificação do paciente, indicação clínica e realizar avaliação inicial (biofilme, cálculo, manchas e sensibilidade)' },
    { id: 'prof-4', label: 'Posicionar o paciente adequadamente e realizar limpeza/higiene inicial' },
    { id: 'prof-5', label: 'Realizar remoção de cálculo quando indicada' },
    { id: 'prof-6', label: 'Realizar profilaxia com instrumento rotatório e pasta profilática em movimentos controlados' },
    { id: 'prof-7', label: 'Limpeza de regiões de difícil acesso e passar fio dental nas regiões interproximais' },
    { id: 'prof-8', label: 'Irrigar, enxaguar e remover resíduos; conferir visualmente as superfícies dentárias' },
    { id: 'prof-9', label: 'Orientações ao paciente: Higiene diária, técnica de escovação, uso de fio dental e cuidados alimentares' },
    { id: 'prof-10', label: 'Conferência final: Organizar campo operatório, encaminhar instrumentais para esterilização e registrar no prontuário' }
  ]
},

// --- CIRURGIA ODONTOLÓGICA / EXODONTIAS BÁSICAS ---
{
  id: 'exodontia-anteriores-superiores',
  title: 'Exodontia de Dentes Permanentes Anteriores Superiores',
  category: 'Cirurgia',
  items: [
    { id: 'exo-ans-1', label: 'Separar instrumentais: Espelho, Sonda, Pinça, Descolador/Periótomo, Elevador reto, Fórceps adequado, Cureta alveolar, Porta-agulha, Tesoura e Carpule' },
    { id: 'exo-ans-2', label: 'Separar materiais: Anestésico tópico/local, Gaze estéril, Solução para irrigação e Fio de sutura' },
    { id: 'exo-ans-3', label: 'Confirmar indicação, avaliação clínica/radiográfica e conferir dente a ser removido' },
    { id: 'exo-ans-4', label: 'Realizar anestesia tópica e local; confirmar anestesia profunda antes de iniciar' },
    { id: 'exo-ans-5', label: 'Realizar sindesmotomia e luxação progressiva com instrumento adequado' },
    { id: 'exo-ans-6', label: 'Adaptar fórceps e realizar movimentos controlados conforme a anatomia radicular até a remoção' },
    { id: 'exo-ans-7', label: 'Inspecionar dente removido, avaliar alvéolo, irrigar e realizar curetagem se houver indicação' },
    { id: 'exo-ans-8', label: 'Realizar sutura (se indicada) e promover hemostasia por compressão com gaze' },
    { id: 'exo-ans-9', label: 'Prescrever medicações (se necessário), orientar cuidados pós-operatórios e registrar no prontuário' }
  ]
},
{
  id: 'exodontia-anteriores-inferiores',
  title: 'Exodontia de Dentes Permanentes Anteriores Inferiores',
  category: 'Cirurgia',
  items: [
    { id: 'exo-ani-1', label: 'Separar instrumentais e materiais específicos para anteriores inferiores' },
    { id: 'exo-ani-2', label: 'Confirmar avaliação clínica/radiográfica e elemento dental correto' },
    { id: 'exo-ani-3', label: 'Executar técnica anestésica e confirmar anestesia adequada' },
    { id: 'exo-ani-4', label: 'Realizar sindesmotomia, luxação progressiva e adaptar fórceps específico' },
    { id: 'exo-ani-5', label: 'Executar movimentos compatíveis com a anatomia e remover o dente' },
    { id: 'exo-ani-6', label: 'Conferir integridade do dente, avaliar alvéolo, irrigar e suturar se necessário' },
    { id: 'exo-ani-7', label: 'Promover hemostasia por compressão e verificar sítio cirúrgico' },
    { id: 'exo-ani-8', label: 'Fornecer orientações pós-operatórias (reposo, alimentação, higiene) e registrar em prontuário' }
  ]
},
{
  id: 'exodontia-pre-molares-superiores',
  title: 'Exodontia de Pré-Molares Superiores',
  category: 'Cirurgia',
  items: [
    { id: 'exo-pms-1', label: 'Separar kit cirúrgico e fórceps específico para pré-molares superiores' },
    { id: 'exo-pms-2', label: 'Confirmar diagnóstico radiográfico do elemento e anestesiar' },
    { id: 'exo-pms-3', label: 'Sindesmotomia e luxação progressiva com elevador reto' },
    { id: 'exo-pms-4', label: 'Aplicações de forças controladas com fórceps respeitando a anatomia das raízes' },
    { id: 'exo-pms-5', label: 'Remoção do dente, inspeção de integridade radicular e inspeção do alvéolo' },
    { id: 'exo-pms-6', label: 'Irrigação, sutura (se indicada) e hemostasia com compressa de gaze' },
    { id: 'exo-pms-7', label: 'Passar recomendações pós-operatórias ao paciente e registrar o procedimento' }
  ]
},
{
  id: 'exodontia-pre-molares-inferiores',
  title: 'Exodontia de Pré-Molares Inferiores',
  category: 'Cirurgia',
  items: [
    { id: 'exo-pmi-1', label: 'Separar instrumentais e fórceps específico para pré-molares inferiores' },
    { id: 'exo-pmi-2', label: 'Conferir radiografia, dente correto e realizar anestesia local' },
    { id: 'exo-pmi-3', label: 'Realizar desinserção das fibras (sindesmotomia) e luxação' },
    { id: 'exo-pmi-4', label: 'Adaptar fórceps e realizar movimentos adequados à anatomia radicular' },
    { id: 'exo-pmi-5', label: 'Extração do dente, avaliação alveolar e remoção de fragmentos/tecido se indicado' },
    { id: 'exo-pmi-6', label: 'Irrigação com solução estéril, hemostasia e sutura quando necessária' },
    { id: 'exo-pmi-7', label: 'Orientar cuidados com o coágulo/medicação e fazer registro no prontuário' }
  ]
},
{
  id: 'exodontia-molares-superiores',
  title: 'Exodontia de Molares Superiores',
  category: 'Cirurgia',
  items: [
    { id: 'exo-ms-1', label: 'Separar elevadores e fórceps específico para molares superiores (direito/esquerdo)' },
    { id: 'exo-ms-2', label: 'Avaliar proximidade com o seio maxilar na radiografia e realizar anestesia' },
    { id: 'exo-ms-3', label: 'Sindesmotomia cuidadosa e luxação progressiva com alavancas/elevadores' },
    { id: 'exo-ms-4', label: 'Adaptar fórceps de molares e realizar movimentos vestíbulo-palatinos controlados' },
    { id: 'exo-ms-5', label: 'Remoção do elemento e conferência minuciosa da integridade das 3 raízes' },
    { id: 'exo-ms-6', label: 'Avaliação do alvéolo, irrigação abundante, sutura e hemostasia por compressão' },
    { id: 'exo-ms-7', label: 'Orientar o paciente sobre cuidados pós-cirúrgicos e registrar em prontuário' }
  ]
},
{
  id: 'exodontia-molares-inferiores',
  title: 'Exodontia de Molares Inferiores',
  category: 'Cirurgia',
  items: [
    { id: 'exo-mi-1', label: 'Separar fórceps de molares inferiores (ex: nº 17 ou cuerno de vaca / nº 23) e elevadores' },
    { id: 'exo-mi-2', label: 'Avaliação clínica/radiográfica da anatomia radicular e anestesia local' },
    { id: 'exo-mi-3', label: 'Sindesmotomia, luxação com elevador e adaptação do fórceps' },
    { id: 'exo-mi-4', label: 'Movimentos vestíbulo-linguais controlados até a extração completa' },
    { id: 'exo-mi-5', label: 'Conferir integridade das raízes, inspecionar alvéolo e irrigar' },
    { id: 'exo-mi-6', label: 'Sutura (se necessária) e compressão com gaze para hemostasia' },
    { id: 'exo-mi-7', label: 'Prescrição de medicação, orientações pós-operatórias e anotação em prontuário' }
  ]
},
{
  id: 'exodontia-dentes-deciduos',
  title: 'Exodontia de Dentes Decíduos',
  category: 'Cirurgia Pediatria',
  items: [
    { id: 'exo-dec-1', label: 'Separar fórceps infantil, elevador pequeno e kit de anestesia' },
    { id: 'exo-dec-2', label: 'Avaliar estágio de esfoliação e relação com o germe do permanente (radiografia)' },
    { id: 'exo-dec-3', label: 'Realizar anestesia tópica e local com dosagem infantil adequada' },
    { id: 'exo-dec-4', label: 'Sindesmotomia leve e luxação controlada respeitando a anatomia do decíduo' },
    { id: 'exo-dec-5', label: 'Adaptação do fórceps infantil e remoção do dente sem danificar o sucessor' },
    { id: 'exo-dec-6', label: 'Inspeção do alvéolo, verificação de fragmentos e hemostasia com gaze' },
    { id: 'exo-dec-7', label: 'Reforçar orientações pós-operatórias ao responsável e registrar no prontuário' }
  ]
},
{
  id: 'exodontia-terceiro-molar-superior-simples',
  title: 'Exodontia de Terceiro Molar Superior Erupcionado Simples',
  category: 'Cirurgia',
  items: [
    { id: 'exo-3m-1', label: 'Separar fórceps para 3º molar superior (ex: nº 210 ou bajoneta) e alavancas' },
    { id: 'exo-3m-2', label: 'Confirmar que o dente está erupcionado e sem necessidade de osteotomia/odontosecção' },
    { id: 'exo-3m-3', label: 'Anestesia infiltrativa/bloqueio eficiente da região' },
    { id: 'exo-3m-4', label: 'Sindesmotomia e luxação com elevadores adequados ao acesso posterior' },
    { id: 'exo-3m-5', label: 'Aplicações de forças de apreensão com fórceps e remoção do dente' },
    { id: 'exo-3m-6', label: 'Conferir dente e alvéolo, irrigar, suturar se necessário e promover hemostasia' },
    { id: 'exo-3m-7', label: 'Instruções pós-operatórias, prescrição medicamentosa e registro em prontuário' }
  ]
}

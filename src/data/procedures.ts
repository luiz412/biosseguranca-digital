export interface StepItem {
  id: string;
  text: string;
}

export interface Procedure {
  id: string;
  title: string;
  category: string;
  materials: string[]; // Pré-requisitos (materiais e EPIs)
  steps: StepItem[];   // Checklist clínico operacional
}

export const PROCEDURES: Procedure[] = [
  // --- DENTÍSTICA (1 a 5) ---
  {
    id: 'restauracao-classe-i',
    title: 'Restauração Direta em Resina Composta - Classe I',
    category: 'Dentística',
    materials: [
      'Kit clínico (Espelho, pinça clínica, sonda exploradora)',
      'EPIs completos (Luvas, máscara N95/PFF2, gorro, óculos e avental)',
      'Barreiras plásticas de proteção mecânica',
      'Kit de isolamento absoluto (Lençol de borracha, arco de Young, perfurador, pinça e grampos 200 a 205)',
      'Brocas diamantadas e esféricas (alta e baixa rotação)',
      'Ácido fosfórico 37% e sistema adesivo',
      'Resina composta e espátulas de inserção/esculpimento',
      'Fotopolimerizador',
      'Carbono de articulação e pinça Miller',
      'Tiras de lixa e discos de polimento'
    ],
    steps: [
      { id: 'cli-s1', text: 'Anamnese, exame clínico e seleção de cor da resina' },
      { id: 'cli-s2', text: 'Anestesia local e isolamento absoluto do campo operatório' },
      { id: 'cli-s3', text: 'Preparo cavitário e remoção do tecido cariado' },
      { id: 'cli-s4', text: 'Condicionamento ácido (20s em esmalte, 15s em dentina) e lavagem abundante' },
      { id: 'cli-s5', text: 'Secagem suave, aplicação do adesivo e fotopolimerização' },
      { id: 'cli-s6', text: 'Inserção incremental da resina composta (camadas de no máximo 2mm) com fotopolimerização de cada incremento' },
      { id: 'cli-s7', text: 'Checagem oclusal com filme de carbono' },
      { id: 'cli-s8', text: 'Acabamento e polimento final' }
    ]
  },
  {
    id: 'restauracao-classe-ii',
    title: 'Restauração Direta em Resina Composta - Classe II',
    category: 'Dentística',
    materials: [
      'Kit clínico (Espelho, pinça clínica, sonda exploradora)',
      'EPIs completos e barreiras de proteção',
      'Matriz metálica/seccional, cunhas de madeira e anel fixador',
      'Kit de isolamento absoluto completo',
      'Brocas diamantadas e esféricas',
      'Ácido fosfórico 37%, sistema adesivo e resina composta',
      'Fotopolimerizador',
      'Tiras de lixa interproximais e discos de acabamento',
      'Carbono de articulação e pinça Miller'
    ],
    steps: [
      { id: 'clii-s1', text: 'Anestesia local e seleção da cor sob luz natural' },
      { id: 'clii-s2', text: 'Isolamento absoluto do campo operatório' },
      { id: 'clii-s3', text: 'Preparo da cavidade proximal e remoção da lesão' },
      { id: 'clii-s4', text: 'Adaptação da matriz seccional e cunha de madeira no espaço interproximal' },
      { id: 'clii-s5', text: 'Ataque ácido, sistema adesivo e fotopolimerização' },
      { id: 'clii-s6', text: 'Transformação da cavidade Classe II em Classe I construindo a crista marginal' },
      { id: 'clii-s7', text: 'Preenchimento incremental da cavidade oclusal' },
      { id: 'clii-s8', text: 'Remoção do isolamento, ajuste oclusal e polimento interproximal com tiras de lixa' }
    ]
  },
  {
    id: 'restauracao-classe-iii',
    title: 'Restauração Direta em Resina Composta - Classe III',
    category: 'Dentística',
    materials: [
      'Kit clínico e EPIs completos',
      'Fita matriz de poliéster e cunhas de madeira transparentes/anatômicas',
      'Kit de isolamento absoluto',
      'Brocas diamantadas para acesso palatino/lingual',
      'Ácido 37%, adesivo, resina de opaco/dentina/esmalte',
      'Fotopolimerizador e tiras de lixa de poliéster'
    ],
    steps: [
      { id: 'cliii-s1', text: 'Seleção de cor da resina (esmalte e dentina) e anestesia local' },
      { id: 'cliii-s2', text: 'Isolamento absoluto e acesso cavitário (preferencialmente por palatino/lingual)' },
      { id: 'cliii-s3', text: 'Remoção da cárie e confecção de bisel em esmalte na face vestibular' },
      { id: 'cliii-s4', text: 'Colocação da tira de poliéster e cunha de madeira' },
      { id: 'cliii-s5', text: 'Condicionamento ácido, aplicação do adesivo e fotopolimerização' },
      { id: 'cliii-s6', text: 'Reconstrução da concha palatina e estratificação de dentina e esmalte' },
      { id: 'cliii-s7', text: 'Remoção da matriz, checagem oclusal e polimento interproximal' }
    ]
  },
  {
    id: 'restauracao-classe-iv',
    title: 'Restauração Direta em Resina Composta - Classe IV',
    category: 'Dentística',
    materials: [
      'Kit clínico, EPIs completos e escala de cor VITA/Customizada',
      'Guia de silicone (muralha) confeccionada previamente',
      'Kit de isolamento absoluto ou relativo com afastador labial',
      'Brocas para bisel longo e acabamento',
      'Ácido 37%, adesivo e resinas de opaco, dentina, esmalte e efeito',
      'Discos Sof-Lex, pontas de borracha e pastas de polimento de diamante'
    ],
    steps: [
      { id: 'cliv-s1', text: 'Seleção criteriosa de cores e tomada de impressão para muralha de silicone' },
      { id: 'cliv-s2', text: 'Anestesia local e isolamento do campo operatório' },
      { id: 'cliv-s3', text: 'Preparo da cavidade e confecção de bisel longo e infinito na margem de esmalte' },
      { id: 'cliv-s4', text: 'Condicionamento ácido, adesivo e confecção da concha palatina com a muralha de silicone' },
      { id: 'cliv-s5', text: 'Estratificação incremental (mamelões de dentina, opalescência e camada final de esmalte)' },
      { id: 'cliv-s6', text: 'Fotopolimerização final e escultura de macro e microtextura' },
      { id: 'cliv-s7', text: 'Ajuste oclusal em máxima intercuspidação e guia anterior' },
      { id: 'cliv-s8', text: 'Acabamento e polimento de alto brilho' }
    ]
  },
  {
    id: 'restauracao-classe-v',
    title: 'Restauração de Lesão Cervical (Classe V / LCNC)',
    category: 'Dentística',
    materials: [
      'Kit clínico e EPIs completos',
      'Fio retrator gengival (000 ou 00) e hemostático (se necessário)',
      'Brocas esféricas e diamantadas delicadas',
      'Ácido 37%, adesivo autocondicionante/universal e resina fluida/microhíbrida',
      'Espátulas de resina delicadas e fotopolimerizador',
      'Borrachas de polimento cervical'
    ],
    steps: [
      { id: 'clv-s1', text: 'Profilaxia do dente e seleção da cor na região cervical' },
      { id: 'clv-s2', text: 'Anestesia local e inserção do fio retrator no sulco gengival' },
      { id: 'clv-s3', text: 'Limpeza da cavidade/lesão e microabrasão (se necessário)' },
      { id: 'clv-s4', text: 'Hibridização (ataque ácido seletivo em esmalte e sistema adesivo)' },
      { id: 'clv-s5', text: 'Inserção de resina fluida na parede profunda e resina composta na superfície' },
      { id: 'clv-s6', text: 'Fotopolimerização e escultura da anatomia cervical' },
      { id: 'clv-s7', text: 'Remoção do fio retrator e acabamento cervical cuidadoso sem agredir o periodonto' }
    ]
  },

  // --- PERIODONTIA (6 e 7) ---
  {
    id: 'profilaxia-odontologica',
    title: 'Profilaxia Odontológica e Raspagem',
    category: 'Periodontia',
    materials: [
      'EPIs completos com proteção facial/óculos e avental impermeável',
      'Bochecho prévio de Clorexidina 0,12%',
      'Kit clínico e sonda periodontal milimetrada',
      'Aparelho de Ultrassom com pontas ultrassônicas esterilizadas',
      'Conjunto de curetas de Gracey e McCall',
      'Taça de borracha, escova de Robinson e pasta profilática',
      'Fio dental e flúor gel/verniz'
    ],
    steps: [
      { id: 'prof-s1', text: 'Exame clínico e periograma inicial' },
      { id: 'prof-s2', text: 'Remoção de cálculo supra e subgengival com ultrassom e curetas' },
      { id: 'prof-s3', text: 'Polimento coronário com pasta profilática e taça de borracha' },
      { id: 'prof-s4', text: 'Passagem de fio dental interproximal' },
      { id: 'prof-s5', text: 'Aplicação tópica de flúor e orientação de higiene oral' }
    ]
  },
  {
    id: 'raspagem-alisamento-radicular',
    title: 'Raspagem e Alisamento Radicular (RAR)',
    category: 'Periodontia',
    materials: [
      'EPIs completos e avental impermeável',
      'Bochecho prévio de Clorexidina 0,12%',
      'Kit clínico, sonda periodontal OMS e curetas de Gracey específicas (1/2, 5/6, 7/8, 11/12, 13/14)',
      'Pedra de afiar curetas estéril',
      'Seringa com soro fisiológico para irrigação das bolsas',
      'Seringa Carpule e anestésico local'
    ],
    steps: [
      { id: 'rar-s1', text: 'Anestesia infiltrativa da região afetada' },
      { id: 'rar-s2', text: 'Mapeamento e sondagem do nível de inserção clínica' },
      { id: 'rar-s3', text: 'Raspagem profunda subgengival para remoção de cálculo aderido' },
      { id: 'rar-s4', text: 'Alisamento radicular suave até obter superfície limpa e lisa' },
      { id: 'rar-s5', text: 'Irrigação abundante das bolsas periodontais com soro fisiológico' }
    ]
  },

  // --- ENDODONTIA (8 e 9) ---
  {
    id: 'tratamento-endodontico-unirradicular',
    title: 'Tratamento Endodôntico de Dente Unirradicular',
    category: 'Endodontia',
    materials: [
      'Kit clínico e EPIs completos',
      'Kit de isolamento absoluto completo (imprescindível)',
      'Brocas Endo-Z e esféricas para acesso',
      'Limas manuais K-File e/ou sistema mecanizado/rotatório',
      'Localizador apical eletrônico e filme radiográfico/sensor digital',
      'Seringas com Hipoclorito de Sódio (2,5% ou 5,25%) e EDTA 17%',
      'Cimento endodôntico, cones de gutapercha e espaçadores'
    ],
    steps: [
      { id: 'endo-s1', text: 'Anestesia e isolamento absoluto rigoroso do dente' },
      { id: 'endo-s2', text: 'Cirurgia de acesso cavitário e localização do conduto radicular' },
      { id: 'endo-s3', text: 'Odontometria (determinação do Comprimento de Trabalho com localizador apical)' },
      { id: 'endo-s4', text: 'Preparo quimicomecânico do conduto com irrigação abundante' },
      { id: 'endo-s5', text: 'Inativação com EDTA 17% e secagem com pontas de papel absorvente' },
      { id: 'endo-s6', text: 'Seleção e prova do cone principal de gutapercha (radiografia de prova)' },
      { id: 'endo-s7', text: 'Obturação do canal com cimento e gutapercha pela técnica de condensação' },
      { id: 'endo-s8', text: 'Corte da gutapercha, selamento provisório e radiografia final' }
    ]
  },
  {
    id: 'tratamento-endodontico-multirradicular',
    title: 'Tratamento Endodôntico de Dente Multirradicular',
    category: 'Endodontia',
    materials: [
      'Kit clínico, EPIs completos e raio-X de diagnóstico',
      'Kit de isolamento absoluto rigoroso',
      'Brocas esféricas, Endo-Z e Gates-Glidden/Largo',
      'Limas K-File, Hedstroem e/ou Limas Rotatórias/Reciprocantes',
      'Localizador apical, seringas de irrigação, NaOCl e EDTA 17%',
      'Regua milimetrada endodôntica e pontas de papel absorvente',
      'Cones de gutapercha (principais e acessórios), cimento endodôntico e condensadores de Paiva'
    ],
    steps: [
      { id: 'endom-s1', text: 'Anestesia local eficaz e isolamento absoluto' },
      { id: 'endom-s2', text: 'Acesso endodôntico e localização das entradas dos canais (3 a 4 condutos)' },
      { id: 'endom-s3', text: 'Preparo do terço cervical e médio com brocas Gates ou instrumentação mecanizada' },
      { id: 'endom-s4', text: 'Odontometria eletrônica individual de cada canal' },
      { id: 'endom-s5', text: 'Preparo apical quimicomecânico com constante irrigação/aspiração de NaOCl' },
      { id: 'endom-s6', text: 'Protocolo de agitação do EDTA 17% e secagem dos condutos' },
      { id: 'endom-s7', text: 'Obturação dos canais com cones e cimento endodôntico' },
      { id: 'endom-s8', text: 'Limpeza da câmara pulpar, selamento provisório hermético e radiografia final' }
    ]
  },

  // --- CIRURGIA (10, 11 e 12) ---
  {
    id: 'exodontia-simples',
    title: 'Exodontia Simples (Dentes Anteriores e Pré-Molares)',
    category: 'Cirurgia',
    materials: [
      'EPIs estéreis completos e campo operatório estéril',
      'Kit clínico e seringa Carpule com agulhas e tubetes anestésicos',
      'Seringa com soro fisiológico estéril para irrigação',
      'Sindesmotótomo e alavancas retas (fina, média e larga)',
      'Fórceps adequados (Ex: 150, 151, 1, 65)',
      'Cureta de alveóloclis, pinça hemostática e tesoura cirúrgica',
      'Fio de sutura (Seda 3-0 ou Nylon 4-0), porta-agulhas e gaze estéril'
    ],
    steps: [
      { id: 'exo-s1', text: 'Anti-sepsia intra e extra-oral do paciente' },
      { id: 'exo-s2', text: 'Anestesia infiltrativa ou bloqueio regional' },
      { id: 'exo-s3', text: 'Sindesmotomia (descolamento do ligamento periodontal)' },
      { id: 'exo-s4', text: 'Luxação com alavancas e preensão com fórceps' },
      { id: 'exo-s5', text: 'Avulsão do dente e inspeção do alvéolo' },
      { id: 'exo-s6', text: 'Curetagem e irrigação abundante com soro fisiológico' },
      { id: 'exo-s7', text: 'Compressão das tábuas ósseas, sutura e tamponamento com gaze' }
    ]
  },
  {
    id: 'exodontia-molares-siso',
    title: 'Exodontia de Molares e Terceiro Molar',
    category: 'Cirurgia',
    materials: [
      'EPIs estéreis cirúrgicos e paramentação completa da equipe',
      'Bisturi (Lâmina 15 ou 15C) e descolador de Molt',
      'Kit de osteotomia: Peça reta, brocas Zecrya e 702 cirúrgicas',
      'Alavancas de Apexo, alavancas Seldin (direita/esquerda) e fórceps 16/17/18R/18L',
      'Pinça Goiva, lima para osso, soro fisiológico estéril e kit de sutura'
    ],
    steps: [
      { id: 'exm-s1', text: 'Planejamento radiográfico, anestesia do nervo alveolar inferior, lingual e bucal' },
      { id: 'exm-s2', text: 'Incisão e descolamento do retalho mucoperióstico' },
      { id: 'exm-s3', text: 'Osteotomia e odontossecção (se necessário)' },
      { id: 'exm-s4', text: 'Luxação e extração do dente ou fragmentos radiculares' },
      { id: 'exm-s5', text: 'Regularização óssea, limpeza minuciosa e irrigação do alvéolo' },
      { id: 'exm-s6', text: 'Sutura do retalho e orientações pós-operatórias por escrito' }
    ]
  },
  {
    id: 'frenectomia-lingual-labial',
    title: 'Frenectomia (Labial ou Lingual)',
    category: 'Cirurgia',
    materials: [
      'EPIs estéreis e kit cirúrgico',
      'Cabo de bisturi e lâmina 15C',
      'Pinça hemostática curva (Halsted/Mosquito)',
      'Tesoura de Íris / cirúrgica delicada',
      'Soro fisiológico estéril para irrigação',
      'Fio de sutura (Resorvível 4-0 ou Nylon 5-0) e porta-agulhas'
    ],
    steps: [
      { id: 'fren-s1', text: 'Anti-sepsia e anestesia local nas bases do freio' },
      { id: 'fren-s2', text: 'Apreensão do freio com a pinça hemostática' },
      { id: 'fren-s3', text: 'Incisão das inserções superior e inferior ao longo da pinça' },
      { id: 'fren-s4', text: 'Divulsão delicada das fibras musculares do leito cirúrgico' },
      { id: 'fren-s5', text: 'Irrigação com soro e sutura simples por pontos isolados' }
    ]
  },

  // --- ODONTOPEDIATRIA (13 e 14) ---
  {
    id: 'exodontia-deciduos',
    title: 'Exodontia de Dentes Decíduos',
    category: 'Odontopediatria',
    materials: [
      'EPIs completos com abordagem lúdica para o paciente infantil',
      'Anestésico tópico em gel com aroma',
      'Seringa Carpule e tubetes anestésicos',
      'Sindesmotótomo e alavanca reta fina',
      'Fórceps infantis (Ex: 101 ou fórceps adaptados)',
      'Gaze estéril e fio de sutura (se necessário)'
    ],
    steps: [
      { id: 'dec-s1', text: 'Manejo comportamental e aplicação do anestésico tópico (2 minutos)' },
      { id: 'dec-s2', text: 'Anestesia local com técnica suave' },
      { id: 'dec-s3', text: 'Sindesmotomia cuidadosa para preservar o germe do dente permanente' },
      { id: 'dec-s4', text: 'Luxação suave e avulsão do dente decíduo' },
      { id: 'dec-s5', text: 'Inspeção do alvéolo e compressão com gaze para hemostasia' }
    ]
  },
  {
    id: 'selamento-fissuras',
    title: 'Aplicação de Selante de Fossas e Fissuras',
    category: 'Odontopediatria',
    materials: [
      'EPIs completos',
      'Taça de borracha e pedra-pomes sem flúor',
      'Isolamento do campo (relativo com roletes de algodão ou absoluto)',
      'Ácido fosfórico 37%',
      'Selante resinoso ou ionomérico',
      'Fotopolimerizador e carbono de articulação'
    ],
    steps: [
      { id: 'sel-s1', text: 'Limpeza prévia da superfície oclusal com pedra-pomes e água' },
      { id: 'sel-s2', text: 'Isolamento adequado e secagem da superfície dental' },
      { id: 'sel-s3', text: 'Condicionamento ácido por 20 segundos nas fossas e fissuras' },
      { id: 'sel-s4', text: 'Lavagem abundante e secagem rigorosa (aspecto branco-opaco)' },
      { id: 'sel-s5', text: 'Aplicação do selante escoando pelas fissuras sem bolhas' },
      { id: 'sel-s6', text: 'Fotopolimerização e verificação de oclusão com carbono' }
    ]
  },

  // --- PRÓTESE DENTÁRIA (15 e 16) ---
  {
    id: 'moldagem-estudo',
    title: 'Moldagem de Estudo com Alginato',
    category: 'Prótese Dentária',
    materials: [
      'EPIs completos e cuba de borracha com espátula de alginato',
      'Medidores de água e pó de alginato',
      'Alginato de alta precisão',
      'Moldeiras de estoque perfuradas (superior e inferior)',
      'Gesso pedra tipo III ou IV e medidores para vazamento'
    ],
    steps: [
      { id: 'mold-s1', text: 'Provar e selecionar a moldeira de estoque adequada à arcada do paciente' },
      { id: 'mold-s2', text: 'Manipular o alginato respeitando a proporção água/pó recomendada pelo fabricante' },
      { id: 'mold-s3', text: 'Carregar a moldeira uniformemente' },
      { id: 'mold-s4', text: 'Inserção e centralização na boca do paciente até a presa do material' },
      { id: 'mold-s5', text: 'Remoção rápida com movimento único, lavagem e desinfecção do molde' },
      { id: 'mold-s6', text: 'Vazamento imediato com gesso pedra para evitar sinérese/embebição' }
    ]
  },
  {
    id: 'cimentacao-provisoria-definitiva',
    title: 'Cimentação de Prótese Fixa / Coroa',
    category: 'Prótese Dentária',
    materials: [
      'Kit clínico e EPIs completos',
      'Peça de prótese tratada/limpa',
      'Fio retrator e pasta profilática sem óleo',
      'Cimento definitivo (Resinoso ou Ionômero de Vidro) ou Provisório',
      'Espátula de manipulação e bloco de espatulação',
      'Fio dental, sonda e fotopolimerizador (se cimento resinoso)',
      'Carbono de articulação e pinça Miller'
    ],
    steps: [
      { id: 'cim-s1', text: 'Prova seca da peça (checagem de adaptação marginal e ponto de contato)' },
      { id: 'cim-s2', text: 'Ajuste oclusal preliminar e limpeza interna da restauração/coroa' },
      { id: 'cim-s3', text: 'Limpeza e isolamento do elemento dental preparado' },
      { id: 'cim-s4', text: 'Manipulação e aplicação do cimento no interior da peça' },
      { id: 'cim-s5', text: 'Assentamento firme da peça sobre o dente até a presa do cimento' },
      { id: 'cim-s6', text: 'Remoção rigorosa de todos os excessos de cimento interproximais e subgengivais' },
      { id: 'cim-s7', text: 'Checagem final da oclusão' }
    ]
  },

  // --- ORTODONTIA (17) ---
  {
    id: 'colagem-brackets',
    title: 'Colagem Direta de Brackets Ortodônticos',
    category: 'Ortodontia',
    materials: [
      'EPIs completos e afastador labial',
      'Pedra-pomes e taça de borracha para profilaxia prévia',
      'Ácido fosfórico 37% e adesivo ortodôntico (primer)',
      'Resina ortodôntica de fotopolimerização',
      'Kit de brackets, posicionador de hyslex/gauge e pinça porta-bracket',
      'Sonda exploradora para remoção de excessos e fotopolimerizador'
    ],
    steps: [
      { id: 'orto-s1', text: 'Profilaxia com pedra-pomes e inserção do afastador labial' },
      { id: 'orto-s2', text: 'Condicionamento ácido do esmalte por 15 a 20 segundos' },
      { id: 'orto-s3', text: 'Lavagem, secagem e aplicação do primer ortodôntico' },
      { id: 'orto-s4', text: 'Aplicação da resina na base do bracket e posicionamento no dente com o gauge' },
      { id: 'orto-s5', text: 'Remoção de todo o excesso de resina ao redor da base com sonda' },
      { id: 'orto-s6', text: 'Fotopolimerização individual de cada bracket (mesial e distal)' }
    ]
  },

  // --- URGÊNCIA ODONTOLÓGICA (18) ---
  {
    id: 'pulpotomia-urgencia',
    title: 'Pulpotomia / Alívio de Dor de Urgência',
    category: 'Urgência',
    materials: [
      'EPIs completos e kit clínico',
      'Kit de isolamento absoluto',
      'Brocas esféricas e cureta de dentina afiada',
      'Soro fisiológico estéril e bolinhas de algodão estéreis',
      'Medicação intracanal (OTOSPORIN / Formocresol / Hidróxido de Cálcio)',
      'Cimento restaurador provisório (IRM ou Cimento de Ionômero de Vidro)'
    ],
    steps: [
      { id: 'urg-s1', text: 'Anestesia local eficaz e isolamento absoluto do dente' },
      { id: 'urg-s2', text: 'Abertura coronária e remoção do teto da câmara pulpar' },
      { id: 'urg-s3', text: 'Curetagem/remoção da polpa coronária com cureta afiada' },
      { id: 'urg-s4', text: 'Hemostasia da polpa radicular com bolinha de algodão estéril e soro' },
      { id: 'urg-s5', text: 'Aplicação do agente curativo sobre os cotos pulpares' },
      { id: 'urg-s6', text: 'Selamento hermético da cavidade com restaurador provisório' }
    ]
  }
];
export const SITE_URL = "https://pazkidsconference.com";

export const INSTAGRAM = {
  handle: "@pazkidsconference",
  url: "https://www.instagram.com/pazkidsconference/",
};

// Widget de inscrição do e-inscrição. O botão (classe ei-button + data-*) só
// funciona quando o SCRIPT do widget é carregado — copie-o no painel em
// Integrações → Fluxo de Pagamento → Conectar ("primeiro código") e cole a URL
// em widgetScriptSrc. Sem o script, o botão não abre o checkout.
export const EINSCRICAO = {
  eventId: "131583",
  url: "https://checkout.e-inscricao.com",
  apiUrl: "https://www.e-inscricao.com",
  msApiUrl: "https://ei-pay.e-inscricao.com",
  receiptUrl: "https://recibo.e-inscricao.tech",
  participantsUrl: "https://participants.e-inscricao.com",
  widgetScriptSrc:
    "https://cdn.jsdelivr.net/npm/@e-inscricao/widget@0.0.24/widget.js",
};

export const EVENT = {
  name: "PAZ Kids Conference 2027",
  dateLabel: "29 de maio de 2027",
  dateShort: "29.05.27",
  timeLabel: "9h às 21h",
  venue: "Paz Church Barueri",
  address: "Av. Vinte e Seis de Março, 989 — Vila São João",
  city: "Barueri · SP · 06401-050",
  // CTAs do topo (Navbar/Hero/Footer) rolam até a seção de inscrição, onde o
  // visitante vê preço e detalhes antes de abrir o checkout pelo widget.
  registerUrl: "#inscricao",
};

export type Lot = {
  name: string;
  price: string;
  // Rótulo do período (exibido no card) e observação de limite de inscritos.
  periodLabel: string;
  cap?: string;
  // Fim do lote no fuso de Brasília; ausente = vale até o evento. O lote pode
  // encerrar antes se atingir o limite de inscritos (controlado no e-inscrição).
  endISO?: string;
};

// Lotes de inscrição, em ordem. O site vira sozinho na data; o limite de
// inscritos ("e/ou") é aplicado pelo e-inscrição no checkout.
export const LOTS: Lot[] = [
  {
    name: "Lote promocional",
    price: "R$ 99,90",
    periodLabel: "junho",
    cap: "ou 100 inscritos",
    endISO: "2026-06-30T23:59:59-03:00",
  },
  {
    name: "1º lote",
    price: "R$ 130,00",
    periodLabel: "até dezembro",
    cap: "ou 150 inscritos",
    endISO: "2026-12-31T23:59:59-03:00",
  },
  {
    name: "Lote final",
    price: "R$ 150,00",
    periodLabel: "de janeiro até o evento",
  },
];

// Índice do lote vigente hoje (jul–dez/2026). Usado como estado inicial
// SSR-safe; o hook useCurrentLot corrige no cliente conforme a data real.
export const DEFAULT_LOT_INDEX = 1;

// Tamanhos de caravana exibidos como colunas na tabela comparativa.
export const CARAVAN_SIZES = [5, 10, 20] as const;

export type CaravanFeature = {
  label: string;
  // Tamanhos de caravana que já garantem este benefício (cumulativo — quem
  // atinge 20 pessoas mantém os benefícios das faixas anteriores).
  sizes: number[];
};

export const CARAVAN_FEATURES: CaravanFeature[] = [
  {
    label: "R$ 20,00 de desconto por pessoa",
    sizes: [5, 10, 20],
  },
  {
    label: "Entrada do líder é grátis",
    sizes: [10, 20],
  },
  {
    label: "Brinde personalizado do PAZ Kids para o líder",
    sizes: [20],
  },
];

export type Speaker = {
  name: string;
  role: string;
  accent: string; // tailwind color token used for the card flourish
  photo?: string; // /speakers/*.jpg — falls back to initials if missing
};

export const SPEAKERS: Speaker[] = [
  {
    name: "Pr. Aaron Helland",
    role: "Líder Nacional · PAZ Kids",
    accent: "purple",
    photo: "/speakers/aaron-helland.jpg",
  },
  {
    name: "Pra. Esther Helland",
    role: "Escritora · Líder Nacional PAZ Kids",
    accent: "coral",
    photo: "/speakers/esther-helland.jpg",
  },
  {
    name: "Pr. Abe Huber",
    role: "Escritor · Pr. Sênior Paz São Paulo",
    accent: "sky",
    photo: "/speakers/abe-huber.jpg",
  },
  {
    name: "Pra. Rebecca Hrubik",
    role: "Líder · PAZ International",
    accent: "sun",
    photo: "/speakers/rebecca-hrubik.jpg",
  },
  {
    name: "Pra. Wilzy Adorno",
    role: "Pastora · Atitude Kids",
    accent: "purple",
    photo: "/speakers/wilzy-adorno.jpg",
  },
];

import type { IconName } from "@/components/ui/Icon";

export type Audience = {
  icon: IconName;
  title: string;
  desc: string;
  accent: string;
};

export const AUDIENCE: Audience[] = [
  {
    icon: "hand",
    title: "Voluntários",
    desc: "Quem serve nos ministérios infantis e quer ir além.",
    accent: "sky",
  },
  {
    icon: "users",
    title: "Pais & responsáveis",
    desc: "Pais, mães e responsáveis que discipulam em casa.",
    accent: "coral",
  },
  {
    icon: "graduation",
    title: "Professores & educadores",
    desc: "Educadores cristãos que formam a próxima geração.",
    accent: "sun",
  },
  {
    icon: "compass",
    title: "Líderes & mentores",
    desc: "Líderes, discipuladores e mentores de crianças.",
    accent: "mint",
  },
  {
    icon: "heart",
    title: "Avós, tios & cuidadores",
    desc: "Quem ama e cuida das crianças com o coração.",
    accent: "grape",
  },
];

export type Faq = {
  q: string;
  a: string;
};

export const FAQS: Faq[] = [
  {
    q: "Quando e onde acontece a PAZ Kids Conference 2027?",
    a: "No dia 29 de maio de 2027, das 9h às 21h (horário previsto), na Paz Church Barueri — Av. Vinte e Seis de Março, 989, Vila São João, Barueri/SP.",
  },
  {
    q: "Para quem é a conferência?",
    a: "Para pastores, líderes, professores, pais e voluntários que servem no ministério infantil e querem se aprofundar em formar a próxima geração.",
  },
  {
    q: "Quanto custa a inscrição?",
    a: "O 1º lote está disponível por R$ 130,00 até dezembro (ou enquanto durarem os 150 ingressos do lote). Depois, entra o lote final por R$ 150,00. Vindo em caravana, todos ganham R$ 20,00 de desconto a partir de 5 inscritos.",
  },
  {
    q: "Como funciona a caravana?",
    a: "Junte seu grupo: a partir de 5 pessoas, todos ganham R$ 20,00 de desconto no ingresso. Com 10 inscritos, o líder da caravana ganha a entrada; com 20, além da entrada o líder recebe um brinde exclusivo do PAZ Kids.",
  },
  {
    q: "O que está incluído na inscrição?",
    a: "A inscrição dá acesso a toda a programação principal da PAZ Kids Conference 2027.",
  },
  {
    q: "Como faço a minha inscrição?",
    a: "As inscrições são feitas pelo e-inscrição, com pagamento 100% seguro. É só clicar em “Inscreva-se já” aqui no site — a confirmação chega no seu e-mail.",
  },
  {
    q: "Posso cancelar ou transferir minha inscrição?",
    a: "Compras feitas pela internet podem ser canceladas em até 7 dias após o pagamento, com reembolso integral. Precisa passar sua inscrição para outra pessoa? Chama a gente no Instagram @pazkidsconference que a equipe orienta a transferência.",
  },
];

export const NAV_LINKS = [
  { label: "O evento", href: "#sobre" },
  { label: "Pra quem é", href: "#para-quem" },
  { label: "Palestrantes", href: "#palestrantes" },
  { label: "Local & data", href: "#local" },
  { label: "Dúvidas", href: "#faq" },
];

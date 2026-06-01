export const SITE_URL = "https://pazkidsconference.com";

export const EVENT = {
  name: "PAZ Kids Conference 27",
  dateLabel: "29 de maio de 2027",
  dateShort: "29.05.27",
  timeLabel: "9h às 21h",
  venue: "Paz Church Barueri",
  address: "Av. Vinte e Seis de Março, 989 — Vila São João",
  city: "Barueri · SP · 06401-050",
  promoLotPrice: "R$ 99,90",
  promoLotDeadline: "20 de junho",
  // Replace with the real e-inscrição link when available — inscrições já abrem
  // com o site no ar.
  registerUrl: "#inscricao",
};

export type Speaker = {
  name: string;
  role: string;
  accent: string; // tailwind color token used for the card flourish
  photo?: string; // /speakers/*.jpg — falls back to initials if missing
};

export const SPEAKERS: Speaker[] = [
  {
    name: "Pr. Aaron Helland",
    role: "Pastor",
    accent: "purple",
    photo: "/speakers/aaron-helland.jpg",
  },
  {
    name: "Pra. Esther Helland",
    role: "Pastora",
    accent: "coral",
    photo: "/speakers/esther-helland.png",
  },
  {
    name: "Pr. Abe Huber",
    role: "Pastor",
    accent: "sky",
    photo: "/speakers/abe-huber.jpg",
  },
  {
    name: "Pra. Rebecca Hrubik",
    role: "Pastora",
    accent: "sun",
    photo: "/speakers/rebecca-hrubik.jpg",
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
    q: "Quando e onde acontece a PAZ Kids Conference 27?",
    a: "No dia 29 de maio de 2027, das 9h às 21h (horário previsto), na Paz Church Barueri — Av. Vinte e Seis de Março, 989, Vila São João, Barueri/SP.",
  },
  {
    q: "Para quem é a conferência?",
    a: "Para pastores, líderes, professores, pais e voluntários que servem no ministério infantil e querem se aprofundar em formar a próxima geração.",
  },
  {
    q: "Quanto custa a inscrição?",
    a: "O lote promocional sai por R$ 99,90 e fica disponível até 20 de junho. As vagas são limitadas, então quanto antes melhor.",
  },
  {
    q: "O que está incluído na inscrição?",
    a: "A inscrição dá acesso a toda a programação principal da PAZ Kids Conference 27.",
  },
  {
    q: "Como faço a minha inscrição?",
    a: "As inscrições são feitas pelo e-inscrição. É só clicar em “Fazer inscrição” aqui no site para garantir sua vaga no lote promocional.",
  },
];

export const NAV_LINKS = [
  { label: "O evento", href: "#sobre" },
  { label: "Pra quem é", href: "#para-quem" },
  { label: "Palestrantes", href: "#palestrantes" },
  { label: "Local & data", href: "#local" },
  { label: "Dúvidas", href: "#faq" },
];

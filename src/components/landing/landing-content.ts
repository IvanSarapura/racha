import {
  BarChart3,
  Blocks,
  Coins,
  Database,
  Flame,
  PiggyBank,
  Plug,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react';

// Contenido estático de la landing, hoisted a nivel módulo
// (vercel-react-best-practices: rendering-hoist-jsx / datos fuera del render).

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const FEATURES: Feature[] = [
  {
    icon: Blocks,
    title: 'Capa de behavioral design',
    description:
      'No reemplazamos tu scoring: lo potenciamos. Racha se integra vía API y se activa automáticamente con cada microcrédito. Tu usuario no instala nada nuevo.',
  },
  {
    icon: Flame,
    title: 'Sistema de 12 meses',
    description:
      'Cada mes tiene un propósito conductual: del vencimiento flexible del mes 2 a la cobertura por atraso del mes 10 y la tasa -3% del mes 12.',
  },
  {
    icon: Coins,
    title: 'Costo mínimo, valor máximo',
    description:
      'La mayoría de los hitos le cuestan $0 a la fintech: progreso visual, niveles y notificaciones. Los beneficios con costo tienen topes configurables desde la API.',
  },
  {
    icon: BarChart3,
    title: 'Reporte conductual del usuario',
    description:
      'Al mes 12 sabés cómo paga tu usuario, no solo si pagó: qué lo frena, qué lo motiva y qué probabilidad tiene de pagar un crédito mayor.',
  },
];

export type Step = {
  number: string;
  title: string;
  description: string;
};

export const STEPS: Step[] = [
  {
    number: '01',
    title: 'Integrás',
    description:
      'Conectás la API de Racha en días, no en meses. El widget aparece dentro de tu app, con tu marca, y se activa solo cuando el usuario toma un microcrédito.',
  },
  {
    number: '02',
    title: 'Tus usuarios construyen su racha',
    description:
      'Cada cuota pagada a término suma un mes y desbloquea beneficios concretos: cashback, reintegros por pago anticipado y una tasa menor al completar el año.',
  },
  {
    number: '03',
    title: 'Tu cartera mejora',
    description:
      'Menos mora, usuarios que se quedan y un reporte conductual por cada graduado. Cada punto de mora recuperado vale órdenes de magnitud más que el fee.',
  },
];

export type Metric = {
  icon: LucideIcon;
  value: string;
  label: string;
  badge: string;
};

// Datos del problema con fuente pública verificable (documento de pitch).
// El campo badge indica la fuente.
export const PROBLEM_STATS: Metric[] = [
  {
    icon: TrendingUp,
    value: '~30%',
    label:
      'de mora en billeteras virtuales de jóvenes — el triple que hace un año y medio',
    badge: 'BCRA',
  },
  {
    icon: BarChart3,
    value: '5,5% → 14,7%',
    label: 'saltó el ratio de irregularidad de Mercado Pago en el último año',
    badge: 'BCRA · 1816',
  },
  {
    icon: Users,
    value: '40%',
    label:
      'de los jóvenes menores de 25 con crédito ya tiene problemas para pagarlo',
    badge: 'INDEC',
  },
];

// Evidencia de que el behavioral design aplicado a finanzas funciona.
export const VALIDATION_STATS: Metric[] = [
  {
    icon: Flame,
    value: '82%',
    label:
      'de los consumidores afirma que los programas de fidelidad influyen en su gasto',
    badge: 'EY LATAM',
  },
  {
    icon: TrendingUp,
    value: '+15–25%',
    label:
      'de ingresos recurrentes con una estrategia de lealtad bien implementada',
    badge: 'EY · Pomelo',
  },
  {
    icon: Users,
    value: '12M+',
    label:
      'usuarios acumula Tala acompañando crédito sin historial en mercados como el argentino',
    badge: 'Tala · 2025',
  },
];

// Los tres argumentos de venta a la fintech (documento de pitch).
export const GAINS: Feature[] = [
  {
    icon: PiggyBank,
    title: 'Recuperás cartera',
    description:
      'Cada punto de mora recuperado en una cartera grande son miles de millones. A Racha le pagás una fracción de eso.',
  },
  {
    icon: Users,
    title: 'Retenés al usuario más caro de adquirir',
    description:
      'El joven sin historial es el más costoso de captar. Racha lo engancha 12 meses — y su historial, su nivel y su score lo anclan a tu app para el próximo crédito.',
  },
  {
    icon: Database,
    title: 'Datos que tus competidores no tienen',
    description:
      'Al mes 12 accedés primero al reporte conductual de tus usuarios: podés ofrecerles el crédito grande antes que cualquier otro.',
  },
];

export type SegmentBadge = {
  icon: LucideIcon;
  label: string;
};

export const SEGMENTS: SegmentBadge[] = [
  { icon: Plug, label: 'Billeteras' },
  { icon: Blocks, label: 'Neobancos' },
  { icon: TrendingUp, label: 'Microcréditos' },
];

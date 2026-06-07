import {
  BarChart3,
  Blocks,
  BookOpen,
  Coins,
  Flame,
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
      'No reemplazamos tu sistema: nos integramos vía API encima de tu scoring y tu app. Tu usuario no instala nada nuevo.',
  },
  {
    icon: Flame,
    title: 'Sistema de 12 meses',
    description:
      'Cada mes, un hito con propósito conductual: del vencimiento flexible del mes 2 a la tasa -3% del mes 12.',
  },
  {
    icon: Coins,
    title: 'Costo mínimo, valor máximo',
    description:
      'La mayoría de los hitos le cuestan $0 a la fintech. El valor percibido por el usuario es máximo.',
  },
  {
    icon: BarChart3,
    title: 'Datos que mejoran tu scoring',
    description:
      'La constancia de pago genera señales de comportamiento que enriquecen tu modelo de riesgo.',
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
      'Conectás la API de Racha en días, no en meses. El widget aparece dentro de tu app, con tu marca.',
  },
  {
    number: '02',
    title: 'Tus usuarios construyen su racha',
    description:
      'Cada cuota pagada a término avanza una racha de 12 meses que desbloquea beneficios concretos.',
  },
  {
    number: '03',
    title: 'Tu cartera mejora',
    description:
      'Menos mora, más retención y mejores datos de comportamiento para tu scoring.',
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
    icon: BookOpen,
    value: 'Validado',
    label:
      'la gamificación fintech mejora adopción, transacciones y retención de largo plazo',
    badge: 'Wiley 2025',
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

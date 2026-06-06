import {
  BarChart3,
  Blocks,
  Flame,
  Palette,
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
    title: 'Integración embebida',
    description:
      'Una tarjeta debajo del balance. SDK liviano, sin rehacer tu UI ni tu flujo de onboarding.',
  },
  {
    icon: Flame,
    title: 'Incentivos por racha',
    description:
      'Rachas de pago que desbloquean beneficios, recompensas y mejoras de crédito para tus usuarios.',
  },
  {
    icon: BarChart3,
    title: 'Señal de riesgo',
    description:
      'La constancia de pago es una señal de comportamiento que enriquece tu scoring crediticio.',
  },
  {
    icon: Palette,
    title: 'Listo para marca blanca',
    description:
      'Se adapta a tu identidad visual con tokens de tema. Tu app, tu marca, nuestros incentivos.',
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
      'Sumás el widget de Racha debajo del balance con unas líneas de código.',
  },
  {
    number: '02',
    title: 'Tus usuarios participan',
    description:
      'Mantienen su racha de pagos y ven su progreso semanal dentro de tu app.',
  },
  {
    number: '03',
    title: 'Crecés',
    description:
      'Más retención, más engagement y mejor lectura de riesgo en tu cartera.',
  },
];

export type Metric = {
  icon: LucideIcon;
  value: string;
  label: string;
  badge: string;
};

export const METRICS: Metric[] = [
  {
    icon: TrendingUp,
    value: '+38%',
    label: 'retención semanal',
    badge: 'engagement',
  },
  {
    icon: Flame,
    value: '+25%',
    label: 'pagos a término',
    badge: 'constancia',
  },
  {
    icon: Users,
    value: '5.000',
    label: 'usuarios analizados',
    badge: '18–35 años',
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

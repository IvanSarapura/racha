import {
  CalendarClock,
  Coins,
  Flame,
  Medal,
  PiggyBank,
  Shield,
  TrendingUp,
  Trophy,
  type LucideIcon,
} from 'lucide-react';

// Contenido estático de la experiencia Racha, hoisted a nivel módulo.
// El contenido del home de Mercado Pago vive en mercado-pago/mp-content.ts.

export type Incentive = {
  // Mes de racha en el que se desbloquea (1–12)
  month: number;
  icon: LucideIcon;
  title: string;
};

// Un incentivo por mes de racha, en el orden del documento
// backend/app/data/incentivos_racha.csv. El estado (desbloqueado /
// en progreso / bloqueado) se deriva de PAID_MONTHS en render.
export const INCENTIVES: Incentive[] = [
  { month: 1, icon: Flame, title: 'Racha activada' },
  { month: 2, icon: CalendarClock, title: 'Mover vencimiento 72hs' },
  { month: 3, icon: TrendingUp, title: 'Barra de progreso' },
  { month: 4, icon: TrendingUp, title: 'Barra al 33%' },
  { month: 5, icon: Coins, title: 'Cashback 10%' },
  { month: 6, icon: PiggyBank, title: 'Reintegro por pago anticipado' },
  { month: 7, icon: TrendingUp, title: 'Barra al 58%' },
  { month: 8, icon: Medal, title: 'Nivel Plata' },
  { month: 9, icon: TrendingUp, title: 'Barra al 75%' },
  { month: 10, icon: Shield, title: 'Escudo de racha' },
  { month: 11, icon: TrendingUp, title: 'Barra al 91%' },
  { month: 12, icon: Trophy, title: 'Tasa -3% + score exportable' },
];

// La racha es mensual sobre una ventana anual: una cuota pagada por mes,
// 12 meses para completar el objetivo (ene–dic).
export const MONTH_LABELS = [
  'E',
  'F',
  'M',
  'A',
  'M',
  'J',
  'J',
  'A',
  'S',
  'O',
  'N',
  'D',
];

// Nombres completos para derivar el mes pendiente según el progreso
export const MONTH_NAMES = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
];

// Estado inicial de la demo: 5 de 12 cuotas pagadas (ene–may). El valor
// vivo es estado en DemoShell (los círculos de mes lo actualizan al clic).
export const INITIAL_PAID_MONTHS = 5;

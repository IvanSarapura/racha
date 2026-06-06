import { Check, Lock, TrendingUp, type LucideIcon } from 'lucide-react';

// Contenido estático de la experiencia Racha, hoisted a nivel módulo.
// El contenido del home de Mercado Pago vive en mercado-pago/mp-content.ts.

export type RewardStatus = 'unlocked' | 'in-progress' | 'next';

export type Reward = {
  icon: LucideIcon;
  title: string;
  status: RewardStatus;
  statusLabel: string;
};

export const REWARDS: Reward[] = [
  {
    icon: Check,
    title: 'Cashback 2%',
    status: 'unlocked',
    statusLabel: 'desbloqueado',
  },
  {
    icon: TrendingUp,
    title: '+$5.000 de límite',
    status: 'in-progress',
    statusLabel: 'en progreso',
  },
  {
    icon: Lock,
    title: 'Tasa preferencial',
    status: 'next',
    statusLabel: 'próximo beneficio',
  },
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

// 5 de 12 cuotas pagadas (ene–may); la de junio todavía está pendiente
export const PAID_MONTHS = 5;

export const STREAK_MONTHS = 5;

// Mes en curso, cuya cuota falta pagar
export const PENDING_MONTH = 'junio';

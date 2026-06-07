import {
  CalendarClock,
  Coins,
  CreditCard,
  Flame,
  Medal,
  PiggyBank,
  Shield,
  Ticket,
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

// Un incentivo por mes de racha. Curado a partir de
// backend/app/data/incentivos_racha.csv: los hitos de "barra al X%" se
// reemplazaron por recompensas chicas pero tangibles (bajo costo para la
// fintech, suficiente incentivo para no caer en mora) y los niveles
// escalan Bronce → Plata → Oro. El estado (desbloqueado / en progreso /
// bloqueado) se deriva de paidMonths en render.
export const INCENTIVES: Incentive[] = [
  { month: 1, icon: Flame, title: 'Racha activada' },
  { month: 2, icon: CalendarClock, title: 'Mover vencimiento 72hs' },
  { month: 3, icon: Medal, title: 'Nivel Bronce' },
  { month: 4, icon: CreditCard, title: '3 cuotas sin interés en una compra' },
  { month: 5, icon: Coins, title: 'Cashback 10%' },
  { month: 6, icon: PiggyBank, title: 'Reintegro por pago anticipado' },
  { month: 7, icon: Ticket, title: 'Cupones de descuento' },
  { month: 8, icon: Medal, title: 'Nivel Plata' },
  { month: 9, icon: TrendingUp, title: 'Aumento de límite' },
  { month: 10, icon: Shield, title: 'Cobertura por atraso' },
  { month: 11, icon: Medal, title: 'Nivel Oro' },
  { month: 12, icon: Trophy, title: 'Tasa -3%' },
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

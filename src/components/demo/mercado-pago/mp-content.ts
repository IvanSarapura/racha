import {
  ArrowDownToLine,
  ArrowRightLeft,
  ArrowUpFromLine,
  AtSign,
  CreditCard,
  Home,
  Menu,
  Store,
  type LucideIcon,
} from 'lucide-react';

// Contenido estático de la simulación de Mercado Pago, hoisted a nivel módulo.
// Todo lo que se ve en el home de MP se edita acá, no en los componentes.

export const MP_USER = { name: 'Valentina', initials: 'VA' } as const;

export const MP_BALANCE = '$ 124.530,00';

export type MpQuickAction = {
  icon: LucideIcon;
  label: string;
};

export const MP_QUICK_ACTIONS: MpQuickAction[] = [
  { icon: ArrowDownToLine, label: 'Ingresar' },
  { icon: ArrowRightLeft, label: 'Transferir' },
  { icon: ArrowUpFromLine, label: 'Sacar' },
  { icon: AtSign, label: 'Tu alias' },
];

export const MP_PREPAID_CARD = {
  brand: 'mercado pago',
  lastDigits: '4213',
  subtitle: 'Tarjeta Prepaga',
} as const;

export const MP_LOAN_OFFER = {
  title: 'Préstamos',
  description: 'Tenés $ 300.000 disponibles',
} as const;

export type MpNavItem = {
  icon: LucideIcon;
  label: string;
};

// El botón central de QR se renderiza aparte; dos items a cada lado.
export const MP_NAV_LEFT: MpNavItem[] = [
  { icon: Home, label: 'Principal' },
  { icon: Store, label: 'Tienda' },
];

export const MP_NAV_RIGHT: MpNavItem[] = [
  { icon: CreditCard, label: 'Créditos' },
  { icon: Menu, label: 'Más' },
];

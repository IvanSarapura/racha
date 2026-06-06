'use client';

import { createContext, use } from 'react';

export type DemoScreen = 'home' | 'racha';

export type DemoContextValue = {
  screen: DemoScreen;
  open: () => void;
  back: () => void;
  // Cuotas pagadas (0–12); clic en un círculo de mes simula pagar hasta ahí
  paidMonths: number;
  payUpToMonth: (month: number) => void;
};

export const DemoContext = createContext<DemoContextValue | null>(null);

// React 19: use() en lugar de useContext (vercel-composition-patterns).
export function useDemo() {
  const ctx = use(DemoContext);
  if (!ctx) {
    throw new Error('useDemo debe usarse dentro de <DemoShell>');
  }
  return ctx;
}

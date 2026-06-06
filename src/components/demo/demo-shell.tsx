'use client';

import { useState } from 'react';

import { DemoContext, type DemoScreen } from './demo-context';
import { INITIAL_PAID_MONTHS } from './demo-content';

// Compound component: el provider es el único que sabe cómo se maneja el
// estado de navegación de la demo (state-lift-state / state-decouple-implementation).
export function DemoShell({ children }: { children: React.ReactNode }) {
  const [screen, setScreen] = useState<DemoScreen>('home');
  // Vive acá (y no en RachaScreen) para que el home refleje el progreso
  const [paidMonths, setPaidMonths] = useState(INITIAL_PAID_MONTHS);

  const open = () => setScreen('racha');
  const back = () => setScreen('home');
  // Simula haber pagado todas las cuotas hasta ese mes inclusive
  const payUpToMonth = (month: number) => setPaidMonths(month);

  return (
    <DemoContext value={{ screen, open, back, paidMonths, payUpToMonth }}>
      {children}
    </DemoContext>
  );
}

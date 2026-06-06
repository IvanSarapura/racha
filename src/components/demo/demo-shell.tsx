'use client';

import { useState } from 'react';

import { DemoContext, type DemoScreen } from './demo-context';

// Compound component: el provider es el único que sabe cómo se maneja el
// estado de navegación de la demo (state-lift-state / state-decouple-implementation).
export function DemoShell({ children }: { children: React.ReactNode }) {
  const [screen, setScreen] = useState<DemoScreen>('home');

  const open = () => setScreen('racha');
  const back = () => setScreen('home');

  return <DemoContext value={{ screen, open, back }}>{children}</DemoContext>;
}

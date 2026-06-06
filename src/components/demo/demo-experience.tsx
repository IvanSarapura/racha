'use client';

import { DemoShell } from './demo-shell';
import { useDemo } from './demo-context';
import { MpHomeScreen } from './mercado-pago/mp-home-screen';
import { PhoneFrame } from './phone-frame';
import { RachaScreen } from './racha-screen';

// Pantalla actual derivada en render, sin effects; ternario, no &&
// (rerender-derived-state-no-effect, rendering-conditional-render).
function DemoScreens() {
  const { screen } = useDemo();

  return screen === 'racha' ? (
    <div
      key="racha"
      className="animate-in fade-in slide-in-from-right h-full duration-300"
    >
      <RachaScreen />
    </div>
  ) : (
    <div
      key="home"
      className="animate-in fade-in slide-in-from-left h-full duration-300"
    >
      <MpHomeScreen />
    </div>
  );
}

export function DemoExperience() {
  return (
    <DemoShell>
      <PhoneFrame>
        <DemoScreens />
      </PhoneFrame>
    </DemoShell>
  );
}

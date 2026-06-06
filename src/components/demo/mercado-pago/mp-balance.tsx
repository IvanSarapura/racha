'use client';

import { ChevronRight, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

import { MP_BALANCE } from './mp-content';

// Bloque de saldo del home de MP. Estado puramente local: no se eleva
// porque ninguna otra pantalla lo usa.
export function MpBalance() {
  const [balanceHidden, setBalanceHidden] = useState(false);

  return (
    <div className="flex flex-col gap-1 px-4 pt-4 pb-2">
      <div className="flex items-center gap-0.5 text-sm text-zinc-500">
        Dinero disponible
        <ChevronRight className="size-4" aria-hidden />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-semibold tracking-tight text-zinc-900 tabular-nums">
          {balanceHidden ? '$ ••••••' : MP_BALANCE}
        </span>
        <Button
          variant="ghost"
          size="icon-sm"
          className="text-zinc-500"
          aria-pressed={balanceHidden}
          aria-label={balanceHidden ? 'Mostrar saldo' : 'Ocultar saldo'}
          onClick={() => setBalanceHidden(hidden => !hidden)}
        >
          {balanceHidden ? <EyeOff aria-hidden /> : <Eye aria-hidden />}
        </Button>
      </div>
    </div>
  );
}

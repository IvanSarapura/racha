import { ChevronRight, HandCoins } from 'lucide-react';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { RachaIntegrationCard } from '../racha-integration-card';
import { MpBalance } from './mp-balance';
import { MpBottomNav } from './mp-bottom-nav';
import { MP_LOAN_OFFER } from './mp-content';
import { MpHeader } from './mp-header';
import { MpPrepaidCard } from './mp-prepaid-card';
import { MpQuickActions } from './mp-quick-actions';

// Pantalla 1: réplica del home de Mercado Pago. Composición de bloques
// presentacionales; el único estado vive en MpBalance.
export function MpHomeScreen() {
  return (
    <div className="bg-mp-surface flex h-full flex-col">
      <MpHeader />

      {/* scrollbar-none: un teléfono real no muestra barra de scroll */}
      <div className="scrollbar-none flex flex-1 flex-col gap-3 overflow-y-auto pb-3">
        {/* Saldo + accesos rápidos comparten la misma superficie blanca */}
        <div className="bg-white shadow-sm">
          <MpBalance />
          <MpQuickActions />
          {/* Tarjeta prepaga, debajo de los accesos rápidos */}
          <div className="px-4 pb-4">
            <MpPrepaidCard />
          </div>
        </div>

        {/* Feed: la tarjeta de Racha es el widget que se está demostrando */}
        <div className="flex flex-col gap-3 px-4">
          <RachaIntegrationCard />

          <Card className="gap-1 border-0 py-4 shadow-sm">
            <CardHeader className="px-4">
              <CardTitle className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <HandCoins className="text-mp-blue size-4" aria-hidden />
                  {MP_LOAN_OFFER.title}
                </span>
                <ChevronRight className="size-4 text-zinc-400" aria-hidden />
              </CardTitle>
              <CardDescription>{MP_LOAN_OFFER.description}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      <MpBottomNav />
    </div>
  );
}

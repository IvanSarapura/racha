import { Bell, Search } from 'lucide-react';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';

import { MP_USER } from './mp-content';

// Barra superior amarilla de Mercado Pago, puramente presentacional.
// pt-12 deja lugar a la status bar superpuesta del PhoneFrame.
export function MpHeader() {
  return (
    <div className="bg-mp-yellow flex items-center gap-3 px-4 pt-12 pb-3">
      <Avatar className="size-9">
        <AvatarFallback className="bg-white/70 text-xs font-semibold text-zinc-800">
          {MP_USER.initials}
        </AvatarFallback>
      </Avatar>
      {/* Buscador simulado: no es un input real, solo parte de la escenografía */}
      <div className="flex h-9 flex-1 items-center gap-2 rounded-full bg-white px-3 shadow-sm">
        <Search className="size-4 text-zinc-400" aria-hidden />
        <span className="text-sm text-zinc-400">Buscar en Mercado Pago</span>
      </div>
      <Bell className="size-5 text-zinc-800" aria-hidden />
    </div>
  );
}

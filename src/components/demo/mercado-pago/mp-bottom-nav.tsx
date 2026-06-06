import { QrCode } from 'lucide-react';

import { cn } from '@/lib/utils';

import { MP_NAV_LEFT, MP_NAV_RIGHT, type MpNavItem } from './mp-content';

// Item de la barra inferior. Decorativo: la demo no navega por acá.
function NavItem({ item, active }: { item: MpNavItem; active?: boolean }) {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-0.5',
        active ? 'text-mp-blue' : 'text-zinc-500',
      )}
    >
      <item.icon className="size-5" aria-hidden />
      <span className="text-[10px]">{item.label}</span>
    </div>
  );
}

// Barra de navegación inferior de MP, con el botón central de QR.
export function MpBottomNav() {
  return (
    <div className="grid grid-cols-5 items-center border-t border-zinc-200 bg-white px-2 pt-2 pb-3">
      {MP_NAV_LEFT.map((item, index) => (
        <NavItem key={item.label} item={item} active={index === 0} />
      ))}
      <div className="flex justify-center">
        <div className="bg-mp-blue -mt-6 flex size-12 items-center justify-center rounded-full text-white shadow-lg">
          <QrCode className="size-6" aria-hidden />
        </div>
      </div>
      {MP_NAV_RIGHT.map(item => (
        <NavItem key={item.label} item={item} />
      ))}
    </div>
  );
}

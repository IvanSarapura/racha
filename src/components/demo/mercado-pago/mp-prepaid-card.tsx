import { MP_PREPAID_CARD } from './mp-content';

// La tarjeta prepaga celeste de Mercado Pago, puramente presentacional.
// Es escenografía: dibuja chip, número y círculos Mastercard con CSS, sin assets.
export function MpPrepaidCard() {
  return (
    <div className="bg-mp-celeste relative flex h-28 flex-col justify-between overflow-hidden rounded-xl p-4 text-white shadow-sm">
      {/* Brillo decorativo, como el degradado de la tarjeta real */}
      <div className="absolute -top-12 -right-8 size-36 rounded-full bg-white/15" />

      <span className="text-sm font-semibold tracking-tight italic">
        {MP_PREPAID_CARD.brand}
      </span>

      {/* Chip */}
      <div className="h-5 w-7 rounded-sm bg-yellow-200/90" />

      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-0.5">
          <span className="text-xs font-medium tracking-widest tabular-nums">
            •••• {MP_PREPAID_CARD.lastDigits}
          </span>
          <span className="text-[10px] uppercase opacity-90">
            {MP_PREPAID_CARD.subtitle}
          </span>
        </div>
        {/* Círculos Mastercard */}
        <div className="flex" aria-hidden>
          <div className="size-6 rounded-full bg-red-500/90" />
          <div className="-ml-2.5 size-6 rounded-full bg-amber-400/90" />
        </div>
      </div>
    </div>
  );
}

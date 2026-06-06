// Chrome del dispositivo, puramente presentacional: composición vía children
// (patterns-children-over-render-props). Sin 'use client' para mantenerlo portable.
export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-foreground/90 w-full max-w-[22rem] rounded-[2.5rem] p-2 shadow-2xl">
      {/* `light` (globals.css): la app simulada siempre se ve en tema claro,
          como una billetera real, aunque el sitio esté en dark mode. */}
      <div className="light relative h-168 overflow-hidden rounded-4xl bg-white text-zinc-900">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-black/90" />
        {/* Status bar superpuesta: cada pantalla pinta el fondo que queda
            detrás (p. ej. el amarillo de Mercado Pago) y deja pt-12 libre */}
        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 pt-3 pb-1">
          <span className="text-xs font-medium tabular-nums">9:41</span>
          <span className="text-xs opacity-50">●●●</span>
        </div>
        {/* Viewport de la app simulada: overflow-hidden recorta las
            animaciones de navegación dentro del frame */}
        <div className="h-full overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

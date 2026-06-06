import { MP_QUICK_ACTIONS } from './mp-content';

// Accesos rápidos del home de MP: círculos grises con ícono azul.
export function MpQuickActions() {
  return (
    <div className="grid grid-cols-4 gap-2 px-4 pt-2 pb-4">
      {MP_QUICK_ACTIONS.map(action => (
        <div key={action.label} className="flex flex-col items-center gap-1.5">
          <div className="flex size-12 items-center justify-center rounded-full bg-zinc-100">
            <action.icon className="text-mp-blue size-5" aria-hidden />
          </div>
          <span className="text-center text-xs text-zinc-600">
            {action.label}
          </span>
        </div>
      ))}
    </div>
  );
}

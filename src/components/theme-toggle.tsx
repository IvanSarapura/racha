'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';

import { Button } from '@/components/ui/button';

// Store vacío: el valor nunca cambia post-hidratación, solo difiere entre
// servidor (false) y cliente (true).
const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  // resolvedTheme es undefined en SSR (el servidor no conoce el tema del
  // usuario), por lo que un label derivado de él hidrata distinto en clientes
  // con dark mode. useSyncExternalStore hidrata con el snapshot del servidor
  // (label neutro) y re-renderiza con el dinámico ya en el cliente. Los
  // íconos no lo necesitan: alternan por CSS con la clase `dark`.
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const label = isDark ? 'Activar modo claro' : 'Activar modo oscuro';

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={mounted ? label : 'Cambiar tema'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      <Sun className="size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  );
}

'use client';

import { useRef, useState } from 'react';

import { ArrowLeft, Flame } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

import { useDemo } from './demo-context';
import { INCENTIVES, MONTH_LABELS, MONTH_NAMES } from './demo-content';

type IncentiveStatus = 'unlocked' | 'in-progress' | 'locked';

// Estado derivado del mes del incentivo vs. cuotas pagadas
// (rerender-derived-state-no-effect).
function incentiveStatus(month: number, paidMonths: number): IncentiveStatus {
  if (month <= paidMonths) return 'unlocked';
  if (month === paidMonths + 1) return 'in-progress';
  return 'locked';
}

const STATUS_BADGE_VARIANT: Record<
  IncentiveStatus,
  'secondary' | 'outline' | 'ghost'
> = {
  unlocked: 'secondary',
  'in-progress': 'outline',
  locked: 'ghost',
};

const STATUS_LABEL: Record<IncentiveStatus, string> = {
  unlocked: 'desbloqueado',
  'in-progress': 'en progreso',
  locked: 'bloqueado',
};

// Pantalla 2: la experiencia de incentivos de Racha dentro de la app.
export function RachaScreen() {
  const { back, paidMonths, payUpToMonth } = useDemo();

  // Refs a cada fila de beneficio, indexadas por mes (1–12)
  const incentiveRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const highlightTimeout = useRef<number | null>(null);
  const [highlightedMonth, setHighlightedMonth] = useState<number | null>(null);

  // Al tocar un círculo de mes, simula haber pagado hasta ese mes,
  // scrollea hasta su incentivo y lo resalta
  function goToIncentive(month: number) {
    payUpToMonth(month);
    incentiveRefs.current
      .get(month)
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setHighlightedMonth(month);
    if (highlightTimeout.current !== null) {
      window.clearTimeout(highlightTimeout.current);
    }
    highlightTimeout.current = window.setTimeout(
      () => setHighlightedMonth(null),
      1600,
    );
  }

  return (
    // pt-12 deja lugar a la status bar superpuesta del PhoneFrame
    <div className="flex h-full flex-col gap-5 px-5 pt-12 pb-4">
      {/* Header con volver */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Volver al inicio"
          onClick={back}
        >
          <ArrowLeft aria-hidden />
        </Button>
        <span className="text-sm font-semibold">Tu racha</span>
      </div>

      {/* Contenido scrolleable; scrollbar-none como en el home de MP */}
      <div className="scrollbar-none flex flex-1 flex-col gap-5 overflow-y-auto">
        {/* Contador de racha */}
        <div className="flex flex-col items-center gap-2 py-2">
          <div className="bg-accent flex size-16 items-center justify-center rounded-full">
            <Flame className="text-primary size-8" aria-hidden />
          </div>
          <p className="text-3xl font-semibold tracking-tight">
            {paidMonths} meses
          </p>
          <p className="text-muted-foreground text-sm">
            de pagos sin interrupciones
          </p>
        </div>

        {/* Progreso anual */}
        <Card className="gap-3 py-4">
          <CardHeader className="px-4">
            <CardTitle className="text-sm">Tu año de racha</CardTitle>
            <CardDescription>
              {paidMonths} de {MONTH_LABELS.length} cuotas ·{' '}
              {paidMonths < MONTH_LABELS.length
                ? `pagá la de ${MONTH_NAMES[paidMonths]} para el próximo beneficio`
                : '¡completaste tu año de racha!'}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 px-4">
            <Progress
              value={(paidMonths / MONTH_LABELS.length) * 100}
              aria-label={`Progreso mensual: ${paidMonths} de ${MONTH_LABELS.length} cuotas`}
            />
            {/* 12 meses en dos filas de 6 para que entren en el ancho del teléfono */}
            <div className="grid grid-cols-6 justify-items-center gap-y-2">
              {MONTH_LABELS.map((month, index) => (
                <button
                  key={`${month}-${index}`}
                  type="button"
                  aria-label={`Ver beneficio del mes ${index + 1}`}
                  onClick={() => goToIncentive(index + 1)}
                  className={cn(
                    'focus-visible:ring-ring flex size-7 cursor-pointer items-center justify-center rounded-full text-xs font-medium transition hover:scale-110 focus-visible:ring-2 focus-visible:outline-none',
                    index < paidMonths
                      ? 'bg-success text-success-foreground'
                      : 'bg-muted text-muted-foreground',
                  )}
                >
                  {month}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Beneficios: un incentivo por mes de racha (incentivos_racha.csv) */}
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold">Beneficios</span>
          <div className="flex flex-col gap-2">
            {INCENTIVES.map((incentive, index) => {
              const status = incentiveStatus(incentive.month, paidMonths);

              return (
                <div key={incentive.title} className="flex flex-col gap-2">
                  <div
                    ref={el => {
                      if (el) {
                        incentiveRefs.current.set(incentive.month, el);
                      } else {
                        incentiveRefs.current.delete(incentive.month);
                      }
                    }}
                    className={cn(
                      'flex items-center gap-3 rounded-lg transition-colors duration-500',
                      highlightedMonth === incentive.month && 'bg-accent',
                    )}
                  >
                    <div
                      className={cn(
                        'flex size-8 shrink-0 items-center justify-center rounded-full transition-colors',
                        status === 'unlocked'
                          ? 'bg-success text-success-foreground'
                          : 'bg-muted text-muted-foreground',
                      )}
                    >
                      <incentive.icon className="size-4" aria-hidden />
                    </div>
                    <span className="flex-1 text-sm font-medium">
                      {incentive.title}
                    </span>
                    <Badge variant={STATUS_BADGE_VARIANT[status]}>
                      {status === 'locked'
                        ? `mes ${incentive.month}`
                        : STATUS_LABEL[status]}
                    </Badge>
                  </div>
                  {index < INCENTIVES.length - 1 ? <Separator /> : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

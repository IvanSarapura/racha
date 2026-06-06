'use client';

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
import {
  MONTH_LABELS,
  PAID_MONTHS,
  PENDING_MONTH,
  REWARDS,
  STREAK_MONTHS,
  type RewardStatus,
} from './demo-content';

const STATUS_BADGE_VARIANT: Record<
  RewardStatus,
  'secondary' | 'outline' | 'ghost'
> = {
  unlocked: 'secondary',
  'in-progress': 'outline',
  next: 'ghost',
};

// Pantalla 2: la experiencia de incentivos de Racha dentro de la app.
export function RachaScreen() {
  const { back } = useDemo();

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

      {/* Contador de racha */}
      <div className="flex flex-col items-center gap-2 py-2">
        <div className="bg-accent flex size-16 items-center justify-center rounded-full">
          <Flame className="text-primary size-8" aria-hidden />
        </div>
        <p className="text-3xl font-semibold tracking-tight">
          {STREAK_MONTHS} meses
        </p>
        <p className="text-muted-foreground text-sm">
          de pagos sin interrupciones
        </p>
      </div>

      {/* Progreso semanal */}
      <Card className="gap-3 py-4">
        <CardHeader className="px-4">
          <CardTitle className="text-sm">Tu año de racha</CardTitle>
          <CardDescription>
            {PAID_MONTHS} de {MONTH_LABELS.length} cuotas · pagá la de{' '}
            {PENDING_MONTH} para el próximo beneficio
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 px-4">
          <Progress
            value={(PAID_MONTHS / MONTH_LABELS.length) * 100}
            aria-label={`Progreso mensual: ${PAID_MONTHS} de ${MONTH_LABELS.length} cuotas`}
          />
          {/* 12 meses en dos filas de 6 para que entren en el ancho del teléfono */}
          <div className="grid grid-cols-6 justify-items-center gap-y-2">
            {MONTH_LABELS.map((month, index) => (
              <span
                key={`${month}-${index}`}
                className={cn(
                  'flex size-7 items-center justify-center rounded-full text-xs font-medium',
                  index < PAID_MONTHS
                    ? 'bg-success text-success-foreground'
                    : 'bg-muted text-muted-foreground',
                )}
              >
                {month}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Beneficios */}
      <div className="flex flex-col gap-3">
        <span className="text-sm font-semibold">Beneficios</span>
        <div className="flex flex-col gap-2">
          {REWARDS.map((reward, index) => (
            <div key={reward.title} className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    'flex size-8 items-center justify-center rounded-full',
                    reward.status === 'unlocked'
                      ? 'bg-success text-success-foreground'
                      : 'bg-muted text-muted-foreground',
                  )}
                >
                  <reward.icon className="size-4" aria-hidden />
                </div>
                <span className="flex-1 text-sm font-medium">
                  {reward.title}
                </span>
                <Badge variant={STATUS_BADGE_VARIANT[reward.status]}>
                  {reward.statusLabel}
                </Badge>
              </div>
              {index < REWARDS.length - 1 ? <Separator /> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

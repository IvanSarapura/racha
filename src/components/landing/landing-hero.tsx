import { ArrowDown, ChevronRight, Flame } from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export function LandingHero() {
  return (
    <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
      <div className="flex flex-col items-start gap-6">
        <Badge variant="outline">
          <Flame aria-hidden />
          Incentivos por constancia para fintechs
        </Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Convertí la constancia de tus usuarios en crecimiento
        </h1>
        <p className="text-muted-foreground max-w-prose text-lg text-pretty">
          Racha es el widget de incentivos que integrás en tu app fintech. Tus
          usuarios mantienen rachas de pago y desbloquean beneficios — vos
          mejorás retención y perfil de riesgo.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/demo">
              Probar demo
              <ChevronRight aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#como-funciona">
              Ver cómo funciona
              <ArrowDown aria-hidden />
            </Link>
          </Button>
        </div>
      </div>

      {/* Visual del producto: la tarjeta Racha tal como se ve embebida */}
      <div className="flex justify-center lg:justify-end">
        <div className="bg-muted/50 w-full max-w-sm rounded-3xl border p-6">
          <p className="text-muted-foreground mb-3 text-xs font-medium tracking-wide uppercase">
            Así se ve en tu app
          </p>
          <Card className="gap-4 py-4">
            <CardHeader className="px-4">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Flame className="text-primary size-4" aria-hidden />
                Tu racha
              </CardTitle>
              <CardDescription>4 semanas seguidas · seguí así</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 px-4">
              <Progress value={71} aria-label="Progreso semanal: 5 de 7 días" />
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-xs">
                  5 de 7 días esta semana
                </span>
                <Badge variant="secondary">Cashback 2%</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

import { PROBLEM_STATS } from './landing-content';

// El problema que Racha ataca: mora creciente en crédito fintech joven.
// Misma anatomía que LandingMetrics, en tono destructive para diferenciar
// problema de solución.
export function LandingProblem() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20">
      <div className="flex max-w-2xl flex-col gap-3">
        <h2 className="text-3xl font-semibold tracking-tight text-balance">
          El problema es real y está creciendo
        </h2>
        <p className="text-muted-foreground text-pretty">
          El crédito fintech resolvió el acceso. Lo que falta es acompañar el
          comportamiento: nadie le enseña al usuario qué pasa después de tomar
          el crédito.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {PROBLEM_STATS.map(stat => (
          <Card key={stat.label}>
            <CardContent className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <stat.icon className="text-destructive size-5" aria-hidden />
                <Badge variant="secondary">{stat.badge}</Badge>
              </div>
              <p className="text-4xl font-semibold tracking-tight tabular-nums">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

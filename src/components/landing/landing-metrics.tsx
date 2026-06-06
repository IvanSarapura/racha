import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

import { METRICS } from './landing-content';

export function LandingMetrics() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20">
      <div className="flex max-w-2xl flex-col gap-3">
        <h2 className="text-3xl font-semibold tracking-tight text-balance">
          Resultados que se miden
        </h2>
        <p className="text-muted-foreground text-pretty">
          Calibrado sobre comportamiento real de usuarios jóvenes de
          microcréditos.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {METRICS.map(metric => (
          <Card key={metric.label}>
            <CardContent className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <metric.icon className="text-primary size-5" aria-hidden />
                <Badge variant="secondary">{metric.badge}</Badge>
              </div>
              <p className="text-4xl font-semibold tracking-tight tabular-nums">
                {metric.value}
              </p>
              <p className="text-muted-foreground text-sm">{metric.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

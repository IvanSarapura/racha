import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { FEATURES } from './landing-content';

export function LandingFeatures() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20">
      <div className="flex max-w-2xl flex-col gap-3">
        <h2 className="text-3xl font-semibold tracking-tight text-balance">
          Todo lo que necesitás para incentivar la constancia
        </h2>
        <p className="text-muted-foreground text-pretty">
          Un widget, cuatro capacidades. Diseñado para integrarse en tu app sin
          fricción.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(feature => (
          <Card key={feature.title}>
            <CardHeader>
              <div className="bg-accent text-primary mb-2 flex size-10 items-center justify-center rounded-lg">
                <feature.icon className="size-5" aria-hidden />
              </div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

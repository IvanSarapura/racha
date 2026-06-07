import { Handshake } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { GAINS } from './landing-content';

// Los tres argumentos de venta del pitch + el modelo de negocio alineado.
// Cierra el recorrido problema → producto → cómo funciona con el "qué gano yo"
// de la fintech, antes de la evidencia (LandingMetrics) y el CTA.
export function LandingValue() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20">
      <div className="flex max-w-2xl flex-col gap-3">
        <h2 className="text-3xl font-semibold tracking-tight text-balance">
          Lo que gana tu fintech
        </h2>
        <p className="text-muted-foreground text-pretty">
          Las fintech están diseñadas para gestionar riesgo. Racha está diseñada
          para gestionar comportamientos — y eso se traduce en tres resultados
          concretos.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {GAINS.map(gain => (
          <Card key={gain.title}>
            <CardHeader>
              <div className="bg-accent text-primary mb-2 flex size-10 items-center justify-center rounded-lg">
                <gain.icon className="size-5" aria-hidden />
              </div>
              <CardTitle>{gain.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{gain.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* Modelo de negocio alineado: el riesgo compartido es el argumento de
          cierre del pitch, destacado a lo ancho de la sección */}
      <Card className="bg-muted/40">
        <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <div className="bg-accent text-primary flex size-10 shrink-0 items-center justify-center rounded-lg">
            <Handshake className="size-5" aria-hidden />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Un modelo alineado con tu resultado</p>
            <p className="text-muted-foreground text-sm text-pretty">
              Fee por usuario activo más revenue share sobre la mora recuperada.
              Si tu mora no baja, no cobramos — y cuando baja, recuperás entre 6
              y 8 pesos por cada peso que nos pagás.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

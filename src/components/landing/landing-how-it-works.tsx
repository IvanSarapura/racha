import { Separator } from '@/components/ui/separator';

import { STEPS } from './landing-content';

export function LandingHowItWorks() {
  return (
    <section id="como-funciona" className="bg-muted/40 scroll-mt-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20">
        <div className="flex max-w-2xl flex-col gap-3">
          <h2 className="text-3xl font-semibold tracking-tight text-balance">
            Cómo funciona
          </h2>
          <p className="text-muted-foreground text-pretty">
            De la integración al impacto en tres pasos.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <div key={step.number} className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="text-primary text-4xl font-semibold tabular-nums">
                  {step.number}
                </span>
                {index < STEPS.length - 1 ? (
                  <Separator className="hidden flex-1 md:block" />
                ) : null}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-muted-foreground text-sm text-pretty">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Badge } from '@/components/ui/badge';

import { SEGMENTS } from './landing-content';

export function LandingSocialProof() {
  return (
    <section className="border-y">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-6 py-10">
        <p className="text-muted-foreground text-sm">
          Pensado para integrarse en apps como la tuya
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {SEGMENTS.map(segment => (
            <Badge key={segment.label} variant="outline" className="px-3 py-1">
              <segment.icon aria-hidden />
              {segment.label}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

import { LandingCta } from '@/components/landing/landing-cta';
import { LandingFeatures } from '@/components/landing/landing-features';
import { LandingFooter } from '@/components/landing/landing-footer';
import { LandingHero } from '@/components/landing/landing-hero';
import { LandingHowItWorks } from '@/components/landing/landing-how-it-works';
import { LandingMetrics } from '@/components/landing/landing-metrics';
import { LandingNavbar } from '@/components/landing/landing-navbar';
import { LandingProblem } from '@/components/landing/landing-problem';
import { LandingSocialProof } from '@/components/landing/landing-social-proof';
import { LandingValue } from '@/components/landing/landing-value';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingNavbar />
      <main className="flex-1">
        <LandingHero />
        <LandingSocialProof />
        <LandingProblem />
        <LandingFeatures />
        <LandingHowItWorks />
        <LandingValue />
        <LandingMetrics />
        <LandingCta />
      </main>
      <LandingFooter />
    </div>
  );
}

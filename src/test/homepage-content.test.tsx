import { describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Hero from '@/components/sections/Hero';
import Results from '@/components/sections/Results';
import CTA from '@/components/sections/CTA';
import Process from '@/components/sections/Process';
import SEO from '@/components/SEO';

describe('homepage content regressions', () => {
  it('uses the updated homepage title copy', () => {
    render(
      <HelmetProvider>
        <SEO canonical="https://www.sellatica.in" />
      </HelmetProvider>
    );
    return waitFor(() => {
      expect(document.title).toBe('AI Operations Consulting | Sellatica');
    });
  });

  it('renders updated hero headline and removes old sub-copy', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: /your business is leaking revenue\.\s*i find it\./i })).toBeInTheDocument();
    expect(screen.queryByText(/proprietary intelligence layers built for scale/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/business ai operating system/i)).not.toBeInTheDocument();
  });

  it('renders static non-zero case-study metrics and keeps LIVE IDs', () => {
    render(
      <MemoryRouter>
        <Results />
      </MemoryRouter>
    );

    expect(screen.getByText(/ID:\s*LGL_092/i)).toBeInTheDocument();
    expect(screen.getByText(/ID:\s*EST_144/i)).toBeInTheDocument();
    expect(screen.getByText(/ID:\s*LOG_031/i)).toBeInTheDocument();
    expect(screen.getByText(/ID:\s*MKT_210/i)).toBeInTheDocument();
    expect(screen.getAllByText(/LIVE/i).length).toBeGreaterThanOrEqual(4);

    expect(screen.getByText('312%')).toBeInTheDocument();
    expect(screen.getByText('$180K')).toBeInTheDocument();
    expect(screen.getByText('280%')).toBeInTheDocument();
    expect(screen.getByText('410%')).toBeInTheDocument();
    expect(screen.queryByText('0%')).not.toBeInTheDocument();
    expect(screen.queryByText('$0K')).not.toBeInTheDocument();
    expect(screen.queryByText('0x')).not.toBeInTheDocument();
  });

  it('shows revised bottom CTA offer details', () => {
    render(
      <MemoryRouter>
        <CTA />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 2, name: /book your ai operations diagnostic/i })).toBeInTheDocument();
    expect(screen.getByText(/45 minutes,/i)).toBeInTheDocument();
    expect(screen.getByText(/written report in 48 hrs/i)).toBeInTheDocument();
    expect(screen.getAllByText(/money-back guarantee/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.queryByText(/get your ai os blueprint in 7-10 days/i)).not.toBeInTheDocument();
  });

  it('keeps only phase 01 public on homepage process section', () => {
    render(<Process />);

    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText(/AI Operations Diagnostic/i)).toBeInTheDocument();
    expect(screen.queryByText('02')).not.toBeInTheDocument();
    expect(screen.queryByText('03')).not.toBeInTheDocument();
  });
});

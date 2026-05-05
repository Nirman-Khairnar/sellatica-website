import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import SEO from '@/components/SEO';
import Score from '@/pages/Score';

vi.mock('@/lib/backend', () => ({
  submitOperationsScore: vi.fn(),
}));

import { submitOperationsScore } from '@/lib/backend';

const mockedSubmitOperationsScore = vi.mocked(submitOperationsScore);

const highestScoreAnswers = [
  'Within 15 minutes',
  'Every lead, every time, no exceptions',
  'Fully documented, same steps every time',
  'Rarely or never',
  'One clear system everyone uses consistently',
  'Almost never',
  'Automated dashboards that update in real time',
  'Under 5 minutes',
  'Almost everything would continue normally',
  'None. Everything is documented and shared',
];

const renderScorePage = () =>
  render(
    <HelmetProvider>
      <MemoryRouter initialEntries={['/score']}>
        <Score />
      </MemoryRouter>
    </HelmetProvider>
  );

const completeAssessment = async () => {
  fireEvent.click(screen.getByRole('button', { name: /start the assessment/i }));

  for (const answer of highestScoreAnswers) {
    fireEvent.click(await screen.findByRole('button', { name: answer }, { timeout: 3000 }));
  }
};

describe('score page', () => {
  beforeEach(() => {
    mockedSubmitOperationsScore.mockReset();
  });

  it('shows an inline error when webhook submission fails', async () => {
    mockedSubmitOperationsScore.mockRejectedValueOnce(new Error('Webhook down'));

    renderScorePage();
    await completeAssessment();

    fireEvent.change(await screen.findByLabelText(/full name/i), {
      target: { value: 'Nirman Khairnar' },
    });
    fireEvent.change(await screen.findByLabelText(/business email/i), {
      target: { value: 'nirman@sellatica.in' },
    });
    fireEvent.change(await screen.findByLabelText(/company name/i), {
      target: { value: 'Sellatica' },
    });
    fireEvent.click(screen.getByRole('button', { name: /see my score/i }));

    expect(await screen.findByRole('alert')).toHaveTextContent(/could not send your results/i);
    expect(screen.queryByText(/we sent your results to/i)).not.toBeInTheDocument();
  }, 15000);

  it('submits dimension-aware answers and confirms email delivery', async () => {
    mockedSubmitOperationsScore.mockResolvedValueOnce({ status: 'accepted' });

    renderScorePage();
    await completeAssessment();

    fireEvent.change(await screen.findByLabelText(/full name/i), {
      target: { value: 'Nirman Khairnar' },
    });
    fireEvent.change(await screen.findByLabelText(/business email/i), {
      target: { value: 'nirman@sellatica.in' },
    });
    fireEvent.change(await screen.findByLabelText(/company name/i), {
      target: { value: 'Sellatica' },
    });
    fireEvent.click(screen.getByRole('button', { name: /see my score/i }));

    await screen.findByText(/we sent your results to nirman@sellatica\.in/i);

    expect(mockedSubmitOperationsScore).toHaveBeenCalledTimes(1);
    expect(mockedSubmitOperationsScore).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'Nirman Khairnar',
        email: 'nirman@sellatica.in',
        company: 'Sellatica',
        score: 100,
        band: 'Optimised',
        answers: expect.arrayContaining([
          expect.objectContaining({ dimension: 'Lead Follow-up', score: 10 }),
          expect.objectContaining({ dimension: 'Team Dependency', score: 10 }),
        ]),
        dimensions: expect.arrayContaining([
          expect.objectContaining({
            dimension: 'Lead Follow-up',
            score: 20,
            maxScore: 20,
            percent: 100,
          }),
          expect.objectContaining({
            dimension: 'Client Delivery',
            score: 20,
            maxScore: 20,
            percent: 100,
          }),
        ]),
      })
    );
  }, 15000);

  it('derives canonical URLs from the current route when not provided', async () => {
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={['/score?utm=test']}>
          <SEO title="Test title" description="Test description" />
        </MemoryRouter>
      </HelmetProvider>
    );

    await waitFor(() => {
      const canonical = document.querySelector('link[rel="canonical"]');
      expect(canonical?.getAttribute('href')).toBe('https://www.sellatica.in/score');
    });
  });
});

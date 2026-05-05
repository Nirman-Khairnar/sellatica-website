import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import SEO from '@/components/SEO';
import { submitOperationsScore } from '@/lib/backend';
import { trackEvent } from '@/utils/analytics';

type Question = {
  dimension: string;
  question: string;
  options: Array<{
    label: string;
    score: number;
  }>;
};

type AnswerRecord = {
  dimension: string;
  score: number;
};

const questions: Question[] = [
  {
    dimension: 'Lead Follow-up',
    question: 'When a new lead comes in, how quickly does your team typically respond?',
    options: [
      { label: 'Within 15 minutes', score: 10 },
      { label: 'Within an hour', score: 7 },
      { label: 'Same day', score: 4 },
      { label: 'Next day or later', score: 1 },
    ],
  },
  {
    dimension: 'Lead Follow-up',
    question: 'How consistently does every lead get a follow-up?',
    options: [
      { label: 'Every lead, every time, no exceptions', score: 10 },
      { label: 'Most leads get followed up', score: 7 },
      { label: 'It depends on who is available', score: 4 },
      { label: 'We know we are missing leads regularly', score: 1 },
    ],
  },
  {
    dimension: 'Client Delivery',
    question: 'How standardized is your client onboarding process?',
    options: [
      { label: 'Fully documented, same steps every time', score: 10 },
      { label: 'Mostly consistent with some variation', score: 7 },
      { label: 'Different every time depending on the person', score: 4 },
      { label: 'We do not really have a process', score: 1 },
    ],
  },
  {
    dimension: 'Client Delivery',
    question: 'How often do clients experience delays or confusion during delivery?',
    options: [
      { label: 'Rarely or never', score: 10 },
      { label: 'Occasionally, but we catch it', score: 7 },
      { label: 'More often than we would like', score: 4 },
      { label: 'It is a regular problem', score: 1 },
    ],
  },
  {
    dimension: 'Task Management',
    question: 'How does your team track and assign work?',
    options: [
      { label: 'One clear system everyone uses consistently', score: 10 },
      { label: 'We have tools but not everyone uses them the same way', score: 7 },
      { label: 'A mix of tools, messages, and memory', score: 4 },
      { label: 'Mostly verbal or over chat with no tracking', score: 1 },
    ],
  },
  {
    dimension: 'Task Management',
    question: 'How often do tasks fall through the cracks?',
    options: [
      { label: 'Almost never', score: 10 },
      { label: 'Once or twice a month', score: 7 },
      { label: 'Weekly', score: 4 },
      { label: 'It happens constantly', score: 1 },
    ],
  },
  {
    dimension: 'Revenue Tracking',
    question: 'How do you currently track revenue and key business metrics?',
    options: [
      { label: 'Automated dashboards that update in real time', score: 10 },
      { label: 'Spreadsheets that someone updates regularly', score: 7 },
      { label: 'We check numbers manually when we need them', score: 4 },
      { label: 'We do not have a clear view of our numbers', score: 1 },
    ],
  },
  {
    dimension: 'Revenue Tracking',
    question: 'How long does it take to pull a performance report for the last month?',
    options: [
      { label: 'Under 5 minutes', score: 10 },
      { label: 'About an hour', score: 7 },
      { label: 'Half a day or more', score: 4 },
      { label: 'We cannot produce one reliably', score: 1 },
    ],
  },
  {
    dimension: 'Team Dependency',
    question: 'If you were unavailable for a full week, how much of the business would keep running?',
    options: [
      { label: 'Almost everything would continue normally', score: 10 },
      { label: 'Most things, but some decisions would wait', score: 7 },
      { label: 'A lot would slow down or stop', score: 4 },
      { label: 'Very little would happen without me', score: 1 },
    ],
  },
  {
    dimension: 'Team Dependency',
    question: 'How many critical processes depend on one specific person?',
    options: [
      { label: 'None. Everything is documented and shared', score: 10 },
      { label: 'One or two, but we are working on it', score: 7 },
      { label: 'Several key areas rely on specific people', score: 4 },
      { label: 'Most things depend on me or one other person', score: 1 },
    ],
  },
];

const dimensions = Array.from(new Set(questions.map((question) => question.dimension)));

const getBand = (score: number) => {
  if (score <= 40) {
    return {
      label: 'At Risk',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10 border-red-500/20',
      interpretation:
        'You are losing revenue to manual work every week. The gaps in your operations are actively costing you time and money. The good news: the biggest wins are usually the first fixes.',
      ctaHeadline: "Your score shows your business is losing time and money right now. Let's fix the top two things first.",
    };
  }

  if (score <= 60) {
    return {
      label: 'Functional',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10 border-amber-500/20',
      interpretation:
        'Your systems work, but they depend on you personally. Growth will amplify the problems you are already seeing. Fixing the top two gaps would free up significant time.',
      ctaHeadline: "You're close to the next level. One focused session will show you exactly what's holding you back.",
    };
  }

  if (score <= 80) {
    return {
      label: 'Operational',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10 border-blue-500/20',
      interpretation:
        'Good foundation. You have clear gaps to fix, but your business is not bleeding. Targeted improvements in one or two areas will unlock the next stage of growth.',
      ctaHeadline: "Good foundation. A strategy review will identify the highest-leverage moves.",
    };
  }

  return {
    label: 'Optimised',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10 border-emerald-500/20',
    interpretation:
      'Strong operational maturity. You are either very advanced or answering generously. Either way, there may still be high-leverage improvements we can identify together.',
    ctaHeadline: "Let's validate what you have and find where the next stage of growth comes from.",
  };
};

const getDimensionBreakdown = (answers: AnswerRecord[]) =>
  dimensions.map((dimension) => {
    const dimensionAnswers = answers.filter((answer) => answer.dimension === dimension);
    const score = dimensionAnswers.reduce((sum, answer) => sum + answer.score, 0);
    const maxScore = questions.filter((question) => question.dimension === dimension).length * 10;

    return {
      dimension,
      score,
      maxScore,
      percent: maxScore > 0 ? (score / maxScore) * 100 : 0,
    };
  });

const Score = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [phase, setPhase] = useState<'intro' | 'quiz' | 'email' | 'result'>('intro');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const q = questions[currentQ];
  const totalScore = answers.reduce((sum, answer) => sum + answer.score, 0);
  const progress = (currentQ / questions.length) * 100;
  const band = getBand(totalScore);
  const dimensionBreakdown = getDimensionBreakdown(answers);
  
  const sortedDimensions = [...dimensionBreakdown].sort((a, b) => a.percent - b.percent);
  const weakestDimensionsText = sortedDimensions.slice(0, 2).map(d => d.dimension).join(' and ');

  const handleAnswer = (score: number) => {
    const nextAnswers = [...answers, { score, dimension: q.dimension }];
    setAnswers(nextAnswers);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      return;
    }

    setPhase('email');
  };

  const handleBack = () => {
    if (currentQ === 0) return;

    setCurrentQ(currentQ - 1);
    setAnswers(answers.slice(0, -1));
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    trackEvent('scorecard_completed', {
      score: totalScore,
      band: band.label,
      email,
    });

    try {
      await submitOperationsScore({
        name,
        email,
        company,
        score: totalScore,
        band: band.label,
        interpretation: band.interpretation,
        answers,
        dimensions: dimensionBreakdown,
        submittedAt: new Date().toISOString(),
        source: 'sellatica_operations_score',
      });

      setPhase('result');
    } catch (error) {
      console.error('Score submission failed:', error);
      setSubmitError(
        'We could not send your results right now. Please try again in a moment or contact hello@sellatica.in.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Operations Score | Sellatica"
        description="Find out how well your business operations actually run. Take the free 3-minute assessment and get your score."
        ogTitle="How well does your business actually run? Find out in 3 minutes."
        ogDescription="Take the free Operations Score assessment. 10 questions. A clear score showing exactly where your business stands and what to fix first."
        image="https://www.sellatica.in/og-score.svg"
      />
      <Header />

      <main className="pt-32 pb-20 lg:pt-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <AnimatePresence mode="wait">
              {phase === 'intro' && (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="mb-8 font-display text-4xl font-medium leading-[1.1] text-foreground md:text-5xl lg:text-6xl">
                    The Sellatica Operations Score
                  </h1>
                  <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                    Find out how well your business operations actually run. Ten questions. Three
                    minutes. A clear score that tells you where you stand and what to fix first.
                  </p>
                  <div className="mb-10 space-y-4 text-muted-foreground">
                    <p className="flex items-start gap-3">
                      <span className="mt-2.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                      Lead follow-up speed and consistency
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="mt-2.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                      Client onboarding and delivery
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="mt-2.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                      Internal task management
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="mt-2.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                      Revenue tracking and reporting
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="mt-2.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                      Team dependency and resilience
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="group h-14 px-8 text-base"
                    onClick={() => setPhase('quiz')}
                  >
                    Start the Assessment
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <p className="mt-4 text-sm text-muted-foreground">
                    No signup required to take the assessment. Email collected only at the end.
                  </p>
                </motion.div>
              )}

              {phase === 'quiz' && q && (
                <motion.div
                  key={`q-${currentQ}`}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="mb-12">
                    <div className="mb-3 flex items-center justify-between text-sm text-muted-foreground">
                      <span>
                        Question {currentQ + 1} of {questions.length}
                      </span>
                      <span className="text-xs uppercase tracking-wider">{q.dimension}</span>
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-border">
                      <motion.div
                        className="h-full rounded-full bg-foreground"
                        initial={{ width: `${(currentQ / questions.length) * 100}%` }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  <h2 className="mb-10 font-display text-2xl font-medium leading-[1.2] text-foreground md:text-3xl">
                    {q.question}
                  </h2>

                  <div className="space-y-3">
                    {q.options.map((option) => (
                      <button
                        key={option.label}
                        type="button"
                        onClick={() => handleAnswer(option.score)}
                        className="group w-full rounded-xl border border-border/50 bg-card p-5 text-left transition-all duration-200 hover:border-foreground/20 hover:bg-secondary"
                      >
                        <span className="text-foreground transition-colors group-hover:text-foreground">
                          {option.label}
                        </span>
                      </button>
                    ))}
                  </div>

                  {currentQ > 0 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="mt-8 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Previous question
                    </button>
                  )}
                </motion.div>
              )}

              {phase === 'email' && (
                <motion.div
                  key="email"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-8 flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500" />
                    <span className="text-sm font-medium text-muted-foreground">
                      Assessment complete
                    </span>
                  </div>

                  <h2 className="mb-4 font-display text-3xl font-medium leading-[1.15] text-foreground md:text-4xl">
                    Your score is ready.
                  </h2>
                  <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
                    Enter your details below to see your full Operations Score with a
                    personalized interpretation and recommendations.
                  </p>

                  <form onSubmit={handleEmailSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="score-name"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Full Name
                      </label>
                      <Input
                        id="score-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="border-border/50 bg-card focus:border-foreground/50"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="score-email"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Business Email
                      </label>
                      <Input
                        id="score-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="border-border/50 bg-card focus:border-foreground/50"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="score-company"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Company Name
                      </label>
                      <Input
                        id="score-company"
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Your company"
                        className="border-border/50 bg-card focus:border-foreground/50"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="group h-14 w-full text-base"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending your results...' : 'See My Score'}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    {submitError && (
                      <p className="text-sm text-red-500" role="alert">
                        {submitError}
                      </p>
                    )}
                    <p className="text-center text-xs text-muted-foreground">
                      We will send your results to this email. No spam, ever.
                    </p>
                  </form>
                </motion.div>
              )}

              {phase === 'result' && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="mb-4 text-sm text-emerald-600">We sent your results to {email}.</p>
                  <p className="mb-6 text-sm text-muted-foreground">
                    {name ? `${name}, here` : 'Here'} is your result.
                  </p>

                  <div className="mb-12">
                    <div className="mb-4 flex items-end gap-4">
                      <span className="font-display text-7xl font-medium leading-none text-foreground md:text-8xl">
                        {totalScore}
                      </span>
                      <span className="mb-2 text-2xl text-muted-foreground">/ 100</span>
                    </div>
                    <div
                      className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium ${band.bgColor} ${band.color}`}
                    >
                      {band.label}
                    </div>
                  </div>

                  <div className="mb-12">
                    <p className="text-lg leading-relaxed text-foreground">{band.interpretation}</p>
                  </div>

                  <div className="mb-12">
                    <h3 className="mb-6 font-display text-xl font-medium text-foreground">
                      Your scores by area
                    </h3>
                    <div className="space-y-4">
                      {dimensionBreakdown.map((dimension, index) => (
                        <div key={dimension.dimension}>
                          <div className="mb-2 flex items-center justify-between text-sm">
                            <span className="text-foreground">{dimension.dimension}</span>
                            <span className="text-muted-foreground">
                              {dimension.score} / {dimension.maxScore}
                            </span>
                          </div>
                          <div className="h-2 w-full overflow-hidden rounded-full bg-border">
                            <motion.div
                              className="h-full rounded-full bg-foreground"
                              initial={{ width: 0 }}
                              animate={{ width: `${dimension.percent}%` }}
                              transition={{ duration: 0.6, delay: index * 0.1 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-border/50 pt-10">
                    <h3 className="mb-4 font-display text-2xl font-medium text-foreground md:text-3xl">
                      {band.ctaHeadline}
                    </h3>
                    <p className="mb-8 leading-relaxed text-muted-foreground">
                      Book a free 45-minute Strategy Review. We will look at your specific
                      situation, tell you what is costing you the most, and give you a clear
                      written plan.
                    </p>
                    <div className="flex flex-col items-start gap-4 sm:flex-row">
                      <a 
                        href={`https://cal.com/sellatica/strategy-review?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&company=${encodeURIComponent(company)}&notes=${encodeURIComponent(`Score: ${totalScore} - ${band.label}. Weakest areas: ${weakestDimensionsText}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="lg" className="group h-14 px-8 text-base">
                          Book a Strategy Review
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </a>
                      <Link
                        to="/work"
                        className="pt-4 text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground sm:pt-5"
                      >
                        See what we have fixed for others
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Score;

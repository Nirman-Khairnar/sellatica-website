import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import SEO from '@/components/SEO';
import { trackEvent } from '@/utils/analytics';

// ── Questions ──────────────────────────────────────────────────────────
const questions = [
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

// ── Score Bands ────────────────────────────────────────────────────────
const getBand = (score: number) => {
  if (score <= 40)
    return {
      label: 'At Risk',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10 border-red-500/20',
      interpretation:
        'You are losing revenue to manual work every week. The gaps in your operations are actively costing you time and money. The good news: the biggest wins are usually the first fixes.',
    };
  if (score <= 60)
    return {
      label: 'Functional',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10 border-amber-500/20',
      interpretation:
        'Your systems work, but they depend on you personally. Growth will amplify the problems you are already seeing. Fixing the top two gaps would free up significant time.',
    };
  if (score <= 80)
    return {
      label: 'Operational',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10 border-blue-500/20',
      interpretation:
        'Good foundation. You have clear gaps to fix, but your business is not bleeding. Targeted improvements in one or two areas will unlock the next stage of growth.',
    };
  return {
    label: 'Optimised',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10 border-emerald-500/20',
    interpretation:
      'Strong operational maturity. You are either very advanced or answering generously. Either way, there may still be high-leverage improvements we can identify together.',
  };
};

// ── Component ──────────────────────────────────────────────────────────
const Score = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [phase, setPhase] = useState<'intro' | 'quiz' | 'email' | 'result'>('intro');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalScore = answers.reduce((sum, a) => sum + a, 0);
  const progress = (currentQ / questions.length) * 100;

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setPhase('email');
    }
  };

  const handleBack = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    trackEvent('scorecard_completed', {
      score: totalScore,
      band: getBand(totalScore).label,
      email,
    });

    // Brief delay for feel, then show results
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitting(false);
    setPhase('result');
  };

  const band = getBand(totalScore);
  const q = questions[currentQ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Operations Score | Sellatica"
        description="Find out how well your business operations actually run. Take the free 3-minute assessment and get your score."
        canonical="https://www.sellatica.in/score"
      />
      <Header />

      <main className="pt-32 lg:pt-40 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              {/* ── INTRO ────────────────────────────────── */}
              {phase === 'intro' && (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] mb-8">
                    The Sellatica Operations Score
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Find out how well your business operations actually run. Ten questions. Three minutes. A clear score that tells you where you stand and what to fix first.
                  </p>
                  <div className="space-y-4 text-muted-foreground mb-10">
                    <p className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 flex-shrink-0" />
                      Lead follow-up speed and consistency
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 flex-shrink-0" />
                      Client onboarding and delivery
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 flex-shrink-0" />
                      Internal task management
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 flex-shrink-0" />
                      Revenue tracking and reporting
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 flex-shrink-0" />
                      Team dependency and resilience
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="group text-base px-8 h-14"
                    onClick={() => setPhase('quiz')}
                  >
                    Start the Assessment
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    No signup required to take the assessment. Email collected only at the end.
                  </p>
                </motion.div>
              )}

              {/* ── QUIZ ─────────────────────────────────── */}
              {phase === 'quiz' && q && (
                <motion.div
                  key={`q-${currentQ}`}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35 }}
                >
                  {/* Progress bar */}
                  <div className="mb-12">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <span>Question {currentQ + 1} of {questions.length}</span>
                      <span className="text-xs uppercase tracking-wider">{q.dimension}</span>
                    </div>
                    <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-foreground rounded-full"
                        initial={{ width: `${((currentQ) / questions.length) * 100}%` }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground leading-[1.2] mb-10">
                    {q.question}
                  </h2>

                  <div className="space-y-3">
                    {q.options.map((option) => (
                      <button
                        key={option.label}
                        onClick={() => handleAnswer(option.score)}
                        className="w-full text-left p-5 rounded-xl border border-border/50 bg-card hover:bg-secondary hover:border-foreground/20 transition-all duration-200 group"
                      >
                        <span className="text-foreground group-hover:text-foreground transition-colors">
                          {option.label}
                        </span>
                      </button>
                    ))}
                  </div>

                  {currentQ > 0 && (
                    <button
                      onClick={handleBack}
                      className="mt-8 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Previous question
                    </button>
                  )}
                </motion.div>
              )}

              {/* ── EMAIL GATE ───────────────────────────── */}
              {phase === 'email' && (
                <motion.div
                  key="email"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <CheckCircle className="w-6 h-6 text-emerald-500" />
                    <span className="text-sm font-medium text-muted-foreground">Assessment complete</span>
                  </div>

                  <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground leading-[1.15] mb-4">
                    Your score is ready.
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                    Enter your details below to see your full Operations Score with a personalized interpretation and recommendations.
                  </p>

                  <form onSubmit={handleEmailSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="score-name" className="text-sm font-medium text-foreground block mb-2">
                        Full Name
                      </label>
                      <Input
                        id="score-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="bg-card border-border/50 focus:border-foreground/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="score-email" className="text-sm font-medium text-foreground block mb-2">
                        Business Email
                      </label>
                      <Input
                        id="score-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="bg-card border-border/50 focus:border-foreground/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="score-company" className="text-sm font-medium text-foreground block mb-2">
                        Company Name
                      </label>
                      <Input
                        id="score-company"
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Your company"
                        className="bg-card border-border/50 focus:border-foreground/50"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full group text-base h-14"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Calculating...' : 'See My Score'}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      We will send your results to this email. No spam, ever.
                    </p>
                  </form>
                </motion.div>
              )}

              {/* ── RESULT ───────────────────────────────── */}
              {phase === 'result' && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-sm text-muted-foreground mb-6">
                    {name ? `${name}, here` : 'Here'} is your result.
                  </p>

                  {/* Score Display */}
                  <div className="mb-12">
                    <div className="flex items-end gap-4 mb-4">
                      <span className="font-display text-7xl md:text-8xl font-medium text-foreground leading-none">
                        {totalScore}
                      </span>
                      <span className="text-2xl text-muted-foreground mb-2">/ 100</span>
                    </div>
                    <div className={`inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium ${band.bgColor} ${band.color}`}>
                      {band.label}
                    </div>
                  </div>

                  {/* Interpretation */}
                  <div className="mb-12">
                    <p className="text-lg text-foreground leading-relaxed">
                      {band.interpretation}
                    </p>
                  </div>

                  {/* Score Breakdown */}
                  <div className="mb-12">
                    <h3 className="font-display text-xl font-medium text-foreground mb-6">
                      Your scores by area
                    </h3>
                    <div className="space-y-4">
                      {['Lead Follow-up', 'Client Delivery', 'Task Management', 'Revenue Tracking', 'Team Dependency'].map(
                        (dim, i) => {
                          const dimAnswers = answers.slice(i * 2, i * 2 + 2);
                          const dimScore = dimAnswers.reduce((s, a) => s + a, 0);
                          const dimMax = 20;
                          const dimPercent = (dimScore / dimMax) * 100;
                          return (
                            <div key={dim}>
                              <div className="flex items-center justify-between text-sm mb-2">
                                <span className="text-foreground">{dim}</span>
                                <span className="text-muted-foreground">{dimScore} / {dimMax}</span>
                              </div>
                              <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full bg-foreground rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${dimPercent}%` }}
                                  transition={{ duration: 0.6, delay: i * 0.1 }}
                                />
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="border-t border-border/50 pt-10">
                    <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                      Want to know exactly what to fix first?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      Book a free 45-minute Strategy Review. We will look at your specific situation, tell you what is costing you the most, and give you a clear written plan.
                    </p>
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <Link to="/contact">
                        <Button size="lg" className="group text-base px-8 h-14">
                          Book a Strategy Review
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                      <Link
                        to="/work"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 pt-4 sm:pt-5"
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

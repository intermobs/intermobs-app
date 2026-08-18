import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import MatchDayMinus1Report from './pages/MatchDayMinus1Report';
import ProtectedRoute from './components/ProtectedRoute';
import IncidentReport from './pages/IncidentReport';
import MatchDayReport from './pages/MatchDayReport';
import MatchOverview from './pages/MatchOverview';
import {ArrowRight, Bot, Globe2, Sparkles, TrendingUp, Zap, Orbit, ShieldCheck, Menu, X} from 'lucide-react';
import './index.css';

function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className="min-h-screen overflow-hidden bg-[#05070d] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute -right-40 top-40 h-[600px] w-[600px] rounded-full bg-violet-600/10 blur-[160px]" />
        <div className="absolute left-1/2 top-[60%] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, transparent 0%, rgba(5,7,13,0.45) 55%, #05070d 100%)'
          }}
        />
        <div className="absolute left-[12%] top-[28%] h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
        <div className="absolute right-[18%] top-[24%] h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400 shadow-[0_0_20px_#a78bfa]" />
        <div className="absolute bottom-[25%] left-[22%] h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400 shadow-[0_0_20px_#60a5fa]" />
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-white/[0.06] bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
              <Orbit size={22} className="text-cyan-300 transition-transform duration-500 group-hover:rotate-180" />
              <div className="absolute inset-0 rounded-xl bg-cyan-400/10 blur-xl" />
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight">
                Inter<span className="text-cyan-400">mobs</span>
              </div>
              <div className="hidden text-[9px] uppercase tracking-[0.3em] text-slate-500 sm:block">
                Digital Culture
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#explore" className="text-sm text-slate-400 transition hover:text-white">Explore</a>
            <a href="#intelligence" className="text-sm text-slate-400 transition hover:text-white">Intelligence</a>
            <a href="#labs" className="text-sm text-slate-400 transition hover:text-white">Labs</a>
            <a href="#future" className="text-sm text-slate-400 transition hover:text-white">The Future</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link to="/login" className="rounded-full px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white">
              Sign in
            </Link>
            <Link to="/register" className="group flex items-center gap-2 rounded-full border border-white/10 bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-300">
              Enter Intermobs
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="rounded-lg border border-white/10 p-2 text-slate-300 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileMenu && (
          <div className="border-t border-white/[0.06] bg-black/70 px-5 py-6 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-5">
              <a href="#explore" onClick={() => setMobileMenu(false)} className="text-sm text-slate-300">Explore</a>
              <a href="#intelligence" onClick={() => setMobileMenu(false)} className="text-sm text-slate-300">Intelligence</a>
              <a href="#labs" onClick={() => setMobileMenu(false)} className="text-sm text-slate-300">Labs</a>
              <Link to="/login" className="text-sm text-slate-300">Sign in</Link>
              <Link to="/register" className="rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-black">
                Enter Intermobs
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section className="relative px-5 pb-24 pt-24 sm:pt-32 lg:px-8 lg:pb-32 lg:pt-40">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-5xl text-center">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-medium text-cyan-300 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                </span>
                THE DIGITAL FRONTIER
              </div>

              <h1 className="text-5xl font-black tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
                Powering the Future
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  of Digital Culture.
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                Intermobs explores the technologies, ideas, people and movements shaping the next generation of the internet.
                <span className="text-slate-200"> AI. Innovation. Digital culture. The future is already online.</span>
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/register"
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black shadow-[0_0_40px_rgba(255,255,255,0.08)] transition duration-300 hover:scale-[1.03] hover:bg-cyan-300 sm:w-auto"
                >
                  Explore Intermobs
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#explore"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 font-medium text-slate-300 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white sm:w-auto"
                >
                  Discover the Platform
                </a>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative mx-auto mt-20 max-w-5xl">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-3 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[1.5rem] border border-white/[0.07] bg-[#080b13] p-6 sm:p-8">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                    </div>
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      Intermobs Network
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.04] p-5">
                      <Bot className="mb-6 text-cyan-300" size={25} />
                      <p className="text-xs uppercase tracking-wider text-slate-500">AI</p>
                      <p className="mt-2 text-xl font-bold">Intelligence</p>
                    </div>

                    <div className="rounded-2xl border border-violet-400/10 bg-violet-400/[0.04] p-5">
                      <TrendingUp className="mb-6 text-violet-300" size={25} />
                      <p className="text-xs uppercase tracking-wider text-slate-500">Internet</p>
                      <p className="mt-2 text-xl font-bold">Trends</p>
                    </div>

                    <div className="rounded-2xl border border-blue-400/10 bg-blue-400/[0.04] p-5">
                      <Sparkles className="mb-6 text-blue-300" size={25} />
                      <p className="text-xs uppercase tracking-wider text-slate-500">Digital</p>
                      <p className="mt-2 text-xl font-bold">Innovation</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-sm font-medium">Digital Pulse</span>
                      <span className="text-xs text-cyan-400">LIVE</span>
                    </div>

                    <div className="flex h-20 items-end gap-1 overflow-hidden">
                      {[35, 48, 40, 65, 55, 72, 60, 85, 67, 90, 75, 100, 82, 95, 70, 88, 78, 96, 84, 100].map((height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-sm bg-gradient-to-t from-cyan-500/10 to-cyan-400/60"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore */}
        <section id="explore" className="border-y border-white/[0.06] bg-white/[0.015] px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                One digital ecosystem
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Where technology meets
                <span className="text-slate-500"> internet culture.</span>
              </h2>
              <p className="mt-6 max-w-2xl leading-7 text-slate-400">
                Intermobs is a digital space for discovering emerging technologies, understanding online movements and experimenting with the tools shaping tomorrow.
              </p>
            </div>

            <div id="labs" className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <div className="group rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <Bot size={23} />
                </div>
                <h3 className="text-lg font-bold">AI Lab</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Explore artificial intelligence, agents, automation, prompts and emerging AI systems.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-medium text-cyan-400">
                  Explore <ArrowRight size={13} />
                </div>
              </div>

              <div id="intelligence" className="group rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-400/[0.04]">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-300">
                  <TrendingUp size={23} />
                </div>
                <h3 className="text-lg font-bold">Trend Intelligence</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Understand the digital movements, viral ideas and technologies driving the internet.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-medium text-violet-400">
                  Discover <ArrowRight size={13} />
                </div>
              </div>

              <div className="group rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-400/[0.04]">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-300">
                  <Globe2 size={23} />
                </div>
                <h3 className="text-lg font-bold">Digital World</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Explore the changing relationship between people, platforms, communities and technology.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-medium text-blue-400">
                  Explore <ArrowRight size={13} />
                </div>
              </div>

              <div className="group rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-yellow-400/[0.04]">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-300">
                  <Zap size={23} />
                </div>
                <h3 className="text-lg font-bold">Experiments</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Build, test and explore new digital ideas before they become mainstream.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-medium text-yellow-400">
                  Enter Lab <ArrowRight size={13} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future */}
        <section id="future" className="relative px-5 py-28 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
              <Sparkles className="text-cyan-300" size={25} />
            </div>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              The next internet
            </p>

            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
              Don't just watch
              <br />
              the future happen.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              Understand it. Experiment with it. Build with it. Become part of the digital culture shaping what comes next.
            </p>

            <Link
              to="/register"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-300"
            >
              Join Intermobs
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/[0.06] px-5 py-10 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10">
                <Orbit size={19} className="text-cyan-300" />
              </div>
              <div>
                <p className="text-sm font-bold">
                  Inter<span className="text-cyan-400">mobs</span>
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600">
                  Powering Digital Culture
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600">
              <ShieldCheck size={14} />
              Building for the digital future.
            </div>

            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} Intermobs
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#05070d]">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/match-day-minus1" element={<MatchDayMinus1Report />} />
            <Route path="/match-day" element={<MatchDayReport />} />
            <Route path="/incident-report" element={<IncidentReport />} />
            <Route path="/match-overview" element={<MatchOverview />} />
          </Routes>
        </main>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;

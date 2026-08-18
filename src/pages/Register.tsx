import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { User, Mail, Lock, Eye, EyeOff, AlertCircle, Orbit, Sparkles } from 'lucide-react';

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) throw signUpError;
      if (!data.user) throw new Error('No user returned');

      const { error: profileError } = await supabase
        .from('users')
        .insert([
          {
            id: data.user.id,
            full_name: fullName,
            email: email,
            role: 'officer'
          }
        ]);

      if (profileError) throw profileError;

      alert('Registration successful! Welcome, ' + fullName);
      navigate('/dashboard');
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An error occurred during registration.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-screen items-center justify-center overflow-hidden bg-[#05070d] px-4 py-10 text-white">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[150px]" />
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
        <div className="absolute left-[15%] top-[25%] h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
        <div className="absolute right-[18%] top-[30%] h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400 shadow-[0_0_20px_#a78bfa]" />
        <div className="absolute bottom-[22%] left-[25%] h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400 shadow-[0_0_20px_#60a5fa]" />
      </div>

      {/* Register Card */}
      <div className="relative z-10 w-full max-w-[420px]">

        <Link to="/" className="mb-8 flex items-center justify-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
            <Orbit size={23} className="text-cyan-300" />
            <div className="absolute inset-0 rounded-xl bg-cyan-400/10 blur-xl" />
          </div>

          <div>
            <div className="text-xl font-bold tracking-tight">
              Inter<span className="text-cyan-400">mobs</span>
            </div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-slate-500">
              Digital Culture
            </div>
          </div>
        </Link>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 shadow-2xl backdrop-blur-2xl sm:p-8">

          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-400/10 blur-3xl" />

          <div className="relative">
            <div className="mb-7 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10">
                <Sparkles size={25} className="text-violet-300" />
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-white">
                Create your account
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Join the future of digital culture.
              </p>
            </div>

            {error && (
              <div className="mb-5 flex items-center gap-2 rounded-xl border border-red-400/20 bg-red-400/10 p-3 text-sm font-medium text-red-300">
                <AlertCircle size={17} />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="relative">
                <User className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-500" />

                <input
                  type="text"
                  placeholder="Full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/40 focus:bg-white/[0.06] focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-500" />

                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/40 focus:bg-white/[0.06] focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-500" />

                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-11 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/40 focus:bg-white/[0.06] focus:ring-2 focus:ring-cyan-400/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-0 top-0 flex h-full items-center px-4 text-slate-500 transition hover:text-slate-200"
                  aria-label={showPass ? 'Hide password' : 'Show password'}
                >
                  {showPass ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>

              <div className="relative">
                <Lock className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-500" />

                <input
                  type="password"
                  placeholder="Repeat password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/40 focus:bg-white/[0.06] focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="mt-2 w-full rounded-xl bg-white py-3.5 font-semibold text-black shadow-lg transition duration-300 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? 'Creating account...' : 'Create Account'}
              </button>
            </form>

            <div className="my-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/[0.07]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-600">
                Intermobs
              </span>
              <div className="h-px flex-1 bg-white/[0.07]" />
            </div>

            <div className="text-center text-sm">
              <p className="text-slate-500">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="font-semibold text-cyan-400 transition hover:text-cyan-300 hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-700">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          Powering the Future of Digital Culture
        </div>

      </div>
    </div>
  );
}

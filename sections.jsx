// sections.jsx — main landing sections (Hero, Problems, Value, How it works, B2B, Testimonials)
// Exposes components on window for app.jsx to compose.

const { useEffect, useState, useRef } = React;

// ───────────────────────── shared bits ─────────────────────────

function Icon({ name, size = 20 }) {
  // map a logical name to one of the design-system icons; falls back to inline svg
  const SRC = `assets/icons/${name}.svg`;
  return (
    <img src={SRC} alt="" width={size} height={size}
         style={{ width: size, height: size, display: "inline-block" }} />
  );
}

function ArrowRight({ size = 14 }) {
  return (
    <svg className="arrow" width={size} height={size} viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}

function Plus({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
}

function SunIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>
    </svg>
  );
}

function MoonIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"></path>
    </svg>
  );
}

function Check({ size = 10 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}

function useScrolled(threshold = 30) {
  const [s, setS] = useState(false);
  useEffect(() => {
    const onScroll = () => setS(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return s;
}

function useReveal() {
  // attach to wrapper; intersection observer adds .in
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ───────────────────────── NAV ─────────────────────────

function Nav({ theme, onToggleTheme }) {
  const scrolled = useScrolled(40);
  return (
    <nav className={`nav ${scrolled ? "is-scrolled" : ""}`} data-screen-label="Nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#top">
          <img src="assets/logomark-white.svg" alt="Ape Gym Fit" />
          <span className="wordmark">APE<span>·</span>GYM FIT</span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#benefits">Benefits</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">Resources</a>
        </div>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <a className="nav-login" href="#login">Log in</a>
          <a className="btn btn-primary btn-sm" href="#pricing">
            Start training <ArrowRight />
          </a>
        </div>
      </div>
    </nav>
  );
}

// ───────────────────────── HERO ─────────────────────────

function Hero() {
  return (
    <header id="top" className="hero" data-screen-label="01 Hero">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Personal Training · System</span>
          <h1>
            Train with purpose.<br />
            Track real <span className="accent">progress.</span>
          </h1>
          <p className="hero-sub">
            Ape Gym combines fitness consultancy, personalised training, and live
            performance tracking inside premium partner gyms — so you stay consistent
            and get measurable results.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#pricing">
              Get fit today <ArrowRight />
            </a>
            <a className="btn btn-ghost" href="#b2b">
              Get our team into your gym
            </a>
          </div>
          <div className="hero-strip">
            <span>Strength</span><span className="dot"></span>
            <span>Fat loss</span><span className="dot"></span>
            <span>Mobility</span><span className="dot"></span>
            <span>Muscle gain</span><span className="dot"></span>
            <span>Performance</span><span className="dot"></span>
            <span>Well-being</span>
          </div>
        </div>

        <div className="hero-mascot">
          <img src="assets/mascot.png" alt="Ape Gym mascot" />
          <div className="hero-chip chip-1">
            <div className="chip-icon"><Icon name="dumbbell" size={18} /></div>
            <div>
              <div className="chip-label">Today · 07:00</div>
              <div className="chip-value">Push day · 5×5</div>
            </div>
          </div>
          <div className="hero-chip chip-2">
            <div className="chip-icon"><Icon name="bar-chart" size={18} /></div>
            <div>
              <div className="chip-label">21-day cycle</div>
              <div className="chip-value">Bench +7.5 kg</div>
            </div>
          </div>
          <div className="hero-chip chip-3">
            <div className="chip-icon"><Icon name="check" size={18} /></div>
            <div>
              <div className="chip-label">Trainer</div>
              <div className="chip-value">Alex confirmed</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// ───────────────────────── PROBLEMS / SOLUTIONS ─────────────────────────

const PROBLEMS = [
  {
    n: "01",
    icon: "bar-chart",
    h: "You train without knowing if it's working",
    p: "No clear progression. No real tracking. No personalised guidance.",
    sol: "Every set, weight and rep is logged live. Body composition revisited every 21 days, plotted in your dashboard.",
  },
  {
    n: "02",
    icon: "workout-stretching",
    h: "Your workouts feel random",
    p: "Different exercises every week. No long-term strategy. No adaptation to your body or goals.",
    sol: "A Fitness Consultant designs a 21-day macrocycle. Your trainer adapts each session — never copy-paste.",
  },
  {
    n: "03",
    icon: "calendar",
    h: "Scheduling becomes stressful",
    p: "Messages. Delays. Conflicts. Too much friction just to train consistently.",
    sol: "Self-service booking and rescheduling with your PT's live availability — synced to Google or Apple Calendar.",
  },
  {
    n: "04",
    icon: "user-group",
    h: "Generic gyms don't create results",
    p: "Machines and classes alone are not a strategy. You need guidance, accountability and progression.",
    sol: "Qualified PTs embedded in premium partner gyms — with a fitness consultant supervising your plan end-to-end.",
  },
];

function Problems() {
  const [open, setOpen] = useState(null);
  return (
    <section className="section" id="problems" data-screen-label="02 Problems · Solutions">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">Problems · Solutions</span>
          <h2>
            Most people don't fail because they lack motivation.
            <br />
            <em style={{ color: "var(--t-ink-mute)", fontWeight: 500, fontStyle: "normal" }}>
              They fail because they lack&nbsp;
            </em>
            <span style={{ color: "var(--orange-500)", fontStyle: "italic", fontWeight: 500 }}>structure.</span>
          </h2>
        </div>

        <div className="prob-grid">
          {PROBLEMS.map((p, i) => (
            <div
              key={p.n}
              className="prob-card reveal"
              data-open={open === i ? "true" : "false"}
              onClick={() => setOpen(open === i ? null : i)}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="icon-wrap"><Icon name={p.icon} size={20} /></div>
              <div className="num">PROBLEM · {p.n}</div>
              <h3 className="prob-h">{p.h}</h3>
              <p className="prob-p">{p.p}</p>
              <div className="prob-flip">
                <div>
                  <div className="flip-label">→ How Ape Gym fixes it</div>
                  <div className="flip-text">{p.sol}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── VALUE BAND ─────────────────────────

function ValueBand() {
  return (
    <section className="value-band" data-screen-label="03 Value">
      <div className="shell value-band-inner reveal">
        <span className="eyebrow" style={{ color: "var(--orange-300)" }}>Our promise</span>
        <h2>
          Train with a <span className="accent">system.</span><br />
          Not guesswork.
        </h2>
      </div>
    </section>
  );
}

// ───────────────────────── HOW IT WORKS ─────────────────────────

const STEPS = [
  {
    n: "01",
    icon: "weight-scale",
    h: "Fitness consultancy",
    p: "Start with a structured assessment with a certified PT II.",
    bullets: ["Goals & history", "Body composition", "Mobility & FMS"],
  },
  {
    n: "02",
    icon: "dumbbell",
    h: "Personalised training",
    p: "A programme designed around your goals — fat loss, hypertrophy, mobility, performance.",
    bullets: ["Macro & micro cycle", "Adapted weekly", "No copy-paste"],
  },
  {
    n: "03",
    icon: "bar-chart",
    h: "Track progress",
    p: "Live in-session logging. Every metric visible to you, anytime, in the app.",
    bullets: ["Weight & reps", "Re-eval every 21 days", "Charts you can read"],
  },
  {
    n: "04",
    icon: "calendar",
    h: "Stay consistent",
    p: "Self-service scheduling, gentle reminders and a PT who knows you by name.",
    bullets: ["Reschedule in 1 tap", "Calendar sync", "Accountability built in"],
  },
];

function HowItWorks() {
  return (
    <section className="section" id="services" data-screen-label="04 How it works">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">Service · How it works</span>
          <h2>A complete Personal Training experience.</h2>
          <p className="sub">
            Ape Gym is more than a session. It's a structured fitness system designed around your
            progress — human coaching plus the digital infrastructure to keep everything in one place.
          </p>
        </div>

        <div className="steps reveal">
          {STEPS.map((s) => (
            <div className="step" key={s.n}>
              <div className="step-num">STEP {s.n}</div>
              <div className="step-icon"><Icon name={s.icon} size={22} /></div>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
              <ul>
                {s.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "2.5rem", display: "flex", justifyContent: "center" }} className="reveal">
          <a className="btn btn-primary" href="#pricing">
            Hire your personal trainer <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── B2B BAND ─────────────────────────

function B2B() {
  return (
    <section className="b2b" id="b2b" data-screen-label="05 B2B">
      <div className="shell b2b-inner">
        <div className="reveal">
          <span className="eyebrow" style={{ color: "var(--orange-300)" }}>For gym owners</span>
          <h2>Get our team inside your gym.</h2>
          <p className="b2b-sub">
            We embed a full personal-training operation — trainers, fitness consultants, app, billing —
            inside your gym. You add a revenue stream and stop losing members to churn.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a className="btn btn-primary" href="#contact-sales">
              Contact sales <ArrowRight />
            </a>
            <a className="btn btn-ghost" href="#b2b-more">
              See the partnership model
            </a>
          </div>
        </div>

        <div className="b2b-card reveal">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div className="eyebrow" style={{ color: "var(--orange-300)" }}>Enterprise · WOW Gym pilot</div>
            <div className="eyebrow" style={{ color: "rgba(255,255,255,.4)" }}>9 units</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "0.25rem" }}>
            <div className="b2b-stat">
              <div className="num">100</div>
              <div className="label">PT clients<br />per gym unit</div>
            </div>
            <div className="b2b-stat">
              <div className="num">$1,020</div>
              <div className="label">Max monthly<br />commission / unit</div>
            </div>
            <div className="b2b-stat">
              <div className="num">8</div>
              <div className="label">Personal trainers<br />deployed per unit</div>
            </div>
            <div className="b2b-stat">
              <div className="num">30%</div>
              <div className="label">Revenue share<br />back to your gym</div>
            </div>
          </div>
          <ul className="b2b-points">
            <li>We handle hiring, scheduling, billing and quality assurance.</li>
            <li>Branded experience that complements your floor — never competes.</li>
            <li>Monthly retention &amp; revenue reports, automated.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── TESTIMONIALS ─────────────────────────

const TESTIMONIALS = [
  {
    tag: "Client",
    quote: "Before Ape Gym I was training without direction. Now I can actually see my progress and stay consistent — every cycle, the numbers move.",
    name: "Sarah M.",
    role: "Pro plan · 11 months",
    initials: "SM",
  },
  {
    tag: "Personal Trainer",
    quote: "I finally finish work at the gym instead of bringing transcription home. Logging happens in the session — the system handles the rest.",
    name: "Daniel R.",
    role: "PT · Lisbon · 2 yrs",
    initials: "DR",
  },
  {
    tag: "Gym owner",
    quote: "We saw a clear lift in renewals at the pilot unit. Ape Gym runs a real operation — reports, contracts, billing — not a freelance side hustle.",
    name: "Jessica T.",
    role: "WOW Fitness · Operations",
    initials: "JT",
  },
];

function Testimonials() {
  return (
    <section className="section section-alt" id="testimonials" data-screen-label="06 Testimonials">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">Join our community</span>
          <h2>Real people. Real progress.</h2>
          <p className="sub">
            Clients, trainers and gym owners working out of the same system.
          </p>
        </div>

        <div className="tstm-grid">
          {TESTIMONIALS.map((t, i) => (
            <div className="tstm reveal" key={t.name} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="tstm-tag">{t.tag}</div>
              <div className="quote-mark">"</div>
              <blockquote>{t.quote}</blockquote>
              <div className="person">
                <div className="avatar">{t.initials}</div>
                <div className="person-meta">
                  <div className="name">{t.name}</div>
                  <div className="role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  Nav, Hero, Problems, ValueBand, HowItWorks, B2B, Testimonials,
  Icon, ArrowRight, Plus, Check, SunIcon, MoonIcon, useReveal,
});

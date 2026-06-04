// sections2.jsx — Pricing, Benefits/Goals, FAQ, CTA closer, Footer.

const { useState: useState2 } = React;

// ───────────────────────── PRICING ─────────────────────────

const PRICING = {
  monthly: [
    {
      name: "Essential",
      sub: "Single session — try the experience",
      amount: 75, per: "/session",
      cta: "Book a session",
      featured: false,
      features: [
        "1 personal training session",
        "Fitness consultancy included",
        "Flexible booking",
        "Pay-as-you-go — no commitment",
      ],
    },
    {
      name: "Basic",
      sub: "Up to 8 sessions / month",
      amount: 400, per: "/mo",
      cta: "Get started",
      featured: false,
      features: [
        "Up to 2 sessions per week",
        "Personalised training plan",
        "App access & progress tracking",
        "Fitness consultancy included",
      ],
    },
    {
      name: "Active",
      sub: "Up to 12 sessions / month",
      amount: 550, per: "/mo",
      cta: "Start training",
      featured: true,
      tag: "Most popular",
      features: [
        "Up to 3 sessions per week",
        "Advanced progression tracking",
        "Dedicated trainer support",
        "Priority scheduling",
        "12% off Essential rate",
      ],
    },
    {
      name: "Pro",
      sub: "Up to 16 sessions / month",
      amount: 700, per: "/mo",
      cta: "Join Pro",
      featured: false,
      features: [
        "Up to 4 sessions per week",
        "Full fitness consultancy",
        "Premium progression tracking",
        "Dedicated trainer support",
        "15% off Essential rate",
      ],
    },
  ],
  weekly: [
    {
      name: "Essential",
      sub: "Single session — try the experience",
      amount: 75, per: "/session",
      cta: "Book a session",
      featured: false,
      features: [
        "1 personal training session",
        "Fitness consultancy included",
        "Flexible booking",
        "Pay-as-you-go — no commitment",
      ],
    },
    {
      name: "Basic",
      sub: "Up to 2 sessions / week",
      amount: 125, per: "/wk",
      cta: "Get started",
      featured: false,
      features: [
        "Up to 2 sessions per week",
        "Personalised training plan",
        "App access & progress tracking",
        "Pay weekly · cancel any time",
      ],
    },
    {
      name: "Active",
      sub: "Up to 3 sessions / week",
      amount: 160, per: "/wk",
      cta: "Start training",
      featured: true,
      tag: "Most popular",
      features: [
        "Up to 3 sessions per week",
        "Advanced progression tracking",
        "Dedicated trainer support",
        "Priority scheduling",
        "8% off Essential rate",
      ],
    },
    {
      name: "Pro",
      sub: "Up to 4 sessions / week",
      amount: 175, per: "/wk",
      cta: "Join Pro",
      featured: false,
      features: [
        "Up to 4 sessions per week",
        "Full fitness consultancy",
        "Premium progression tracking",
        "Dedicated trainer support",
        "22% off Essential rate",
      ],
    },
  ],
};

function Pricing() {
  const [cadence, setCadence] = useState2("monthly");
  const plans = PRICING[cadence];

  return (
    <section className="section" id="pricing" data-screen-label="07 Pricing">
      <div className="shell">
        <div className="pricing-head reveal">
          <span className="eyebrow">Pricing</span>
          <h2>Choose the plan that fits your routine.</h2>
          <p style={{ color: "var(--t-ink-mute)", fontSize: "1.0625rem", maxWidth: "30rem", margin: 0 }}>
            All plans include the fitness consultancy and access to the app.
          </p>
          <div className="pricing-toggle" role="tablist">
            <button className={cadence === "weekly" ? "active" : ""} onClick={() => setCadence("weekly")}>
              Weekly
            </button>
            <button className={cadence === "monthly" ? "active" : ""} onClick={() => setCadence("monthly")}>
              Monthly <span className="save">SAVE 15%</span>
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((p, i) => (
            <div className={`price-card reveal ${p.featured ? "featured" : ""}`} key={p.name}
                 style={{ transitionDelay: `${i * 60}ms` }}>
              {p.featured && <div className="price-pop">{p.tag}</div>}
              <div className="price-name">{p.name}</div>
              <div className="sub-name">{p.sub}</div>
              <div className="price-amount">
                <span className="currency">$</span>
                <span className="num">{p.amount}</span>
                <span className="per">{p.per}</span>
              </div>
              <ul className="price-feat">
                {p.features.map((f) => (
                  <li key={f}>
                    <span className="check"><Check /></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="btn-row">
                <a className={`btn ${p.featured ? "btn-primary" : "btn-outline"}`} href="#start">
                  {p.cta} {p.featured && <ArrowRight />}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="pricing-foot">
          B2B partner gym? <a href="#b2b">See enterprise pricing →</a>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── BENEFITS / GOALS ─────────────────────────

const GOALS = [
  { name: "Well-being",   icon: "yoga",                desc: "Build a steady, healthy practice you'll keep for life." },
  { name: "Mobility work", icon: "workout-stretching", desc: "Move freely. Train without pain. Recover faster." },
  { name: "Strength gain", icon: "dumbbell",           desc: "Get visibly stronger with structured progressive load." },
  { name: "Get fit",       icon: "running-shoes",      desc: "Build conditioning, lose body fat, feel energised again." },
  { name: "Muscle toning", icon: "workout-squats",     desc: "Sculpt definition with hypertrophy and bodyweight work." },
  { name: "Muscle gain",   icon: "gymnastic-rings",    desc: "Add lean mass — periodised progression and recovery." },
  { name: "Weight loss",   icon: "weight-scale",       desc: "Sustainable fat loss built on caloric strategy + training." },
];

function Benefits() {
  return (
    <section className="section section-darker" id="benefits" data-screen-label="08 Benefits">
      <div className="shell">
        <div className="goals-head reveal">
          <div>
            <span className="eyebrow" style={{ color: "var(--orange-300)" }}>Benefits · Goals</span>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 600,
              fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.04em",
              lineHeight: 1.02, margin: "1rem 0 0",
            }}>
              Your goals deserve more <br />
              than random workouts.
            </h2>
          </div>
          <p style={{ color: "rgba(250,250,250,.65)", fontSize: "1rem", maxWidth: "22rem", margin: 0 }}>
            Pick where you want to grow. Every plan is built around the outcome you actually care about.
          </p>
        </div>

        <div className="goals-grid">
          {GOALS.map((g, i) => (
            <a className="goal reveal" key={g.name} href={`#goal-${g.name.toLowerCase().replace(/\s+/g, "-")}`}
               style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="goal-icon"><Icon name={g.icon} size={22} /></div>
              <h3>{g.name}</h3>
              <p className="desc">{g.desc}</p>
              <span className="more">Learn more <ArrowRight /></span>
            </a>
          ))}

          {/* Trailing CTA card */}
          <div className="goal reveal" style={{
            background: "linear-gradient(135deg, var(--orange-700), var(--orange-500))",
            cursor: "default",
          }}>
            <div className="goal-icon" style={{
              background: "rgba(0,0,0,.18)", borderColor: "rgba(0,0,0,.25)", color: "#0E0B08",
            }}>
              <Icon name="flash" size={20} />
            </div>
            <h3 style={{ color: "#0E0B08" }}>Not sure which goal fits?</h3>
            <p className="desc" style={{ color: "rgba(0,0,0,.7)" }}>
              Start with a consultancy session. We'll map it together.
            </p>
            <a href="#pricing" className="btn" style={{
              alignSelf: "flex-start", marginTop: "auto",
              background: "#0E0B08", color: "var(--zinc-50)",
            }}>
              Book consultancy <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── FAQ ─────────────────────────

const FAQS = [
  {
    q: "Do I need gym experience before joining?",
    a: "No. Ape Gym is designed for complete beginners and experienced lifters alike — your fitness consultant will calibrate the programme to where you actually are today, not where you should be.",
  },
  {
    q: "Can I reschedule sessions?",
    a: "Yes. The app shows your trainer's live availability and lets you reschedule in a tap, with calendar sync to Google or Apple Calendar.",
  },
  {
    q: "How personalised is the training?",
    a: "Every programme is built from a structured 21-day evaluation — goals, history, body composition, mobility, FMS — and your trainer adapts it each week based on session data. No copy-paste templates.",
  },
  {
    q: "What happens during the fitness consultancy?",
    a: "A certified PT II walks you through a health screening with e-signature, takes baseline measurements (endurance, body composition, functional movement) and uses the data to design your training strategy.",
  },
  {
    q: "Can I start with only one session?",
    a: "Yes — the Essential plan is a single $75 session including the consultancy. Most clients use it to try the experience before subscribing.",
  },
  {
    q: "Do I have to use the app?",
    a: "It's strongly recommended. Booking, rescheduling, your routine, your performance history and your invoices all live there — losing the app means losing visibility.",
  },
  {
    q: "What goals can Ape Gym actually help with?",
    a: "Weight loss, muscle gain, strength, mobility, conditioning, athletic performance and general well-being. If your goal is health-related, there's a programme for it.",
  },
  {
    q: "How does the partner-gym model work?",
    a: "Ape Gym operates inside selected partner gyms. Your subscription includes the use of that gym during your sessions. We currently pilot inside WOW Fitness — full list at sign-up.",
  },
];

function FAQ() {
  const [open, setOpen] = useState2(0);
  return (
    <section className="section section-alt" id="faq" data-screen-label="09 FAQ">
      <div className="shell">
        <div className="faq-wrap">
          <div className="reveal">
            <span className="eyebrow">FAQ</span>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 600,
              fontSize: "clamp(2rem,3.5vw,2.75rem)", letterSpacing: "-0.04em",
              lineHeight: 1.02, margin: "1rem 0 1rem",
              color: "var(--t-ink-strong)",
            }}>
              Questions, before<br />you commit.
            </h2>
            <p style={{ color: "var(--t-ink-mute)", fontSize: "1rem", lineHeight: 1.55, margin: 0 }}>
              The honest answers we give every prospective client.
              Still unsure?{" "}
              <a href="#contact-sales" style={{ color: "var(--orange-500)", fontWeight: 600 }}>
                Talk to a consultant →
              </a>
            </p>
          </div>

          <div className="faq-list reveal">
            {FAQS.map((f, i) => (
              <div className={`faq-item ${open === i ? "open" : ""}`} key={f.q}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{f.q}</span>
                  <span className="toggle"><Plus size={12} /></span>
                </button>
                <div className="faq-a">
                  <div><div className="faq-a-inner">{f.a}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── CTA closer ─────────────────────────

function CtaCloser() {
  return (
    <section className="cta-closer" id="cta-closer" data-screen-label="10 CTA closer">
      <div className="shell cta-inner reveal">
        <span className="eyebrow" style={{ color: "var(--orange-300)" }}>Built for real progress</span>
        <h2>
          Stop training in the dark.<br />
          <span className="accent">Start training with us.</span>
        </h2>
        <p className="sub">
          Book your fitness consultancy and pay in one flow. The app, the calendar and the routine
          arrive in your inbox before your first session.
        </p>
        <div className="cta-ctas">
          <a className="btn btn-primary" href="#pricing">
            Get fit today <ArrowRight />
          </a>
          <a className="btn btn-ghost" href="#b2b">
            Hire our team for your gym
          </a>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── FOOTER ─────────────────────────

function Footer() {
  return (
    <footer className="footer" data-screen-label="11 Footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="assets/logotype-white.svg" alt="Ape Gym Fit" />
            <p className="tag">
              Personal training, structured. Built for people who want real progress —
              and for the gyms that want to keep them.
            </p>
            <div className="address">
              Operating inside WOW Fitness · Pilot unit<br />
              4250 Wilshire Blvd, Los Angeles, CA<br />
              hello@apegym.fit
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Personal training</a></li>
              <li><a href="#b2b">Hire our team</a></li>
              <li><a href="#benefits">Benefits & goals</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Goals</h4>
            <ul>
              <li><a href="#goal-weight-loss">Weight loss</a></li>
              <li><a href="#goal-muscle-gain">Muscle gain</a></li>
              <li><a href="#goal-strength-gain">Strength</a></li>
              <li><a href="#goal-mobility-work">Mobility</a></li>
              <li><a href="#goal-well-being">Well-being</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Ape Gym</a></li>
              <li><a href="#careers">Be part of the team</a></li>
              <li><a href="#b2b">Our team at your gym</a></li>
              <li><a href="#resources">Resources</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Account</h4>
            <ul>
              <li><a href="#login">Log in</a></li>
              <li><a href="#pricing">Start training</a></li>
              <li><a href="#contact-sales">Contact sales</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 Ape Gym Fit · Built by Sparquo</div>
          <div className="legal">
            <a href="#terms">Terms &amp; conditions</a>
            <a href="#privacy">Privacy policy</a>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Pricing, Benefits, FAQ, CtaCloser, Footer });

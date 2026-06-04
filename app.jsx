// app.jsx — composes the landing page + tweaks panel + theme state.

const { useEffect: useEffect2, useState: useStateApp } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#F97316",
  "heroBg": "#09090B",
  "showChips": true,
  "mascotAnim": true,
  "theme": "dark"
}/*EDITMODE-END*/;

function getInitialTheme(fallback) {
  try {
    const saved = localStorage.getItem("apegym-theme");
    if (saved === "dark" || saved === "light") return saved;
  } catch (e) {}
  return fallback || "dark";
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [theme, setTheme] = useStateApp(() => getInitialTheme(t.theme));

  // Keep <body> class and localStorage in sync with theme.
  useEffect2(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    try { localStorage.setItem("apegym-theme", theme); } catch (e) {}
    // mirror into tweaks so the panel reflects current state
    if (t.theme !== theme) setTweak("theme", theme);
  }, [theme]);

  // If the user changes the theme via the Tweaks panel, mirror back.
  useEffect2(() => {
    if (t.theme && t.theme !== theme) setTheme(t.theme);
  }, [t.theme]);

  // Apply other tweaks as live CSS / DOM overrides.
  useEffect2(() => {
    const root = document.documentElement;
    root.style.setProperty("--orange-500", t.accent);
    const hero = document.querySelector(".hero");
    if (hero && t.heroBg) hero.style.background = t.heroBg;
    document.querySelectorAll(".hero-chip").forEach((el) => {
      el.style.display = t.showChips ? "" : "none";
    });
    const mascot = document.querySelector(".hero-mascot img");
    if (mascot) mascot.style.animationPlayState = t.mascotAnim ? "running" : "paused";
  }, [t.accent, t.heroBg, t.showChips, t.mascotAnim]);

  useReveal();

  const toggleTheme = () => setTheme((m) => (m === "dark" ? "light" : "dark"));

  return (
    <React.Fragment>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Problems />
        <ValueBand />
        <HowItWorks />
        <B2B />
        <Testimonials />
        <Pricing />
        <Benefits />
        <FAQ />
        <CtaCloser />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakRadio
          label="Mode"
          value={theme}
          options={["dark", "light"]}
          onChange={(v) => setTheme(v)}
        />
        <TweakSection label="Brand accent" />
        <TweakColor
          label="Accent color"
          value={t.accent}
          options={["#F97316", "#EA580C", "#FB923C", "#C2410C", "#DC2626"]}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakSection label="Hero" />
        <TweakColor
          label="Hero background"
          value={t.heroBg}
          options={["#09090B", "#18181B", "#1a0f08", "#0b1220"]}
          onChange={(v) => setTweak("heroBg", v)}
        />
        <TweakToggle
          label="Floating session chips"
          value={t.showChips}
          onChange={(v) => setTweak("showChips", v)}
        />
        <TweakToggle
          label="Mascot float animation"
          value={t.mascotAnim}
          onChange={(v) => setTweak("mascotAnim", v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

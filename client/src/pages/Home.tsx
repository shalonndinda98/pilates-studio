import { useEffect, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  CarFront,
  Check,
  ChevronDown,
  Clock3,
  Droplets,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const WHATSAPP_NUMBER = "254700000000";
const studioAddress = "Kilimani Business Centre, Argwings Kodhek Road, Nairobi";

const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const navItems = [
  { label: "Why us", href: "#why-us" },
  { label: "Classes", href: "#classes" },
  { label: "The studio", href: "#studio" },
  { label: "Stories", href: "#stories" },
];

const services = [
  {
    number: "01",
    name: "Private 1-on-1s",
    detail: "A focused hour designed around your body, goals and pace.",
    price: "KSh 4,500",
    cadence: "per session · 60 min",
    accent: "terracotta",
  },
  {
    number: "02",
    name: "Semi-Private Duets",
    detail: "Bring a training partner. Share the energy, keep the attention personal.",
    price: "KSh 2,800",
    cadence: "per person · 60 min",
    accent: "sage",
  },
  {
    number: "03",
    name: "Small Group Classes",
    detail: "Mat or Reformer sessions with considered coaching and room to breathe.",
    price: "KSh 1,800",
    cadence: "per person · 55 min",
    accent: "sand",
  },
];

const testimonials = [
  {
    quote:
      "I came in with the kind of back pain you learn to work around at a desk. In eight weeks, I was sitting through a full workday without that familiar ache.",
    person: "Nairobi corporate professional",
    context: "Desk-bound · Westlands",
  },
  {
    quote:
      "The care after having my baby was everything. I felt seen, never rushed, and strong in my body again before I knew it was possible.",
    person: "New mum & creative director",
    context: "Post-natal · Kilimani",
  },
  {
    quote:
      "Pilates has become my best off-field work. Better range, better control, fewer niggles — and the coaching is genuinely excellent.",
    person: "Local endurance athlete",
    context: "Running & cycling · Lavington",
  },
];

function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <span />
      <span />
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-header ${menuOpen ? "menu-is-open" : ""}`}>
        <a className="brand" href="#top" onClick={closeMenu} aria-label="The Alignment Room home">
          <LogoMark />
          <span className="brand-copy">
            <strong>The Alignment Room</strong>
            <small>Kilimani · Nairobi</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="header-cta"
          href={whatsappLink("Hi! I would like to book a Pilates session at The Alignment Room.")}
          target="_blank"
          rel="noreferrer"
        >
          Book via WhatsApp <ArrowUpRight size={16} strokeWidth={2.2} />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className="mobile-nav" aria-hidden={!menuOpen}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a
            className="mobile-nav-cta"
            href={whatsappLink("Hi! I would like to book a Pilates session at The Alignment Room.")}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Book via WhatsApp <ArrowUpRight size={16} />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-texture" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy reveal is-visible">
              <p className="eyebrow light-eyebrow"><span /> Pilates, with a point of view</p>
              <h1>Move with <em>more</em> certainty.</h1>
              <p className="hero-intro">
                Ten years of thoughtful Pilates in Kilimani — Mat and Reformer classes for a stronger posture, calmer joints and a body you can trust.
              </p>
              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href={whatsappLink("Hi! I am a new client and would like to book my first Pilates session.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={18} /> Book via WhatsApp
                </a>
                <a className="text-link light-link" href="#classes">
                  Explore classes <ArrowUpRight size={17} />
                </a>
              </div>
              <div className="hero-proof">
                <div className="avatar-stack" aria-hidden="true">
                  <span>W</span><span>A</span><span>N</span>
                </div>
                <p><strong>Trusted by Nairobi movers</strong><br /><span>From first-timers to serious athletes</span></p>
              </div>
            </div>

            <div className="hero-visual reveal is-visible" style={{ animationDelay: "100ms" }}>
              <div className="hero-image-frame">
                <img src="/manus-storage/kilimani-pilates-hero_c8f201d9.jpg" alt="Pilates movement on a reformer in a sunlit studio" />
                <div className="image-wash" />
                <div className="hero-image-note">
                  <span className="note-line" />
                  <span>Make space<br />for your body</span>
                </div>
              </div>
              <div className="experience-badge">
                <strong>10</strong>
                <span>years of<br />practice</span>
              </div>
              <div className="hero-asterisk" aria-hidden="true">✳</div>
            </div>
          </div>
          <div className="container hero-meta">
            <div><span className="meta-icon"><Clock3 size={15} /></span><span><strong>5:30am starts</strong><small>Early birds welcome</small></span></div>
            <div><span className="meta-icon"><Activity size={15} /></span><span><strong>Mat + Reformer</strong><small>Small, considered classes</small></span></div>
            <div><span className="meta-icon"><MapPin size={15} /></span><span><strong>2 min from Yaya</strong><small>Easy Kilimani access</small></span></div>
          </div>
        </section>

        <section className="authority-section section-pad" id="why-us">
          <div className="container authority-grid">
            <div className="authority-intro reveal">
              <p className="eyebrow"><span /> The 10-year difference</p>
              <div className="big-number">10<span>yrs</span></div>
              <h2>Experience you can feel in every correction.</h2>
              <p className="section-copy">Longevity is more than a milestone. It is thousands of bodies observed, coached and cared for — so your practice can be precise from day one.</p>
            </div>
            <div className="authority-list reveal" style={{ animationDelay: "120ms" }}>
              {[
                ["Expert safety", "Know when to challenge, when to modify, and how to keep your progress sustainable."],
                ["Proven results", "A method refined across office bodies, recovering bodies and high-performance bodies."],
                ["Posture correction", "Small adjustments that change how you sit, stand, run and carry your day."],
                ["Deep injury knowledge", "Careful programming for old injuries, recurring niggles and the return to movement."],
              ].map(([title, body], index) => (
                <div className="authority-item" key={title}>
                  <span className="item-index">0{index + 1}</span>
                  <div><h3>{title}</h3><p>{body}</p></div>
                  <Check size={17} className="check-icon" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="classes-section section-pad" id="classes">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow"><span /> A clearer way to train</p>
                <h2>Your practice,<br /><em>your pace.</em></h2>
              </div>
              <p className="section-copy heading-copy">Choose the kind of attention you need today. Every class is intentionally small, carefully coached and refreshingly free of guesswork.</p>
            </div>

            <div className="service-grid">
              {services.map((service, index) => (
                <article className={`service-card ${service.accent} reveal`} key={service.number} style={{ animationDelay: `${index * 90}ms` }}>
                  <div className="service-top"><span className="service-number">{service.number}</span><ArrowUpRight size={19} /></div>
                  <div className="service-body"><h3>{service.name}</h3><p>{service.detail}</p></div>
                  <div className="service-bottom"><div><strong>{service.price}</strong><span>{service.cadence}</span></div><a href={whatsappLink(`Hi! I would like to book ${service.name} at The Alignment Room.`)} target="_blank" rel="noreferrer" aria-label={`Book ${service.name}`}>Book <ArrowUpRight size={15} /></a></div>
                </article>
              ))}
            </div>

            <div className="special-card reveal" style={{ animationDelay: "270ms" }}>
              <div className="special-sun" aria-hidden="true"><Sparkles size={20} /></div>
              <div className="special-content"><p className="eyebrow light-eyebrow"><span /> For first-time visitors</p><h3>New Client Special</h3><p>Start with a 60-minute foundations session, a quick movement screen and a plan for what comes next.</p></div>
              <div className="special-price"><span>First visit</span><strong>KSh 2,500</strong><a href={whatsappLink("Hi! I would like to claim the New Client Special at The Alignment Room.")} target="_blank" rel="noreferrer">Claim your spot <ArrowUpRight size={16} /></a></div>
            </div>
          </div>
        </section>

        <section className="studio-section" id="studio">
          <div className="container studio-grid">
            <div className="studio-copy reveal">
              <p className="eyebrow light-eyebrow"><span /> A studio that gets Nairobi</p>
              <h2>Good movement needs a good <em>setting.</em></h2>
              <p>Come in from the city and settle into a serene, focused room. We have thought about the details that make a before-work or after-work class genuinely easy.</p>
              <a className="button button-light" href={whatsappLink("Hi! Please share directions and available class times for The Alignment Room.")} target="_blank" rel="noreferrer">Get directions on WhatsApp <ArrowUpRight size={17} /></a>
            </div>
            <div className="studio-details reveal" style={{ animationDelay: "120ms" }}>
              <div className="detail-row"><div className="detail-icon"><MapPin size={19} /></div><div><span className="detail-label">Find us</span><strong>{studioAddress}</strong><p>2 minutes from Yaya Centre · enter via the Argwings Kodhek gate</p></div></div>
              <div className="detail-row"><div className="detail-icon"><Clock3 size={19} /></div><div><span className="detail-label">Opening hours</span><strong>Mon – Fri · 5:30am – 8:30pm</strong><p>Sat · 8:00am – 1:00pm · early bird and after-work slots available</p></div></div>
              <div className="detail-row"><div className="detail-icon"><CarFront size={19} /></div><div><span className="detail-label">Come comfortably</span><strong>Secure parking on site</strong><p>Plus reliable generator backup, continuous water and a cool, quiet room.</p></div></div>
            </div>
          </div>
          <div className="amenities-strip">
            <div className="container amenity-grid">
              <span><ShieldCheck size={17} /> Secure parking</span><span><Zap size={17} /> Generator backup</span><span><Droplets size={17} /> Continuous water</span><span><Sparkles size={17} /> Serene environment</span>
            </div>
          </div>
        </section>

        <section className="stories-section section-pad" id="stories">
          <div className="container">
            <div className="section-heading reveal">
              <div><p className="eyebrow"><span /> From the room</p><h2>Real bodies.<br /><em>Real change.</em></h2></div>
              <p className="section-copy heading-copy">A practice should make your actual life feel better — from the desk to the track, from new motherhood to your next big goal.</p>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((item, index) => (
                <figure className="testimonial-card reveal" key={item.person} style={{ animationDelay: `${index * 100}ms` }}>
                  <Quote size={25} className="quote-icon" />
                  <blockquote>“{item.quote}”</blockquote>
                  <figcaption><strong>{item.person}</strong><span>{item.context}</span></figcaption>
                </figure>
              ))}
            </div>
            <p className="testimonial-note">Client stories shown here are ready-to-replace sample copy — swap in your verified Nairobi testimonials before publishing.</p>
          </div>
        </section>

        <section className="faq-section">
          <div className="container faq-grid">
            <div className="reveal"><p className="eyebrow"><span /> Before your first visit</p><h2>Good questions<br /><em>belong here.</em></h2><p className="section-copy">Not sure where to start? Send us a WhatsApp and we will help you find the right first step.</p></div>
            <div className="faq-list reveal" style={{ animationDelay: "120ms" }}>
              {[
                ["I have never done Pilates. Is that okay?", "Absolutely. We will meet you where you are, explain the equipment and keep your first session simple, supportive and useful."],
                ["Should I choose Mat or Reformer?", "Both build strength and awareness. Mat is a brilliant place to begin; Reformer gives you more feedback and adjustable resistance. We can recommend a path after your first visit."],
                ["What should I wear and bring?", "Wear comfortable clothes you can move in. Grip socks are helpful but not essential for your first session — just bring water and arrive five minutes early."],
              ].map(([question, answer], index) => (
                <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}>
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown size={19} /></button>
                  <div className="faq-answer"><p>{answer}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta-section">
          <div className="container final-cta-inner reveal">
            <div className="final-cta-orb orb-one" aria-hidden="true" />
            <div className="final-cta-orb orb-two" aria-hidden="true" />
            <p className="eyebrow light-eyebrow"><span /> Your next session starts here</p>
            <h2>Ready to feel<br /><em>more like yourself?</em></h2>
            <p>Tell us what your body needs. We will take it from there.</p>
            <a className="button button-primary button-large" href={whatsappLink("Hi! I am ready to book my first session at The Alignment Room. What is available this week?")} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Chat with us on WhatsApp <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand"><a className="brand" href="#top"><LogoMark /><span className="brand-copy"><strong>The Alignment Room</strong><small>Kilimani · Nairobi</small></span></a><p>Thoughtful Pilates for real Nairobi lives.</p></div>
          <div className="footer-links"><span>Explore</span>{navItems.slice(0, 3).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
          <div className="footer-links"><span>Visit</span><a href="#studio">Argwings Kodhek Road</a><a href={whatsappLink("Hi! Please share your current class timetable.")} target="_blank" rel="noreferrer">Ask for timetable</a></div>
          <div className="footer-social"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a><a href={whatsappLink("Hi! I would like to connect with The Alignment Room.")} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={18} /></a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} The Alignment Room</span><span>Move well · live fully</span></div>
      </footer>

      <a className="floating-whatsapp" href={whatsappLink("Hi! I would like to book a Pilates session at The Alignment Room.")} target="_blank" rel="noreferrer" aria-label="Chat with The Alignment Room on WhatsApp"><MessageCircle size={24} /><span>Book a session</span></a>
    </div>
  );
}

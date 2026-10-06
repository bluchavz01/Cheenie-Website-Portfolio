import { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';
import portraitPhoto from '@assets/f8c1b4c8-98fc-4f4c-b7b5-331eb5058ce9_1791289630624.jpg';
import eveningPhoto from '@assets/unnamed_1791289630624.webp';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'What I do', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Approach', href: '#approach' },
];

const services = [
  {
    number: '01',
    title: 'Customer care',
    intro: 'Thoughtful support, from the first question to the final follow-up.',
    details: [
      'Phone, email, chat and social media inquiries',
      'Order, billing, account and product guidance',
      'Technical troubleshooting and clear escalations',
      'Accurate customer records and resolution follow-through',
    ],
    tint: 'lilac',
  },
  {
    number: '02',
    title: 'Lead & appointment support',
    intro: 'A steady hand for outbound outreach and a well-kept pipeline.',
    details: [
      'Outbound calling, lead generation and qualification',
      'Appointment setting and calendar coordination',
      'CRM notes, lead tagging and prospect follow-up',
      'Client correspondence and administrative support',
    ],
    tint: 'green',
  },
  {
    number: '03',
    title: 'Creative virtual assistance',
    intro: 'Practical operations with a creative eye when your work needs it.',
    details: [
      'Social media posts, carousels, stories and listing content',
      'Marketing materials, presentations and brand assets',
      'Short-form promotional video editing',
      'Content scheduling, audience engagement and reporting',
    ],
    tint: 'stone',
  },
];

const roles = [
  {
    date: 'MAY — SEP 2026',
    company: 'Vache Soghomonian Insurance Agency Inc.',
    title: 'Virtual Assistant · Lead Generalist · Appointment Setter',
    place: 'Remote · Los Angeles, CA',
    summary:
      'Supported insurance prospecting and day-to-day operations through outbound calls, appointment setting, follow-ups and careful CRM documentation.',
    bullets: [
      'Qualified leads and introduced homeowners, auto, commercial and business insurance products.',
      'Scheduled qualified prospects with licensed agents and gathered details for quote preparation.',
      'Followed up by email and kept call notes, lead tags and interaction records current.',
    ],
  },
  {
    date: 'SEP 2024 — PRESENT',
    company: 'Filipino Homes / Rent.ph',
    title: 'Property Endorser · Outbound Caller · Administrative Support',
    place: 'Hybrid · Philippines',
    summary:
      'Helped move rental inquiries from first contact toward a viewing, combining property promotion with responsive client and admin support.',
    bullets: [
      'Promoted rental properties through calls, messages and online platforms.',
      'Managed listings and social posts with property photos and videos.',
      'Qualified inquiries, coordinated viewings, gathered tenant details and supported leasing documents.',
    ],
  },
  {
    date: 'JAN 2025 — APR 2026',
    company: 'Amazon',
    title: 'Customer Service Associate',
    place: 'Remote · Philippines',
    summary:
      'Provided multi-channel support to North American, UK and Canadian customers across orders, payments, digital devices and website navigation.',
    bullets: [
      'Resolved questions about products, order status, returns, payments and account management.',
      'Troubleshot Kindle, Echo and digital-service issues using internal research resources.',
      'Guided customers through account settings, subscriptions and checkout while documenting outcomes.',
    ],
  },
  {
    date: 'DEC 2023 — NOV 2024',
    company: 'Full Potential Solutions / Frontier',
    title: 'Customer Service Representative · Residential Care',
    place: 'Remote · Davao, Philippines',
    summary:
      'Supported residential telecom customers with billing, account management, technical help and sales support in a high-volume environment.',
    bullets: [
      'Explained bills, processed payments and applied account credits.',
      'Handled inbound calls, generated sales leads and helped resolve technical issues.',
      'Scheduled technician visits and maintained accurate account documentation.',
    ],
  },
];

const capabilityGroups = [
  {
    title: 'How I help',
    items: ['Customer service', 'Technical support', 'Outbound calling', 'Lead qualification', 'Appointment setting', 'Administrative support'],
  },
  {
    title: 'Where I’ve worked',
    items: ['E-commerce', 'Telecommunications', 'Real estate', 'Insurance', 'Market research', 'Data collection'],
  },
  {
    title: 'How I work',
    items: ['Clear communication', 'Active listening', 'Careful documentation', 'Empathy & patience', 'Adaptability', 'Confidentiality'],
  },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-8 bg-[#718350]" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container-wide flex h-[74px] items-center justify-between">
        <a href="#home" className="flex items-center gap-3 no-underline" onClick={closeMenu} aria-label="Cheenie Luchavez, home" data-testid="link-brand-home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#65784a] font-serif text-lg text-[#f7f5ed]">C</span>
          <span className="text-[13px] font-semibold tracking-[.08em]">CHEENIE LUCHAVEZ</span>
        </a>
        <nav aria-label="Main navigation" className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-[74px] flex-col gap-6 border-b border-[#d5d8ca] bg-[#f7f5ed] px-[18px] py-6 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}>
          {navItems.map((item) => (
            <a key={item.href} className="nav-link text-sm text-[#595861] hover:text-[#4f623d]" href={item.href} onClick={closeMenu} data-testid={`link-nav-${item.href.slice(1)}`}>
              {item.label}
            </a>
          ))}
            <a className="inline-flex items-center gap-2 text-sm font-semibold text-[#4f623d] no-underline" href="#contact" onClick={closeMenu} data-testid="link-nav-contact">
            Let’s talk <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center text-[#4d5044] md:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          data-testid="button-toggle-navigation"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-grid scroll-mt-20">
      <div className="container-wide grid min-h-[650px] items-center gap-8 py-16 md:grid-cols-[1.1fr_.9fr] md:py-20">
        <div className="relative z-10">
          <div className="fade-in eyebrow mb-7 flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-[#718350]" />
            REMOTE CUSTOMER SUPPORT & VIRTUAL ASSISTANCE
          </div>
          <h1 className="fade-in fade-in-delay-1 max-w-[690px] font-serif text-[clamp(3.2rem,7vw,6.3rem)] leading-[.98] tracking-[-.045em] text-[#33313b]" data-testid="heading-portfolio-hero">
            People first.
            <br />
            <span className="italic text-[#687c4c]">Details handled.</span>
          </h1>
          <p className="fade-in fade-in-delay-2 mt-7 max-w-[550px] text-[17px] leading-[1.8] text-[#62616a]" data-testid="text-portfolio-intro">
            I’m Cheenie — a customer support and virtual-assistance professional with 9+ years in contact center work. I help keep customers cared for, leads moving and the day-to-day in good order.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#contact" className="button-ghost" data-testid="link-work-together">
              Let’s work together <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href="#experience" className="inline-flex items-center gap-2 px-3 py-3 text-sm text-[#62616a] no-underline transition-colors hover:text-[#4f623d]" data-testid="link-explore-experience">
              Explore my experience <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-12 flex items-center gap-4 border-t border-[#d7d9cd] pt-5">
            <span className="font-mono text-[11px] tracking-[.12em] text-[#74638a]" data-testid="text-experience-years">9+ YEARS</span>
            <span className="h-1 w-1 rounded-full bg-[#929485]" />
            <span className="text-[12px] text-[#777680]">Customer care · Operations · Creative support</span>
          </div>
        </div>
        <div className="hero-art">
          <div className="float-note">A calm voice<br />in a busy day</div>
          <figure className="portrait-frame">
            <img
              src={portraitPhoto}
              alt="Portrait of Cheenie Luchavez smiling in a lavender blazer"
              width={1254}
              height={1254}
              fetchPriority="high"
              data-testid="image-cheenie-portrait"
            />
          </figure>
          <div className="portrait-caption">STEADY SUPPORT<br />WITH A HUMAN TOUCH</div>
        </div>
      </div>
      <div className="container-wide flex items-center gap-5 pb-8">
        <div className="h-px flex-1 bg-[#d7d9cd]" />
        <span className="eyebrow text-[9px]">SCROLL TO MEET YOUR NEXT RIGHT HAND</span>
        <div className="h-px flex-1 bg-[#d7d9cd]" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="container-wide grid gap-12 py-24 md:grid-cols-[.73fr_1.27fr] md:py-32">
      <div>
        <SectionLabel>01 — A little about me</SectionLabel>
        <h2 className="serif max-w-[340px] text-4xl leading-[1.14] tracking-[-.025em] text-[#35333d] md:text-[52px]" data-testid="heading-about">
          I notice what needs doing.
        </h2>
      </div>
      <div className="max-w-[700px] space-y-5 text-[15px] leading-[1.9] text-[#62616a]">
        <p className="text-[19px] leading-[1.75] text-[#46454e]">
          I’m Cheenie — your steady partner in customer support and administrative work.
        </p>
        <p>
          Over 9+ years in the contact center industry, I’ve worked across appointment setting, outbound calling, customer support and administration. My background spans real estate, retail, telecommunications, data collection and e-commerce support, with a creative range that includes graphic design and digital marketing.
        </p>
        <p>
          I believe trust is built in the small things: listening carefully, communicating clearly, keeping accurate records and following through. I bring a thoughtful, adaptable presence to remote teams — and aim to anticipate what the business needs before someone has to ask.
        </p>
        <div className="about-photo-row">
          <figure className="about-photo-card">
            <img
              src={eveningPhoto}
              alt="Cheenie seated on a bench outdoors in the evening"
              loading="lazy"
              data-testid="image-cheenie-evening"
            />
            <figcaption>Cheenie, outside the workday</figcaption>
          </figure>
          <div className="grid grid-cols-3 gap-3 border-t border-[#d7d9cd] pt-5 sm:grid-cols-1 sm:gap-0 sm:border-t-0 sm:pt-0">
          <div><span className="serif text-2xl text-[#65784a]">9+</span><p className="mt-1 text-xs text-[#777680]">years in contact center work</p></div>
          <div><span className="serif text-2xl text-[#765f8b]">People</span><p className="mt-1 text-xs text-[#777680]">at the center of every task</p></div>
          <div><span className="serif text-2xl text-[#65784a]">Detail</span><p className="mt-1 text-xs text-[#777680]">minded, calm and dependable</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-[#eeeee5] py-24 md:py-28">
      <div className="container-wide">
        <div className="mb-12 grid gap-5 md:grid-cols-[.75fr_1.25fr] md:items-end">
          <div>
            <SectionLabel>02 — Ways I can support</SectionLabel>
            <h2 className="serif text-4xl leading-tight tracking-[-.025em] text-[#35333d] md:text-5xl">The work behind<br />a smoother workday.</h2>
          </div>
          <p className="max-w-[470px] pb-1 text-[15px] leading-[1.85] text-[#686770] md:justify-self-end">
            Reliable operations, thoughtful communication and creative support — brought together around what your team needs most.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className={`service-panel flex min-h-[360px] flex-col border border-[#d8dbce] p-7 md:p-8 ${service.tint === 'lilac' ? 'bg-[#f0edf2]' : service.tint === 'green' ? 'bg-[#e6eadc]' : 'bg-[#f5f2e9]'}`} data-testid={`card-service-${service.number}`}>
              <span className="service-number">{service.number} / SUPPORT</span>
              <h3 className="serif mt-8 text-[29px] leading-tight text-[#37353f]" data-testid={`heading-service-${service.number}`}>{service.title}</h3>
              <p className="mt-3 min-h-[52px] text-sm leading-[1.7] text-[#6b6971]" data-testid={`text-service-intro-${service.number}`}>{service.intro}</p>
              <ul className="mt-6 space-y-3 border-t border-[#d5d6cc] pt-5">
                {service.details.map((detail) => (
                  <li key={detail} className="flex gap-3 text-[13px] leading-[1.55] text-[#56555e]">
                    <Check className="mt-[2px] shrink-0 text-[#6c7c50]" size={14} aria-hidden="true" />
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[#d1d5c7] pt-5 text-[12px] text-[#73727b]">
          <span>Flexible support, shaped around your priorities.</span>
            <a href="#contact" className="inline-flex items-center gap-2 font-semibold text-[#586d40] no-underline hover:underline" data-testid="link-service-contact">
            Tell me what you need <ArrowRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="container-wide py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-[.72fr_1.28fr]">
        <div>
          <SectionLabel>03 — The experience</SectionLabel>
          <h2 className="serif max-w-[370px] text-4xl leading-[1.12] tracking-[-.025em] text-[#35333d] md:text-[51px]">
            Grounded in real work.
          </h2>
          <p className="mt-6 max-w-[320px] text-sm leading-[1.85] text-[#686770]">
            From telecom and e-commerce to property and insurance, each role has added another perspective on how to support people well.
          </p>
          <div className="mt-10 border-l-2 border-[#d7d9cd] pl-5">
            <span className="eyebrow">EDUCATION</span>
            <h3 className="serif mt-3 text-xl text-[#393741]">BA in Communication</h3>
            <p className="mt-1 text-sm text-[#686770]">Villamor College of Business and Arts</p>
            <p className="mt-2 font-mono text-[10px] tracking-[.1em] text-[#777680]">2016 · General Santos City, Philippines</p>
          </div>
        </div>
        <div className="relative space-y-4 pl-8">
          <div className="timeline-line" aria-hidden="true" />
          {roles.map((role) => (
            <div className="relative" key={role.company}>
              <span className="timeline-dot" aria-hidden="true" />
              <details className="role-card group border border-[#d8dbce] bg-[#f7f5ed]/75 p-5 md:p-6" data-testid={`card-experience-${role.company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                <summary className="flex items-start justify-between gap-4">
                  <div>
                    <span className="eyebrow text-[9px]">{role.date}</span>
                    <h3 className="serif mt-2 text-[21px] leading-snug text-[#35333d]" data-testid={`heading-experience-${role.company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{role.company}</h3>
                    <p className="mt-1 text-[13px] font-medium leading-relaxed text-[#5f5e67]">{role.title}</p>
                    <p className="mt-1 text-[11px] text-[#83818a]">{role.place}</p>
                  </div>
                  <ChevronDown className="chevron mt-1 shrink-0 text-[#748252]" size={18} aria-hidden="true" />
                </summary>
                <div className="mt-5 border-t border-[#daddd1] pt-4">
                  <p className="text-[13px] leading-[1.8] text-[#62616a]">{role.summary}</p>
                  <ul className="mt-4 space-y-2.5">
                    {role.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2.5 text-[12px] leading-[1.65] text-[#696872]">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#75865b]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="approach" className="bg-[#e9e9e0] py-24 md:py-28">
      <div className="container-wide grid gap-12 md:grid-cols-[.7fr_1.3fr]">
        <div>
          <SectionLabel>04 — What I bring</SectionLabel>
          <h2 className="serif max-w-[355px] text-4xl leading-[1.12] tracking-[-.025em] text-[#35333d] md:text-[50px]">
            Dependable by nature. Versatile by experience.
          </h2>
          <p className="mt-6 max-w-[350px] text-sm leading-[1.85] text-[#686770]">
            I value accuracy, confidentiality and warm communication. I’m comfortable working independently, collaborating across teams and adapting to new processes.
          </p>
        </div>
        <div className="space-y-7">
          {capabilityGroups.map((group, index) => (
            <div key={group.title} className="border-t border-[#cbd0c1] pt-5">
              <div className="mb-4 flex items-baseline justify-between">
                 <h3 className="serif text-xl text-[#393741]" data-testid={`heading-capability-${index + 1}`}>{group.title}</h3>
                <span className="font-mono text-[10px] text-[#837394]">0{index + 1}</span>
              </div>
               <div className="flex flex-wrap gap-2">
                 {group.items.map((item, itemIndex) => <span key={item} className="skill-chip px-3 py-2 text-[12px] text-[#54535c]" data-testid={`text-capability-${index + 1}-${itemIndex + 1}`}>{item}</span>)}
              </div>
            </div>
          ))}
          <div className="border-t border-[#cbd0c1] pt-5">
            <h3 className="serif text-xl text-[#393741]">Comfortable with the systems behind the work</h3>
            <p className="mt-3 max-w-[630px] text-[13px] leading-[1.8] text-[#686770]">
              CRM and lead records, helpdesk and ticketing workflows, telephony and auto-dialers, spreadsheets and digital documents, plus professional communication across email, chat, VoIP and video calls. Experienced with cloud document collaboration including Google Drive and SharePoint.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="container-wide py-24 md:py-32">
      <div className="contact-panel px-7 py-12 md:px-14 md:py-16">
        <div className="grid gap-9 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-[660px]">
            <SectionLabel>05 — Let’s work together</SectionLabel>
            <h2 className="serif text-[42px] leading-[1.08] tracking-[-.03em] md:text-[62px]">
              Need a steady hand<br className="hidden sm:block" /> in your corner?
            </h2>
            <p className="mt-5 max-w-[560px] text-[15px] leading-[1.8] text-[#e1e5d9]">
              If you’re looking for thoughtful customer support, organized admin help or a versatile virtual assistant, I’d be glad to hear what your team needs.
            </p>
          </div>
            <a href="#contact-note" className="button-primary w-fit" data-testid="link-start-conversation">
            Start a conversation <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div id="contact-note" className="mt-10 max-w-[640px] border-t border-[#f1efe4]/25 pt-5">
          <p className="text-[13px] leading-[1.8] text-[#e1e5d9]" data-testid="text-contact-note">
            Please reach out using the contact details or platform where you found this portfolio. I haven’t listed direct contact details here, so you can connect with me through your existing introduction.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#d7d9cd] py-6">
      <div className="container-wide flex flex-col items-start justify-between gap-3 text-[11px] text-[#777680] sm:flex-row sm:items-center">
        <a href="#home" className="font-semibold tracking-[.08em] text-[#53544b] no-underline" data-testid="link-footer-home">CHEENIE LUCHAVEZ</a>
        <p>Customer care, operations & creative support.</p>
        <a href="#home" className="inline-flex items-center gap-2 no-underline hover:text-[#4f623d]" data-testid="link-back-to-top">Back to top <ArrowUpRight size={13} aria-hidden="true" /></a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <main className="portfolio-shell min-h-[100dvh]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-[#f7f5ed] focus:p-3">Skip to content</a>
      <Header />
      <div id="main-content">
        <Hero />
        <About />
        <Services />
        <Experience />
        <Capabilities />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

export default App;

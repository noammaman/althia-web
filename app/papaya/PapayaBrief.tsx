'use client'

import { useEffect } from 'react'
import { Fraunces, Inter_Tight, IBM_Plex_Mono } from 'next/font/google'

const display = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--pg-display',
  display: 'swap',
})
const body = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--pg-body',
  display: 'swap',
})
const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--pg-mono',
  display: 'swap',
})

/* Small epistemic tag: the honesty system that runs through the whole page. */
function Tag({ k }: { k: 'fact' | 'hyp' | 'q' }) {
  const label = k === 'fact' ? 'Fact' : k === 'hyp' ? 'Hypothesis' : 'Question'
  return <span className={`pg-tag pg-tag--${k}`}>{label}</span>
}

export default function PapayaBrief() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.pg-reveal'))
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('pg-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('pg-in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <main className={`pg ${display.variable} ${body.variable} ${mono.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      {/* If JS never runs, still show everything, since this page exists to be read. */}
      <noscript>
        <style>{`.pg-reveal{opacity:1 !important;transform:none !important;}`}</style>
      </noscript>

      {/* Nav */}
      <nav className="pg-nav">
        <div className="pg-nav-inner">
          <span className="pg-nav-name">Noam Maman</span>
          <span className="pg-nav-ctx">Papaya Global · Payments GTM</span>
          <a className="pg-nav-cta" href="mailto:noammaman17@gmail.com">
            Email me
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="pg-hero">
        <p className="pg-memo-kicker pg-reveal">Working notes</p>
        <h1 className="pg-h1 pg-reveal">
          How I’d approach the Payments GTM role.
        </h1>
        <p className="pg-lede pg-reveal">
          These are notes I wrote to think the role through before we talk. I’ve
          tried to keep what’s publicly <em>knowable</em> separate from what I’d
          need your data to confirm, and to flag which is which.
        </p>

        <dl className="pg-memo pg-reveal">
          <div>
            <dt>To</dt>
            <dd>Papaya Global, Payments GTM</dd>
          </div>
          <div>
            <dt>From</dt>
            <dd>Noam Maman</dd>
          </div>
          <div>
            <dt>Re</dt>
            <dd>How I’d approach the role</dd>
          </div>
          <div>
            <dt>Read</dt>
            <dd>~7 minutes</dd>
          </div>
        </dl>

        {/* Legend */}
        <div className="pg-legend pg-reveal">
          <span className="pg-legend-title">A note on how to read this:</span>
          <span className="pg-legend-row">
            <Tag k="fact" /> public information
          </span>
          <span className="pg-legend-row">
            <Tag k="hyp" /> my reasoning, which internal data may change
          </span>
          <span className="pg-legend-row">
            <Tag k="q" /> something I’d want to learn
          </span>
        </div>
      </header>

      {/* Why this role */}
      <section className="pg-section">
        <div className="pg-col">
          <p className="pg-kicker pg-reveal">01 · Where I’m coming from</p>
          <h2 className="pg-h2 pg-reveal">
            Four years at Placer.ai.
          </h2>
          <p className="pg-p pg-reveal">
            I started by writing <strong>verticalized case studies</strong>,
            working out how to make our data land for prospects across dozens of
            industries (hotels, grocers, gyms, malls, retail). That turned into
            the interactive tools we published for lead-gen, then the in-house
            AI-assisted pipeline (Databricks, Airflow, GCP) that replaced them,
            and lately <strong>AI agents</strong> that let the team query our
            data, and our sales calls, in plain language.
          </p>
          <p className="pg-p pg-reveal">
            Different surface each year, but the same job underneath: making
            commercial teams faster with data and systems. I also build and ship
            AI products end to end on my own time. That’s the reason this role
            reads to me as building the{' '}
            <em>commercial operating system</em> for Payments, rather than
            marketing or sales.
          </p>
          <ul className="pg-chips pg-reveal">
            <li>Analytics &amp; modeling</li>
            <li>AI workflow design</li>
            <li>Process &amp; systems</li>
            <li>Commercial thinking</li>
            <li>Hands-on execution</li>
          </ul>

          <div className="pg-proof pg-reveal">
            <p className="pg-proof-label">Selected proof</p>
            <div className="pg-proof-grid">
              <a
                className="pg-proof-card"
                href="https://www.placer.ai/free-tools/return-to-office"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Return-to-Office Index</h3>
                <p>
                  Built from a one-off script into a live product. It’s now both
                  a feature on the Placer platform and a free lead-generation
                  tool on placer.ai.
                </p>
                <span className="pg-proof-link">
                  placer.ai/free-tools/return-to-office →
                </span>
              </a>
              <div className="pg-proof-card">
                <h3>Self-service analytics</h3>
                <p>
                  Built a system (Hex) that lets non-technical teammates run
                  complex hierarchical queries on the fly, which effectively
                  automated my own role.
                </p>
              </div>
              <div className="pg-proof-card">
                <h3>AI agents for GTM ops</h3>
                <p>
                  Building agents that turn our data and Gong sales calls into
                  something teammates query in plain language: metric views,
                  Genie spaces, marketing-ops automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I read the product */}
      <section className="pg-section">
        <div className="pg-col">
          <p className="pg-kicker pg-reveal">02 · How I read the product</p>
          <h2 className="pg-h2 pg-reveal">A payments rail, not payroll.</h2>
          <p className="pg-p pg-reveal">
            From the public product walkthrough: it’s a cross-border mass-payout
            engine built on virtual IBAN wallets. You fund a wallet by IBAN, then
            pay many beneficiaries (employees, contractors, vendors, even tax
            authorities) across currencies, with approval controls, proof of
            payment, and reconciliation. The spine is simple:
          </p>
          <div className="pg-flow pg-reveal">
            <span>Wallet</span>
            <i>→</i>
            <span>Beneficiary</span>
            <i>→</i>
            <span>Payment group</span>
            <i>→</i>
            <span>Payment / Invoice</span>
          </div>
        </div>

        <div className="pg-col" style={{ marginTop: 8 }}>
          <div className="pg-belief pg-reveal">
            <Tag k="hyp" />
            <p className="pg-p">
              The object model is <strong>beneficiary-centric, not
              employee-centric</strong>. Beneficiaries include vendors and
              authorities. That’s an accounts-payable and treasury concept, and
              it means the product can run with <em>zero payroll attached</em>.
            </p>
          </div>
          <div className="pg-belief pg-reveal">
            <Tag k="hyp" />
            <p className="pg-p">
              And the interface speaks <strong>Finance</strong>, not HR: wallets
              and funding deadlines, maker-checker approvals, charged-vs-arrival
              amounts, proof-of-payment export. So the economic buyer looks like
              the office of the CFO (Treasury, AP, Global Payments) more than
              People Ops.
            </p>
          </div>
          <div className="pg-belief pg-reveal">
            <Tag k="hyp" />
            <p className="pg-p">
              So what they’re really selling isn’t wallets or IBANs. It’s one
              operating system for global business payments. The target is the
              CFO who today stitches together HSBC, Wise, local banks,
              spreadsheets, and email approvals across a dozen countries and
              several entities, and the pitch is “stop stitching, become the
              system.” That reads a lot stronger than “international payments.”
            </p>
          </div>
        </div>
      </section>

      {/* What I believe */}
      <section className="pg-section pg-section--band">
        <div className="pg-col">
          <p className="pg-kicker pg-reveal">03 · What I believe about Papaya Payments</p>
          <h2 className="pg-h2 pg-reveal">
            Read from the outside, and labeled that way.
          </h2>

          <div className="pg-belief pg-reveal">
            <Tag k="fact" />
            <p className="pg-p">
              Papaya delivers <strong>workforce payments</strong> (salaries,
              taxes, and benefits) across 160+ countries and 130+ payout
              currencies,
              on rails built with tier-one banks (J.P. Morgan, Citi), with fees
              known in advance rather than lost to opaque cross-border FX.
            </p>
          </div>

          <div className="pg-belief pg-reveal">
            <Tag k="hyp" />
            <p className="pg-p">
              Because it can stand alone, there are likely{' '}
              <strong>two distinct motions</strong>, not one:{' '}
              <em>attach</em> (selling payments into the warm, under-monetized
              payroll base) and <em>standalone</em> (net-new cross-border payout
              sold to Finance). Different buyer, different competitors,
              different velocity. How much to bet on each is, to me, the core
              GTM question.
            </p>
          </div>

          <div className="pg-belief pg-reveal">
            <Tag k="hyp" />
            <p className="pg-p">
              The competitor set splits with those motions. On{' '}
              <strong>standalone</strong>, the closest names look like Wise,
              Airwallex, Nium, and the banks; Wise in particular owns the
              “transparent fees” story, which overlaps our wedge. On{' '}
              <strong>attach</strong>, it’s Deel, Rippling, and Remote. My read:
              we don’t win on cheaper transfers, we win on the workforce layer
              (salaries, taxes, benefits, compliance, controls) that a general
              FX tool doesn’t touch.
            </p>
          </div>

          <div className="pg-belief pg-reveal">
            <Tag k="hyp" />
            <p className="pg-p">
              The sharpest wedge is probably financial legibility: “no payment
              leakage, fees known up front.” That reads clearly to a CFO and a
              treasury team in a category used to hidden costs. If so, the
              economic buyer and the message shift accordingly.
            </p>
          </div>

          <div className="pg-belief pg-reveal">
            <Tag k="hyp" />
            <p className="pg-p">
              The <strong>“invite beneficiary to Papaya Payments”</strong> flow
              is quietly strategic: beneficiaries enter their own bank details,
              which cuts errors and creates a small network effect, since every
              onboarded payee pulls more payment volume onto the platform. It
              may be a growth lever, not just a data-entry convenience.
            </p>
          </div>

          <div className="pg-belief pg-reveal">
            <Tag k="hyp" />
            <p className="pg-p">
              AI’s advantage here is <em>operational</em>, not cosmetic:
              compressing the manual commercial work (research, deal inspection,
              pricing, competitive intel) so the team’s scarce senior judgment
              goes to the decisions that actually move revenue.
            </p>
          </div>

          <p className="pg-caveat pg-reveal">
            Every hypothesis above is falsifiable with one week inside your
            data. I’d expect at least one of them to be wrong, and I’d want to
            know which.
          </p>
        </div>
      </section>

      {/* Organize the work */}
      <section className="pg-section">
        <div className="pg-col">
          <p className="pg-kicker pg-reveal">04 · How I’d organize the work</p>
          <h2 className="pg-h2 pg-reveal">
            The mandate is broad. I’d run it as four workstreams.
          </h2>
          <p className="pg-p pg-reveal">
            The role lists a lot of responsibilities. Grouping them keeps the
            work coherent and shows where each piece connects. Cross-functional
            partnership (Sales, Product, Marketing, Leadership) isn’t a fifth
            stream; it’s how all four actually run.
          </p>
        </div>

        <div className="pg-streams">
          <article className="pg-stream pg-reveal">
            <span className="pg-stream-num">01</span>
            <h3>Target</h3>
            <p className="pg-stream-covers">
              ICP · segmentation · account prioritization · market &amp;
              competitive research
            </p>
            <p className="pg-stream-body">
              Start from win data and product fit: score the payroll base for
              attach and net-new accounts for standalone. Market and competitive
              research feeds that scoring, rather than living in a separate deck.
            </p>
          </article>

          <article className="pg-stream pg-reveal">
            <span className="pg-stream-num">02</span>
            <h3>Playbook</h3>
            <p className="pg-stream-covers">
              outbound &amp; GTM playbooks · messaging · positioning ·
              enablement · product commercialization
            </p>
            <p className="pg-stream-body">
              Draw messaging from real calls and closed-won reasons, not a
              brainstorm. Build enablement reps actually reach for, and treat
              each new-product launch as a repeatable motion, not a one-off.
            </p>
          </article>

          <article className="pg-stream pg-reveal">
            <span className="pg-stream-num">03</span>
            <h3>Instrument &amp; price</h3>
            <p className="pg-stream-covers">
              pipeline · funnel · revenue metrics · ROI models · dashboards ·
              pricing analysis
            </p>
            <p className="pg-stream-body">
              My home turf. One funnel view the team trusts, an ROI model reps
              run live in deals, and pricing grounded in realized rates and
              cross-border economics.
            </p>
          </article>

          <article className="pg-stream pg-reveal">
            <span className="pg-stream-num">04</span>
            <h3>AI leverage</h3>
            <p className="pg-stream-covers">
              AI workflows · no/low-code automation · scaling GTM execution
            </p>
            <p className="pg-stream-body">
              Automate the repetitive commercial toil (research, call notes,
              stalled-deal flags) so scarce senior time goes to judgment.
              Adoption by the team is the metric, not novelty.
            </p>
          </article>
        </div>

        <div className="pg-method pg-reveal">
          <p className="pg-method-label">Where I’d start</p>
          <h3>Let the data define the ICP, not intuition.</h3>
          <p>
            The platform already generates the usage data you’d want for this.
            Given access, I’d stop guessing at the ICP and build it: take the
            best existing customers (highest volume, fastest to expand, longest
            retained), find the firmographic and usage signature they share, and
            score every prospect against it.
          </p>
          <p className="pg-method-sig">
            Signals I’d score on: countries, legal entities, headcount, funding
            and hiring velocity, industry, and payroll/ERP stack; plus, from
            product usage, beneficiaries, currencies, entities, payment volume,
            contractor-vs-employee mix, failed-payment rate, and approval-chain
            depth. Cluster on those usage patterns and the segments
            (contractor-heavy, multi-entity treasury, vendor AP) fall out of the
            data, so messaging matches real behavior instead of industry labels.
            This is the kind of scoring model I built at Placer.
          </p>
        </div>
      </section>

      {/* 30/60/90 */}
      <section className="pg-section" id="first-90">
        <div className="pg-col">
          <p className="pg-kicker pg-reveal">05 · First 90 days</p>
          <h2 className="pg-h2 pg-reveal">Learn, then find leverage, then build systems.</h2>
        </div>

        <div className="pg-timeline">
          <article className="pg-phase pg-reveal">
            <div className="pg-phase-head">
              <span className="pg-phase-num">30</span>
              <span className="pg-phase-label">days · Learn the machine</span>
            </div>
            <div className="pg-phase-body">
              <p className="pg-p">
                Resist the urge to “add value” before I understand the system.
                The goal is an accurate map.
              </p>
              <ul className="pg-list">
                <li>
                  <strong>Meet:</strong> Sales &amp; SDRs, Product, RevOps,
                  Finance/Treasury, and if allowed, sit in on real customer
                  calls.
                </li>
                <li>
                  <strong>Pull:</strong> pipeline and funnel conversion by
                  segment, win/loss notes, pricing realization, and the current
                  Payments <em>attach rate</em> to the payroll base.
                </li>
                <li>
                  <strong>Ask:</strong> where deals actually stall, which
                  metric the org is judged on, and what work eats the most
                  senior time.
                </li>
              </ul>
            </div>
          </article>

          <article className="pg-phase pg-reveal">
            <div className="pg-phase-head">
              <span className="pg-phase-num">60</span>
              <span className="pg-phase-label">days · Find the leverage</span>
            </div>
            <div className="pg-phase-body">
              <p className="pg-p">
                Convert the map into a few concrete, measurable bets, small
                enough to ship and real enough to learn from.
              </p>
              <ul className="pg-list">
                <li>A first ROI / pricing model the team can actually use in deals.</li>
                <li>One funnel dashboard that makes conversion and stall points visible.</li>
                <li>ICP refinement from win data: who we convert fastest, and why.</li>
                <li>One enablement asset and one experiment (e.g. a Payments-attach play into the payroll base).</li>
              </ul>
            </div>
          </article>

          <article className="pg-phase pg-reveal">
            <div className="pg-phase-head">
              <span className="pg-phase-num">90</span>
              <span className="pg-phase-label">days · Build the system</span>
            </div>
            <div className="pg-phase-body">
              <p className="pg-p">
                Turn the wins that worked into durable infrastructure, the kind
                that keeps paying off after I stop touching it.
              </p>
              <ul className="pg-list">
                <li>Scalable AI workflows for the toil identified on day 30 (see below).</li>
                <li>A repeatable pricing &amp; competitive-intel cadence, not a one-off deck.</li>
                <li>A decision framework for segmentation and prioritization.</li>
                <li>A documented playbook, so the next five hires inherit a system, not tribal knowledge.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* Opportunities */}
      <section className="pg-section pg-section--band">
        <div className="pg-col">
          <p className="pg-kicker pg-reveal">06 · Opportunities I’d investigate</p>
          <h2 className="pg-h2 pg-reveal">Ideas to validate, not recommendations.</h2>
          <p className="pg-p pg-reveal">
            These are the kinds of AI-and-automation bets I’d test. Each is a
            hypothesis with a clear way to prove or kill it, and each is only
            worth building if the team actually adopts it.
          </p>
          <p className="pg-caveat pg-reveal">
            A few of these aren’t hypothetical for me. I’ve built close analogues
            at Placer (turning Gong sales calls into agent-readable data,
            self-service query tools). Papaya’s context would reshape them, but
            the muscle is there.
          </p>
        </div>

        <div className="pg-cards">
          {[
            ['Account research briefs', 'Could an agent assemble a one-page brief on each target (footprint, headcount by country, likely payment complexity) before a rep ever opens the account?'],
            ['Call → CRM structure', 'Could call summaries write themselves into structured CRM fields (pain, buyer, objection, next step) instead of relying on manual note-taking?'],
            ['Stalled-deal detection', 'Could activity signals flag deals going quiet earlier than a human notices, and suggest the specific reason they stalled?'],
            ['Pricing & FX scenarios', 'Could pricing and cross-border cost modeling become a scenario tool reps run live, rather than a spreadsheet only ops can open?'],
            ['Competitive intel digest', 'Could competitive moves (Deel, Rippling, Remote, banks, FX specialists) be summarized on a cadence instead of gathered ad hoc?'],
            ['ICP scoring', 'Could inbound and the install base be scored for Payments fit, so the team spends its hours where conversion is most likely?'],
          ].map(([t, d]) => (
            <article className="pg-card pg-reveal" key={t}>
              <Tag k="q" />
              <h3 className="pg-card-title">{t}</h3>
              <p className="pg-card-desc">{d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* How I think */}
      <section className="pg-section">
        <div className="pg-col">
          <p className="pg-kicker pg-reveal">07 · How I think</p>
          <h2 className="pg-h2 pg-reveal">A few principles I keep coming back to.</h2>
        </div>
        <div className="pg-principles">
          {[
            ['Start with the customer', 'Every system is downstream of a real person trying to get something done. I start there, not with the dashboard.'],
            ['Measure before optimizing', 'Instrument first. A number you trust beats a strong opinion, and it settles arguments faster.'],
            ['Automate the repetitive', 'If a smart person does it the same way twice a week, it’s a candidate for a workflow. Free the judgment, automate the toil.'],
            ['Systems over heroics', 'A process that works when I’m on vacation is worth more than an impressive rescue. I build for the next hire, not for applause.'],
            ['AI augments judgment', 'I use AI to expand what a person can do, not to replace the call they’re paid to make. Trust is the adoption metric.'],
            ['Stay close to the data', 'I’d rather read the raw funnel and a few call transcripts myself than accept a tidy summary I can’t interrogate.'],
          ].map(([t, d]) => (
            <div className="pg-principle pg-reveal" key={t}>
              <h3 className="pg-principle-title">{t}</h3>
              <p className="pg-principle-desc">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Questions */}
      <section className="pg-section pg-section--band" id="questions">
        <div className="pg-col">
          <p className="pg-kicker pg-reveal">08 · Questions I’d love to explore together</p>
          <h2 className="pg-h2 pg-reveal">The things I’m genuinely curious about.</h2>
          <ol className="pg-questions">
            {[
              'Is Payments mostly sold as attach to the payroll base, or landed standalone, and are those motions different enough to need separate playbooks?',
              'What’s the single metric the Payments org is held to next year: total payment volume, revenue, attach rate, or margin?',
              'Where does a deal most often stall: procurement, a bank or treasury security review, or the internal payroll migration?',
              'How much of the “known fees, no leakage” value is understood before a demo versus discovered during one?',
              'Who’s the real economic buyer, CFO/Treasury or HR/People, and how much does that change enablement and messaging?',
              'What’s the biggest source of manual toil in the commercial process today that, if automated, would free the most senior time?',
              'Where is competition sharpest: Deel, Rippling, Remote, the banks, or specialist FX and payout providers? And on which axis: price, speed, coverage, or compliance?',
              'What data already exists cleanly (CRM, billing, the payments ledger) versus what I’d have to instrument from scratch?',
              'What’s the current Payments attach rate to the payroll base, and what’s a realistic ceiling?',
              'What would make the first AI workflow trusted enough to be adopted by the team, rather than admired and quietly ignored?',
            ].map((q, i) => (
              <li className="pg-question pg-reveal" key={i}>
                <span className="pg-question-num">{String(i + 1).padStart(2, '0')}</span>
                <span>{q}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing */}
      <section className="pg-section pg-closing">
        <div className="pg-col">
          <p className="pg-kicker pg-reveal">Closing</p>
          <h2 className="pg-h2 pg-reveal">One last note.</h2>
          <p className="pg-p pg-reveal">
            The point of this page isn’t to prove I have the answers. It’s to
            show how I’d approach the problem: structured, commercial, AI-first,
            and clear about what I don’t yet know. I’ve almost certainly gotten
            some of it wrong from the outside, and I’d be glad to have my
            assumptions challenged in person.
          </p>
          <p className="pg-p pg-reveal">
            If any of this resonates, I’d love to keep the conversation going.
          </p>
          <a className="pg-btn pg-btn--primary pg-reveal" href="mailto:noammaman17@gmail.com">
            noammaman17@gmail.com
          </a>
        </div>
        <footer className="pg-footer">
          <span>Prepared independently by Noam Maman · althia.org/papaya</span>
          <span>Not affiliated with or produced by Papaya Global.</span>
        </footer>
      </section>
    </main>
  )
}

const CSS = `
.pg{
  --paper:#FBFAF8; --paper-2:#F4F1EC; --ink:#1B1815; --ink-2:#5F5852;
  --line:rgba(27,24,21,0.12); --coral:#FA3E1E; --coral-ink:#D22E10;
  --coral-wash:rgba(250,62,30,0.07);
  background:var(--paper); color:var(--ink);
  font-family:var(--pg-body),-apple-system,BlinkMacSystemFont,sans-serif;
  -webkit-font-smoothing:antialiased; line-height:1.6;
  letter-spacing:-0.01em;
}
.pg *{box-sizing:border-box;}
.pg ::selection{background:var(--coral);color:#fff;}

/* Nav */
.pg-nav{position:sticky;top:0;z-index:50;background:rgba(251,250,248,0.82);
  backdrop-filter:saturate(160%) blur(12px);border-bottom:1px solid var(--line);}
.pg-nav-inner{max-width:1080px;margin:0 auto;padding:14px clamp(20px,5vw,40px);
  display:flex;align-items:center;gap:16px;}
.pg-nav-name{font-family:var(--pg-display);font-weight:600;font-size:16px;letter-spacing:-0.02em;}
.pg-nav-ctx{font-family:var(--pg-mono);font-size:11px;letter-spacing:0.04em;
  text-transform:uppercase;color:var(--ink-2);}
.pg-nav-cta{margin-left:auto;font-size:14px;font-weight:500;color:var(--ink);
  text-decoration:none;border-bottom:1.5px solid var(--coral);padding-bottom:1px;
  transition:color .2s;}
.pg-nav-cta:hover{color:var(--coral-ink);}
@media(max-width:640px){.pg-nav-ctx{display:none;}}

/* Layout */
.pg-hero,.pg-section{max-width:1080px;margin:0 auto;padding:clamp(56px,8vw,104px) clamp(20px,5vw,40px);}
.pg-col{max-width:720px;}
.pg-section--band{background:var(--paper-2);max-width:none;padding-left:0;padding-right:0;}
.pg-section--band > .pg-col,.pg-section--band > .pg-cards,.pg-section--band .pg-questions,
.pg-section--band > *{max-width:1080px;margin-left:auto;margin-right:auto;
  padding-left:clamp(20px,5vw,40px);padding-right:clamp(20px,5vw,40px);}

/* Type */
.pg-eyebrow{font-family:var(--pg-mono);font-size:12px;letter-spacing:0.1em;
  text-transform:uppercase;color:var(--coral-ink);margin:0 0 22px;}
.pg-memo-kicker{font-family:var(--pg-mono);font-size:12px;letter-spacing:0.16em;
  text-transform:uppercase;color:var(--ink-2);margin:0 0 22px;}
.pg-h1{font-family:var(--pg-display);font-weight:500;letter-spacing:-0.02em;
  font-size:clamp(30px,4.6vw,46px);line-height:1.08;margin:0 0 24px;max-width:18ch;}
.pg-h1-accent{color:var(--coral);font-style:italic;}
.pg-memo{border-left:2px solid var(--coral);padding:2px 0 2px 20px;margin:0 0 36px;
  display:grid;gap:8px;max-width:520px;}
.pg-memo div{display:grid;grid-template-columns:56px 1fr;gap:14px;align-items:baseline;}
.pg-memo dt{font-family:var(--pg-mono);font-size:11px;letter-spacing:0.08em;
  text-transform:uppercase;color:var(--ink-2);margin:0;}
.pg-memo dd{margin:0;font-size:15px;color:var(--ink);}
.pg-lede{font-size:clamp(18px,2.2vw,22px);line-height:1.55;color:var(--ink);
  max-width:44ch;margin:0 0 34px;font-weight:400;}
.pg-lede em{font-family:var(--pg-display);font-style:italic;}
.pg-kicker{font-family:var(--pg-mono);font-size:12px;letter-spacing:0.08em;
  text-transform:uppercase;color:var(--coral-ink);margin:0 0 18px;}
.pg-h2{font-family:var(--pg-display);font-weight:500;letter-spacing:-0.02em;
  font-size:clamp(26px,3.6vw,38px);line-height:1.1;margin:0 0 26px;max-width:20ch;}
.pg-p{font-size:17px;line-height:1.68;color:var(--ink-2);margin:0 0 18px;max-width:60ch;}
.pg-p strong{color:var(--ink);font-weight:600;}
.pg-p em{font-family:var(--pg-display);font-style:italic;color:var(--ink);}

/* Buttons */
.pg-hero-actions{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:52px;}
.pg-btn{display:inline-flex;align-items:center;font-size:15px;font-weight:500;
  text-decoration:none;padding:12px 22px;border-radius:999px;transition:all .2s ease;}
.pg-btn--primary{background:var(--coral);color:#fff;}
.pg-btn--primary:hover{background:var(--coral-ink);transform:translateY(-1px);}
.pg-btn--ghost{color:var(--ink);border:1.5px solid var(--line);}
.pg-btn--ghost:hover{border-color:var(--ink);}

/* Meta */
.pg-meta{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;
  border-top:1px solid var(--line);border-bottom:1px solid var(--line);
  padding:26px 0;margin:0 0 34px;}
.pg-meta dt{font-family:var(--pg-mono);font-size:11px;letter-spacing:0.06em;
  text-transform:uppercase;color:var(--ink-2);margin:0 0 6px;}
.pg-meta dd{margin:0;font-size:15px;font-weight:500;color:var(--ink);}
@media(max-width:640px){.pg-meta{grid-template-columns:repeat(2,1fr);}}

/* Legend */
.pg-legend{display:flex;flex-wrap:wrap;align-items:center;gap:18px;
  font-size:14px;color:var(--ink-2);}
.pg-legend-title{font-weight:500;color:var(--ink);}
.pg-legend-row{display:inline-flex;align-items:center;gap:9px;}

/* Tags */
.pg-tag{display:inline-flex;align-items:center;font-family:var(--pg-mono);
  font-size:10.5px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase;
  padding:4px 9px;border-radius:6px;white-space:nowrap;line-height:1;}
.pg-tag--fact{background:var(--ink);color:var(--paper);}
.pg-tag--hyp{background:var(--coral-wash);color:var(--coral-ink);
  box-shadow:inset 0 0 0 1px rgba(245,71,58,0.32);}
.pg-tag--q{background:transparent;color:var(--ink-2);
  box-shadow:inset 0 0 0 1px var(--line);}

/* Selected proof */
.pg-proof{margin-top:40px;}
.pg-proof-label{font-family:var(--pg-mono);font-size:11px;letter-spacing:0.08em;
  text-transform:uppercase;color:var(--ink-2);margin:0 0 14px;}
.pg-proof-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
.pg-proof-card{display:block;background:#fff;border:1px solid var(--line);
  border-radius:16px;padding:20px;text-decoration:none;color:inherit;
  transition:transform .25s ease,box-shadow .25s ease,border-color .25s;}
a.pg-proof-card:hover{transform:translateY(-3px);
  box-shadow:0 12px 30px -18px rgba(27,24,21,0.35);border-color:rgba(250,62,30,0.4);}
.pg-proof-card h3{font-family:var(--pg-display);font-weight:600;font-size:17.5px;
  letter-spacing:-0.01em;margin:0 0 8px;}
.pg-proof-card p{font-size:13.5px;line-height:1.55;color:var(--ink-2);margin:0;}
.pg-proof-link{display:inline-block;margin-top:12px;font-family:var(--pg-mono);
  font-size:11.5px;color:var(--coral-ink);}
@media(max-width:860px){.pg-proof-grid{grid-template-columns:1fr;}}

/* Data-driven ICP callout */
.pg-method{margin-top:24px;background:var(--coral-wash);
  border:1px solid rgba(250,62,30,0.25);border-radius:16px;
  padding:26px clamp(22px,4vw,30px);}
.pg-method-label{font-family:var(--pg-mono);font-size:11px;letter-spacing:0.08em;
  text-transform:uppercase;color:var(--coral-ink);margin:0 0 10px;}
.pg-method h3{font-family:var(--pg-display);font-weight:600;font-size:22px;
  letter-spacing:-0.01em;margin:0 0 12px;max-width:24ch;}
.pg-method p{font-size:15px;line-height:1.6;color:var(--ink-2);margin:0 0 12px;max-width:68ch;}
.pg-method p:last-child{margin-bottom:0;}
.pg-method-sig{font-size:14px;}

/* Workstreams */
.pg-streams{margin-top:36px;display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.pg-stream{background:#fff;border:1px solid var(--line);border-radius:16px;padding:24px;}
.pg-stream-num{font-family:var(--pg-mono);font-size:12px;color:var(--coral-ink);}
.pg-stream h3{font-family:var(--pg-display);font-weight:600;font-size:20px;
  letter-spacing:-0.01em;margin:8px 0 8px;}
.pg-stream-covers{font-family:var(--pg-mono);font-size:11px;letter-spacing:0.02em;
  color:var(--ink-2);text-transform:uppercase;line-height:1.6;margin:0 0 12px;}
.pg-stream-body{font-size:14.5px;line-height:1.6;color:var(--ink-2);margin:0;}
@media(max-width:700px){.pg-streams{grid-template-columns:1fr;}}

/* Product model flow */
.pg-flow{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-top:6px;}
.pg-flow span{font-family:var(--pg-mono);font-size:12.5px;letter-spacing:0.01em;
  color:var(--ink);background:#fff;border:1px solid var(--line);border-radius:8px;padding:8px 13px;}
.pg-flow i{color:var(--coral);font-style:normal;font-weight:700;font-size:15px;}

/* Chips */
.pg-chips{list-style:none;display:flex;flex-wrap:wrap;gap:9px;padding:0;margin:28px 0 0;}
.pg-chips li{font-family:var(--pg-mono);font-size:12px;letter-spacing:0.02em;
  color:var(--ink);padding:7px 13px;border-radius:999px;background:#fff;
  border:1px solid var(--line);}

/* Beliefs */
.pg-belief{display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:start;
  padding:20px 0;border-top:1px solid var(--line);}
.pg-belief:first-of-type{margin-top:6px;}
.pg-belief .pg-p{margin:0;}
.pg-belief .pg-tag{margin-top:3px;}
.pg-caveat{margin-top:24px;font-size:15px;font-style:italic;
  font-family:var(--pg-display);color:var(--ink);max-width:52ch;}
@media(max-width:520px){.pg-belief{grid-template-columns:1fr;gap:10px;}}

/* Timeline */
.pg-timeline{max-width:900px;margin:44px auto 0;display:grid;gap:18px;}
.pg-section--band .pg-timeline{padding-left:clamp(20px,5vw,40px);padding-right:clamp(20px,5vw,40px);}
.pg-phase{background:#fff;border:1px solid var(--line);border-radius:18px;
  padding:26px clamp(22px,4vw,34px);}
.pg-phase-head{display:flex;align-items:baseline;gap:14px;margin-bottom:14px;
  padding-bottom:14px;border-bottom:1px solid var(--line);}
.pg-phase-num{font-family:var(--pg-display);font-weight:600;font-size:40px;
  line-height:1;color:var(--coral);letter-spacing:-0.03em;}
.pg-phase-label{font-family:var(--pg-mono);font-size:12px;letter-spacing:0.05em;
  text-transform:uppercase;color:var(--ink-2);}
.pg-list{margin:14px 0 0;padding-left:0;list-style:none;}
.pg-list li{position:relative;padding-left:20px;font-size:16px;line-height:1.6;
  color:var(--ink-2);margin-bottom:11px;}
.pg-list li:before{content:"";position:absolute;left:0;top:11px;width:6px;height:6px;
  border-radius:50%;background:var(--coral);}
.pg-list strong{color:var(--ink);font-weight:600;}

/* Cards */
.pg-cards{max-width:1080px;margin:40px auto 0;display:grid;
  grid-template-columns:repeat(3,1fr);gap:16px;
  padding-left:clamp(20px,5vw,40px);padding-right:clamp(20px,5vw,40px);}
.pg-card{background:#fff;border:1px solid var(--line);border-radius:16px;
  padding:22px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s;}
.pg-card:hover{transform:translateY(-3px);box-shadow:0 12px 30px -18px rgba(27,24,21,0.35);
  border-color:rgba(245,71,58,0.4);}
.pg-card-title{font-family:var(--pg-display);font-weight:600;font-size:19px;
  letter-spacing:-0.01em;margin:14px 0 8px;}
.pg-card-desc{font-size:14.5px;line-height:1.55;color:var(--ink-2);margin:0;}
@media(max-width:860px){.pg-cards{grid-template-columns:1fr 1fr;}}
@media(max-width:560px){.pg-cards{grid-template-columns:1fr;}}

/* Principles */
.pg-principles{max-width:900px;margin:40px auto 0;display:grid;
  grid-template-columns:1fr 1fr;gap:0;border-top:1px solid var(--line);}
.pg-principle{padding:26px 30px 26px 0;border-bottom:1px solid var(--line);}
.pg-principle:nth-child(odd){padding-right:40px;border-right:1px solid var(--line);}
.pg-principle:nth-child(even){padding-left:40px;}
.pg-principle-title{font-family:var(--pg-display);font-weight:600;font-size:20px;
  letter-spacing:-0.01em;margin:0 0 8px;}
.pg-principle-title:before{content:"→ ";color:var(--coral);}
.pg-principle-desc{font-size:15px;line-height:1.6;color:var(--ink-2);margin:0;}
@media(max-width:640px){
  .pg-principles{grid-template-columns:1fr;}
  .pg-principle,.pg-principle:nth-child(odd),.pg-principle:nth-child(even){
    padding:22px 0;border-right:none;}
}

/* Questions */
.pg-questions{list-style:none;counter-reset:q;margin:36px 0 0;padding:0;max-width:820px;}
.pg-question{display:grid;grid-template-columns:auto 1fr;gap:18px;align-items:start;
  padding:20px 0;border-top:1px solid var(--line);font-size:17px;line-height:1.55;color:var(--ink);}
.pg-question-num{font-family:var(--pg-mono);font-size:13px;color:var(--coral-ink);
  padding-top:3px;font-weight:500;}

/* Closing */
.pg-closing{text-align:left;}
.pg-closing .pg-btn{margin-top:12px;}
.pg-footer{max-width:720px;margin:64px 0 0;padding-top:22px;border-top:1px solid var(--line);
  display:flex;flex-direction:column;gap:4px;font-family:var(--pg-mono);
  font-size:11.5px;letter-spacing:0.03em;color:var(--ink-2);text-transform:uppercase;}

/* Reveal */
.pg-reveal{opacity:0;transform:translateY(16px);
  transition:opacity .7s cubic-bezier(.22,.61,.36,1),transform .7s cubic-bezier(.22,.61,.36,1);}
.pg-in{opacity:1;transform:none;}
@media(prefers-reduced-motion:reduce){
  .pg-reveal{opacity:1;transform:none;transition:none;}
}
`

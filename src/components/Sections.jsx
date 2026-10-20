export function Scenario() {
  return (
    <div className="band">
      <div className="wrap">
        <section>
          <h2 className="section-title">The same Tuesday, two platforms</h2>
          <p className="section-sub">
            A people ops manager wants to recognize a team that just shipped something
            hard, and surface whether morale is actually holding up underneath the praise.
          </p>
          <div className="scenario-grid">
            <div className="scenario-card">
              <h3>With Lattice</h3>
              <ol>
                <li>Posts public recognition in Lattice's praise feed.</li>
                <li>Opens a separate pulse-survey add-on (or a third-party tool) to check engagement.</li>
                <li>Exports two sets of results and reconciles them manually before the Monday leadership sync.</li>
              </ol>
              <span className="time">Roughly three tools, one spreadsheet.</span>
            </div>
            <div className="scenario-card ours">
              <h3>With ThriveSparrow</h3>
              <ol>
                <li>Sends Kudos with points attached, redeemable in the built-in rewards marketplace.</li>
                <li>Launches a two-minute pulse check from the same dashboard.</li>
                <li>Reads AI sentiment analysis on the open-text responses before the sync even starts.</li>
              </ol>
              <span className="time">One login, one afternoon.</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export function Honest() {
  return (
    <div className="band band-dim">
      <div className="wrap">
        <section>
          <h2 className="section-title">Where Lattice still wins</h2>
          <div className="honest">
            <p>
              We'd be overselling it to say ThriveSparrow is the better fit for every
              team. Lattice has a longer track record with large, multi-thousand-employee
              enterprises, a bigger marketplace of HRIS integrations, and more name
              recognition in board-level conversations.
            </p>
            <p>
              If your HR stack is already deeply built around Lattice's ecosystem, or you
              need integrations we don't yet support, switching has a real cost.
              ThriveSparrow is the stronger case for mid-sized, growth-stage teams who
              want engagement, recognition, and performance under one roof without
              assembling it themselves.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export function Pricing() {
  return (
    <div className="band">
      <div className="wrap">
        <section>
          <h2 className="section-title">What the sticker price doesn't show</h2>
          <p className="section-sub">
            Lattice's advertised rate covers performance only. Add engagement and
            recognition modules, and the per-employee number moves.
          </p>
          <div className="price-compare">
            <div className="price-card them">
              <div className="who">Lattice, performance only</div>
              <div className="amount">$8</div>
              <div className="per">per employee / month, before add-ons</div>
            </div>
            <div className="price-card us">
              <div className="who">ThriveSparrow, performance + engagement + recognition</div>
              <div className="amount">$5</div>
              <div className="per">per employee / month, starting tier</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export function CloseCTA() {
  return (
    <div className="band band-ink" id="close">
      <div className="wrap">
        <footer className="close">
          <h2 className="serif">See what it looks like with your team's numbers in it</h2>
          <a
            className="btn"
            href="https://thrivesparrow.com/request-a-demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a 20-minute demo
          </a>
          <p className="fineprint">
            Pricing shown reflects published starting rates as of October 2026 and may
            vary by plan and company size. This page is an independent rebuild of
            ThriveSparrow's official comparison page, created as part of a product
            marketing assignment, and is not an official ThriveSparrow property.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default function Header() {
  return (
    <header className="top">
      <div className="brandrow">
        <div className="brand">
          ThriveSparrow <span className="vs">vs. Lattice</span>
        </div>
        <div className="header-actions">
          <a className="cta-link" href="#close">See the line item ↓</a>
          <a
            className="btn-sm"
            href="https://thrivesparrow.com/request-a-demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a demo
          </a>
        </div>
      </div>
    </header>
  )
}

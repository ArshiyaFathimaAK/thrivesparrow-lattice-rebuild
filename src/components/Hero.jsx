import Receipt from './Receipt.jsx'

export default function Hero() {
  return (
    <div className="band">
      <div className="wrap hero">
        <div>
          <div className="kicker">For HR leaders comparing platforms, not features</div>
          <h1 className="serif">
            Lattice prices performance management. We priced the whole employee lifecycle.
          </h1>
          <p className="lead">
            Most comparison pages count checkmarks. This one counts the invoices you'd
            actually sign, because that's the decision you're really making.
          </p>
          <a
            className="btn"
            href="https://thrivesparrow.com/request-a-demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a 20-minute demo
          </a>
        </div>
        <Receipt />
      </div>
    </div>
  )
}

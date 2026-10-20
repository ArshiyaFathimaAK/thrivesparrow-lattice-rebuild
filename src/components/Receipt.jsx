const rows = [
  { label: 'Performance reviews', lattice: true, thriveSparrow: true },
  { label: 'Engagement surveys', lattice: '+$', thriveSparrow: true },
  { label: 'Recognition & rewards', lattice: false, thriveSparrow: true },
  { label: 'AI sentiment analysis', lattice: false, thriveSparrow: true },
  { label: 'Goal / OKR tracking', lattice: true, thriveSparrow: true },
]

function Cell({ value }) {
  if (value === true) return <span className="r-val yes">✓</span>
  if (value === false) return <span className="r-val no">—</span>
  return <span className="r-val no">{value}</span>
}

export default function Receipt() {
  return (
    <div className="receipt">
      <div className="r-title">Itemized comparison</div>
      <div className="r-sub serif">What's actually included</div>
      <div className="r-cols">
        <span></span><span>L</span><span>TS</span>
      </div>
      {rows.map((row) => (
        <div className="r-row" key={row.label}>
          <span className="r-label">{row.label}</span>
          <Cell value={row.lattice} />
          <Cell value={row.thriveSparrow} />
        </div>
      ))}
      <div className="r-total">
        <span className="r-label">Modules included</span>
        <span className="r-val val-them">2</span>
        <span className="r-val val-us">5</span>
      </div>
    </div>
  )
}

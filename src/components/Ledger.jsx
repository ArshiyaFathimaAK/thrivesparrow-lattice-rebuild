import { useState } from 'react'

const items = [
  {
    name: '360° performance reviews',
    note: 'Core to both platforms',
    lattice: 'Included',
    latticeTag: 'tag-included',
    ts: 'Included',
    tsTag: 'tag-included',
    differs: false,
  },
  {
    name: 'Engagement & pulse surveys',
    note: 'Lattice sells this as an add-on module',
    lattice: 'Add-on',
    latticeTag: 'tag-extra',
    ts: 'Included',
    tsTag: 'tag-included',
    differs: true,
  },
  {
    name: 'Peer recognition + rewards marketplace',
    note: 'Teams on Lattice often bolt on Bonusly or similar',
    lattice: 'Not offered',
    latticeTag: 'tag-extra',
    ts: 'Included',
    tsTag: 'tag-included',
    differs: true,
  },
  {
    name: 'AI sentiment analysis on open-text feedback',
    note: 'Reading between the lines of survey comments',
    lattice: 'Not offered',
    latticeTag: 'tag-extra',
    ts: 'Included',
    tsTag: 'tag-included',
    differs: true,
  },
  {
    name: 'Goal / OKR tracking',
    note: 'Both platforms cover this reasonably well',
    lattice: 'Included',
    latticeTag: 'tag-included',
    ts: 'Included',
    tsTag: 'tag-included',
    differs: false,
  },
  {
    name: 'Dedicated implementation support',
    note: 'Who answers when your rollout breaks',
    lattice: 'Tiered by plan',
    latticeTag: '',
    ts: 'Included at every tier',
    tsTag: 'tag-included',
    differs: true,
  },
]

export default function Ledger() {
  const [showDiffOnly, setShowDiffOnly] = useState(false)
  const visibleItems = showDiffOnly ? items.filter((item) => item.differs) : items

  return (
    <div className="band band-dim">
      <div className="wrap">
        <section style={{ paddingTop: 0 }}>
          <h2 className="section-title">What's actually in the box</h2>
          <p className="section-sub">
            Not a checkmark grid — the line items an HR team ends up paying for,
            with or without the vendor's logo on them.
          </p>

          <div className="ledger-controls">
            <button
              className={`toggle-btn ${!showDiffOnly ? 'active' : ''}`}
              onClick={() => setShowDiffOnly(false)}
            >
              All features
            </button>
            <button
              className={`toggle-btn ${showDiffOnly ? 'active' : ''}`}
              onClick={() => setShowDiffOnly(true)}
            >
              Where they differ
            </button>
          </div>

          <div className="ledger">
            <div className="ledger-head">
              <div></div>
              <div className="cell">Lattice</div>
              <div className="cell">ThriveSparrow</div>
            </div>
            {visibleItems.map((item) => (
              <div className="ledger-row" key={item.name}>
                <div className="item">
                  {item.name}
                  <span className="note">{item.note}</span>
                </div>
                <div className={`cell ${item.latticeTag}`} data-label="Lattice">
                  {item.lattice}
                </div>
                <div className={`cell ${item.tsTag}`} data-label="ThriveSparrow">
                  {item.ts}
                </div>
              </div>
            ))}
            <div className="ledger-row subtotal">
              <div className="item">Modules you'd pay for separately</div>
              <div className="cell" data-label="Lattice">3 extra</div>
              <div className="cell tag-included" data-label="ThriveSparrow">0 extra</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

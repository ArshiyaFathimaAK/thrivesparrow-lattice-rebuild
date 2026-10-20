import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Ledger from './components/Ledger.jsx'
import { Scenario, Honest, Pricing, CloseCTA } from './components/Sections.jsx'

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Ledger />
      <Scenario />
      <Honest />
      <Pricing />
      <CloseCTA />
    </>
  )
}

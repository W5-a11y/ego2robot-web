import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Problem from '../components/Problem'
import ScoreSystem from '../components/ScoreSystem'
import Roadmap from '../components/Roadmap'
import Consortium from '../components/Consortium'
import CtaBand from '../components/CtaBand'

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <Problem />
      <ScoreSystem />
      <Roadmap />
      <Consortium />
      <div className="bg-page pt-28" />
      <CtaBand />
    </main>
  )
}

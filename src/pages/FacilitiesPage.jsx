import { Link } from 'react-router-dom'
import Facilities from '../components/Facilities'
import VisitCta from '../components/VisitCta'
import Contact from '../components/Contact'

export default function FacilitiesPage() {
  return (
    <>
      <div className="border-b border-line/60 bg-paper">
        <div className="mx-auto max-w-[1280px] px-6 py-4 lg:px-10">
          <Link
            to="/#about"
            className="text-sm font-semibold text-zera-light transition hover:text-zera"
          >
            ← About Us
          </Link>
        </div>
      </div>
      <Facilities />
      <VisitCta />
      <Contact />
    </>
  )
}

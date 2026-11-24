import { Link } from 'react-router-dom'
import { BRAND, FOOTER } from '../data'

function LinkCol({ title, links }) {
  return (
    <div>
      <p className="text-sm font-semibold text-white">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.href}
              className="text-sm text-white/70 transition hover:text-sun"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-zera-darkest text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-14 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr_0.85fr_0.85fr_0.95fr] lg:gap-8">
          {/* Brand + contact — same block as Zera footer */}
          <div>
            <img src="/logo-white.svg" alt={BRAND.name} className="h-12 w-auto" />
            <p className="mt-5 text-base font-semibold text-white">{BRAND.name}</p>
            <a
              href={BRAND.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-sm leading-6 text-white/70 transition hover:text-sun"
            >
              {BRAND.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </a>
            <div className="mt-5 space-y-2 text-sm text-white/75">
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-sun"
              >
                WhatsApp {BRAND.phoneWhatsApp}
              </a>
              <a
                href={`tel:${BRAND.phoneService.replace(/\D/g, '')}`}
                className="block transition hover:text-sun"
              >
                Student Service {BRAND.phoneService}
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="block transition hover:text-sun"
              >
                {BRAND.email}
              </a>
            </div>
          </div>

          <LinkCol title="Quick Links" links={FOOTER.quickLinks} />
          <LinkCol title="Programs" links={FOOTER.programs} />
          <LinkCol title="Admissions" links={FOOTER.admissions} />
          <LinkCol title="Community" links={FOOTER.community} />
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {BRAND.name}
      </div>
    </footer>
  )
}

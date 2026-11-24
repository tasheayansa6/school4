import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { BRAND, NAV } from '../data'

function NavLink({ href, className, onClick, children }) {
  return (
    <Link to={href} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [drop, setDrop] = useState(null)
  const navRef = useRef(null)

  useEffect(() => {
    const onDoc = (e) => {
      if (!navRef.current?.contains(e.target)) setDrop(null)
    }
    document.addEventListener('pointerdown', onDoc)
    return () => document.removeEventListener('pointerdown', onDoc)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-white">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-6 py-3 lg:px-10">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <img src="/logo.svg" alt={BRAND.name} className="h-10 w-auto md:h-11" />
        </Link>

        <nav ref={navRef} className="relative hidden items-center gap-1 lg:flex">
          {NAV.map((item) =>
            item.links ? (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-[15px] font-medium text-zera hover:bg-zera-lightest"
                  onClick={() => setDrop((d) => (d === item.label ? null : item.label))}
                >
                  {item.label}
                  <span className="text-[10px]">▾</span>
                </button>
                {drop === item.label ? (
                  <div className="absolute top-full left-0 z-50 mt-1 min-w-[220px] rounded-xl border border-line bg-white p-2 shadow-[0_16px_40px_rgba(10,79,41,0.12)]">
                    {item.links.map((link) => (
                      <NavLink
                        key={link.label}
                        href={link.href}
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zera hover:bg-zera-lightest"
                        onClick={() => setDrop(null)}
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <NavLink
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-2 text-[15px] font-medium text-zera hover:bg-zera-lightest"
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="/#contact"
            className="rounded-md border border-line px-4 py-2 text-sm font-semibold text-zera transition hover:border-zera hover:bg-zera-lightest"
          >
            Contact Us
          </Link>
          <Link
            to="/#login"
            className="rounded-md bg-zera px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-zera-dark"
          >
            Login
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md border border-line px-3 py-2 text-sm font-semibold text-zera lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <div className="max-h-[75vh] overflow-y-auto border-t border-line bg-white px-6 py-4 lg:hidden">
          {NAV.map((item) => (
            <div key={item.label} className="py-2">
              <NavLink
                href={item.href}
                className="font-semibold text-zera"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
              {item.links ? (
                <div className="mt-1 space-y-1 pl-3">
                  {item.links.map((link) => (
                    <NavLink
                      key={link.label}
                      href={link.href}
                      className="block text-sm text-mute"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <Link
            to="/#login"
            className="mt-3 block rounded-md bg-zera py-2.5 text-center text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
        </div>
      ) : null}
    </header>
  )
}

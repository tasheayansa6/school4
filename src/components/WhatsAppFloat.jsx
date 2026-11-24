import { BRAND } from '../data'

export default function WhatsAppFloat() {
  return (
    <a
      href={BRAND.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_rgba(37,211,102,0.45)] transition hover:scale-105"
      aria-label="Chat with Wow Secondary Admissions on WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
        <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8 8 0 1 1 12 20Zm4.4-5.7c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7.9-.3.2-.5.1a6.6 6.6 0 0 1-1.9-1.2 7.3 7.3 0 0 1-1.3-1.7c-.1-.3 0-.4.1-.5l.4-.4.2-.4c.1-.1 0-.3 0-.4l-.8-1.9c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3s-.8.8-.8 1.9.8 2.2.9 2.3a9.2 9.2 0 0 0 3.4 2.8c1.3.6 1.8.6 2.2.5.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1s-.2-.2-.4-.3Z" />
      </svg>
    </a>
  )
}

import { WHATSAPP_URL } from "@/lib/site";

/**
 * Site-wide WhatsApp call to action.
 *
 * Rendered once from the root layout and scoped with `dbz-wa-` classes so it
 * cannot collide with the template styles. It deliberately carries
 * `data-ga-label` instead of its own click handler: `GoogleAnalytics.tsx`
 * already delegates `whatsapp_click` tracking for every WhatsApp link on the
 * document, so calling `trackWhatsAppClick()` here as well would double count.
 */
export default function FloatingWhatsApp() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
.dbz-wa-float {
  position: fixed;
  right: 15px;
  bottom: calc(69px + env(safe-area-inset-bottom, 0px));
  z-index: 999;
  display: inline-flex;
  align-items: center;
  min-width: 56px;
  height: 56px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: #25d366;
  color: #fff;
  text-decoration: none;
  box-shadow: 0 10px 28px rgba(37, 211, 102, 0.45);
  transition: transform 0.25s ease, box-shadow 0.25s ease,
    background-color 0.25s ease;
  -webkit-tap-highlight-color: transparent;
}

.dbz-wa-float-icon {
  flex: 0 0 auto;
  width: 56px;
  height: 56px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.85rem;
  line-height: 1;
}

.dbz-wa-float-label {
  max-width: 0;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  opacity: 0;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  transition: max-width 0.3s ease, opacity 0.2s ease, padding 0.3s ease;
}

.dbz-wa-float:hover,
.dbz-wa-float:focus-visible {
  background-color: #1eb955;
  color: #fff;
  transform: translateY(-3px);
}

.dbz-wa-float:active {
  transform: translateY(-1px) scale(0.97);
}

.dbz-wa-float:focus-visible {
  outline: 3px solid #08947d;
  outline-offset: 3px;
}

/* Label is hidden on phones so the button stays a compact circle. */
@media (min-width: 1200px) {
  .dbz-wa-float {
    padding-right: 22px;
  }

  .dbz-wa-float-label {
    max-width: 200px;
    padding-left: 2px;
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .dbz-wa-float,
  .dbz-wa-float-label {
    transition: none;
  }

  .dbz-wa-float:hover,
  .dbz-wa-float:active {
    transform: none;
  }
}
`,
        }}
      />

      <a
        className="dbz-wa-float"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Digibiz on WhatsApp"
        data-ga-label="floating button"
      >
        <span className="dbz-wa-float-icon" aria-hidden="true">
          <i className="bi bi-whatsapp" />
        </span>
        <span className="dbz-wa-float-label" aria-hidden="true">
          Chat on WhatsApp
        </span>
      </a>
    </>
  );
}
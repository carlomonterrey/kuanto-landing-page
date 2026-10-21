import logo from '../assets/img/logo.svg';
import { navLinks, whatsappLink, WHATSAPP_MESSAGES } from '../data/content';

export function Nav() {
  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Principal">
        <a className="brand" href="#inicio" aria-label="Kuanto, ir al inicio">
          <img src={logo} alt="" width={34} height={34} />
          <span className="brand__name">kuanto<span className="brand__dot">.</span></span>
        </a>
        <span className="nav__sep" aria-hidden="true" />
        <div className="nav__links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a
          className="btn btn--primary btn--sm"
          href={whatsappLink(WHATSAPP_MESSAGES.install)}
          data-cta="nav"
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar instalación
        </a>
      </nav>
    </header>
  );
}

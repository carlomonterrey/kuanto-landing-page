import logoLight from '../assets/img/logo-light.svg';
import { footer } from '../data/content';

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <img src={logoLight} alt="" width={44} height={44} />
          <div>
            <p className="footer__name">kuanto<span className="brand__dot">.</span></p>
            <p className="footer__tag">{footer.tagline}</p>
          </div>
        </div>

        {footer.columns.map((column) => (
          <nav className="footer__col" aria-label={column.title} key={column.title}>
            <h2>{column.title}</h2>
            {column.links.map((link) => (
              <a key={`${column.title}-${link.label}`} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        ))}
      </div>

      <div className="wrap footer__base">
        <p>{footer.copyright}</p>
      </div>
    </footer>
  );
}

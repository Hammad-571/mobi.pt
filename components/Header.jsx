import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/lib/content";

export default function Header({ locale = "en", active = "home" }) {
  const nav = navigation[locale];
  const links = ["home", "repair", "accessories", "payment"];

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href={nav.routes.home} aria-label="Mobi Air home">
          <span className="brand-mark" aria-hidden="true">M</span>
          <span>MOBI <b>AIR</b></span>
        </Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span /><span /><span /></summary>
          <nav aria-label="Main navigation">
            {links.map((key) => (
              <Link key={key} className={active === key ? "active" : ""} href={nav.routes[key]}>{nav[key]}</Link>
            ))}
          </nav>
        </details>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((key) => (
            <Link key={key} className={active === key ? "active" : ""} href={nav.routes[key]}>{nav[key]}</Link>
          ))}
        </nav>
        <Link className="language-switch" href={nav.alternate} aria-label={nav.alternateLabel} title={nav.alternateLabel}>
          <Image src={nav.flag} alt="" width={28} height={28} />
          <span>{locale === "en" ? "PT" : "EN"}</span>
        </Link>
      </div>
    </header>
  );
}

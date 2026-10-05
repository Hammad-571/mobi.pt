import Image from "next/image";
import Link from "next/link";
import SiteShell from "./SiteShell";
import { homeContent, navigation } from "@/lib/content";

export default function HomePage({ locale = "en" }) {
  const copy = homeContent[locale];
  const nav = navigation[locale];
  return (
    <SiteShell locale={locale} active="home">
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className="lead">{copy.intro}</p>
          <div className="button-row">
            <Link className="button" href={nav.routes.repair}>{copy.repairCta}</Link>
            <a className="button button-ghost" href="tel:920545989">{locale === "en" ? "Call 920 545 989" : "Ligar 920 545 989"}</a>
          </div>
        </div>
        <div className="hero-image image-frame">
          <Image src="/img/fo1.jpg" alt="Mobi Air phone service" fill priority sizes="(max-width: 760px) 100vw, 50vw" />
          <div className="floating-card"><strong>{locale === "en" ? "Fast, careful repairs" : "Reparações rápidas e cuidadosas"}</strong><span>{locale === "en" ? "For the phones you use every day" : "Para os telemóveis que usa todos os dias"}</span></div>
        </div>
      </section>

      <section className="services-band">
        <div className="shell split-section">
          <div className="section-image image-frame"><Image src="/img/re.jpg" alt="Phone repair tools" fill sizes="(max-width: 760px) 100vw, 42vw" /></div>
          <div>
            <p className="eyebrow">Mobi Air</p>
            <h2>{copy.servicesTitle}</h2>
            <div className="service-list">
              {copy.services.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="shell accessory-callout">
        <div>
          <p className="eyebrow">{locale === "en" ? "Everything in one place" : "Tudo num só lugar"}</p>
          <h2>{copy.accessoriesTitle}</h2>
          <p>{copy.accessoriesBody}</p>
          <Link className="text-link dark" href={nav.routes.accessories}>{copy.accessoriesCta} <span>→</span></Link>
        </div>
        <div className="accessory-collage" aria-hidden="true">
          <div className="image-frame"><Image src="/img/co.jpg" alt="" fill sizes="220px" /></div>
          <div className="image-frame"><Image src="/img/ear.jpg" alt="" fill sizes="220px" /></div>
          <div className="image-frame"><Image src="/img/power.jpg" alt="" fill sizes="220px" /></div>
        </div>
      </section>

      <section className="why-section shell">
        <div className="section-heading"><p className="eyebrow">{locale === "en" ? "The Mobi Air difference" : "A diferença Mobi Air"}</p><h2>{copy.whyTitle}</h2></div>
        <div className="why-grid">{copy.why.map(([title, text], i) => <article key={title} className={i === 0 ? "featured" : ""}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
    </SiteShell>
  );
}

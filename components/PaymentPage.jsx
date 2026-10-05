import Image from "next/image";
import SiteShell from "./SiteShell";
import { paymentContent } from "@/lib/content";

export default function PaymentPage({ locale = "en" }) {
  const copy = paymentContent[locale];
  return <SiteShell locale={locale} active="payment">
    <section className="page-hero shell payment-hero"><div><p className="eyebrow">{copy.eyebrow}</p><h1>{copy.title}</h1><p className="lead">{copy.payment}</p><div className="payment-methods"><p>{copy.methods}</p><span>{copy.bank}</span><span>{copy.cash}</span></div></div><div className="image-frame"><Image src="/img/pay.jpg" alt={copy.title} fill priority sizes="(max-width: 760px) 100vw, 42vw" /></div></section>
    <section className="services-band"><div className="shell split-section payment-services"><div className="section-image image-frame"><Image src="/img/del.jpg" alt={copy.servicesTitle} fill sizes="(max-width: 760px) 100vw, 42vw" /></div><div><p className="eyebrow">Mobi Air</p><h2>{copy.servicesTitle}</h2><p className="lead">{copy.services}</p></div></div></section>
  </SiteShell>;
}

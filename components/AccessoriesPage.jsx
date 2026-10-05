import Image from "next/image";
import Link from "next/link";
import SiteShell from "./SiteShell";
import { navigation, products } from "@/lib/content";

export default function AccessoriesPage({ locale = "en" }) {
  const pt = locale === "pt";
  const nav = navigation[locale];
  return <SiteShell locale={locale} active="accessories">
    <section className="page-intro shell"><p className="eyebrow">{pt ? "Proteja. Carregue. Conecte." : "Protect. Charge. Connect."}</p><h1>{pt ? "Acessórios para Telefone" : "Phone Accessories"}</h1><p className="lead">{pt ? "Acessórios práticos e fiáveis para manter o seu telemóvel protegido, carregado e pronto para o dia." : "Practical, reliable accessories to keep your phone protected, powered and ready for the day."}</p></section>
    <section className="shell product-grid">{products[locale].map((product, i) => <ProductCard key={product.name} product={product} index={i} href={nav.routes.payment} cta={pt ? "Ver pagamento" : "Payment info"} />)}</section>
  </SiteShell>;
}

function ProductCard({ product, index, href, cta }) {
  return <article className="product-card"><div className="product-image"><Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" /></div><div className="product-copy"><span className="product-index">{String(index + 1).padStart(2, "0")}</span><h2>{product.name}</h2><p>{product.description}</p><Link href={href}>{cta} <span>→</span></Link></div></article>;
}

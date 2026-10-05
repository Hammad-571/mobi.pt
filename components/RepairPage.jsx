import Image from "next/image";
import SiteShell from "./SiteShell";
import { otherBrands, repairModels } from "@/lib/content";

export default function RepairPage({ locale = "en" }) {
  const pt = locale === "pt";
  const services = pt
    ? ["Reparação de tela de telemóvel", "Substituição do painel tátil", "Substituição da porta de carregamento e bateria", "Reparação do toque e altifalante auricular", "Substituição do microfone"]
    : ["Mobile screen repair", "Touch panel replacement", "Charging port and battery replacement", "Ringer and ear speaker repair", "Microphone replacement"];
  return (
    <SiteShell locale={locale} active="repair">
      <section className="page-hero shell">
        <div><p className="eyebrow">{pt ? "Diagnóstico e reparação" : "Diagnosis & repair"}</p><h1>{pt ? "Nossos Serviços" : "Our Services"}</h1><p className="lead">{pt ? "Cuidamos dos componentes essenciais do seu telemóvel com precisão e atenção." : "We take care of your phone's essential components with precision and attention."}</p></div>
        <div className="image-frame"><Image src="/img/repain.jpg" alt="Phone repair service" fill priority sizes="(max-width: 760px) 100vw, 42vw" /></div>
      </section>
      <section className="shell repair-services"><div className="repair-service-grid">{services.map((service, i) => <div key={service}><span>0{i + 1}</span><p>{service}</p></div>)}</div></section>
      <section className="models-section">
        <div className="shell">
          <div className="section-heading narrow"><p className="eyebrow">{pt ? "Compatibilidade" : "Compatibility"}</p><h2>{pt ? "Modelos de Telefone Suportados" : "Supported Phone Models"}</h2></div>
          <div className="model-groups">{repairModels.map((group) => <ModelGroup key={group.brand} {...group} />)}</div>
          <div className="other-brands">
            <div><p className="eyebrow">{pt ? "E muito mais" : "And many more"}</p><h2>{pt ? "Também reparamos todos os modelos de:" : "We also repair all the models of:"}</h2><div className="brand-pills">{otherBrands.map((brand) => <span key={brand}>{brand}</span>)}</div></div>
            <div className="brand-images"><div className="image-frame"><Image src="/img/samsung.jpg" alt="Samsung phone" fill sizes="180px" /></div><div className="image-frame"><Image src="/img/lg.jpg" alt="LG phone" fill sizes="180px" /></div><div className="image-frame"><Image src="/img/vivo.jpg" alt="Vivo phone" fill sizes="180px" /></div></div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function ModelGroup({ brand, image, models }) {
  return <article className="model-group"><div className="model-heading"><h3>{brand}</h3><div className="image-frame"><Image src={image} alt={`${brand} phone`} fill sizes="160px" /></div></div><ul>{models.map((model, i) => <li key={`${model}-${i}`}>{model}</li>)}</ul></article>;
}

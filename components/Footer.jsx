import Link from "next/link";
import { contact, footerCopy } from "@/lib/content";

export default function Footer({ locale = "en" }) {
  const copy = footerCopy[locale];
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="brand brand-light"><span className="brand-mark">M</span><span>MOBI <b>AIR</b></span></div>
          <p>{locale === "en" ? "Professional care for the device you depend on every day." : "Cuidado profissional para o dispositivo em que confia todos os dias."}</p>
        </div>
        <section>
          <p className="footer-label">{copy.visit}</p>
          <p>{copy.visitBody} <a href={contact.map} target="_blank" rel="noreferrer">{contact.address}</a>{copy.visitEnd}</p>
          <a className="text-link" href={contact.map} target="_blank" rel="noreferrer">{copy.directions} <span>↗</span></a>
        </section>
        <section>
          <p className="footer-label">{copy.contact}</p>
          <p>{copy.contactBody}</p>
          <div className="contact-links">
            <a href={contact.phoneHref}>{copy.phone}: {contact.phoneDisplay}</a>
            <a href={`mailto:${contact.email}`}>{copy.email}: {contact.email}</a>
          </div>
        </section>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Mobi Air</span>
        <Link href={navigationFor(locale).payment}>{locale === "en" ? "Payment information" : "Informações de pagamento"}</Link>
      </div>
    </footer>
  );
}

function navigationFor(locale) {
  return locale === "en" ? { payment: "/payment" } : { payment: "/pt/pagamento" };
}

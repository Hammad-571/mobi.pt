import Header from "./Header";
import Footer from "./Footer";

export default function SiteShell({ locale = "en", active, children }) {
  return <><Header locale={locale} active={active} /><main>{children}</main><Footer locale={locale} /></>;
}

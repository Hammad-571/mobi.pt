import "./globals.css";

export const metadata = {
  title: {
    default: "Mobi Air | Phone Repair & Accessories",
    template: "%s | Mobi Air",
  },
  description:
    "Professional phone repair, accessories, pickup and delivery from Mobi Air.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/repair.html", destination: "/repair", permanent: true },
      { source: "/acc.html", destination: "/accessories", permanent: true },
      { source: "/payment.html", destination: "/payment", permanent: true },
      { source: "/por.html", destination: "/pt", permanent: true },
      { source: "/por-repair.html", destination: "/pt/reparacao", permanent: true },
      { source: "/por-acc.html", destination: "/pt/acessorios", permanent: true },
      { source: "/por-payment.html", destination: "/pt/pagamento", permanent: true }
    ];
  }
};

export default nextConfig;

/** @type {import('next').NextConfig} */

// Static security response headers applied to every route (OWASP ASVS L1).
// The Content-Security-Policy is intentionally NOT set here — it uses a
// per-request nonce and is generated in middleware.ts instead.
const securityHeaders = [
  // Block MIME-type sniffing.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Legacy clickjacking protection (CSP frame-ancestors covers modern browsers).
  { key: "X-Frame-Options", value: "DENY" },
  // Don't leak full URLs to third parties.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Deny powerful features this static portfolio never uses.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // Force HTTPS for a year, including subdomains.
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
];

const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;

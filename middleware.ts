import { NextRequest, NextResponse } from "next/server";

// Per-request Content-Security-Policy with a cryptographic nonce.
// Using a nonce + 'strict-dynamic' avoids 'unsafe-inline' for scripts, which
// is the OWASP-recommended posture (LLM/XSS defense). Next.js automatically
// applies this nonce to the framework's own inline bootstrap scripts when it
// reads the CSP from the incoming request headers.
export function middleware(request: NextRequest) {
  // 128 bits of CSPRNG entropy, base64-encoded (Web Crypto only — the Edge
  // runtime disallows Node's Buffer/eval-style code paths).
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  const nonce = btoa(String.fromCharCode(...bytes));

  const csp = [
    `default-src 'self'`,
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    // Tailwind ships a static stylesheet, but Next/React still emit inline
    // style attributes; 'unsafe-inline' for styles is permitted by policy.
    `style-src 'self' 'unsafe-inline'`,
    `img-src 'self' data: blob:`,
    `font-src 'self'`,
    `connect-src 'self'`,
    `media-src 'self'`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `frame-ancestors 'none'`,
    `upgrade-insecure-requests`,
  ].join("; ");

  // Pass the nonce/CSP forward so Next can nonce its scripts during render.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("Content-Security-Policy", csp);
  return response;
}

export const config = {
  matcher: [
    // Run on all routes except static assets and image optimizer, and skip
    // prefetch requests so prefetched pages aren't cached with a stale nonce.
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};

import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";
export const alt = "Malgorzata Stano | Frontend Developer Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Dynamically generated social share image (OpenGraph + Twitter).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#121212",
        }}
      >
        <div
          style={{
            fontSize: 40,
            color: "#ADB7BE",
            marginBottom: 24,
          }}
        >
          Frontend Developer · Barcelona
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 800,
            lineHeight: 1.1,
            background: "linear-gradient(to bottom right, #be185d, #c084fc, #60a5fa)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Malgorzata Stano
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#E5E7EB",
            marginTop: 32,
            display: "flex",
          }}
        >
          React · Next.js · TypeScript · Tailwind
        </div>
      </div>
    ),
    { ...size },
  );
}

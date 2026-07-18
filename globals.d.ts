// Ambient declaration so TypeScript accepts the side-effect CSS import in
// app/layout.tsx (`import "./globals.css"`). Next.js processes CSS at build
// time; this only satisfies the type checker (TS2882 under moduleResolution
// "node").
declare module "*.css";

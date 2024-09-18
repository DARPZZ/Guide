// global.d.ts
export {};

declare global {
  interface Window {
    dataLayer: any[]; // You can use `any[]` if you don't have a specific type, or define a more precise type if needed
    gtag: (...args: any[]) => void;
  }
}

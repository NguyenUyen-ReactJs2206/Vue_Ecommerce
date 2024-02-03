/// <reference types="vite/client" />
// declare module '*.vue';
declare global {
  interface Window {
    isAxiosError: (error: unknown) => boolean;
  }
}

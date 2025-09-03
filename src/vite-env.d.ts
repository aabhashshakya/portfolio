/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_EMAILJS_SERVICE_ID: string
    readonly VITE_EMAILJS_TEMPLATE_ID: string
    readonly VITE_EMAILJS_PRIVATE_KEY: string
    // add more VITE_ variables here if needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
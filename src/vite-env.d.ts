/// <reference types="vite/client" />
/// <reference types="vite-plugin-glsl/ext" />

interface ImportMetaEnv {
  readonly VITE_APP_EMAILJS_SERVICE_KEY?: string
  readonly VITE_APP_EMAILJS_TEMPLATE_KEY?: string
  readonly VITE_APP_EMAILJS_PUBLIC_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

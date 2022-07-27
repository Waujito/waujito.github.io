/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_NICKNAME: string;
  readonly VITE_GITHUB_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

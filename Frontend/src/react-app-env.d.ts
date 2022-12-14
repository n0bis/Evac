/// <reference types="react-scripts" />
declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    PUBLIC_URL: string
    REACT_APP_BACKEND_DNS: string
  }
}
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const hasCertificates = 
    env.HTTPS_KEY_PATH && 
    env.HTTPS_CERT_PATH && 
    fs.existsSync(path.resolve(env.HTTPS_KEY_PATH)) && 
    fs.existsSync(path.resolve(env.HTTPS_CERT_PATH));

  return defineConfig({
    plugins: [
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler']],
        },
      }),
    ],
    server: {
      ...(hasCertificates ? 
        {https: {
          key: fs.readFileSync(path.resolve(env.HTTPS_KEY_PATH)),
          cert: fs.readFileSync(path.resolve(env.HTTPS_CERT_PATH)),
        }}: {}),
      port: parseInt(env.HTTPS_PORT || '3000'),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
}
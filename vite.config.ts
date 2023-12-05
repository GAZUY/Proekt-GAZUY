import { resolve } from 'path'

export default {
  base: '/Proekt-GAZUY/',
  build: {
    rollupOptions: {
      input: {

        // @ts-ignore
        kino: resolve(__dirname, 'kino.html'),
      }
    }
  }
}

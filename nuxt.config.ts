import scrollbar from 'tailwind-scrollbar'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
  ],
  googleFonts: {
    families: {
      'Sour+Gummy': true, 
      'Source Sans 3': [400, 600, 700, 800],
    }
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Sour Gummy"', 'sans-serif'],
            source: ['"Source Sans 3"', 'sans-serif'],
        }
        }
      },
      plugins: [scrollbar]
    }
  },
  app: {
     head: {
      style: [
        {textContent : 'html { scroll-behavior: smooth; }'}
      ]
    }
  } 
})

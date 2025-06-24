// uno.config.ts
import { defineConfig, presetUno, presetIcons } from 'unocss'

export default defineConfig({
    // ...UnoCSS options
    presets: [
        presetUno(),
        presetIcons({
            extraProperties: {
                display: 'inline-block',
                width: '1.2em',
                height: '1.2em'
            }
        }),
    ],
    safelist: [
        ...Array.from({ length: 8 }, (_, i) => `col-span-${i + 1}`),
    ],
    theme: {
        colors: {
            primary: {
                DEFAULT: '#FD8204',
                100: '#fff2e6',
                200: '#fed9b3',
                300: '#fec081',
                400: '#fea74e',
                500: '#FD8204',
                600: '#dc7003',
                700: '#9d4e01',
                800: '#7f3e01',
                900: '#622f00',
            },
            secondary: {
                DEFAULT: '#512425',
                100: '#dbcfcf',
                200: '#a78b8a',
                300: '#84605f',
                400: '#623838',
                500: '#512425',
                600: '#3a1819',
                700: '#2f1213',
                800: '#240c0d',
                900: '#1a0708',
            },
        },
        container: {
            padding: {
                DEFAULT: '1rem',
                '2xl': '8rem',
            },
        },

    },

})

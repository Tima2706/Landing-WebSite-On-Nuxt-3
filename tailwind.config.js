/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        container: {
            padding: '1rem',
        },
        fontFamily: {
            body: ["'Rubik'", 'sans-serif']
        },
        screens: {

            'xs': '500px',
            // => @media (min-width: 640px) { ... }

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px', //
            // => @media (min-width: 1280px) { ... }

            '2xl': '1500px',
            // => @media (min-width: 1536px) { ... }
        },
        colors: {
            white: '#fff',
            primary: '#0096B2',
            success: '#69B773',
            danger: '#f81d22',
            'dark-blue': '#303D4D',
            'light-gray': '#A2A5B9',
            dark: '#21292F',
            gray: '#DFE2E9',
            blue: {
                900: '#48545D'
            }
        },
        extend: {},
    },
    plugins: [],
}

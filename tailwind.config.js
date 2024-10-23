/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            "colors": {
                "bis": "bisque"
            },
            "width": {
                "w1": "35rem",
                "w2": "55rem"
            },
            "fontFamily": {
                "xw": "cooper",
                "wx": "./src/assets/fonts/young-serif/YoungSerif-Regular.ttf"
            },
            "margin": {
                "120": "34rem",
                "yy": "22rem"
            },
            "maxHeight": {
                "120": "200rem"
            }
        },
    },
    plugins: [],
}
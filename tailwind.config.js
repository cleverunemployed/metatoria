/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    fontFamily: {
        vezla: ["Vezla", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        spaceage: ["Space Age Cyrillic", "sans-serif"],
    },
    theme: {
        extend: {
            colors: {
                'footer': '#6487D3',
            },
        },
    },
    plugins: [],
};

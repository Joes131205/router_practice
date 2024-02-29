/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.jsx"],
    theme: {
        extend: {
            colors: {
                tiffany_blue: {
                    100: "#ecfafa",
                    200: "#d9f5f5",
                    300: "#c6f1ef",
                    400: "#b3ecea",
                    500: "#a0e7e5",
                    600: "#80b9b7",
                    700: "#608b89",
                    800: "#405c5c",
                    900: "#202e2e",
                },
            },
            fontFamily: {
                open_sans: ["Open Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
};

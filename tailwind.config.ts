import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    primary: "#F5F5F5", // jasne tło
                    secondary: "#E0E0E0", // ciemniejsze tło
                },
                foreground: {
                    primary: "#333333", // główny kolor tekstu
                    secondary: "#4F4F4F", // drugorzędny kolor tekstu
                },
                border: {
                    primary: "#CCCCCC", // główny kolor obramowania
                    secondary: "#999999", // drugorzędny kolor obramowania
                },
                accent: {
                    primary: "#FF5722", // główny kolor akcentu
                    secondary: "#FFC107", // drugorzędny kolor akcentu
                },
            },
        },
    },
    plugins: [],
};
export default config;

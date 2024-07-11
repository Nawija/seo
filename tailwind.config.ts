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
                    primary: `var(--background-primary)`,
                    secondary: `var(--background-secondary)`,
                },
                foreground: {
                    primary: `var(--foreground-primary)`,
                    secondary: `var(--foreground-secondary)`,
                },
                accent: {
                    primary: `var(--accent-primary)`,
                    secondary: `var(--accent-primary)`,
                },
                border: {
                    primary: `var(--border-primary)`,
                    secondary: `var(--border-primary)`,
                },
            },
        },
    },
    plugins: [],
};
export default config;
